import styled from 'styled-components';

export const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  background-color: #0077b6;
  width: 100%;
  height: 3rem;

  border-radius: 4px;
  justify-content: center;
`;

export const FileInputLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-right: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;

export const SelectedImage = styled.img`
  /* width: 100px; */
  height: 100%;
  object-fit: offer;

  box-sizing: border-box;
  `;

export const PreviewContainer = styled.div`
  width: 100%;
  height: 10rem;
  padding: 0.5rem;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 1rem;
`;
