import styled from 'styled-components';

export const ColorOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 70px;
  height: 70px;
  border-radius: 4px;
  background-color: transparent;
  box-sizing: border-box;
  border: 3px solid #034aa6;
  overflow: hidden;
  transition: all ease 0.3s;

  & .mainColor{
    width: 33.3%;
    height: 100%;
  }

  & .secondaryColor{
    width: 33.3%;
    height: 100%;
  }

  & .accentColor{
    width: 33.3%;
    height: 100%;
  }
`;

export const ColorPicker = styled.div`
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;

      border: 2px solid rgba(136, 136, 136, 0.2);
      box-shadow: 0px 5px 5px 0 rgba(68, 67, 67, 0.2);
      border-radius: 0.5rem;

      transition: all ease 0.3s;

      h1 {
        font-weight: 700;
        font-size: 20px;
        line-height: 29px;
        padding: 1rem 0;
        text-align: center;
        color: #ffffff;
      }

      .options {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        width: 95%;
        height: 100%;
        padding: 1.5rem .5rem;
        box-sizing: border-box;
        border-radius: 8px;
        flex-wrap: wrap;
        gap: 2rem;

        .selected {
          display: flex;
          width: 69px;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          h1 {
            font-weight: 500;
            font-size: 14px;
            color: #000000;
            text-align: center;
            padding: .7rem 0 0;
          }
        }

        .non-selected {
          display: flex;
          width: 69px;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          .color-option {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            width: 70px;
            height: 70px;
            border-radius: 4px;
            background-color: transparent;
            overflow: hidden;

            & .mainColor{
              width: 33.3%;
              height: 100%;
            }

            & .secondaryColor{
              width: 33.3%;
              height: 100%;
            }

            & .accentColor{
              width: 33.3%;
              height: 100%;
            }

          }

          h1 {
            font-weight: 500;
            font-size: 14px;
            color: #000000;
            text-align: center;
            padding: .7rem 0 0;
          }
        }
      }

      & .colorDemonstration{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: 95%;
        gap: 2rem;
        padding: 1rem 0;

        & .demonstrationWrapper{
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          gap: 1rem;

          & .exampleSecondary{
            width: 5rem;
            height: 5rem;
            border-radius: 10rem;
          }

          & .exampleAccent{
            width: 5rem;
            height: 5rem;
            border-radius: 10rem;
          }

          & h4{
            font-weight: 500;
            text-align: center;
            color: #ffffff;
            margin: 0;
          }
        }

      }

      p {
        font-weight: 700;
        font-size: 16px;
        line-height: 39px;

        text-align: center;
        text-decoration-line: underline;
        color: #ffffff;
        padding: 1rem;
      }
`;
