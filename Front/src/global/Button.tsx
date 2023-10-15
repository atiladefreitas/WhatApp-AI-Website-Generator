import React from 'react';
import styled, { css } from 'styled-components';

interface IButtonProp {
  w?: 'small' | 'larger';     // small: 50%; larger: 100%
  h?: string;                 // height
  children: React.ReactNode;  // button label content
  bgColor?: string;           // background color
  onClick?: any;              // onClick function
  type?: any;                 // button type e.g.: 'submit'
  mt?: string;                // margin top
  mb?: string;                // margin bottom
  icon?: React.ReactNode;
}

function StyledButton({ w, h, children, bgColor, onClick, type, mt, mb, icon }: IButtonProp): JSX.Element {
  return (
    <Button w={w} h={h} style={{ backgroundColor: bgColor, marginTop: mt, marginBottom: mb }} onClick={onClick} type={type}>
      { children } {icon}
    </Button>
  );
}

export { StyledButton };

const Button = styled.button<IButtonProp>`
  height: ${(props) => props.h};
  min-height: 3rem;
  width: ${(props) => {
    if (props.w === 'small') return '50%';
    if (props.w === 'larger') return '100%';
    return 'auto';
  }};
  border: 1px solid #c4c4c42e;
  border-radius: 4px;
  background-color: rgb(41, 182, 10);
  color: white;
  font-weight: 600;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem
`;
