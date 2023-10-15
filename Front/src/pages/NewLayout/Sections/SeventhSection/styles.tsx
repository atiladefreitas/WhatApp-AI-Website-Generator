import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f4f7fa;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  word-wrap: break-word;
  word-break: break-all;

  & .seventh-wrapper {
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
      font-weight: 600;
      font-size: 32px;
      color: #05377c;
      text-align: center;
      font-family: 'Inter', sans-serif;
    }

    .adressWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      font-size: 20px;
      text-align: center;
      height: fit-content;
      padding: 2rem 2rem;
      width: 95%;

      box-sizing: border-box;

      border: 2px solid rgba(136, 136, 136, 0.5);
      box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
      border-radius: 12px;

      .userAdress {
        padding: 0 1rem 0.5rem;
        line-height: 2.5rem;
        font-family: "Montserrat", sans-serif;
      }

      .buttonCopy {
        outline: 0;
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: transparent;

        width: 100%;
        height: 50px;
        border-radius: 12px;
        overflow: hidden;
      }

      .buttonCopy div {
        transform: translateY(0px);
        width: 105%;
        height: 103%;
        border-radius: 12px;
      }

      .buttonCopy,
      .buttonCopy div {
        transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        border-radius: 12px;
      }

      .buttonCopy div span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 100.5%;
        border-radius: 12px;
      }

      .buttonCopy div:nth-child(1) {
        border-radius: 12px;
        background-color: #05377c;
      }

      .buttonCopy div:nth-child(2) {
        background-color: #29b60a;
        border-radius: 12px;
      }

      .buttonCopy:hover {
        box-shadow: 0 0.625em 1em 0 rgba(33, 220, 98, 0.35);
        border-radius: 12px;
      }

      .buttonCopy:hover div {
        transform: translateY(-50px);
        border-radius: 12px;
      }

      .buttonCopy p {
        text-align: center;
        font-size: 17px;
        font-weight: bold;
        color: #ffffff;
      }

      .buttonCopy:active {
        transform: scale(0.95);
        border-radius: 12px;
      }
    }
  }
`;
