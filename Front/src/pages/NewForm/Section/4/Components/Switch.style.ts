import styled from 'styled-components';

interface IBtnContainerProps {
  display: string;
}

export const BtnContainer = styled.div<IBtnContainerProps>`
  width: 100%;
  height: fit-content;

  display: ${(props) => props.display};

  transition: all ease 0.3s;
`;
