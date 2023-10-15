import React from 'react';
import { Container } from './styles';

import logoImg from '../../../../assets/logo-gaio.png';
import logoVize from '../../../../assets/logoVize.png';

import { RiMenu3Fill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';

interface IHeaderProps {
  origin: string | undefined;
  setMenuIsVisible: any;
}

export function Header({ setMenuIsVisible, origin }: IHeaderProps): JSX.Element {
  const [smallNavbar, setSmallNavbar] = useState(false);

  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDiv(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setSmallNavbar(true);
      } else {
        setSmallNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container small={smallNavbar}>
      <section className="wrapper">
        {showDiv ? (
          <>
            {origin === 'gaio' || origin === 'gaio-2' ? (
              <img src={logoImg} alt="Logo" />
            ) : origin === 'vize' ? (
              <img src={logoVize} alt="Logo" />
            ) : null}
          </>

        ) : (
          <>
            <Skeleton
              sx={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
              variant="rectangular"
              width={'6rem'}
              height={'2.5rem'}
            />
          </>
        )}
        <nav>
          <a href="#first" className='option' >Primeira sessão</a>
          <a href="#second" className='option'>Segunda sessão</a>
          <a href="#third" className='option' >Terceira sessão</a>
          <a href="#fourth" className='option'>Quarta sessão</a>
          <a href="#fifth" className='option' >Quinta sessão</a>
        </nav>
      </section>

      <section>
        <GiHamburgerMenu onClick={() => setMenuIsVisible(true)} className="mobile" size={smallNavbar ? '18' : '24px'} color="rgb(5, 55, 124)"/>
      </section>
    </Container>
  );
}
