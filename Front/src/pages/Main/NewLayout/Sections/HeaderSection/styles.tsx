import styled from 'styled-components';

interface IHeaderProps {
  bgColor: string;
}

export const Container = styled.div<IHeaderProps>`
  width: 100%;
  height: 6rem;
  background-color: ${props => props.bgColor || 'white'};
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;

  & .logo {
    /* max-height: 75px; */
    height: 100%;
    max-width: 60vw;
    border-radius: 8px;
  }

  & h1 {
    color: rgb(5, 55, 124);
    font-size: 24px;
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 600;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

export const IconWrapper = styled.div`
  width: fit-content;
  height: 100%;
  gap: 1.2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    gap: 0.675rem;

    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    letter-spacing: 0.5px;
    font-size: 20px;
    color: rgb(5,55,124);

      :hover {
        text-decoration: underline;
        cursor: pointer;
        color: #294dff;
      }
    
    & img {
      height: 100%;
      box-sizing: border-box;
    }
  }
`;