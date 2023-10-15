/* eslint-disable linebreak-style */
//import { Container } from './styles';
import React,{ createContext } from 'react';
import useAxios from '../../../../hooks/useAxios';
import ReactLoading from 'react-loading';

import Image from './Image';
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

function UnsplasHistoryImage ({ data }: { data: ImageData }) {
  // const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=office&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&orientation=landscape&query=${data.coverKeyWords}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`);

  const value: ImageContextData = {
    response,
    isLoading,
    error,
    fetchData
  };

  return(
    <ImageContext.Provider value={value}>
      <Container>
        {isLoading ? <ReactLoading type={'spin'} color={'#eee'} height={200} width={100}/> : response.length > 0 && <Image data={response[2]} />}
      </Container>
    </ImageContext.Provider>
  );
}

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default UnsplasHistoryImage;
