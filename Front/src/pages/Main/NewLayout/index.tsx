import { useEffect, useState } from 'react';
import React, { Suspense } from 'react';
import axios from 'axios';
import { Container, FourthSection, ImageSchedule } from './styles';

import {
  FirstSection,
  FifthSection,
  FooterSection,
  NewCalendar,
  SecondSection,
  SeventhSection,
  ThirdSection,
} from './LazyLoading';

import Typewriter from '../Components/ErrorPage';

import ReactLoading from 'react-loading';

import storage from '../../../../firebaseConfig';
import { ref, getDownloadURL, listAll } from 'firebase/storage';

import { Contact } from '../../../types';

import { HeaderSection } from './Sections/HeaderSection/HeaderSection';

import { Helmet } from 'react-helmet';

import Aos from 'aos';
import 'aos/dist/aos.css';
import NewSlider from './Components/NewCarousel/NewCarousel';
import { LoadingPage } from '../Components/LoadingPage';

function NewLayout(): JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get<Contact>(
          `${import.meta.env.VITE_MAIN_API_URL}/findByConvertedName/${
            import.meta.env.VITE_CONVERTED_NAME
          }`
        );
        setData(response.data);
      } catch (error) {
        console.error('erro');
      } finally {
        setLoading(false);
      }
    }

    fetchData()
      .then(() => {
        console.log('Data fetched successfully!');
      })
      .catch((error) => console.error(error))
      .finally(() => listAllImagesFromFolder());
  }, []);

  const handleWhatsClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event.preventDefault();

    if (data?.whatsApp == '') {
      const url = `https://wa.me/${data?.phone}`;
      window.open(url, '_blank');
    } else {
      const url = `https://wa.me/${data?.whatsApp}`;
      window.open(url, '_blank');
    }
  };

  const [imgsUrls, setImagesurls] = useState<string[]>([]);

  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  const [haveURL, setHaveURL] = useState<number>(1);

  const listAllImagesFromFolder = async () => {
    let result = undefined;
    let urls = null;
    try {
      const listRef = ref(storage, `${data?.phone}/gallery`);
      const res = await listAll(listRef);
      urls = await Promise.all(res.items.map(getDownloadURL));
      result = urls;
    } catch (error) {
      console.error;
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return result;
    }
  };

  useEffect(() => {
    setImagesLoaded(false);
    setTimeout(() => {
      listAllImagesFromFolder().then((urls) => {
        if (urls) {
          setImagesurls(urls);
          setImagesLoaded(true);
          setHaveURL(urls.length);
        }
      });
    }, 1000);
  }, [data]);

  if (loading) {
    return <LoadingPage />;
  } else if (!data) {
    return <Typewriter />;
  }

  return (
    <Container>
      <Helmet>
        <title>{data.name}</title>
        <meta />
        <meta name="theme-color" content={data.mainColor} />
        <meta property="title" content={data.name} />
        <meta name="description" content={data?.description} />
        <meta
          name="image:secure_url"
          itemProp="image"
          content={data.photos.logo.base64}
        />

        <meta name="og:title" content={data.name} />
        <meta property="og:description" content={data?.description} />
        <meta
          name="og:image:secure_url"
          itemProp="image"
          content={data.photos.logo.base64}
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeaderSection
        photoBase64={data.photos.logo.base64}
        name={data.name}
        insta={data.instagram}
        color={data.color}
        face={data.facebook}
        whats={data.whatsApp}
        youtube={data.youtube}
        tiktok={data.tiktok}
      />

      <FirstSection
        mainColor={data.mainColor}
        secondaryColor={data.secondaryColor}
        call={data?.call.replace(/^"|"$/g, '')}
        description={data.description}
        photoBase64={data.photos.photo1.base64}
        coverKeyWords={data.coverKeyWords}
        onClick={handleWhatsClick}
        isVideo={data.isVideo}
      />

      <Suspense
        fallback={
          <ReactLoading
            type={'spin'}
            color={'#05377C'}
            height={200}
            width={100}
          />
        }
      >
        <SecondSection
          isAutonomous={data.isAutonomous}
          mainColor={data.mainColor}
          accentColor={data.accentColor}
          products={data.products}
          photoBase64={data.photos.photo3.base64}
          onClick={handleWhatsClick}
          coverKeyWords={data.coverKeyWords}
          secondTitle={data.secondTitle}
        />
      </Suspense>

      <Suspense
        fallback={
          <ReactLoading
            type={'spin'}
            color={'#05377C'}
            height={200}
            width={100}
          />
        }
      >
        <ThirdSection
          mainColor={data.mainColor}
          accentColor={data.accentColor}
          secondaryColor={data.secondaryColor}
          isAutonomous={data.isAutonomous}
          quality1={
            data.quality1.charAt(0).toUpperCase() + data.quality1.slice(1)
          }
          qualitydescription1={data?.qualitydescription1.replace(/^"|"$/g, '')}
          quality2={
            data.quality2.charAt(0).toUpperCase() + data.quality2.slice(1)
          }
          qualitydescription2={data?.qualitydescription2.replace(/^"|"$/g, '')}
          quality3={
            data.quality3.charAt(0).toUpperCase() + data.quality3.slice(1)
          }
          qualitydescription3={data?.qualitydescription3.replace(/^"|"$/g, '')}
          onClick={handleWhatsClick}
          thirdTitle={data?.thirdTitle}
        />
      </Suspense>

      {data?.isFourthSecVisible == 'on' || data?.isFourthSecVisible == null ? (
        <>
          <Suspense
            fallback={
              <ReactLoading
                type={'spin'}
                color={'#05377C'}
                height={200}
                width={100}
              />
            }
          >
            <FourthSection>
              <h1>Galeria de fotos</h1>
              <div className="fourth-wrapper">
                <NewSlider
                  firebaseUrl={imgsUrls}
                  haveURL={haveURL}
                  coverKeyWords={data.coverKeyWords}
                />
              </div>
              <button
                onClick={handleWhatsClick}
                style={{ backgroundColor: data.secondaryColor }}
                className="btn"
              >
                Fale com a gente
              </button>
            </FourthSection>
          </Suspense>
        </>
      ) : (
        <></>
      )}

      <Suspense
        fallback={
          <ReactLoading
            type={'spin'}
            color={'#05377C'}
            height={200}
            width={100}
          />
        }
      >
        <FifthSection
          isAutonomous={data.isAutonomous}
          mainColor={data.mainColor}
          accentColor={data.accentColor}
          history={data?.history.replace(/^"|"$/g, '')}
          photoBase64={data.photos.photo2.base64}
          onClick={handleWhatsClick}
          coverKeyWords={data.coverKeyWords}
          fifthTitle={data.fifthTitle}
        />
      </Suspense>

      {data?.isAgendaVisible == 'on' || data?.isAgendaVisible == null ? (
        <>
          <Suspense
            fallback={
              <ReactLoading
                type={'spin'}
                color={'#05377C'}
                height={200}
                width={100}
              />
            }
          >
            {data.photos.schedules.base64 === '' ? (
              <NewCalendar
                segunda={`${data.segunda}`}
                terca={`${data.terca}`}
                quarta={`${data.quarta}`}
                quinta={`${data.quinta}`}
                sexta={`${data.sexta}`}
                sabado={`${data.sabado}`}
                domingo={`${data.domingo}`}
                mainColor={data.mainColor}
                secondaryColor={data.secondaryColor}
                isAutonomous={data.isAutonomous}
              />
            ) : (
              <ImageSchedule
                style={{ backgroundColor: data.photos.schedules.type }}
              >
                <div className="img-wrapper">
                  <img src={data.photos.schedules.base64} alt="horarios" />
                </div>
              </ImageSchedule>
            )}
          </Suspense>
        </>
      ) : (
        <></>
      )}

      {data?.isAddressVisible == 'on' || data?.isAddressVisible == null ? (
        <>
          <Suspense
            fallback={
              <ReactLoading
                type={'spin'}
                color={'#05377C'}
                height={200}
                width={100}
              />
            }
          >
            <SeventhSection
              zipCode={data.address.zipCode}
              street={data.address.street}
              number={data.address.number}
              city={data.address.city}
              complement={data.address.complement}
              state={data.address.state}
              mainColor={data.mainColor}
              neightborhood={data.address.neighborhood}
              secondaryColor={data.secondaryColor}
            />
          </Suspense>
        </>
      ) : (
        <></>
      )}

      <FooterSection />
    </Container>
  );
}

export default NewLayout;
