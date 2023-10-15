/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';

function Navbar({ menuIsVisible, setMenuIsVisible }: any) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  const handleClick = () => {
    setMenuIsVisible(false);
  };

  return (
    // @ts-ignore
    <Container isVisible={menuIsVisible} >
      <IoClose size={45} onClick={handleClick} color='white'/>
      <nav>
        <a href="#first" className='option' onClick={handleClick}>Primeira sessão</a>
        <a href="#second" className='option' onClick={handleClick}>Segunda sessão</a>
        <a href="#third" className='option' onClick={handleClick}>Terceira sessão</a>
        <a href="#fourth" className='option' onClick={handleClick}>Quarta sessão</a>
        <a href="#fifth" className='option' onClick={handleClick}>Quinta sessão</a>
      </nav>

    </Container>
  );
}

export { Navbar };
