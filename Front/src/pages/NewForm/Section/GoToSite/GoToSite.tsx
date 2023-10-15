import React from 'react';
import {Container} from '../styles';
import { StyledButton } from '../../../../global/Button';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface IGoToSiteProps {
  convertedName: string | undefined;
}

function GoToSite({ convertedName }: IGoToSiteProps ): JSX.Element {
  return (
    <Container>
      <a
        href={`https://meusiteai.com/${convertedName}`}
        target="blank"
        style={{
          textDecoration: 'none'
        }}
      >
        <StyledButton
          children={'Visite o seu site'}
          icon={ <FaExternalLinkAlt /> }
          w="larger"
        />
      </a>
    </Container>
  );
}

export { GoToSite };
