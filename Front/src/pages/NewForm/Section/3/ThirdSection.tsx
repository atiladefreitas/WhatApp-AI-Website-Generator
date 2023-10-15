import React, { useState } from 'react';
import { Container, Header, ImageContainer, TextWrapper, InputWrapper } from '../styles';
import { FaEdit } from 'react-icons/fa';
import { StyledButton } from '../../../../global/Button';
import { LoadingComponent } from '../../Components/Skeleton';
import { Modal } from './Components/Modal';

interface IThirdSecPops {

  quality1: string | undefined;
  quality2: string | undefined;
  quality3: string | undefined;

  qualitydescription1: string | undefined;
  qualitydescription2: string | undefined;
  qualitydescription3: string | undefined;

  isLoading: any;

  userID: any;

  title: string | undefined;

  isThirdButtonDisabled: string | undefined;


  btnToast: (value: boolean | undefined) => void;
  toastFromModal: (value: boolean | undefined) => void;
}

function ThirdSection(
  {
    quality1,
    quality2,
    quality3,
    qualitydescription1,
    qualitydescription2,
    qualitydescription3,
    isLoading,
    userID,
    title,
    isThirdButtonDisabled,
    toastFromModal,
    btnToast,
  }: IThirdSecPops): JSX.Element {

  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('');

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const customBorder = '1px solid #c4c4c4';
  const customPadding = '1rem';
  const customSizing = 'border-box';

  const handleClick = () => {
    setClicked(!clicked);
  };


  const handleChange = (event: any) => {
    setColor(event.target.value);
  };

  const handleText = () => {
    toastFromModal(true);
  };

  const handleBtnToast = () => {
    btnToast(true);
  };

  return (
    <Container id="third">
      <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        userID={userID}
        toast={handleText}
        isThirdButtonDisabled={isThirdButtonDisabled}
        btnToast={handleBtnToast}
      />
      <Header>
        <h1>Terceira sessão</h1>
        <FaEdit onClick={() => setModalIsVisible(true)}/>
      </Header>
      <TextWrapper>
        <h4>Título da sessão</h4>
        {
          title == '' ? (
            <p>Nossos diferenciais</p>
          ) : (
            <p>{title}</p>
          )
        }
      </TextWrapper>

      <TextWrapper style={{ border: customBorder, padding: customPadding, boxSizing: customSizing, borderRadius: '8px'}}>
        <h3 style={{color: 'rgba(0,0,0,0.45)'}}>Diferencial 1</h3>
        <h4>{quality1}</h4>
        <LoadingComponent
          loading={isLoading}
          height="4rem"
          component={
            <p>{qualitydescription1}</p>
          }
        />
      </TextWrapper>

      <TextWrapper style={{ border: customBorder, padding: customPadding, boxSizing: customSizing, borderRadius: '8px'}}>
        <h3 style={{color: 'rgba(0,0,0,0.45)'}}>Diferencial 2</h3>
        <h4>{quality2}</h4>
        <LoadingComponent
          loading={isLoading}
          height="4rem"
          component={
            <p>{qualitydescription2}</p>
          }
        />
      </TextWrapper>

      <TextWrapper style={{ border: customBorder, padding: customPadding, boxSizing: customSizing, borderRadius: '8px'}}>
        <h3 style={{color: 'rgba(0,0,0,0.45)'}}>Diferencial 1</h3>
        <h4>{quality3}</h4>
        <LoadingComponent
          loading={isLoading}
          height="4rem"
          component={
            <p>{qualitydescription3}</p>
          }
        />
      </TextWrapper>
    </Container>
  );
}

export { ThirdSection };
