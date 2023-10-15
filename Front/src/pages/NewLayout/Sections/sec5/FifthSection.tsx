import React from 'react';
import { Container } from './styles';

import UnsplasHistoryImage from '../../Components/UnsplashAPI/UnsplashHistory';

interface IFifthSectionProp {
  photoBase64: string;
  history: string;
  src: any;
  onClick: any;
  isAutonomous: string;
  mainColor: string;
  accentColor: string;
  coverKeyWords: string;
  fifthTitle: string;
  fifthButtonText: string | undefined;
  convertedName: string | undefined
}

function FifthSection({isAutonomous, convertedName, fifthTitle, mainColor, accentColor, photoBase64, history, fifthButtonText, src, onClick, coverKeyWords}: IFifthSectionProp): JSX.Element{

  return (
    <Container>
      <div id='fifthSection' className={'fifth-wrapper'}>
        <div className='conteent-wrapper'>
          {
            fifthTitle == '' || fifthTitle == null ? (
              <>
                <h1 className="sectionTitle" style={{ color: mainColor }}>
                  {isAutonomous == '1' ? (
                    <>
                                    Minha História
                    </>
                  ):(
                    <>
                                Nossa História
                    </>
                  )}
                </h1>
              </>
            ):(
              <h1  className="sectionTitle" style={{ color: mainColor }}>
                {fifthTitle}
              </h1>
            )
          }

          {
            convertedName == 'profisabellereis' ? (
              <>
                <div>
                  <p className='history'>Sempre reflito durante minhas aulas e penso sobre minha própria jornada de estudos. Tudo o que enfrentei foi para me tornar a professora que meus alunos precisam, evitando que eles passem pelas mesmas situações negativas que vivenciei.</p>
                  <br />
                  <p className='history'>Com transtornos de aprendizagem, podemos enfrentar desafios significativos, como bullying e a autoestima abalada, chegando a duvidar de nossas próprias capacidades.</p>
                  <br />
                  <p className='history'>Eu também já me senti assim, mas superei essas dificuldades ao desenvolver o Método PDTE, com o objetivo de ajudá-los a alcançar seus objetivos. Inclusive, cheguei a estudar para ser médica, mas durante o ensino médio, ao ensinar meus colegas e ver o impacto transformador da educação em suas vidas, decidi me tornar uma "médica das letras".</p>
                  <br />
                  <p className='history'>Agora, estou aqui para ser seu apoio incansável na busca pela realização dos seus sonhos.</p>
                  <br />
                  <p className='history'>Vamos unir minhas estratégias com a sua dedicação e conquistar resultados extraordinários no caminho para o sucesso?</p>
                </div>
              </>
            ) : (
              <>
                <p className='history'>{history}</p>
              </>
            )
          }

        </div>
        <div className="img-wrapper"  data-aos="fade-up">
          {photoBase64 == '' ? (
            <UnsplasHistoryImage
              data={{
                alt_description: 'office',
                urls: {
                  small: 'https://example.com/image.jpg',
                },
                coverKeyWords: coverKeyWords
              }}
            />
          ) : (
            <img src={photoBase64} alt={'foto de capa'} loading='lazy'/>
          )}
        </div>
        <button onClick={onClick} style={{ backgroundColor: accentColor }} className='btn-2'>
          {
            fifthButtonText === '' || fifthButtonText === undefined ? (
              <>
                      Conversar por WhatsApp
              </>
            ) : (
              <>
                {fifthButtonText}
              </>
            )
          }
        </button>
      </div>
    </Container>
  );
}
export { FifthSection };
