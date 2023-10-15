import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 25vw;
  box-sizing: border-box;
  background-color: #eee;

  height: fit-content;
  box-shadow: -1px 3px 4px 0 rgba(68, 67, 67, 0.3);
  /* max-height: 7vh; */
  /* min-height: 6vh; */

  position: sticky;
  z-index: 10;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  & img {
    border-radius: 8px;
    max-height: 65px;
    max-width: 55vw;
  }

  & h1 {
    color: rgb(5, 55, 124);
    text-align: center;
    max-width: 90%;
    margin: 0;
    @media screen and (max-width: 410px){
        font-size: 6vw;
        line-height: 2.6rem;
      }
    @media screen and (max-width: 330px){
        font-size:18px
      }
  }

  @media screen and (max-width: 600px){
    padding: 1rem;
    & a {
      & p {
        display: none;
      }
    }
  }

`;
