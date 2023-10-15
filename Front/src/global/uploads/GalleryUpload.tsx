import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillFileImage } from 'react-icons/ai';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { StyledButton } from '../Button';

import storage from '../../../firebaseConfig';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
  deleteObject,
} from 'firebase/storage';

import imageCompression from 'browser-image-compression';

type FileInputProps = {
  userID: string | undefined;
  onValueChange?: (value: boolean | undefined) => void;
};

function FileInputComponent({
  userID,
  onValueChange,
}: FileInputProps): JSX.Element {
  const [galleryImages, setGalleryImages] = useState<any>('');
  const [galleryImagesPercent, setGalleryImagesPercent] = useState(0);
  const [isGalleryLoading, setIsGalleryLoading] = useState<boolean>(false);
  const [uploaded, setUploaded] = useState<boolean | undefined>(false);
  const [imgsUrls, setImagesurls] = useState<string[]>([]);
  const [error, setError] = useState<any>();

  const listAllImagesFromFolder = async () => {
    try {
      setImagesurls([]);
      const listRef = ref(storage, `${userID}/gallery`);
      const res = await listAll(listRef);
      const urls = await Promise.all(res.items.map(getDownloadURL));
      setImagesurls(urls);
    } catch (error) {
      setError(error);
    }
  };

  const uploadGallery = async () => {
    setIsGalleryLoading(true);
    try {
      let totalPercent = 0;
      for (let i = 0; i < galleryImages.length; i++) {
        const file = galleryImages[i];

        const options = {
          maxSizeMB: 2,
          maxWidthOrHeight: 720,
          useWebWorker: true,
        };

        const compressedFile = await imageCompression(file, options);

        const imageRef = ref(
          storage,
          `${userID}/gallery/${compressedFile.name}`
        );
        const result = uploadBytesResumable(imageRef, compressedFile);

        result.on(
          'state_changed',
          (snapshot) => {
            const galleryImagesPercent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            totalPercent += galleryImagesPercent;
            const galleryImagesAvgPercent = Math.round(
              totalPercent / galleryImages.length
            );
            setGalleryImagesPercent(galleryImagesAvgPercent);

            if (galleryImagesPercent < 100) {
              setIsGalleryLoading(true);
            } else if (galleryImagesPercent >= 100) {
              listAllImagesFromFolder();

              setTimeout(() => {
                listAllImagesFromFolder();
              }, 5000);

              setTimeout(() => {
                setIsGalleryLoading(false);
              }, 5000);
            }
          },
          (error) => {
            setIsGalleryLoading(false);
          }
        );
      }
    } catch (error) {
      setIsGalleryLoading(false);
    }
  };

  const handleClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleCancel = () => {
    setGalleryImages('');
  };

  return (
    <>
      {galleryImages ? (
        <StyledButton
          children={
            galleryImagesPercent > 0
              ? `Enviando Fotos ${galleryImagesPercent} %`
              : 'Enviar Fotos'
          }
          w="larger"
          onClick={uploadGallery}
          type={'button'}
        />
      ) : (
        <FileInputContainer onClick={handleClick}>
          <FileInputLabel htmlFor="galleryInput">
            Escolher Fotos
            <AiFillFileImage size={'22px'} color="white" />
          </FileInputLabel>
          <FileInput
            id="galleryInput"
            type="file"
            onChange={(event) => {
              setGalleryImages(event.target.files);
            }}
            multiple
            accept="image/*"
          />
        </FileInputContainer>
      )}
      {galleryImages && (
        <PreviewContainer>
          <SelectedImage src={galleryImages} alt="Selected Image" />
          <BsFillTrash3Fill onClick={handleCancel} size={24} color="#FF0000" />
        </PreviewContainer>
      )}
    </>
  );
}

export { FileInputComponent };

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  background-color: #0077b6;
  width: 100%;
  height: 3rem;

  border-radius: 4px;
  justify-content: center;
`;

const FileInputLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-right: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const SelectedImage = styled.img`
  /* width: 100px; */
  height: 100%;
  object-fit: cover;

  box-sizing: border-box;
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 10rem;
  padding: 0.5rem;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 1rem;
`;
