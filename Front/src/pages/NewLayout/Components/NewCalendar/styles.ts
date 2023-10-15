import styled from 'styled-components';

export const Container = styled.section`
  .sixth-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;

    height: fit-content;

    background-color: #fafafa;

    padding: 4rem 2rem;

    @media screen and (max-width: 800px) {
      padding: 10% 5%;
    }

    @media screen and (min-width: 800px) {
      width: 100vw;
    }
  }

  h1 {
    margin: 0;
    font-weight: 600;
    font-size: 32px;
    color: #05377c;
    text-align: center;
    font-family: 'Inter', sans-serif;
  }

  p {
    margin: 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
    text-align: center;
  }

  .table {
    max-width: 85vw;
    background-color: #ffffff;
    border: 2px solid rgba(136, 136, 136, 0.2);
    box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
    border-radius: 8px;
    margin: 2rem 0 1rem;

    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 85vw;
      background: #034aa6;
      height: 47px;
      border-radius: 8px 8px 0px 0px;
      padding: 0.5rem 0;
    }

    h2 {
      font-size: 20px;
      text-align: center;
      color: #ffffff;
      font-weight: 700;
      font-family: 'Montserrat', sans-serif;

    }

    .line {
      display: flex;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid #000;

      .value {
        display: flex;
        width: 50%;
        height: 60px;
        align-items: center;
        justify-content: center;

        h1 {
          font-weight: 600;
          font-size: 16px;
          color: #000000;
          text-decoration: none;
          margin: 0;
          text-align: center;
        }

        h3 {
          font-weight: 400;
          font-size: 1rem;
        }
      }
    }

    .line:last-child {
      border: 0;
    }
  }
`;
