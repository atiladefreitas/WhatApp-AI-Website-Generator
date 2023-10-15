import React, { useCallback, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { StyledButton } from '../../../../global/Button';
import { handleSubmit } from '../../Utils/mongoReq';
import styled from 'styled-components';

import InstagramIcon from '../../../../assets/svg/icons8-instagram-48.png';

interface IInstagramProps {
  userID: string | undefined;
  actualInsta: string | undefined;

  instaToast: (value: boolean | undefined) => void;
}

function Instagram({
  userID,
  actualInsta,
  instaToast,
}: IInstagramProps): JSX.Element {
  const [insta, setInsta] = useState<string | undefined>('');
  const [showBtn, setShowBtn] = useState<boolean>(false);

  const handleOnSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();

      setShowBtn(false);

      const btnSuccess = await handleSubmit(
        [
          {
            field: 'instagram',
            value: insta,
          },
        ],
        userID
      );

      instaToast(btnSuccess);
    },
    [userID, insta]
  );

  return (
    <Container onSubmit={handleOnSubmit}>
      <h1>Instagram</h1>
      <h4>
        Adicione aqui o seu instagram <strong>sem o @</strong>
      </h4>
      {actualInsta == '' ? (
        <>
          <TextField
            id="outlined-multiline-static"
            label="Instagram"
            variant="outlined"
            rows={1}
            onChange={(e) => {
              setInsta(e.target.value);
              setShowBtn(true);
            }}
            value={insta}
          />
          {showBtn ? (
            <>
              <StyledButton
                children="Atualizar Insta"
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
              href={`https://instagram.com/${actualInsta}`}
              className="insta_btn"
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
              <img src={InstagramIcon} style={{ width: '40px' }} />
              {actualInsta}
            </a>
          </div>
        </>
      )}
    </Container>
  );
}

export { Instagram };

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

  & .insta_btn {
    transition: all 0.3s ease;
    :hover {
      background-color: #007bff68;
    }
  }
`;
