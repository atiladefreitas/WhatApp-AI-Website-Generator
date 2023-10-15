import React, { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import { Skeleton, ImageList, ImageListItem } from '@mui/material';
import { StyledButton } from '../../../../../../global/Button';
import { ConfirmModal } from './ConfirmModal';
import { FileInputComponent } from '../../../../../../global/uploads/GalleryUpload';

interface IModalProps {
  imgsUrls: any;
  modalIsVisible: any;
  setModalIsVisible: any;
  userID: string | undefined;

  toastDelete: (value: boolean | undefined) => void;
}

function Modal({
  modalIsVisible,
  setModalIsVisible,
  imgsUrls,
  userID,
  toastDelete,
}: IModalProps): JSX.Element {
  useEffect(() => {
    document.body.style.overflowY = modalIsVisible ? 'hidden' : 'auto';
  }, [modalIsVisible]);

  const [clicked, setClicked] = useState<boolean>(false);

  const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false);

  const handlePhotoClick = () => {
    setClicked(!clicked);
  };

  const [sendingUrl, setSendingUrl] = useState('');

  const handleConfirmModalCall = (url: any) => {
    setConfirmModalIsVisible(true);
    setSendingUrl(url);
  };

  const handleDeleteConfirmed = () => {
    toastDelete(true);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Container isVisible={modalIsVisible}>
      <ConfirmModal
        confirmModalIsVisible={confirmModalIsVisible}
        setConfirmModalIsVisible={() => setConfirmModalIsVisible(false)}
        imgUrl={sendingUrl}
        toastFromConfirmModal={handleDeleteConfirmed}
      />
      <Header>
        <h1 style={{ fontSize: '26px', color: 'white' }}>Galeria de fotos</h1>
        <IoClose size={45} onClick={setModalIsVisible} color="white" />
      </Header>
      <p style={{ fontSize: '18px', color: 'white' }}>
        Toque na foto para remover
      </p>
      <IMGWrapper>
        <ImageList
          sx={{
            width: '100%',
            height: 'fit-content',
          }}
          cols={2}
        >
          {imgsUrls.map((url: string) => (
            <div className="imageWrapper" key={url}>
              <img
                src={url}
                loading="lazy"
                onClick={() => handleConfirmModalCall(url)}
              />
            </div>
          ))}
        </ImageList>
      </IMGWrapper>
      <FileInputComponent userID={userID} />
    </Container>
  );
}

export { Modal };

const Container = styled.section`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  box-sizing: border-box;

  overflow: hidden;

  background: rgba(5, 55, 124, 0.9);
  backdrop-filter: blur(1);

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: 0.5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: 0.7s;
  }

  ${({ isVisible }: any) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }

      nav {
        transform: scale(1);
      }
    `}
`;

const Header = styled.div`
  width: 100%;
  height: 3.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IMGWrapper = styled.div`
  background-color: #eee;
  border-radius: 8px;
  border: 1px solid #c4c4c4;
  margin: 15px 0;

  overflow-y: scroll;

  width: 100%;
  height: 80%;

  box-sizing: border-box;

  & .imageWrapper {
    height: fit-content;

    > img {
      width: 100%;
      border-radius: 8px;
    }
  }
`;
