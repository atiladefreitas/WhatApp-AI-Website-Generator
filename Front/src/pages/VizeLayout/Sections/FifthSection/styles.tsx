import styled from 'styled-components';

export const Container = styled.div`
   background-color: #fefefe;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  & .fifth-wrapper {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    gap: 1.6rem;

    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 7% 5%;
    }

    & h1 {
      margin: 0;
      color: white;
      line-height: 45px;
      text-align: center;
      padding: 0 1.5rem 0;
      font-family: "Poppins", sans-serif;
      letter-spacing: .1px;

      @media screen and (max-width: 410px) {
        font-size: 7vw;
        font-weight: 600;
        padding: 0;
      }
      @media screen and (max-width: 330px) {
        font-size: 18px;
      }
    }

    & p {
      margin: 0;
      padding: 0 1rem;
      font-weight: 300;
      font-size: 16px;
      color: #f0f0f0;
      line-height: 28px;
      font-family: "Poppins", sans-serif;
      text-align: center;
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
      max-height: 70vh;

      @media screen and (max-width: 800px) {
        margin: 0;
        padding: 0;
        width: fit-content;
        height: fit-content;
        max-width: 100%;
        max-height: 50vh;
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
