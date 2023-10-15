import styled from 'styled-components';

export const IMGContainer = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 68vh;
  overflow-y: scroll;

  box-sizing: border-box;

  & .imageWrapper {
    height: fit-content;

    > img {
      width: 100%;
      border-radius: 8px;
    }
  }
`;
