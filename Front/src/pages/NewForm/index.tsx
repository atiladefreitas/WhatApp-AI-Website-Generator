import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Contact } from '../../types';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { LoadingPage } from '../Components/LoadingPage';

import { Container, Main } from './styles';
import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  Navbar,
  Header,
  Schedules,
  FormHeader,
  ColorSection,
  Address,
  GoToSite,
  Instagram,
  Whatsapp,
} from './Section';

function NewForm(): JSX.Element {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [open, setOpen] = React.useState(false);

  const [reload, setReload] = useState<boolean>(false);

  const { id } = useParams();

  const convertedUrlParam = id?.split('-')[0];

  const fetchDataForms = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    if (id?.length < 15) {
      return;
    }
    try {
      const response = await axios.get<Contact>(
        `${import.meta.env.VITE_MAIN_API_URL}/findByPhone/${convertedUrlParam}`
      );

      setData(response.data);
    } catch (err) {
      console.error('erro');
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchDataForms()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        toast.error(
          `Houve um erro ao carregar a página, tente novamente mais tarde, ${err}`,
          {
            position: 'top-center',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          }
        );
      });
  }, [fetchDataForms]);

  useEffect(() => {
    if (reload == true) {
      setLoading(true);
      fetchDataForms()
        .then(() => {
          setReload(false);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [reload]);

  const [toastMessage, setToastMessage] = useState<string>('');

  const handleToast = (text: string) => {
    setOpen(true);
    setReload(true);
    setToastMessage(text);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const ButtonMessage = 'Botão atualizado com sucesso!';

  const [dataFetching, setDataFetching] = useState<boolean>(false);

  useEffect(() => {
    if (data?.phone == '' || data?.phone == null) {
      setDataFetching(true);

      setTimeout(() => {
        setDataFetching(false);
      }, 1000);
    }
  }, []);

  return (
    <Container>
      {data?.phone == '' || data?.phone == null ? (
        <>
          <div
            style={{
              width: '100%',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {dataFetching ? (
              <>
                <LoadingPage />
              </>
            ) : (
              <>
                <h1>Página não encontrada</h1>
                <p>Entre em contato com o suporte</p>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <Navbar
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />

          <Header setMenuIsVisible={setMenuIsVisible} origin={data?.origin} />
          <Main>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{
                  width: '100%',
                  backgroundColor: '#2a9d90d7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '16px',
                  backdropFilter: 'blur(5px)',
                  zIndex: 10,
                }}
              >
                {toastMessage}
              </Alert>
            </Snackbar>

            <GoToSite convertedName={data?.convertedName} />

            <FormHeader
              name={data?.name}
              img={data?.photos.logo.base64}
              isLoading={loading}
              userID={data?.phone}
              toast={() => handleToast('Logo enviada com sucesso!')}
            />

            <ColorSection
              userID={data?.phone}
              accentColor={data?.accentColor}
              mainColor={data?.mainColor}
              secondaryColor={data?.secondaryColor}
              toastFromModal={() => handleToast('Cores atualizada com sucesso')}
            />

            <Instagram
              userID={data?.phone}
              actualInsta={data?.instagram}
              instaToast={() =>
                handleToast('Instagram atualizado com sucesso!')
              }
            />

            {/* <Whatsapp
                      userID={data?.phone}
                      whatsappToast={() => 'Whatsapp atualizado com sucesso!'}
                      actualWhats={data?.whatsApp}
                    /> */}

            <FirstSection
              userID={data?.phone}
              call={data?.call}
              description={data?.description}
              img={data?.photos.photo1.base64}
              isLoading={loading}
              toast={() => handleToast('Foto enviada com sucesso!')}
              btnToast={() => handleToast(ButtonMessage)}
              toastFromModal={() =>
                handleToast('Texto da primeira sessão atualizado com sucesso!')
              }
              isFirstButtonDisabled={data?.isFirstButtonDisabled}
            />

            <SecondSection
              userID={data?.phone}
              secondTitle={data?.secondTitle}
              products={data?.products}
              img={data?.photos.photo3.base64}
              isLoading={loading}
              toast={() => handleToast('Foto enviada com sucesso!')}
              toastFromModal={() =>
                handleToast('Texto da segunda sessão atualizado com sucesso!')
              }
              btnToast={() => handleToast(ButtonMessage)}
              isSecondButtonDisabled={data?.isSecondButtonDisabled}
            />

            <ThirdSection
              quality1={data?.quality1}
              quality2={data?.quality2}
              quality3={data?.quality3}
              qualitydescription1={data?.qualitydescription1}
              qualitydescription2={data?.qualitydescription2}
              qualitydescription3={data?.qualitydescription3}
              isLoading={loading}
              userID={data?.phone}
              title={data?.thirdTitle}
              toastFromModal={() =>
                handleToast(
                  'Textos da terceira sessão atualizados com sucesso!'
                )
              }
              isThirdButtonDisabled={data?.isThirdButtonDisabled}
              btnToast={() => handleToast(ButtonMessage)}
            />

            <FourthSection
              userID={data?.phone}
              id={convertedUrlParam}
              isLoading={loading}
              toast={() => handleToast('Imagem deletada com sucesso!')}
              toastFromSwitch={() =>
                handleToast('Exibição de sessão atualizada com sucesso!')
              }
              isGalleryVisible={data?.isFourthSecVisible}
            />

            <FifthSection
              call={data?.call}
              history={data?.history}
              img={data?.photos.photo2.base64}
              isLoading={loading}
              userID={data?.phone}
              title={data?.fifthTitle}
              toast={() => handleToast('Foto enviada com sucesso')}
              toastFromModal={() =>
                handleToast('Texto da quinta sessão atualizado com sucesso!')
              }
            />

            <Schedules
              userID={data?.phone}
              call={data?.call}
              description={data?.description}
              img={data?.photos.schedules.base64}
              isLoading={loading}
              toast={() => handleToast('Horários atualizados com sucesso!')}
              segunda={data?.segunda}
              terca={data?.terca}
              quarta={data?.quarta}
              quinta={data?.quinta}
              sexta={data?.sexta}
              sabado={data?.sabado}
              domingo={data?.domingo}
            />

            <Address
              userID={data?.phone}
              toast={() => handleToast('Endereço atualizados com sucesso!')}
              street={data?.address.street}
              cep={data?.address.zipCode}
              city={data?.address.city}
              complement={data?.address.complement}
              neighborhood={data?.address.neighborhood}
              number={data?.address.number}
              state={data?.address.state}
            />
          </Main>
        </>
      )}
    </Container>
  );
}

export { NewForm };
