import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper';

import UnsplashGallery1 from '../UnsplashAPI/UnsplashGallery1';
import UnsplashGallery2 from '../UnsplashAPI/UnsplashGallery2';
import UnsplashGallery3 from '../UnsplashAPI/UnsplashGallery3';

// import images
import Photo1 from '../../../../assets/foto1.png';
import Photo2 from '../../../../assets/foto2.png';
import Photo3 from '../../../../assets/foto3.png';
import vertical from '../../../../assets/capaSerena.png';

interface ICarouselProps{
  firebaseUrl?: any;
  coverKeyWords: string;
  haveURL: number;
}

function Carousel({firebaseUrl, coverKeyWords, haveURL}:ICarouselProps) {
  const [shouldRenderFirstSet, setShouldRenderFirstSet] = useState(haveURL === 0);

  useEffect(() => {
    setShouldRenderFirstSet(haveURL === 0);
  }, [haveURL]);

  return (
    <>
      {shouldRenderFirstSet && haveURL === 0 && (
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          grabCursor={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={'content-wrapper-gallery'}>
              <UnsplashGallery1
                data={{
                  alt_description: 'office',
                  urls: {
                    small: 'https://example.com/image.jpg',
                  },
                  coverKeyWords: coverKeyWords,
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={'content-wrapper-gallery'}>
              <UnsplashGallery2
                data={{
                  alt_description: 'office',
                  urls: {
                    small: 'https://example.com/image.jpg',
                  },
                  coverKeyWords: coverKeyWords,
                }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={'content-wrapper-gallery'}>
              <UnsplashGallery3
                data={{
                  alt_description: 'office',
                  urls: {
                    small: 'https://example.com/image.jpg',
                  },
                  coverKeyWords: coverKeyWords,
                }}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      )}

      {!shouldRenderFirstSet && haveURL !== 0 && (
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {firebaseUrl.length > 0 &&
               firebaseUrl.map((url: string, index: any) => (
                 <SwiperSlide key={index}>
                   <div className={'content-wrapper'}>
                     <img className="pgImg" src={url} />
                   </div>
                 </SwiperSlide>
               ))}
        </Swiper>
      )}
    </>
  );
}

export { Carousel };
