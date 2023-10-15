import React, { useEffect, useState } from 'react';
import { Container, Header, TextWrapper } from '../styles';
import { FaEdit } from 'react-icons/fa';
import { StyledButton } from '../../../../global/Button';
import { ImageList } from '@mui/material';

import { Modal } from './Components/Modal/Modal';

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
  deleteObject,
} from 'firebase/storage';

import { IMGContainer } from './styles';

import storage from '../../../../../firebaseConfig';
import CustomizedSwitches from './Components/Switch';

interface IFourthSecProps {
  id: any;
  userID: string | undefined;
  isLoading: any;

  isGalleryVisible: string | undefined;

  toast: (value: boolean | undefined) => void;
  toastFromSwitch: (value: boolean | undefined) => void;
}

function FourthSection({
  id,
  userID,
  isLoading,
  isGalleryVisible,
  toast,
  toastFromSwitch,
}: IFourthSecProps): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('');

  const [imgsUrls, setImagesurls] = useState<string[]>([]);

  const [isMounted, setIsMounted] = useState<boolean>(false);

  const [checked, setCheked] = useState<boolean>(false);

  const listAllImagesFromFolder = async () => {
    try {
      setImagesurls([]);
      const listRef = ref(storage, `${id}/gallery`);
      const res = await listAll(listRef);
      const urls = await Promise.all(res.items.map(getDownloadURL));
      setImagesurls(urls);
    } catch (error) {
      throw 'error';
    }
  };

  const customBorder = '1px solid #c4c4c4';
  const customPadding = '1rem';
  const customSizing = 'border-box';

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      listAllImagesFromFolder();
    }
    listAllImagesFromFolder();
  }, []);

  const handleChange = (event: any) => {
    setColor(event.target.value);
  };

  const handleToast = () => {
    toast(true);
    listAllImagesFromFolder();
  };

  const isCheked = () => {
    toastFromSwitch(true);
  };

  return (
    <>
      <Container id="fourth">
        <Modal
          modalIsVisible={modalIsVisible}
          setModalIsVisible={() => setModalIsVisible(false)}
          imgsUrls={imgsUrls}
          userID={userID}
          toastDelete={handleToast}
        />
        <Header>
          <h1>Quarta sessão</h1>
          {isGalleryVisible == 'off' ? (
            <></>
          ) : (
            <>
              <FaEdit onClick={() => setModalIsVisible(true)} />
            </>
          )}
        </Header>

        <TextWrapper
          style={{
            border: customBorder,
            padding: customPadding,
            boxSizing: customSizing,
            borderRadius: '8px',
            backgroundColor: '#f4f4f4',
          }}
        >
          <h4>Esta sessão pode ser desabilitada</h4>
          <p>
            Para <strong>mostrar</strong> sessão em seu site deixe em{' '}
            <strong style={{ color: '#33cf4d' }}>On</strong>
          </p>
          <p>
            Para <strong>esconder</strong> sessão do seu site deixe em{' '}
            <strong style={{ color: '#d60808' }}>Off</strong>
          </p>
          <CustomizedSwitches
            userID={userID}
            toast={isCheked}
            currentValue={isGalleryVisible}
          />
        </TextWrapper>

        <TextWrapper>
          <h4>Título da sessão</h4>
          <p>Galeria de fotos</p>
        </TextWrapper>

        {isGalleryVisible == 'off' ? (
          <>
            <TextWrapper
              style={{
                border: customBorder,
                padding: customPadding,
                boxSizing: customSizing,
                borderRadius: '8px',
                backgroundColor: '#f4f4f4',
              }}
            >
              <p>
                Para visualizar sua galeria de fotos e enviar novas fotos, por
                favor habilite a sessão
              </p>
            </TextWrapper>
          </>
        ) : (
          <IMGContainer>
            <ImageList
              sx={{
                width: '100%',
                height: 'fit-content',
              }}
              cols={2}
            >
              {imgsUrls.map((url: string) => (
                <div className="imageWrapper" key={url}>
                  <img src={url} loading="lazy" />
                </div>
              ))}
            </ImageList>
          </IMGContainer>
        )}
      </Container>
    </>
  );
}

export { FourthSection };
