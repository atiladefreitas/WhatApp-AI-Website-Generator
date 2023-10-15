// styles.ts

import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 100%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  border-radius: .98rem;
  width: 100%;
  height: 100%;
  background-color: rgba(32, 32, 32, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OverlayText = styled.div`
  color: #fff;
  font-family: "Montserrat", sans-serif;

  h3{
    font-size: 1.3rem;
    text-align: center;
    font-weight: 700;
    margin: 2rem 0 .5rem;
  }

  h5{
    font-size: .8rem;
    text-align: center;
    font-weight: 400;
    margin: .8rem 0 0;
    padding: 0 1rem;
    line-height: 1.3rem;
  }
`;
