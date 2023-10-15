import React from 'react';
import { Container } from './styles';

interface ISecondSectionProp {
  photoBase64: string;
  products: string;
  src?: any;
  onClick: any;
  isAutonomous: any;
  mainColor: string;
  accentColor: string;
  coverKeyWords: string;
  secondTitle: string;
}

function SecondSection({ mainColor, accentColor,isAutonomous, photoBase64, products, src, onClick, coverKeyWords, secondTitle}: ISecondSectionProp): JSX.Element{
  return (
    <Container>
      <div id='secondSection' className={'second-wrapper'}>
        <div className='title-n-prod'>
          {
            secondTitle == '' || secondTitle == null ? (
              <>
                {isAutonomous == '1' ? (
                  <h1 className="sectionTitle" style={{color: mainColor}}>O que ofereço</h1>
                ) : (
                  <h1 className="sectionTitle" style={{color: mainColor}}>O que oferecemos</h1>
                )}
              </>
            ) : (
              <h1 className="sectionTitle" style={{color: mainColor}}>{secondTitle}</h1>
            )
          }
          <p>{products}</p>

          <button onClick={onClick} style={{backgroundColor: accentColor, color: 'white', marginTop: '20px', width: '100%'}} className='btn-1'>Fale com a gente!</button>
        </div>
        <div className="img-wrapper" data-aos="fade-up">
          {photoBase64 == '' ? (
            <>
            </>
          ) : (
            <img src={photoBase64} alt={'foto de capa'} loading='lazy'/>
          )}
        </div>
        <button onClick={onClick} style={{backgroundColor: mainColor, color: accentColor, marginTop: '2rem', width: '100%'}} className='btn-2'>Fale com a gente!</button>
        {/* <button onClick={onClick}> teste</button> */}
      </div>
    </Container>
  );
}
export { SecondSection };
