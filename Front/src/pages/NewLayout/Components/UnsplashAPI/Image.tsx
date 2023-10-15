import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  data: {
    urls: {
      small: string;
    };
    alt_description: string;
  };
}

const Image: React.FC<ImageProps> = ({ data }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <img src={data.urls.small} alt={data.alt_description} style={{ maxHeight: '600px'}}/>
    </div>
  );
};

export default Image;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
      @media screen and (max-width: 600px) {
        width: 100%;
      }
  }
`;
