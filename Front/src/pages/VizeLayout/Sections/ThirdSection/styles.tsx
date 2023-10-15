import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;

  & .third-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: fit-content;
    padding: 4rem 2rem;
    gap: 1.6rem;

    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 7% 5%;
    }

    & h1 {
      margin: 0;
      color: white;
      line-height: 40px;
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

    & .difCards {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: .8rem;
      width: 80%;
      border: 2px solid rgba(136, 136, 136, 0.2);
      box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
      border-radius: 1.8rem;
      padding: 2.5rem 1.5rem;

      & h3 {
        text-align: center;
        font-weight: 600;
        //color: #3A3A3A;
        color: #f0f0f0;
        font-family: "Poppins", sans-serif;
        margin: 0;
      }

      & p {
        margin: 0;
        font-weight: 300;
        font-size: 15px;
        color: #f0f0f0;
        line-height: 25px;
        text-align: center;
        width: 90%;
        font-family: "Poppins", sans-serif;
      }

      & svg {
        width: 65px;
      }


    }
  }
`;
