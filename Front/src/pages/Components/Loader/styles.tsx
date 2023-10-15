/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const Container = styled.section`
  .loader {
      width: 100px;
      height: 80px;
      position: absolute;
      right: 0; left: 0; bottom: 4rem;
      margin: auto;
    }

  .loader .image {
    width: 100px;
    height: 160px;
    font-size: 40px;
    text-align: center;
    transform-origin: bottom center;
    animation: 2s rotate infinite;
    opacity: 0;
  }

  .loader span {
    display: block;
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    font-family: "Montserrat", sans-serif;
  }

  @keyframes rotate{
    0% {
      transform: rotate(90deg);
    }
    10% {
      opacity: 0;
    }
    35% {
      transform: rotate(0deg);
      opacity: 1;
    }
    65% {
      transform: rotate(0deg);
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      transform: rotate(-90deg);
    }
  }
`;
