import styled from 'styled-components';

interface IColorProps {
  bgColor: string | undefined;
}

export const ColorContainer = styled.div<IColorProps>`
  width: 3rem;
  height: 3rem;
  background-color: ${props => props.bgColor || 'white'};;
  border-radius: 0.6rem;

  border: 1px solid #c4c4c4;
`;

export const Colors = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 1rem;
  box-sizing: border-box;
`;
