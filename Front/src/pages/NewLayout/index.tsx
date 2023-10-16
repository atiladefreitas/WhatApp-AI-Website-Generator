import { useEffect, useState, useRef } from 'react';
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

import storage from '../../../firebaseConfig';
import { ref, getDownloadURL, listAll } from 'firebase/storage';

import { Contact } from '../../types';

import { HeaderSection } from './Sections/HeaderSection/HeaderSection';

import Photo1 from '../../assets/foto1.png';
import Photo2 from '../../assets/foto2.png';
import Photo3 from '../../assets/foto3.png';

import { Helmet } from 'react-helmet';

import { useParams } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';
import NewSlider from './Components/NewCarousel/NewCarousel';
import { LoadingPage } from '../Components/LoadingPage';
import { PaymentWall } from '../Components/PaymentWall';
import { gaioData } from './gaio';

function Main(): JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { id } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const uniqueName = id!.replace(/\s+/g, '-');

  document.title = uniqueName;

  const converted = id;

  const [data, setData] = useState<Contact | null>(null);

  const handleWhatsClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event.preventDefault();

    if (gaioData?.whatsApp == '') {
      const url = `https://wa.me/${gaioData?.phone}`;
      window.open(url, '_blank');
    } else {
      const url = `https://wa.me/${gaioData?.whatsApp}`;
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
      const listRef = ref(storage, `${gaioData?.phone}/gallery`);
      const res = await listAll(listRef);
      urls = await Promise.all(res.items.map(getDownloadURL));
      result = urls;
    } catch (error) {
      throw 'error';
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

  // if (loading) {
  //   return <LoadingPage />;
  // } else if (!data) {
  //   return <Typewriter />;
  // }

  return (
    <>
      {gaioData?.isPayer === '0' ? (
        <>
          <PaymentWall />
        </>
      ) : gaioData?.isPayer === '' || gaioData?.isPayer === '1' ? (
        <></>
      ) : null}
      <Container>
        <Helmet>
          <title>{gaioData.name}</title>
          <meta />
          <meta name="theme-color" content={gaioData.mainColor} />
          <meta property="title" content={gaioData.name} />
          <meta name="description" content={gaioData?.description} />
          <meta
            name="image:secure_url"
            itemProp="image"
            content={gaioData.photos.logo.base64}
          />

          <meta name="og:title" content={gaioData.name} />
          <meta property="og:description" content={gaioData?.description} />
          <meta
            name="og:image:secure_url"
            itemProp="image"
            content={gaioData.photos.logo.base64}
          />
          <meta property="og:type" content="website" />
        </Helmet>

        <HeaderSection
          photoBase64={gaioData.photos.logo.base64}
          name={gaioData.name}
          insta={gaioData.instagram}
          color={gaioData.color}
        />

        <FirstSection
          mainColor={gaioData.mainColor}
          secondaryColor={gaioData.secondaryColor}
          call={gaioData.call.replace(/^"|"$/g, '')}
          description={gaioData.description}
          photoBase64={gaioData.photos.photo1.base64}
          src={Photo1}
          coverKeyWords={gaioData.coverKeyWords}
          onClick={handleWhatsClick}
          isFirstPhotoHidden={gaioData.isFirstPhotoHidden}
          firstButtonText={gaioData.firstButtonText}
          isVideo={gaioData.isVideo}
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
            isAutonomous={gaioData.isAutonomous}
            mainColor={gaioData.mainColor}
            accentColor={gaioData.accentColor}
            products={gaioData.products}
            photoBase64={gaioData.photos.photo3.base64}
            src={Photo3}
            onClick={handleWhatsClick}
            coverKeyWords={gaioData.coverKeyWords}
            secondTitle={gaioData.secondTitle}
            secondButtonText={gaioData.secondButtonText}
            convertedName={gaioData.convertedName}
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
            mainColor={gaioData.mainColor}
            accentColor={gaioData.accentColor}
            secondaryColor={gaioData.secondaryColor}
            isAutonomous={gaioData.isAutonomous}
            quality1={
              gaioData.quality1.charAt(0).toUpperCase() +
              gaioData.quality1.slice(1)
            }
            qualitydescription1={gaioData.qualitydescription1.replace(
              /^"|"$/g,
              ''
            )}
            quality2={
              gaioData.quality2.charAt(0).toUpperCase() +
              gaioData.quality2.slice(1)
            }
            qualitydescription2={gaioData.qualitydescription2.replace(
              /^"|"$/g,
              ''
            )}
            quality3={
              gaioData.quality3.charAt(0).toUpperCase() +
              gaioData.quality3.slice(1)
            }
            qualitydescription3={gaioData.qualitydescription3.replace(
              /^"|"$/g,
              ''
            )}
            onClick={handleWhatsClick}
            thirdTitle={gaioData?.thirdTitle}
            thirdButtonText={gaioData.thirdButtonText}
          />
        </Suspense>

        {gaioData?.isFourthSecVisible == 'on' ||
        gaioData?.isFourthSecVisible == null ? (
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
                {gaioData.galleryTitle == '' ||
                gaioData.galleryTitle == null ? (
                  <>
                    <h1>Galeria de fotos</h1>
                  </>
                ) : (
                  <>
                    <h1>{gaioData.galleryTitle}</h1>
                  </>
                )}
                <div className="fourth-wrapper">
                  <NewSlider
                    firebaseUrl={imgsUrls}
                    haveURL={haveURL}
                    coverKeyWords={gaioData.coverKeyWords}
                  />
                </div>
                <button
                  onClick={handleWhatsClick}
                  style={{
                    backgroundColor: gaioData.secondaryColor,
                  }}
                  className="btn"
                >
                  {gaioData.fourthButtonText === '' ||
                  gaioData.fourthButtonText === undefined ? (
                    <>Fale com a gente!</>
                  ) : (
                    <>{gaioData.fourthButtonText}</>
                  )}
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
            isAutonomous={gaioData.isAutonomous}
            mainColor={gaioData.mainColor}
            accentColor={gaioData.accentColor}
            history={gaioData.history.replace(/^"|"$/g, '')}
            photoBase64={gaioData.photos.photo2.base64}
            src={Photo2}
            onClick={handleWhatsClick}
            coverKeyWords={gaioData.coverKeyWords}
            fifthTitle={gaioData.fifthTitle}
            fifthButtonText={gaioData.fifthButtonText}
            convertedName={gaioData.convertedName}
          />
        </Suspense>

        {gaioData?.isAgendaVisible == 'on' ||
        gaioData?.isAgendaVisible == null ? (
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
              {gaioData.photos.schedules.base64 === '' ? (
                <NewCalendar
                  segunda={`${gaioData.segunda}`}
                  terca={`${gaioData.terca}`}
                  quarta={`${gaioData.quarta}`}
                  quinta={`${gaioData.quinta}`}
                  sexta={`${gaioData.sexta}`}
                  sabado={`${gaioData.sabado}`}
                  domingo={`${gaioData.domingo}`}
                  mainColor={gaioData.mainColor}
                  secondaryColor={gaioData.secondaryColor}
                  isAutonomous={gaioData.isAutonomous}
                />
              ) : (
                <ImageSchedule
                  style={{
                    backgroundColor: gaioData.photos.schedules.type,
                  }}
                >
                  <div className="img-wrapper">
                    <img
                      src={gaioData.photos.schedules.base64}
                      alt="horarios"
                      style={{ borderRadius: '8px' }}
                    />
                  </div>
                </ImageSchedule>
              )}
            </Suspense>
          </>
        ) : (
          <></>
        )}

        {gaioData?.isAddressVisible == 'on' ||
        gaioData?.isAddressVisible == null ? (
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
                zipCode={gaioData.address.zipCode}
                street={gaioData.address.street}
                number={gaioData.address.number}
                city={gaioData.address.city}
                complement={gaioData.address.complement}
                state={gaioData.address.state}
                mainColor={gaioData.mainColor}
                neightborhood={gaioData.address.neighborhood}
                secondaryColor={gaioData.secondaryColor}
              />
            </Suspense>
          </>
        ) : (
          <></>
        )}

        <FooterSection />
      </Container>
    </>
  );
}

export default Main;
