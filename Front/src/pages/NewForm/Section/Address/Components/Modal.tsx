import React, { useCallback, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import { StyledButton } from '../../../../../global/Button';
import { handleSubmit } from '../../../Utils/mongoReq';

import { IMaskInput } from 'react-imask';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';

interface IModalProps {
  modalIsVisible: any;
  setModalIsVisible: any;
  userID: string | undefined;

  toast: (value: boolean | undefined) => void;
}

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

interface State {
  textmask: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="00000-000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

function Modal({ modalIsVisible, setModalIsVisible, userID, toast }: IModalProps): JSX.Element {

  const [values, setValues] = React.useState<State>({
    textmask: '',
  });

  const [cep, setCep] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [complement, setComplement] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const [btnDisable, setBtnDisable] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflowY = modalIsVisible ? 'hidden' : 'auto';
  }, [modalIsVisible]);

  const getAddress = async (event: any): Promise<void> => {
    const cepvalid = event.target?.value?.replace(/[^0-9]/g, '');

    if (cepvalid?.length !== 8) {
      return;
    }  else {
      setIsDisabled(false);
    }

    await fetch(`https://viacep.com.br/ws/${cepvalid}/json/`)
      .then((res) => res.json())
      .then((data) => {

        if(data === undefined){
          return;
        }
        setCep(`${data.cep}`);
        setStreet(`${data.logradouro}`);
        setNeighborhood(`${data.bairro}`);
        setState(data.uf);
        setCity(data.localidade);
      });
  };

  const handleSendAddress = async () => {
    setBtnDisable(true);

    const body = JSON.stringify({
      phone: userID,
      zip_code: cep, // CEP
      street: street, // rua
      number: number, // numero
      complement: complement, // complemento
      city: city, // cidade
      state: state, // estado
      neighborhood: neighborhood, //bairro
    });

    const response = await fetch(
      `${import.meta.env.VITE_MAIN_API_URL}/fillAddress`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: body,
      }
    );
    if (response.ok) {
      setTimeout(() => {
        toast(true);
        setModalIsVisible;
      },
      1000
      );
      setBtnDisable(false);
    } else {
      alert('Houve um erro ao atualizar o endereço, verifique se todos os campos estão preenchidos e tente novamente');
      setBtnDisable(false);
    }
    const result = await response.json();
  };

  return (
    // @ts-ignore
    <Container isVisible={modalIsVisible} >
      <Header>
        <h1 style={{ fontSize: '26px', color: '#1b1b1b'}}>Endereço</h1>
        <IoClose size={45} onClick={setModalIsVisible} color="#1b1b1b"/>
      </Header>

      <p style={{ color: '#696969'}}>Para registrar um novo endereço, comece com o CEP</p>

      <ContentWrapper>
        <InputLabel htmlFor="formatted-text-mask-input"><strong>seu CEP</strong></InputLabel>
        <Input
          value={cep}
          onChange={(e) => getAddress(e)}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextMaskCustom as any}
        />
      </ContentWrapper>

      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <TextField
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          id="outlined-basic"
          label="Rua"
          variant="outlined"
          sx={{ width: '100%', color: 'red'}}
          margin="normal"
          disabled={isDisabled}
        />

        <TextField
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          id="outlined-basic"
          label="Bairro"
          variant="outlined"
          sx={{ width: '100%', color: 'red'}}
          margin="normal"
          disabled={isDisabled}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <TextField
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          id="outlined-basic"
          label="Número"
          variant="outlined"
          sx={{ width: '30%', color: 'red'}}
          margin="normal"
          disabled={isDisabled}
        />

        <TextField
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
          id="outlined-basic"
          label="Complemento"
          variant="outlined"
          sx={{ width: '100%', color: 'red'}}
          margin="normal"
          disabled={isDisabled}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <TextField
          value={city}
          onChange={(e) => setCity(e.target.value)}
          id="outlined-basic"
          label="Cidade"
          variant="outlined"
          sx={{ width: '100%', color: 'red'}}
          margin="normal"
          disabled={isDisabled}
        />

        <TextField
          value={state}
          onChange={(e) => setState(e.target.value)}
          id="outlined-basic"
          label="UF"
          variant="outlined"
          sx={{ width: '100%', color: 'red'}}
          margin="normal"
          disabled={isDisabled}
        />
      </Box>
      <StyledButton w="larger" children="Salvar endereço" mt="1rem" onClick={() => handleSendAddress()} bgColor={btnDisable ? '#c4c4c4' : ''}/>
    </Container>
  );
}

export { Modal };


const Container = styled.div`
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
  padding: 1rem 20rem;

  box-sizing: border-box;

  overflow: hidden;

  background: #eee;
  backdrop-filter: blur(1);

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: .5s;

  @media screen and (max-width: 800px) {
    padding: 1rem;
  }

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
  }

  ${({ isVisible }: any) => isVisible && css`
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

const ContentWrapper = styled.div`
  height: 6rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;

  justify-content: center;
  box-sizing: border-box;

  border: 1px solid #c4c4c4;
  border-radius: 4px;
`;
