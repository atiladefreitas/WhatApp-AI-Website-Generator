import React, { useEffect, useState } from 'react';
import { AiFillFileImage } from 'react-icons/ai';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { StyledButton } from '../Button';

import {
  FileInput,
  FileInputContainer,
  FileInputLabel,
  PreviewContainer,
  SelectedImage,
} from './styles';

import storage from '../../../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

type FileInputProps = {
  userID: string | undefined;
  onValueChange: (value: boolean | undefined) => void;
};

function FileInputComponent({
  userID,
  onValueChange,
}: FileInputProps): JSX.Element {
  const [coverPreview, setCoverPreview] = useState<string>('');
  const [coverPercent, setCoverPercent] = useState(0);
  const [cover, setCover] = useState<any>('');
  const [uploaded, setUploaded] = useState<boolean | undefined>(false);

  const handleCoverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCover(event.target.files?.[0]);

    const coverImage = event.target.files?.[0];
    if (!coverImage) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setCoverPreview(reader.result as string);
    };
    reader.readAsDataURL(coverImage);
  };

  const handleClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleCancel = () => {
    setCoverPreview('');
  };

  useEffect(() => {
    if (uploaded == true) {
      setUploaded(false);
      handleCancel();
      setCoverPercent(0);
    }
  }, [uploaded]);

  const handleCoverUploadToFirebase = (e: any) => {
    e.preventDefault();

    if (!cover) {
      alert('escolha uma imagem!');
    }
    const storageRef = ref(storage, `/${userID}/${cover.name}`);
    const uploadTask = uploadBytesResumable(storageRef, cover);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const coverPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // update progress
        setCoverPercent(coverPercent);
      },
      () => {
        //download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          const body = JSON.stringify({
            phone: userID,
            photo_position: '1',
            base64: url,
            type: 'image',
          });
          const response = await fetch(
            `${import.meta.env.VITE_MAIN_API_URL}/upload`,
            {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
              body: body,
            }
          );
          if (response.ok) {
            setUploaded(true), onValueChange(uploaded);
          } else {
            alert(
              'Ocorreu algum erro, atualize a página e tente novamente mais tarde'
            );
          }
        });
      }
    );
  };

  return (
    <>
      {coverPreview ? (
        <StyledButton
          children={
            coverPercent > 0 ? `Enviando Foto ${coverPercent} %` : 'Enviar Foto'
          }
          w="larger"
          onClick={handleCoverUploadToFirebase}
        />
      ) : (
        <FileInputContainer onClick={handleClick}>
          <FileInputLabel htmlFor="coverInput">
            Escolher Foto
            <AiFillFileImage size={'22px'} color="white" />
          </FileInputLabel>
          <FileInput id="coverInput" type="file" onChange={handleCoverChange} />
        </FileInputContainer>
      )}
      {coverPreview && (
        <PreviewContainer>
          <SelectedImage src={coverPreview} alt="Selected Image" />
          <BsFillTrash3Fill onClick={handleCancel} size={24} color="#FF0000" />
        </PreviewContainer>
      )}
    </>
  );
}

export { FileInputComponent };
