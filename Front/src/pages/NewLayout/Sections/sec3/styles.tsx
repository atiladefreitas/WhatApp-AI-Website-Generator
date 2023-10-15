import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f7fa;

  & .third-wrapper {
    width: 100%;
    height: fit-content;
    min-height: 20rem;
    padding: 10% 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    & h1 {
      margin: 0;
      font-weight: 600;
      font-size: 42px;
      color: #05377c;
      text-align: center;
      font-family: 'Inter', sans-serif;
      font-size: 32px;
    }

    & .cards-wrapper {
      width: 100%;
      height: fit-content;
      display: flex;
      gap: 1rem;
      margin-top: 1rem;

      & .difCards {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      width: 90%;
      border: 1px solid #c4c4c43f;
      box-shadow: 0px 5px 4px 0 rgba(68, 67, 67, 0.2);
      border-radius: 0.5rem;
      padding: 3rem 1rem;

      & h3 {
        font-family: 'Inter', sans-serif;
        font-size: 26px;
        margin: 0;
        text-align: center;
        font-weight: 600;
        color: #05377c;
      }

      & p {
        margin: 0;
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        line-height: 1.8;
        text-align: justify;
        width: 90%;
      }

      & svg {
        width: 70px;
      }
    }
    }

    & .btn {
      width: 50%;
      margin-top: 15px;
    }
  }

  @media screen and (max-width: 600px) {
    & .third-wrapper {

    flex-direction: column;
    & h1 {

    }

    & .cards-wrapper {
      flex-direction: column;

      & .difCards {


        & h3 {

        }

        & p {

        }

        & svg {

        }
      }
    }

    & .btn {
      width: 100%;
    }
  }
}
`;
