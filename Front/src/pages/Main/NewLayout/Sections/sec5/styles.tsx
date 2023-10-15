import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f4f7fa;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  & .fifth-wrapper {
    width: 100%;
    height: fit-content;
    min-height: 20rem;
    padding: 5% 10%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 3rem;

    & .content-wrapper {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;

      & .btn {
        margin-top: 1.5rem;
      }

    }

    & .btn-2 {
        display: none;
      }


    & .img-wrapper {
      width: 50%;
      /* height: fit-content;
      display: flex;
      align-items: center;
      justify-content: center; */

      & img {
        max-width: 50vh;
        border-radius: 8px;
      }
    }

    & .sectionTitle {
      font-family: 'Inter', sans-serif;
      font-size: 32px;
      margin: 0;
    }

    & .history {
      font-family: "Montserrat", sans-serif;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    & .fifth-wrapper {
      padding: 10% 5%;
      flex-direction: column;
      gap: 1rem;


    & .content-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;

      & .btn {
        display: none;
      }

    }

      & .btn-2 {
        width: 100%;
        display: block;
      }

      & .img-wrapper {
        width: 100%;
        height: fit-content;

        & img {
          /* height: 100%; */
          width: 100%;
          object-fit: contain;

        }
      }

    & .sectionTitle {

    }

    & .history {

    }
  }
  }
`;
