import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  header {
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & .nav {
    background-color: white;
    width: 100%;
    height: fit-content;
    max-height: 7vh;
    min-height: 7vh;
    padding: 1rem;
    box-shadow: -1px 3px 4px 0 rgba(68, 67, 67, 0.3);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    position: sticky;
    z-index: 10;

    & img {
      border-radius: 10px;
      max-height: 75px;
      max-width: 55vw;
    }

    & h1 {
      color: rgb(5, 55, 124);
      text-align: center;
      max-width: 90%;
        @media screen and (max-width: 410px){
            font-size: 6vw;
            line-height: 2.6rem;
        }
        @media screen and (max-width: 330px){
            font-size:18px
        }
    }
  }
}
`;
