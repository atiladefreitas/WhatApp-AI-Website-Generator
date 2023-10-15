import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 10rem;
  background-color: red;
  padding: 1rem;
  box-sizing: border-box;

  background-color: #fafafa;

  border: 1px solid #c4c4c4;
  border-radius: 8px;

  & .title {
    margin-bottom: 10px;
    display: flex;
    width: 100%;
    gap: 10px;
  }
`;

export const Recomendation = styled.p`
  font-style: italic;
  color: rgba(0,0,0,0.5);
  margin-top: 8px;
`;

export const ImgWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;


> img {
    width: 70%;
    margin: 1rem 0;
  }
`;


