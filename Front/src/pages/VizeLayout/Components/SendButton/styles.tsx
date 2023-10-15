import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;

  button {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 3rem;
    width: 100%;
    padding: 0 35px;
    border: none;
    border-radius: 8px;

    margin: 0;

    color: #f7f7f7;
    background: #0baf37;
    cursor: pointer;
  }

  .text {
    /* position: absolute; */
    /* left: 80px; */
    /* display: block; */
    /* white-space: nowrap; */
    font-size: 17px;
    font-weight: 600;
  }

  button.sending .text {
    animation: textAnimation 5s both;
  }

  button.sending .icon {
    animation: iconAnimation 5s both;
  }

  @keyframes textAnimation {
    0%,
    30% {
      translate: 0 0;
    }
    39.9% {
      translate: 0 100px;
    }
    40% {
      translate: 300px 100px;
    }
    40.1% {
      translate: 300px -60px;
    }
    40.2% {
      translate: 7px -60px;
    }
    45% {
      translate: 7px 0;
    }
    95% {
      translate: 7px 0;
    }
    100% {
      translate: 0 0;
    }
  }

  @keyframes iconAnimation {
    0%,
    5% {
      translate: 0 0;
    }
    20%,
    30% {
      translate: -250px 0;
    }
    40% {
      translate: 200px 0;
      scale: 2;
    }
    40.1% {
      translate: 200px -60px;
      scale: 1;
    }
    40.2% {
      translate: 34px -60px;
    }
    45%,
    95% {
      translate: 20px 0;
    }
    100% {
      translate: 0 0;
    }
  }
`;
