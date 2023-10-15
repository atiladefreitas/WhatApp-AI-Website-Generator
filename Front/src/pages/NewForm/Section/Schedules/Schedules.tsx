import React, { useState } from 'react';
import { Container, Header, ImageContainer, TextWrapper, InputWrapper } from '../styles';
import { FaEdit } from 'react-icons/fa';
import { StyledButton } from '../../../../global/Button';
import { LoadingComponent } from '../../Components/Skeleton';

import { Modal } from './Components/Modal';
import { FileInputComponent } from '../../../../global/uploads/SchedulesUpload';

interface IFirstSecPops {
  call: string | undefined;
  description: string | undefined;
  img: string | undefined;
  isLoading: any;
  userID: any;

  segunda: string | undefined;
  terca: string | undefined;
  quarta: string | undefined;
  quinta: string | undefined;
  sexta: string | undefined;
  sabado: string | undefined;
  domingo: string | undefined;

  toast: (value: boolean | undefined) => void;
}

function Schedules({ call, description, img, isLoading, userID, segunda, terca, quarta, quinta, sexta, sabado, domingo,toast }: IFirstSecPops): JSX.Element {
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

  return (
    <Container >
      <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        userID={userID}
      />
      <Header>
        <h1>Horários</h1>
        <FaEdit onClick={() => setModalIsVisible(true)}/>
      </Header>

      <TextWrapper>
        <div
          style={{
            width: '100%',
            height: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '18px',
            lineHeight: '28px',
          }}
        >
          {
            segunda === terca && terca === quarta && quarta === quinta && quinta === sexta && sexta === segunda ? (
              <>
                <p> De Segunda a Sexta das {segunda} </p>
                {
                  sabado === domingo ? (
                    <>
                      <p>Sábado e Domingo: {sabado}</p>
                    </>
                  ) : (
                    <></>
                  )
                }
              </>
            ) : (
              <>
                <p>Segunda: { segunda }</p>
                <p>Terça: { terca }</p>
                <p>Quarta: { quarta }</p>
                <p>Quinta: { quinta }</p>
                <p>Sexta: { sexta }</p>
                <p>Sábado: { sabado }</p>
                <p>Domingo: { domingo }</p>
              </>
            )
          }
        </div>
      </TextWrapper>

      <ImageContainer>
        <LoadingComponent
          loading={isLoading}
          height="10rem"
          component={
            img == '' ? (
              <>

              </>
            ) : (
              <>
                <img src={img}/>
              </>
            )
          }
        />
        <FileInputComponent
          userID={userID}
          onValueChange={HandleOnFileSelect}
        />
        <p
          style={{
            fontStyle: 'italic',
            color: 'rgba(0,0,0,0.5)',
            fontSize: '14px',
            textAlign: 'justify',
            letterSpacing: '0.5px',
          }}
        >Você pode subir uma imagem personalizada para os horários</p>
      </ImageContainer>
    </Container>
  );
}

export { Schedules };
