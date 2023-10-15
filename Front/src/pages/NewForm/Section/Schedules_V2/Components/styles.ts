
import styled, { css } from 'styled-components';

export const Container = styled.form`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 1rem 20rem;

  box-sizing: border-box;

  overflow: hidden;

  background: #eee;
  backdrop-filter: blur(1);

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: .5s;

  @media screen and (max-width: 800px) {
    padding: 1rem;
  }

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
  }

  ${({ isVisible }: any) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(1);
    }
  `}
`;

export const Header = styled.div`
  width: 100%;
  height: 3.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #c4c4c483;
`;

export const IMGWrapper = styled.div`
  margin: 15px 0;

  overflow-y: scroll;

  width: 100%;
  height: 80%;

  box-sizing: border-box;

  & .imageWrapper {
    height: fit-content;

    > img {
      width: 100%;
      border-radius: 8px;
    }
  }
`;

export const DayWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1rem;
`;

export const CheckboxWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.6rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.6rem;
  border: 1px solid #c4c4c4;
`;

export const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background-color: #eaeaea;
  border: 1px solid #c4c4c4;
`;
