import styled from 'styled-components';



export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-family: "Montserrat", sans-serif;

  overflow-x: hidden;

  & header {
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .nav {
      background-color: white;
      width: 100%;
      height: fit-content;
      max-height: 7vh;
      min-height: 7vh;
      padding: 1rem;
      box-shadow: -1px 3px 4px 0 rgba(68, 67, 67, 0.3);

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #eee;
      position: sticky;
      z-index: 10;

      & img {
        border-radius: 10px;
        max-height: 50px;
        max-width: 45 vw;
      }

      & h1 {
        color: rgb(5, 55, 124);
      }
    }
  }

  //global styles
  & .pgImg {
    max-width: 100%;
    max-height: 60vh;
    border-radius: 16px;
    margin-bottom: 0.8rem;
  }

  & button {
    cursor: pointer;
    background-color: #25D366;
    box-shadow: 0 5px 5px 0 rgba(68, 67, 67, 0.2);

    font-family: "Poppins", sans-serif;

    border: 0;

    width: 100%;
    height: 55px;

    color: #fff;
    font-size: 1.05rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 16px;
  }
`;

//Galeria de fotos
export const FourthSection = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  & .fourth-wrapper {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 3rem;
    gap: 1rem;
    padding-top: 1.5rem;

    @media screen and (max-width: 800px) {
      width: 80%;
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

    & .buttonContent {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .4rem;
    }

    & button {
      cursor: pointer;
      background-color: #25D366;
      box-shadow: 0 5px 5px 0 rgba(68, 67, 67, 0.2);

      font-family: "Poppins", sans-serif;

      border: 0;

      width: 50%;
      height: 55px;

      color: #fff;
      font-size: 1.05rem;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 16px;

      @media screen and (max-width: 800px) {
        width: 110%;
      }
    }
  }
`;

export const ImageSchedule = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3% 10%;

  & h1 {
      margin: 0;
      color: white;
      text-align: center;
      font-family: "Poppins", sans-serif;
      color: rgba(5, 55, 124, 0.9);
  }

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
      object-fit: contain;
      max-height: 60vh;
      border-radius: 8px;
    }
  }

  @media screen and (max-width: 600px) {

    padding: 10% 10%;

    & h1 {

    }

    & .img-wrapper {
      padding: 5% 10%;

      & img {
        width: 100%;
      }
    }
  }
`;




