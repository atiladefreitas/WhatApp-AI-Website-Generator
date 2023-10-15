import React, { useCallback, useState } from 'react';
import { Container, Header, ImageContainer, TextWrapper, InputWrapper } from '../styles';
import { FaEdit } from 'react-icons/fa';
import { StyledButton } from '../../../../global/Button';
import { LoadingComponent } from '../../Components/Skeleton';

import { Modal } from './Components/Modal';
import { FileInputComponent } from '../../../../global/uploads/CoverUpload';
import { handleSubmit } from '../../Utils/mongoReq';

interface IFirstSecPops {
  call: string | undefined;
  description: string | undefined;
  img: string | undefined;
  isLoading: any;
  userID: any;
  isFirstButtonDisabled: string | undefined;

  toast: (value: boolean | undefined) => void;
  toastFromModal: (value: boolean | undefined) => void;
  btnToast: (value: boolean | undefined) => void;
}

function FirstSection({ call,isFirstButtonDisabled, description, img, isLoading, userID, toast, toastFromModal, btnToast }: IFirstSecPops): JSX.Element {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [isFileSelected, setFileSelected] = useState<boolean>(false);

  const handleChange = (event: any) => {
    setColor(event.target.value);
  };

  const HandleOnFileSelect = () => {
    toast(true);
  };

  const handleBtnToast = () => {
    btnToast(true);
  };

  const handleText = () => {
    toastFromModal(true);
  };

  return (
    <Container id="first">
      <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        userID={userID}
        toast={handleText}
        photoToast={HandleOnFileSelect}
        img={img}
        isLoading={isLoading}
        isFirstButtonDisabled={isFirstButtonDisabled}
        btnToast={handleBtnToast}
      />
      <Header>
        <h1>Primeira sessão</h1>
        <FaEdit onClick={() => setModalIsVisible(true)}/>
      </Header>

      <TextWrapper>
        <h4>Título da sessão</h4>
        <LoadingComponent
          loading={isLoading}
          height="4rem"
          component={
            <p>{call}</p>
          }
        />
      </TextWrapper>

      <TextWrapper>
        <h4>Descrição</h4>
        <LoadingComponent
          loading={isLoading}
          height="4rem"
          component={
            <p>{description}</p>
          }
        />
      </TextWrapper>
      <ImageContainer>
        <h4>Foto da sessão</h4>
        <LoadingComponent
          loading={isLoading}
          height="10rem"
          component={
            img == '' ? (
              <>
                <p style={{
                  lineHeight: '24px',
                  textAlign: 'justify'
                }}>
                  Você ainda não subiu nenhuma foto,
                  use o ícone <FaEdit /> para enviar
                  a foto da primeira sessão
                </p>
              </>
            ) : (
              <>
                <img src={img} style={{ maxWidth: '40vh', height: 'auto'}}/>
              </>
            )
          }
        />
      </ImageContainer>
    </Container>
  );
}

export { FirstSection };
