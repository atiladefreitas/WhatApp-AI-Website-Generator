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
  const [histPreview, SetHistPreview] = useState<string>('');
  const [histPercent, setHistPercent] = useState(0);
  const [hist, setHist] = useState<any>('');
  const [uploaded, setUploaded] = useState<boolean | undefined>(false);
  const [error, setError] = useState<any>();

  const handleHistChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHist(event.target.files?.[0]);

    const histImage = event.target.files?.[0];
    if (!histImage) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      SetHistPreview(reader.result as string);
    };
    reader.readAsDataURL(histImage);
  };

  const handleClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleCancel = () => {
    SetHistPreview('');
  };

  useEffect(() => {
    if (uploaded == true) {
      setUploaded(false);
      handleCancel();
      setHistPercent(0);
    }
  }, [uploaded]);

  const handleHistUploadToFirebase = (e: any) => {
    e.preventDefault();

    if (!hist) {
      alert('escolha uma imagem!');
    }
    const storageRef = ref(storage, `/${userID}/${hist.name}`);
    const uploadTask = uploadBytesResumable(storageRef, hist);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const histPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // update progress
        setHistPercent(histPercent);
      },
      (err) => setError(err),
      () => {
        //download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          const body = JSON.stringify({
            phone: userID,
            photo_position: '2',
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
            // A resposta foi mal-sucedida
            console.error('erro');
          }
        });
      }
    );
  };

  return (
    <>
      {histPreview ? (
        <StyledButton
          children={
            histPercent > 0 ? `Enviando Foto ${histPercent} %` : 'Enviar Foto'
          }
          w="larger"
          onClick={handleHistUploadToFirebase}
        />
      ) : (
        <FileInputContainer onClick={handleClick}>
          <FileInputLabel htmlFor="histInput">
            Escolher Foto
            <AiFillFileImage size={'22px'} color="white" />
          </FileInputLabel>
          <FileInput id="histInput" type="file" onChange={handleHistChange} />
        </FileInputContainer>
      )}
      {histPreview && (
        <PreviewContainer>
          <SelectedImage src={histPreview} alt="Selected Image" />
          <BsFillTrash3Fill onClick={handleCancel} size={24} color="#FF0000" />
        </PreviewContainer>
      )}
    </>
  );
}

export { FileInputComponent };
