import React, { useCallback, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import { TextField } from '@mui/material';
import { StyledButton } from '../../../../../global/Button';
import { handleSubmit } from '../../../Utils/mongoReq';
import { ColorOption, ColorPicker } from './ColorPicker/styles';

interface IModalProps {
  modalIsVisible: any;
  setModalIsVisible: any;
  userID: string | undefined;

  toast: (value: boolean | undefined) => void;
}

function Modal({ modalIsVisible, setModalIsVisible, userID, toast }: IModalProps): JSX.Element {
  const [mainColor, setMainColor] = useState<string>('#034AA3');
  const [secondaryColor, setSecondaryColor] = useState<string>('#034AA3');
  const [accentColor, setAccentColor] = useState<string>('#034AA3');

  const [options, setoptions] = useState([
    { mainColor: '#013759', secondaryColor: '#378DBD', accentColor:'#EBF2F3', title: 'Profundeza' },
    { mainColor: '#3D5E63', secondaryColor: '#85BDB0', accentColor:'#E3E0E7', title: 'Serenidade' },
    { mainColor: '#691FB1', secondaryColor: '#5F90D3', accentColor:'#A0FCDD', title: 'Encanto' },
    { mainColor: '#4B5556', secondaryColor: '#5F7880', accentColor:'#D3D5D4', title: 'Elegância' },
    { mainColor: '#000000', secondaryColor: '#3D94B0', accentColor:'#F5F5F5', title: 'Contraste' },
    { mainColor: '#50000B', secondaryColor: '#720026', accentColor:'#DFD0C7', title: 'Paixão' },
    { mainColor: '#626262', secondaryColor: '#04283E', accentColor:'#CFEEFF', title: 'Equilíbrio' },
    { mainColor: '#B8365F', secondaryColor: '#406950', accentColor:'#C4E1DA', title: 'Harmonia' },
    { mainColor: '#5A8D6C', secondaryColor: '#D2DCC4', accentColor:'#FBF5E5', title: 'Renovação' },
    { mainColor: '#3A096A', secondaryColor: '#1B65BD', accentColor:'#EBF2F3', title: 'Profundidade' },
    { mainColor: '#4B1B31', secondaryColor: '#AC779D', accentColor:'#FFE4E4', title: 'Amoroso' },
    { mainColor: '#FF5733', secondaryColor: '#C70039', accentColor:'#FFEFBC', title: 'Vibrante' },
    { mainColor: '#E1AD01', secondaryColor: '#035956', accentColor:'#C0DDC7', title: 'Resplendor' },
    { mainColor: '#383333', secondaryColor: '#9D7968', accentColor:'#EEEBE9', title: 'Intemporal' },
    { mainColor: '#331609', secondaryColor: '#792600', accentColor:'#EEEBE9', title: 'Aconchego' },
  ]);

  useEffect(() => {
    document.body.style.overflowY = modalIsVisible ? 'hidden' : 'auto';
  }, [modalIsVisible]);

  const [clicked, setClicked] = useState<boolean>(false);

  const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false);

  const [sendingUrl, setSendingUrl] = useState('');

  const handleConfirmModalCall = (url: any) => {
    setConfirmModalIsVisible(true);
    setSendingUrl(url);
  };

  const handleSendColor = useCallback( async (event: any) => {
    event.preventDefault();

    const success = await handleSubmit(
      [{
        'field': 'mainColor',
        'value': mainColor
      },{
        'field': 'secondaryColor',
        'value': secondaryColor
      },{
        'field': 'accentColor',
        'value': accentColor
      }],
      userID
    );

    toast(success);
    setMainColor('');
    setSecondaryColor('');
    setAccentColor('');

  }, [mainColor, secondaryColor, accentColor, userID]);

  return (
    // @ts-ignore
    <Container isVisible={modalIsVisible}
      onSubmit={handleSendColor}>
      <Header>
        <h1 style={{ fontSize: '26px', color: '#1b1b1b'}}>Paleta de cores</h1>
        <IoClose size={45} onClick={setModalIsVisible} color="#1b1b1b"/>
      </Header>

      <Wrapper>
        <ColorPicker style={{ backgroundColor: mainColor }}>
          <div className="options">
            {options.map((opt) => (
              <div
                className={mainColor  === opt.mainColor ? 'selected' : 'non-selected'}
                onClick={() => {
                  if (opt.mainColor !== undefined && opt.secondaryColor !== undefined && opt.accentColor !== undefined) {
                    setMainColor(opt.mainColor);
                    setSecondaryColor(opt.secondaryColor);
                    setAccentColor(opt.accentColor);
                  }
                }}
              >
                <ColorOption>
                  <div className='mainColor' style={{ backgroundColor: opt.mainColor }}></div>
                  <div className='secondaryColor' style={{ backgroundColor: opt.secondaryColor }}></div>
                  <div className='accentColor' style={{ backgroundColor: opt.accentColor }}></div>
                </ColorOption>
                <h1>{opt.title}</h1>
              </div>
            ))}
          </div>

          { secondaryColor == '#034AA3' ? (
            <></>
          ) : (
            <div className='colorDemonstration'>
              <div className='demonstrationWrapper'>
                <div className='exampleSecondary' style={{ backgroundColor: secondaryColor }}></div>
                <h4>Cor secundária</h4>
              </div>

              <div className='demonstrationWrapper'>
                <div className='exampleAccent' style={{ backgroundColor: accentColor }}></div>
                <h4>Cor de destaque</h4>
              </div>
            </div>
          )}
        </ColorPicker>
      </Wrapper>
      <StyledButton w="larger" children="Salvar cores" type="submit" mt="1rem" onClick={setModalIsVisible}/>
    </Container>
  );
}

export { Modal };


const Container = styled.form`
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
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  /* overflow: auto; */
  display: flex;
  flex-direction: column;
  /* padding-bottom: 1rem; */
`;
