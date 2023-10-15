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
  const [schedulePreview, setSchedulePreview] = useState<string>('');
  const [schedulePercent, setSchedulePercent] = useState(0);
  const [schedule, setSchedule] = useState<any>('');
  const [uploaded, setUploaded] = useState<boolean | undefined>(false);

  const handleScheduleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSchedule(event.target.files?.[0]);

    const scheduleImage = event.target.files?.[0];
    if (!scheduleImage) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setSchedulePreview(reader.result as string);
    };
    reader.readAsDataURL(scheduleImage);
  };

  const handleClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleCancel = () => {
    setSchedulePreview('');
  };

  useEffect(() => {
    if (uploaded == true) {
      setUploaded(false);
      handleCancel();
      setSchedulePercent(0);
    }
  }, [uploaded]);

  const handleScheduleUploadToFirebase = (e: any) => {
    e.preventDefault();

    if (!schedule) {
      alert('escolha uma imagem!');
    }
    const storageRef = ref(storage, `/${userID}/${schedule.name}`);
    const uploadTask = uploadBytesResumable(storageRef, schedule);
    const [error, setError] = useState<any>();

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const schedulePercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // update progress
        setSchedulePercent(schedulePercent);
      },
      (err) => setError(err),
      () => {
        //download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          const body = JSON.stringify({
            phone: userID,
            photo_position: '5',
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
            console.error('erro');
          }
        });
      }
    );
  };

  return (
    <>
      {schedulePreview ? (
        <StyledButton
          children={
            schedulePercent > 0
              ? `Enviando Foto ${schedulePercent} %`
              : 'Enviar Foto'
          }
          w="larger"
          onClick={handleScheduleUploadToFirebase}
        />
      ) : (
        <FileInputContainer onClick={handleClick}>
          <FileInputLabel htmlFor="scheduleInput">
            Escolher Foto
            <AiFillFileImage size={'22px'} color="white" />
          </FileInputLabel>
          <FileInput
            id="scheduleInput"
            type="file"
            onChange={handleScheduleChange}
          />
        </FileInputContainer>
      )}
      {schedulePreview && (
        <PreviewContainer>
          <SelectedImage src={schedulePreview} alt="Selected Image" />
          <BsFillTrash3Fill onClick={handleCancel} size={24} color="#FF0000" />
        </PreviewContainer>
      )}
    </>
  );
}

export { FileInputComponent };
