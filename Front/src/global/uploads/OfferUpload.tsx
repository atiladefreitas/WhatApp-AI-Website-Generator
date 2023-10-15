import React, { useEffect, useState } from 'react';
import { AiFillFileImage } from 'react-icons/ai';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { StyledButton } from '../Button';

import storage from '../../../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import {
  FileInput,
  FileInputContainer,
  FileInputLabel,
  PreviewContainer,
  SelectedImage,
} from './styles';

type FileInputProps = {
  userID: string | undefined;
  onValueChange: (value: boolean | undefined) => void;
};

function FileInputComponent({
  userID,
  onValueChange,
}: FileInputProps): JSX.Element {
  const [offerPreview, setOfferPreview] = useState<string>('');
  const [offerPercent, setOfferPercent] = useState(0);
  const [offer, setOffer] = useState<any>('');
  const [uploaded, setUploaded] = useState<boolean | undefined>(false);

  const handleOfferChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOffer(event.target.files?.[0]);

    const offerImage = event.target.files?.[0];
    if (!offerImage) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setOfferPreview(reader.result as string);
    };
    reader.readAsDataURL(offerImage);
  };

  const handleClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleCancel = () => {
    setOfferPreview('');
  };

  useEffect(() => {
    if (uploaded == true) {
      setUploaded(false);
      handleCancel();
      setOfferPercent(0);
    }
  }, [uploaded]);

  const handleOfferUploadToFirebase = (e: any) => {
    e.preventDefault();

    if (!offer) {
      alert('escolha uma imagem!');
    }
    const storageRef = ref(storage, `/${userID}/${offer.name}`);
    const uploadTask = uploadBytesResumable(storageRef, offer);
    const [error, setError] = useState<any>();

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const offerPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // update progress
        setOfferPercent(offerPercent);
      },
      (err) => setError(err),
      () => {
        //download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          const body = JSON.stringify({
            phone: userID,
            photo_position: '3',
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
      {offerPreview ? (
        <StyledButton
          children={
            offerPercent > 0 ? `Enviando Foto ${offerPercent} %` : 'Enviar Foto'
          }
          w="larger"
          onClick={handleOfferUploadToFirebase}
          type={'button'}
        />
      ) : (
        <FileInputContainer onClick={handleClick}>
          <FileInputLabel htmlFor="offerInput">
            Escolher Foto
            <AiFillFileImage size={'22px'} color="white" />
          </FileInputLabel>
          <FileInput id="offerInput" type="file" onChange={handleOfferChange} />
        </FileInputContainer>
      )}
      {offerPreview && (
        <PreviewContainer>
          <SelectedImage src={offerPreview} alt="Selected Image" />
          <BsFillTrash3Fill onClick={handleCancel} size={24} color="#FF0000" />
        </PreviewContainer>
      )}
    </>
  );
}

export { FileInputComponent };
