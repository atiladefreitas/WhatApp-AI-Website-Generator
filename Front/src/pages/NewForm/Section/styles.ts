import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #fafafa;

  border: 1px solid #c4c4c4;
  border-radius: 8px;

  padding: 1rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  justify-content: space-between;

  transition: all 0.3s ease;
`;

export const Header = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;

  & button {
    background-color: red;
    width: fit-content;
    height: fit-content;
    padding: 0.5rem 2rem;
  }

  & svg {
    height: 100%;
    width: 3vh;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #c4c4c4;
  border-radius: 8px;
  padding: 1rem;

  box-sizing: border-box;

  gap: 0.8rem;

  > img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;

  transition: all 0.3s ease;

  & p {
    text-align: justify;
  }
`;


export const InputWrapper = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 5rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;

  border: 1px solid #c4c4c4;
  border-radius: 8px;

  gap: 1rem;

  & .color-input-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 5px solid;
    border-radius: 8px;
    padding: 1rem;
    box-sizing: border-box;
  }

  & .color-input {
    width: 60%;
  }
`;

interface IContentWrapperProps {
  mt?: string;
  mb?: string;
}

export const ContentWrapper = styled.div<IContentWrapperProps>`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #eaeaea;
    border: 1px solid #c4c4c4;
    margin-top: ${(props) => props.mt};
    margin-bottom: ${(props) => props.mb};

    gap: 1rem;

    .header {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1rem;
    }
`;
