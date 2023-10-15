import React, { useState } from 'react';
import { Container, Header, TextWrapper } from '../styles';
import { FaEdit } from 'react-icons/fa';
import { Modal } from './Components/Modal';

interface IAddressProps {
  userID: string | undefined
  toast: (value: boolean | undefined) => void;

  street: string | undefined;
  number: string | undefined;
  cep: string | undefined;
  state: string | undefined;
  complement: string | undefined;
  neighborhood: string | undefined;
  city: string | undefined;

}

function Address({ userID, street, cep, city, complement, neighborhood, number, state, toast }: IAddressProps): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <Container>

      <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        userID={userID}
        toast={toast}
      />

      <Header>
        <h1>Endereço</h1>
        <FaEdit onClick={() => setModalIsVisible(true)}/>
      </Header>

      <TextWrapper>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem'
          }}
        >
          <p>{street}, {number}</p>
          <p>{complement}, {city}</p>
          <p>{neighborhood},{state}, {cep}</p>
        </div>
      </TextWrapper>

    </Container>
  );
}

export { Address };
