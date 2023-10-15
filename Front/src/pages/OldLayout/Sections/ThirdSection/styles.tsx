import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f7fa;

  & .third-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: fit-content;
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
      width: 95%;
      color: #05377c;
      text-align: center;
      line-height: 1.5;
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
      gap: 1rem;
      width: 80%;
      border: 2px solid rgba(136, 136, 136, 0.2);
      box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
      border-radius: 0.5rem;
      padding: 3.5rem 1.5rem;

      & h3 {
        text-align: center;
        font-weight: 600;
        //color: #3A3A3A;
        color: #05377c;
      }

      & p {
        margin: 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.8;
        text-align: center;
        width: 90%;
      }

      & svg {
        width: 70px;
      }


    }
  }
`;
