import React from 'react';
import { Container } from './styles';

import UnsplashProductsImage from '../../Components/UnsplashAPI/UnsplashProducts';

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
  secondButtonText: string;
  convertedName: string;
}

function SecondSection({ mainColor, convertedName, accentColor,isAutonomous, secondButtonText, photoBase64, products, src, onClick, coverKeyWords, secondTitle}: ISecondSectionProp): JSX.Element{
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
          {
            convertedName == 'profisabellereis' ? (
              <>
                <p>Ofereço um ensino especializado em redação e gramática, com foco na aprendizagem personalizada e adaptada às necessidades individuais do aluno.</p>
                <br />
                <p>Por meio do MÉTODO PDTE, desenvolvo as habilidades de escrita, argumentação e criticidade, otimizando o tempo de estudo e promovendo o equilíbrio entre saúde mental, intelectual e física.</p>
                <br />
                <p>Valorizo a importância da comunicação para o crescimento social e intelectual dos estudantes, haja vista o poder transformador da educação.</p>
              </>
            ) : (
              <>
                <p>{products}</p>
              </>
            )
          }

          <button onClick={onClick} style={{backgroundColor: accentColor, color: 'white', marginTop: '20px', width: '100%'}} className='btn-1'>
            {
              secondButtonText === '' || secondButtonText === undefined ? (
                <>
                                  Fale com a gente!
                </>
              ) : (
                <>
                  {secondButtonText}
                </>
              )
            }
          </button>
        </div>
        <div className="img-wrapper" data-aos="fade-up">
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
            <img src={photoBase64} alt={'foto de capa'} loading='lazy'/>
          )}
        </div>
        <button onClick={onClick} style={{backgroundColor: mainColor, color: accentColor, marginTop: '2rem', width: '100%'}} className='btn-2'>
          {
            secondButtonText === '' || secondButtonText === undefined ? (
              <>
                                  Fale com a gente!
              </>
            ) : (
              <>
                {secondButtonText}
              </>
            )
          }
        </button>
      </div>
    </Container>
  );
}
export { SecondSection };
