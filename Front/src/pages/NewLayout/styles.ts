import styled from 'styled-components';

import Swipe from '../../assets/Gifs/animation_500_lhwe2pfh.gif';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Loading = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .loading-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 800px) {
      width: 100%;
      height: 100%;
    }

    & .skeletonHeaderWrapper{
      width: 95vw;
      border-radius: 8px;
      overflow: hidden;
    }

    & .skeletonTitleWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      & span{
        width: 80%;
      }
    }

    & .skeletonTextWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      & .skeletonText{
        width: 80%;
      }
    }

    & .skeletonImageWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 2rem 0;

      & .skeletonImage{
        @media screen and (max-width: 800px) {
          width: 60%;
          height: 100%;
        }
        width: 40%;
      }
    }

    & .skeletonButtonWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      & .skeletonButton{
        width: 80%;
      }
    }

    & .fadeWhite{
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(rgba(255, 255, 255, 0), rgba(255,255,255, .6) 70%, rgba(255,255,255, 1));

    }
  }
`;

export const FourthSection = styled.div`
  background-color: #fafafa;
  /* background-color: red; */
  width: 100%;
  height: fit-content;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1%;
  align-items: center;
  justify-content: center;

  & .btn {
      width: 40%;
    }

  /* background-image: url(${Swipe});
  background-size: 10%;
  background-repeat: no-repeat;
  background-position: bottom right; */

    & h1 {
        font-family: 'Inter', sans-serif;
        font-size: 32px;
        margin: 0;
        margin-bottom: 1rem;
      }
  & .fourth-wrapper {
    width: 90%;
    height: fit-content;
    min-height: 20rem;
    /* padding: 10%; */
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 600px) {


    height: 850px;

    & .btn {
      width: 90%;
    }

    & .fourth-wrapper {
      padding: 0;
      box-sizing: border-box;
      max-height: none;
      /* overflow: hidden; */

    & h1 {


      }

      & p {


      }
  }
  }

`;


export const ImageSchedule = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  & .img-wrapper {
    width: 100%;
    height: fit-content;
    min-height: 20rem;
    padding: 5% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
      width: 70%;
      max-height: 600px;
      object-fit: contain;
      border-radius: 8px;
    }
  }

  @media screen and (max-width: 600px) {
    & .img-wrapper {
      padding: 5% 10%;

      & img {
        width: 100%;
        border-radius: 8px;
      }
    }
  }
`;
