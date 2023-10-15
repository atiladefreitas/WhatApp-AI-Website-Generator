import React from 'react';
import styled, { css } from 'styled-components';

interface IInputProp {
  width?: 'small' | 'larger';
  bgColor?: string;
}

function StyledInput({ width, bgColor }: IInputProp): JSX.Element {
  return (
    <Input width={width} style={{ backgroundColor: bgColor }} type="file"/>
  );
}

export { StyledInput };

const Input = styled.input<IInputProp>`
  height: 3rem;
  width: ${(props) => {
    if (props.width === 'small') return '50%';
    if (props.width === 'larger') return '100%';
    return 'auto';
  }};
  border: 1px solid #c4c4c42e;
  border-radius: 8px;
  background-color: rgb(41, 182, 10);
  color: white;
  font-weight: 600;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
`;
