import { useEffect, useState, useRef } from 'react';
import React, { lazy, Suspense } from 'react';
import axios from 'axios';
import { Container, FourthSection, ImageSchedule } from './styles';

import { Carousel } from './Components/Carousel/Carousel';
import Typewriter from '../Components/ErrorPage';
import WappLogo from '../../assets/svg/whatsapp-svgrepo-com.svg';

import ReactLoading from 'react-loading';

import storage from '../../../firebaseConfig';
import { ref, getDownloadURL, listAll } from 'firebase/storage';

//SECTIONS LAZY LOADING
const FirstSection = lazy(() =>
  import('./Sections/FirstSection/FirstSection').then((module) => {
    return { default: module.FirstSection };
  })
);

const SecondSection = lazy(() =>
  import('./Sections/SecondSection/SecondSection').then((module) => {
    return { default: module.SecondSection };
  })
);

const ThirdSection = lazy(() =>
  import('./Sections/ThirdSection/ThirdSection').then((module) => {
    return { default: module.ThirdSection };
  })
);

const FifthSection = lazy(() =>
  import('./Sections/FifthSection/FifthSection').then((module) => {
    return { default: module.FifthSection };
  })
);

const Calendar = lazy(() =>
  import('./Components/Calendar/Calendar').then((module) => {
    return { default: module.Calendar };
  })
);

const SeventhSection = lazy(() =>
  import('./Sections/SeventhSection/SevenSection').then((module) => {
    return { default: module.SeventhSection };
  })
);

const FooterSection = lazy(() =>
  import('./Sections/FooterSection/FooterSection').then((module) => {
    return { default: module.FooterSection };
  })
);

import { HeaderSection } from './Sections/HeaderSection/HeaderSection';

//import LogoGaioMain from '../../assets/logoGaio.png';
import Photo1 from '../../assets/foto1.png';
import Photo2 from '../../assets/foto2.png';
import Photo3 from '../../assets/foto3.png';

//import { Carousel } from './Components/Carousel/Carousel';

import { Helmet } from 'react-helmet';

import { useParams } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Loader from '../Components/Loader/Loader';
import { LoadingPage } from '../Components/LoadingPage';

interface Contact {
  //Nome
  name: string;

  // PHOTOS
  photos: {
    photo1: {
      base64: string;
      type: string;
    };
    photo2: {
      base64: string;
      type: string;
    };
    photo3: {
      base64: string;
      type: string;
    };
    logo: {
      base64: string;
      type: string;
    };
    schedules: {
      base64: string;
      type?: string;
    };
  };

  // Address
  address: {
    zipCode: string;
    street: string;
    number: string;
    complement: string;
    city: string;
    state: string;
  };
  historyPhoto: string;

  color: string;

  whatsApp: string;

  //text content
  description: string;
  products: string;
  call: string;
  history: string;
  secondTitle: string;
  thirdTitle: string;
  galleryTitle: string;
  fifthTitle: string;

  //calendar info
  segunda: string;
  terca: string;
  quarta: string;
  quinta: string;
  sexta: string;
  sabado: string;
  domingo: string;

  //?
  name_quality1: string;
  name_quality2: string;
  name_quality3: string;

  //qualities
  qualities1: string;
  qualities2: string;
  qualities3: string;

  quality1: string;
  quality2: string;
  quality3: string;

  qualitydescription1: string;
  qualitydescription2: string;
  qualitydescription3: string;

  //client info
  isAutonomous: string;
  businessName: string;
  phone: string;
  id: string;

  mainColor: string;
  secondaryColor: string;
  accentColor: string;

  alt_description: string;
  urls: string;

  coverKeyWords: string;
  historyKeyWords: string;
  productsKeyWords: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
  phone: string;
}

function FindByPhone(): JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { id } = useParams();

  // const uniqueName = id!.replace(/-/g, " ")
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const uniqueName = id!.replace(/\s+/g, '-');

  document.title = uniqueName;

  const converted = id;

  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get<Contact>(
          `${
            import.meta.env.VITE_MAIN_API_URL
          }/findByConvertedName/${converted}`
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

  const componentRef = useRef(null);
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
      console.log('Erro ao listar imagens:');
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return result;
    }
  };

  useEffect(() => {
    setImagesLoaded(false);
    listAllImagesFromFolder().then((urls) => {
      if (urls) {
        setImagesurls(urls);
        setImagesLoaded(true);
        setHaveURL(urls.length);
      }
    });
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
        secondaryColor={data.secondaryColor}
        navColor={data.color}
      />

      <FirstSection
        mainColor={data.mainColor}
        secondaryColor={data.secondaryColor}
        call={data.call.replace(/^"|"$/g, '')}
        description={data.description}
        photoBase64={data.photos.photo1.base64}
        src={Photo1}
        onClick={handleWhatsClick}
        coverKeyWords={data.coverKeyWords}
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
          src={Photo3}
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
          thirdTitle={data.thirdTitle}
          quality1={
            data.quality1.charAt(0).toUpperCase() + data.quality1.slice(1)
          }
          qualitydescription1={data.qualitydescription1.replace(/^"|"$/g, '')}
          quality2={
            data.quality2.charAt(0).toUpperCase() + data.quality2.slice(1)
          }
          qualitydescription2={data.qualitydescription2.replace(/^"|"$/g, '')}
          quality3={
            data.quality3.charAt(0).toUpperCase() + data.quality3.slice(1)
          }
          qualitydescription3={data.qualitydescription3.replace(/^"|"$/g, '')}
          onClick={handleWhatsClick}
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
        {/* <FourthSection> */}
        <FourthSection style={{ backgroundColor: data.accentColor }}>
          <div className={'fourth-wrapper'} ref={componentRef}>
            {data.galleryTitle == '' || data.galleryTitle == null ? (
              <>
                <h1 style={{ color: data.mainColor }}>Galeria de fotos</h1>
              </>
            ) : (
              <>
                <h1>{data.galleryTitle}</h1>
              </>
            )}
            <Carousel
              firebaseUrl={imgsUrls}
              haveURL={haveURL}
              coverKeyWords={data.coverKeyWords}
            />
            <button
              onClick={handleWhatsClick}
              style={{ backgroundColor: '#22b33b' }}
            >
              {' '}
              <div className="buttonContent">
                {' '}
                <img src={WappLogo} alt="logo whats" style={{ margin: '0' }} />
                Fale com a gente
              </div>{' '}
            </button>
          </div>
        </FourthSection>
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
        <FifthSection
          isAutonomous={data.isAutonomous}
          mainColor={data.mainColor}
          accentColor={data.accentColor}
          history={data.history.replace(/^"|"$/g, '')}
          photoBase64={data.photos.photo2.base64}
          src={Photo2}
          onClick={handleWhatsClick}
          coverKeyWords={data.coverKeyWords}
          fifthTitle={data.fifthTitle}
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
        {data.photos.schedules.base64 === '' ? (
          <Calendar
            segunda={`${data.segunda}`}
            terca={`${data.terca}`}
            quarta={`${data.quarta}`}
            quinta={`${data.quinta}`}
            sexta={`${data.sexta}`}
            sabado={`${data.sabado}`}
            domingo={`${data.domingo}`}
            mainColor={data.mainColor}
            accentColor={data.mainColor}
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
          secondaryColor={data.secondaryColor}
          accentColor={data.accentColor}
        />
      </Suspense>

      <FooterSection />
    </Container>
  );
}

export default FindByPhone;
