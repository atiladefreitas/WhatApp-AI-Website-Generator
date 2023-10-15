import { Button } from '@mui/material';
import React from 'react';
import styled, { css } from 'styled-components';

interface IButtonProp {
  width?: '50%' | '100%';
  children: React.ReactNode;
  bgColor?: string;
  onClick?: any;
  mt?: string;
  mb?: string;
}

function StyledButton({ width, children, bgColor = 'rgb(41, 182, 10)', onClick }: IButtonProp): JSX.Element {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };

  return (

    <Button variant="contained" size="large" sx={{ width: width, backgroundColor: bgColor}}>
      {children}
    </Button>
    // <Button width={width} style={{ backgroundColor: bgColor }} onClick={onClick}>
    //   { children }
    // </Button>
  );
}

export { StyledButton };

// const Button = styled.button<IButtonProp>`
//   height: 3rem;
//   width: ${(props) => {
//     if (props.width === 'small') return '50%';
//     if (props.width === 'larger') return '100%';
//     return 'auto';
//   }};
//   border: 1px solid #c4c4c42e;
//   border-radius: 8px;
//   background-color: rgb(41, 182, 10);
//   color: white;
//   font-weight: 600;
//   font-family: 'Ubuntu', sans-serif;
//   font-size: 16px;
// `;
