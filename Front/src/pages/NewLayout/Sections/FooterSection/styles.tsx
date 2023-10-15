import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  height: fit-content;

  .footer-wrapper {
    display: flex;
    padding: 0.5rem;
    margin-top: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
  }

  h3 {
    font-weight: 400;
    text-align: center;
    margin-top: 0.5rem;
    font-size: 12px;
  }
`;
