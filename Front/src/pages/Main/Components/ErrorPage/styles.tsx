/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const Container = styled.section`

    @keyframes animate {
      0%{
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
      }
      100%{
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
      }
    }

    .background {
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      background: #191D46;
      overflow: hidden;
    }

    .background li {
      position: absolute;
      display: block;
      list-style: none;
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0.2);
      animation: animate 19s linear infinite;
    }

    .background li:nth-child(0) {
      left: 38%;
      width: 127px;
      height: 127px;
      bottom: -127px;
      animation-delay: 1s;
    }
    .background li:nth-child(1) {
      left: 14%;
      width: 118px;
      height: 118px;
      bottom: -118px;
      animation-delay: 3s;
    }
    .background li:nth-child(2) {
      left: 9%;
      width: 118px;
      height: 118px;
      bottom: -118px;
      animation-delay: 7s;
    }
    .background li:nth-child(3) {
      left: 86%;
      width: 159px;
      height: 159px;
      bottom: -159px;
      animation-delay: 10s;
    }
    .background li:nth-child(4) {
      left: 53%;
      width: 143px;
      height: 143px;
      bottom: -143px;
      animation-delay: 7s;
    }
    .background li:nth-child(5) {
      left: 5%;
      width: 160px;
      height: 160px;
      bottom: -160px;
      animation-delay: 16s;
    }
    .background li:nth-child(6) {
      left: 49%;
      width: 149px;
      height: 149px;
      bottom: -149px;
      animation-delay: 12s;
    }
    .background li:nth-child(7) {
      left: 74%;
      width: 119px;
      height: 119px;
      bottom: -119px;
      animation-delay: 5s;
    }

    .firstTypewriterWrapper{
      font-family: 'Montserrat', sans-serif;
      font-size: 4rem;

      color: white;
      text-align: center;

      position: absolute;
      top: 6%;
      width: 100%;

      background-color: transparent;

      z-index: 10;

      @media screen and (max-width: 800px) {
        top: 2%;
      }
    }

    .imgWrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .imagem{
      position: absolute;
      z-index: 10;
      width: 35%;
      top: 22%;

      @media screen and (max-width: 800px) {
        width: 100%;
        top: 17%;
      }
    }

    .secondTypewriterWrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Montserrat', sans-serif;
      font-size: 2rem;

      color: white;
      text-align: center;

      position: absolute;
      top: 70%;
      width: 100%;

      background-color: transparent;

      z-index: 10;

      @media screen and (max-width: 800px) {
        width: 100%;
        top: 51%;

        background: rgba(25,29,70,.5);
      }
    }

    .buttonWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    button{
      position: absolute;
      top: 83%;

      padding: 1rem 2rem;
      background-color: #27464D;
      border-radius: 8px;
      border: 0;
      color: white;
      font-size: 1rem;
      z-index: 10;

      :hover{
        background-color: #4C6C73;
      }

      @media screen and (max-width: 800px) {
        font-size: 1.3rem;
        font-weight: 500;
        padding: 1.1rem 3rem;

        top: 77%;
      }
    }

    a{
      color: white;
      text-decoration: none;
    }

`;
