import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import { Button, TextField } from '@mui/material';
import { StyledButton } from '../../../../../global/Button';
import { handleSubmit } from '../../../Utils/mongoReq';
import { ContentWrapper } from '../../styles';

interface IModalProps {
  modalIsVisible: any;
  setModalIsVisible: any;
  userID: string;

  isThirdButtonDisabled: string | undefined;

  toast: (value: boolean | undefined) => void;
  btnToast: (value: boolean | undefined) => void;
}

function Modal({
  modalIsVisible,
  setModalIsVisible,
  userID,
  isThirdButtonDisabled,
  toast,
  btnToast,
}: IModalProps): JSX.Element {
  useEffect(() => {
    document.body.style.overflowY = modalIsVisible ? 'hidden' : 'auto';
  }, [modalIsVisible]);

  useEffect(() => {
    if (isThirdButtonDisabled === 'off') {
      setIsBtnDisabled(true);
    }
  }, []);

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

  const [title, setTitle] = useState<string>('');

  const [qlt1, setQlt1] = useState<string>('');
  const [qlt2, setQlt2] = useState<string>('');
  const [qlt3, setQlt3] = useState<string>('');

  const [qualitydescription1, setQualitydescription1] = useState<string>('');
  const [qualitydescription2, setQualitydescription2] = useState<string>('');
  const [qualitydescription3, setQualitydescription3] = useState<string>('');

  const [disableBtn, setDisableBtn] = useState<boolean | null>(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>();

  const handleClick = useCallback(
    async (event: any) => {
      event.preventDefault();

      setDisableBtn(!disableBtn);

      const btnSuccess = await handleSubmit(
        [
          {
            field: 'isThirdButtonDisabled',
            value: disableBtn ? 'on' : 'off',
          },
        ],
        userID
      );

      btnToast(btnSuccess);

      if (isThirdButtonDisabled === 'on') {
        setIsBtnDisabled(true);
      } else {
        setIsBtnDisabled(false);
      }
    },
    [userID]
  );

  const blank = ' ';

  const handleFormSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();

      const success = await handleSubmit(
        [
          {
            field: 'thirdTitle',
            value: title,
          },
          {
            field: 'quality1',
            value: qlt1,
          },
          {
            field: 'quality2',
            value: qlt2,
          },
          {
            field: 'quality3',
            value: qlt3,
          },
          {
            field: 'qualitydescription1',
            value: qualitydescription1,
          },
          {
            field: 'qualitydescription2',
            value: qualitydescription2,
          },
          {
            field: 'qualitydescription3',
            value: qualitydescription3,
          },
        ],
        userID
      );

      toast(success);
      setQlt1('');
      setQlt2('');
      setQlt3('');
      setQualitydescription1('');
      setQualitydescription2('');
      setQualitydescription3('');
    },
    [
      qlt1,
      qlt2,
      qlt3,
      qualitydescription1,
      qualitydescription2,
      qualitydescription3,
      userID,
    ]
  );

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Container isVisible={modalIsVisible} onSubmit={handleFormSubmit}>
      <Header>
        <h1 style={{ fontSize: '26px', color: '#1b1b1b' }}>Terceira sessão</h1>
        <IoClose size={45} onClick={setModalIsVisible} color="#1b1b1b" />
      </Header>
      <TextField
        id="outlined-basic"
        label="Título da sessão"
        variant="outlined"
        sx={{ width: '100%', color: 'red' }}
        margin="normal"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <ContentWrapper mb="1rem" mt="0.6rem">
        <div className="header">
          <h4>Desabilitar botão da sessão</h4>
          <p>
            {' '}
            No momento o botão está
            {/* <strong> */}
            {isBtnDisabled ? (
              <>
                <strong
                  style={{
                    color: 'red',
                  }}
                >
                  {blank} desabilitado
                </strong>
              </>
            ) : (
              <>
                <strong
                  style={{
                    color: 'green',
                  }}
                >
                  {blank} habilitado
                </strong>
              </>
            )}
          </p>
        </div>
        <Button
          variant={'contained'}
          onClick={handleClick}
          type="button"
          sx={{
            width: '100%',
            height: '3rem',
          }}
        >
          {isBtnDisabled ? 'Habilitar  botão' : ' Desabilitar botão'}
        </Button>
      </ContentWrapper>

      <Wrapper>
        <div className="difs-wrapper">
          <h4 style={{ color: '#1b1b1b' }}>Diferencial 1</h4>
          <TextField
            id="outlined-basic"
            label="Título do diferencial 1"
            variant="outlined"
            sx={{ width: '100%', color: 'red' }}
            margin="normal"
            onChange={(e) => setQlt1(e.target.value)}
            value={qlt1}
          />

          <TextField
            id="outlined-multiline-static"
            label="Conteúdo"
            multiline
            rows={4}
            onChange={(e) => setQualitydescription1(e.target.value)}
            value={qualitydescription1}
          />
        </div>

        <div className="difs-wrapper">
          <h4 style={{ color: '#1b1b1b' }}>Diferencial 2</h4>
          <TextField
            id="outlined-basic"
            label="Título do diferencial 2"
            variant="outlined"
            sx={{ width: '100%', color: 'red' }}
            margin="normal"
            onChange={(e) => setQlt2(e.target.value)}
            value={qlt2}
          />

          <TextField
            id="outlined-multiline-static"
            label="Conteúdo"
            multiline
            rows={4}
            onChange={(e) => setQualitydescription2(e.target.value)}
            value={qualitydescription2}
          />
        </div>

        <div className="difs-wrapper">
          <h4 style={{ color: '#1b1b1b' }}>Diferencial 3</h4>
          <TextField
            id="outlined-basic"
            label="Título do diferencial 3"
            variant="outlined"
            sx={{ width: '100%', color: 'red' }}
            margin="normal"
            onChange={(e) => setQlt3(e.target.value)}
            value={qlt3}
          />

          <TextField
            id="outlined-multiline-static"
            label="Conteúdo"
            multiline
            rows={4}
            onChange={(e) => setQualitydescription3(e.target.value)}
            value={qualitydescription3}
          />
        </div>
      </Wrapper>
      <StyledButton
        w="larger"
        children="Salvar textos"
        type="submit"
        mt="1rem"
        onClick={setModalIsVisible}
      />
    </Container>
  );
}

export { Modal };

const Container = styled.form`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  /* bottom: 0; */
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 1rem 20rem;

  box-sizing: border-box;

  /* overflow: hidden; */
  overflow-y: scroll;

  background: #eee;
  backdrop-filter: blur(1);

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: 0.5s;

  @media screen and (max-width: 800px) {
    padding: 1rem;
  }

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

  & .difs-wrapper {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #eaeaea;
  }
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

const Wrapper = styled.div`
  width: 100%;
  height: 75%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;

  border: 1px solid #c4c4c4;
  border-radius: 8px;

  gap: 1rem;
  background-color: #eaeaea;
`;
