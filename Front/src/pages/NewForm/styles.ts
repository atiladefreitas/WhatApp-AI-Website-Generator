import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  `;

export const Main = styled.main`
  height: fit-content;

  padding-left: 20rem;
  padding-right: 20rem;
  margin-top: 6rem;
  margin-bottom: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  @media screen and (max-width: 800px) {
    padding: 0.5rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;

