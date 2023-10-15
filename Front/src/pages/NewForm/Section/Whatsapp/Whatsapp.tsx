import React, { useCallback, useEffect, useState } from 'react';
import { Input, InputLabel, TextField } from '@mui/material';
import { StyledButton } from '../../../../global/Button';
import { handleSubmit } from '../../Utils/mongoReq';
import styled from 'styled-components';
import { IMaskInput } from 'react-imask';

interface IWhatsProps {
  userID: string | undefined;
  actualWhats: string | undefined;

  whatsappToast: (value: boolean | undefined) => void;
}

interface CustomProps {
  onChange: (event: { target: { name: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#0) 0 0000 0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name } })}
        overwrite
      />
    );
  }
);

interface State {
  textmask: string;
}

function Whatsapp({
  userID,
  actualWhats,
  whatsappToast,
}: IWhatsProps): JSX.Element {
  const [whats, setWhats] = useState<string | undefined>('');
  const [showBtn, setShowBtn] = useState<boolean>(false);

  const [values, setValues] = React.useState<State>({
    textmask: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWhats(whats);
  };

  const handleOnSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();

      setShowBtn(false);

      const btnSuccess = await handleSubmit(
        [
          {
            field: 'whatsApp',
            value: whats,
          },
        ],
        userID
      );

      whatsappToast(btnSuccess);
    },
    [userID, whats]
  );

  return (
    <Container onSubmit={handleOnSubmit}>
      <h1>WhatsApp</h1>
      <h4>
        Adicione aqui o seu whats <strong>com o DDD</strong>
      </h4>
      {actualWhats == '' ? (
        <>
          {/* <TextField
                id="outlined-multiline-static"
                label="WhatsApp"
                variant="outlined"
                rows={1}
                onChange={(e) => {
                  setWhats(e.target.value)
                  setShowBtn(true)
                }}
                value={whats}
              /> */}

          <InputLabel htmlFor="formatted-text-mask-input">
            react-imask
          </InputLabel>
          <Input
            value={whats}
            onChange={handleChange}
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom as any}
          />
          {showBtn ? (
            <>
              <StyledButton
                children="Atualizar Whats"
                type="submit"
                w="larger"
                h="3rem"
              />
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <div
            style={{
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <a
              href={`https://whatsgram.com/${actualWhats}`}
              className="whats_btn"
              target="blank"
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: '22px',
                padding: '1rem 2rem',
                borderRadius: '8px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              {/* <img src={WhatsgramIcon} style={{width: '40px'}}/> */}
              {actualWhats}
            </a>
          </div>
        </>
      )}
    </Container>
  );
}

export { Whatsapp };

const Container = styled.form`
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

  & .whats_btn {
    transition: all 0.3s ease;
    :hover {
      background-color: #007bff68;
    }
  }
`;
