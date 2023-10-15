import React from 'react';
import { Container } from './styles';
import Typewriter from 'typewriter-effect';
import foto from '../../../../assets/Component45.png';

const typewriter404 = ():JSX.Element => {
  return(
    <Container>
      <ul className="background">
        <div className='imgWrapper'>
          <img className='imagem' src={foto} alt="não encontrado" />
        </div>

        <div className='firstTypewriterWrapper'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Oooops!')
                .pauseFor(300)
                .callFunction(() => {
                  const cursor = document.querySelector('.Typewriter__cursor') as HTMLElement;
                  if (cursor) {
                    cursor.style.display = 'none';
                  }
                })
                .start();
            }}
          />
        </div>

        <div className='secondTypewriterWrapper'>
          <Typewriter
            onInit={(typewriter) => {
              setTimeout(() => {
                typewriter.typeString('Parece que a página que você está procurando não está disponível!')
                  .pauseFor(800)
                  .changeDelay(8000)
                  .callFunction( function() {
                    const cursor = document.querySelector('.Typewriter__cursor') as HTMLElement;
                    if (cursor) {
                      cursor.style.display = 'none';
                    }
                  })
                  .start();
              }, 1500);
            }}
          />
        </div>

        <div className='buttonWrapper'>
          <button><a href="https://wa.me/+5516996333736">Suporte</a></button>
        </div>

        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Container>
  );
};

export default typewriter404;

