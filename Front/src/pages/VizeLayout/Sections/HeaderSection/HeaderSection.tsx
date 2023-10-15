import React from 'react';
import { Container } from './styles';
import Insta from '../../../../assets/svg/icons8-instagram-48.png';

interface IHeaderSectionProp {
  photoBase64: string;
  navColor: string;
  secondaryColor: string;
  insta: string;
}

function HeaderSection({ photoBase64, navColor, secondaryColor, insta}: IHeaderSectionProp): JSX.Element{
  return (
    <Container style={{ backgroundColor: `${navColor}`, justifyContent: insta == '' ? 'center' : 'space-between' }}>

      {photoBase64 == '' ? (
        <h1 style={{ color: secondaryColor }}>Sua logo aqui</h1>
      ) : (
        <img src={photoBase64} alt={'logo'} />
      )}
      {insta === '' ? (
        <></>
      ) : (
        <>
          <a className='icon' href={`https://instagram.com/${insta}`} target='blank'>
            <img src={Insta} style={{width: '40px'}}/>
            <p>@{insta}</p>
          </a>
        </>
      )}
    </Container>
  );
}
export { HeaderSection };
