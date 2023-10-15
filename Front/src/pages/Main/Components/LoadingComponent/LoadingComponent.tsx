import React from 'react';
import styled from 'styled-components';

function LoadingComponent(): JSX.Element {
  return (
    <Container>
      <h1>CARREGANDO</h1>
    </Container>
  );
}

export { LoadingComponent };

const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(255,255,255,0.5);
  position: absolute;
  overflow: hidden;
`;
