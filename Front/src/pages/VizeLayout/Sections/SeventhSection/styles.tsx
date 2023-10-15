import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fefefe;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  & .seventh-wrapper {
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    gap: 1.2rem;

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

    .adressWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: fit-content;
      /* padding: 1rem 0 0; */
      width: 95%;;
      gap: 1.6rem;

      .addressText{
        margin: 0;
        font-weight: 300;
        font-size: 16px;
        color: #f0f0f0;
        line-height: 25px;
        font-family: "Poppins", sans-serif;
        text-align: center;
      }

      .buttonCopy {
        outline: 0;
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: transparent;

        width: 70%;
        height: 50px;
        border-radius: 20px;
        overflow: hidden;
      }

      .buttonCopy div {
        transform: translateY(0px);
        width: 105%;
        height: 103%;
        border-radius: 20px;
      }

      .buttonCopy,
      .buttonCopy div {
        transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        border-radius: 20px;
      }

      .buttonCopy div span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 100.5%;
        border-radius: 20px;
      }

      .buttonCopy div:nth-child(1) {
        border-radius: 20px;
        background-color: #05377c;
      }

      .buttonCopy div:nth-child(2) {
        background-color: #29b60a;
        border-radius: 20px;
      }

      .buttonCopy:hover {
        box-shadow: 0 0.625em 1em 0 rgba(33, 220, 98, 0.35);
        border-radius: 20px;
      }

      .buttonCopy:hover div {
        transform: translateY(-50px);
        border-radius: 20px;
      }

      .buttonCopy p {
        text-align: center;
        font-size: 17px;
        font-weight: bold;
        color: #ffffff;
      }

      .buttonCopy:active {
        transform: scale(0.95);
        border-radius: 20px;
      }
    }
  }
`;
