import styled from 'styled-components';

//Banner
export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(5, 55, 124);

  & .first-wrapper {
    width: 100%;
    height: fit-content;
    min-height: 20rem;
    padding: 5% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .main-content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    & .call-n-desc {
      width: 50%;

      & h1 {
        font-family: 'Inter', sans-serif;
        font-size: 26px;
        color: #f0f0f0;
      }

      & p {
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        color: #f0f0f0;
      }
    }

    & .img-wrapper {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: end;
      justify-content: flex-end;

      & img {
        max-width: 50vh;
        border-radius: 8px;
      }

      & video {
        max-width: 50vh;
        border-radius: 8px;
      }
    }
  }

  & .btn-2 {
    display: none;
  }

  }

@media screen and (max-width: 600px) {
  & .first-wrapper {
    padding: 10% 5%;

    & .main-content-wrapper {
      flex-direction: column;

      & button {
        display: none;
      }

      & .call-n-desc {
        width: 100%;

        & button {
          display: none;
        }
      }

      & .img-wrapper {
        width: 100%;
        margin-top: 2rem;
      align-items: center;
      justify-content: center;

        & img {
        width: 100%;
      }
      
      & video {        
        width: 100%;
      }
      }
    }

    & .btn-2 {
      display: block;
      width: 100%;
    }
  }
  }
`;

