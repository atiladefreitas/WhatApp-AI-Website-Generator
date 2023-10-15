
import React from 'react';
import { Container } from './styles';

function FooterSection(): JSX.Element {
  return(
    <Container>
      <div id='footerSection' className="footer-wrapper">
        <h3>Copyright © 2023 - Todos os direitos reservados.</h3>
      </div>
    </Container>
  );
}

export {FooterSection};
