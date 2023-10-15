/* eslint-disable linebreak-style */

import React, { createContext, useContext, useEffect, useRef, SyntheticEvent } from 'react';
import useAxios from '../../../../hooks/useAxios';
import ReactLoading from 'react-loading';
import { Container, Overlay, OverlayText } from './GalleryStyles';

interface ImageData {
  urls: {
    small: string;
  };
  alt_description: string;
  coverKeyWords: string;
}

interface ImageContextData {
  response: any;
  isLoading: boolean;
  error: any;
  fetchData: (url: string) => Promise<void>;
  }


export const ImageContext = createContext<ImageContextData>({
  response: null,
  isLoading: true,
  error: null,
  fetchData: () => Promise.resolve()
});

function UnsplashGallery3 ({ data }: { data: ImageData }) {
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&orientation=portrait&query=${data.coverKeyWords}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);

  const value: ImageContextData = {
    response,
    isLoading,
    error,
    fetchData
  };

  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imgRef.current && overlayRef.current) {
      const imgWidth = imgRef.current.width;
      const imgHeight = imgRef.current.height;
      overlayRef.current.style.width = `${imgWidth}px`;
      overlayRef.current.style.height = `${imgHeight}px`;
    }
  }, [response]);

  const handleImageLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.target as HTMLImageElement;
    if (imgRef.current && overlayRef.current) {
      const imgWidth = target.width;
      const imgHeight = target.height;
      overlayRef.current.style.width = `${imgWidth}px`;
      overlayRef.current.style.height = `${imgHeight}px`;
    }
  };

  return(
    <ImageContext.Provider value={value}>
      <Container>
        {isLoading ? (
          <ReactLoading type="spin" color="#eee" height={200} width={100} />
        ) : response.length > 0 ? (
          <>
            <img ref={imgRef} src={response[4].urls.small} alt={data.alt_description} onLoad={handleImageLoad} />
            <Overlay className="unsplashImgOverlay" ref={overlayRef}>
              <OverlayText className="overlayText">
                <h3>Imagens sobre seu negócio</h3>
                <h5 className='overlaySubtitle'>Sua tabela de preços, especificações do produto ou aquele diferencial que só você tem</h5>
              </OverlayText>
            </Overlay>
          </>
        ) : null}
      </Container>
    </ImageContext.Provider>
  );
}

import styled from 'styled-components';

export default UnsplashGallery3;
