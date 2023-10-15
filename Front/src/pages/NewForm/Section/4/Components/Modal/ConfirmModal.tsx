import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import { StyledButton } from '../../../../../../global/Button';

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
  deleteObject,
} from 'firebase/storage';
import storage from '../../../../../../../firebaseConfig';

interface IConfirmModalProps {
  confirmModalIsVisible: any;
  setConfirmModalIsVisible: any;
  imgUrl: any;

  toastFromConfirmModal: (value: boolean | undefined) => void;
}

function ConfirmModal({
  confirmModalIsVisible,
  setConfirmModalIsVisible,
  imgUrl,
  toastFromConfirmModal,
}: IConfirmModalProps): JSX.Element {
  useEffect(() => {
    document.body.style.overflowY = confirmModalIsVisible ? 'hidden' : 'auto';
  }, [confirmModalIsVisible]);

  const handleDelete = () => {
    toastFromConfirmModal(true);
  };

  const closeModal = () => {
    setConfirmModalIsVisible;
  };

  const deleteImg = (refUrl: string) => {
    const imageRef = ref(storage, refUrl);
    deleteObject(imageRef)
      .then(() => handleDelete(), closeModal)
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Container isVisible={confirmModalIsVisible}>
      <Wrapper>
        <div className="content-wrapper">
          <div className="header">
            <IoClose
              size={40}
              onClick={setConfirmModalIsVisible}
              style={{ paddingRight: '10px' }}
            />
            <h2>Deseja realmente apagar esta foto?</h2>
          </div>
          <img src={imgUrl} />
        </div>
        <BtnWrapper>
          <StyledButton
            children="cancelar"
            w="small"
            bgColor="red"
            onClick={setConfirmModalIsVisible}
          />
          <StyledButton
            children="confirmar"
            w="small"
            onClick={() => {
              deleteImg(imgUrl);
              setTimeout(() => {
                setConfirmModalIsVisible(true);
              }, 1000);
            }}
          />
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
}

export { ConfirmModal };

const Container = styled.section`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: column-reverse;

  box-sizing: border-box;

  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);

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

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 65%;
  max-height: 90%;
  background-color: white;
  border-radius: 16px 16px 0 0;
  padding: 1rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px -5px 100px rgba(0, 0, 0, 1);

  & .content-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;

    & .header {
      width: 100%;
      height: fit-content;
      padding: 0.8rem 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 1rem;

      & h1 {
        width: 100%;
      }
    }
    & img {
      width: auto;
      max-width: 100%;
      max-height: 45vh;
      margin-top: 1rem;
      border-radius: 8px;
    }
  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 10px;
  margin-top: 2rem;
`;
