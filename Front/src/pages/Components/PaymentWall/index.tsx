import React from 'react';
import styled from 'styled-components';

function PaymentWall(): JSX.Element {

  const handleWhatsClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event.preventDefault();

    const url = 'https://wa.me/';
    window.open(url, '_blank');
  };

  return (
    <Container>
      <h1>Este site está indisponível</h1>
      <button onClick={handleWhatsClick}>Entre em contato com a Gaio para reativá-lo</button>
    </Container>
  );
}

export { PaymentWall };

const Container = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  flex-direction: column;
  gap: 1rem;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,255,255,0.35);
  backdrop-filter: blur(4px);

  & button {
    width: 40%;
  }

  @media screen and (max-width: 800px) {
    & button {
      width: 90%;
    }
  }
`;
