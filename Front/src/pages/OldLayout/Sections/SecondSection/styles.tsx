import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;

  & .second-wrapper {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    gap: 2rem;

    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 10% 5%;
    }

    & h1 {
      margin: 0;
      font-weight: 500;
      font-size: 42px;
      color: #05377c;
      text-align: center;
      line-height: 50px;
      font-family: "Montserrat", sans-serif;
    }

    & p {
      margin: 0;
      font-weight: 400;
      font-size: 16px;
      line-height: 33px;
      text-align: center;
      font-family: "Montserrat", sans-serif;
    }

    & h3 {
      margin: 0;
    }

    & .buttonContent {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .4rem;
    }

    & .img-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      height: fit-content;
      width: fit-content;
      max-width: 100%;
      max-height: 60vh;

      @media screen and (max-width: 800px) {
        margin: 0;
        padding: 0;
        width: fit-content;
        height: fit-content;
        max-width: 100%;
        max-height: 55vh;
      }
    }

    & img {
      max-width: 90%;
      max-height: 60vh;
      margin-bottom: 0.5rem;
      border-radius: 1rem;

      @media screen and (max-width: 800px) {
        max-height: 55vh;
      }
    }
  }
`;
