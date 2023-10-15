/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Container } from './styles';

import UnsplashProductsImage from '../../Components/UnsplashAPI/UnsplashProducts';
import WappLogo from '../../../../assets/svg/whatsapp-svgrepo-com.svg';

interface ISecondSectionProp {
  photoBase64: string;
  products: string;
  src: any;
  onClick: any;
  isAutonomous: any;
  mainColor: string;
  accentColor: string;
  coverKeyWords: string;
  secondTitle: string;
}

function SecondSection({ mainColor, secondTitle, accentColor,isAutonomous, photoBase64, products, src, onClick, coverKeyWords}: ISecondSectionProp): JSX.Element{
  return (
    <Container>
      <div id='secondSection' className={'second-wrapper'}>
        {secondTitle == '' || secondTitle == null ? (
          <>
            {isAutonomous == '1' ? (
              <h1 className="sectionTitle" style={{color: mainColor}}>O que ofereço</h1>
            ) : (
              <h1 className="sectionTitle" style={{color: mainColor}}>O que oferecemos</h1>
            )}
          </>
        ):(
          <h1 className="sectionTitle" style={{color: mainColor}}>{secondTitle}</h1>
        )}

        <p>{products}</p>
        <div className="img-wrapper"  data-aos="fade-up">
          {photoBase64 == '' ? (
            <UnsplashProductsImage
              data={{
                alt_description: 'office',
                urls: {
                  small: 'https://example.com/image.jpg',
                },
                coverKeyWords:coverKeyWords
              }}
            />
          ) : (
            <img fetch-priority={'low'} src={photoBase64} alt={'foto de capa'} loading='lazy'/>
          )}
        </div>
        <button onClick={onClick} style={{backgroundColor: ('#22b33b')}}> <div className='buttonContent'> <img src={WappLogo} alt="logo whats" style={{ margin:'0'}}/>fale com a gente!</div> </button>
        {/* <button onClick={onClick}> teste</button> */}
      </div>
    </Container>
  );
}
export { SecondSection };
