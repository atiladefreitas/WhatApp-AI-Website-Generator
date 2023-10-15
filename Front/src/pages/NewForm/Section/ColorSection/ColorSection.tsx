import React, { useState } from 'react';
import { Container, Header } from '../styles';
import { ColorContainer, Colors } from './styles';
import { FaEdit } from 'react-icons/fa';
import { Modal } from './Components/Modal';

interface IColorSectionProps {
  mainColor: string | undefined;
  secondaryColor: string | undefined;
  accentColor: string | undefined;

  userID?: string | undefined;
  toastFromModal: (value: boolean | undefined) => void;
}

function ColorSection({ mainColor, secondaryColor, accentColor, userID, toastFromModal }: IColorSectionProps): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleColor = () => {
    toastFromModal(true);
  };

  return (
    <Container>
      <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        userID={userID}
        toast={handleColor}
      />
      <Header>
        <h1>Paleta de cores</h1>
        <FaEdit onClick={() => setModalIsVisible(true)}/>
      </Header>
      <h3>Estas são as suas atuais cores: </h3>
      <Colors>
        <ColorContainer
          bgColor={mainColor}
        />
        <ColorContainer
          bgColor={secondaryColor}
        />
        <ColorContainer
          bgColor={accentColor}
        />
      </Colors>
    </Container>
  );
}

export { ColorSection };
