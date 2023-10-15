import React, { useState } from 'react';
import { Container, Recomendation, ImgWrapper } from './styles';
import { LoadingComponent } from '../../Components/Skeleton';
import { FileInputComponent } from '../../../../global/uploads/LogoUpload';

interface IFormHeaderProps {
  img: string | undefined;
  name: string | undefined;
  isLoading: any;
  userID: string | undefined;

  toast: (value: boolean | undefined) => void;
}

function FormHeader({img, name, isLoading, userID, toast}: IFormHeaderProps ): JSX.Element {
  const [isFileSelected, setFileSelected] = useState<boolean>(false);
  const [image, setImage] = useState<string >('');
  const [preview, setPreview] = useState<string>('');

  const HandleOnFileSelect = () => {
    toast(true);
  };

  const outroNome = '';

  return (
    <Container>
      <p className="title" >Bem vindo! <LoadingComponent
        height="1.5rem"
        width="25%"
        loading={isLoading}
        component={
          <strong>{isFileSelected ? outroNome : name}</strong>
        }
      /></p>
      <ImgWrapper>
        <LoadingComponent
          height="10rem"
          loading={isLoading}
          component={
            img == '' ? (
              <>

              </>
            ) : (
              <>
                <img src={img} style={{ maxWidth: '40vh'}}/>
              </>
            )
          }
        />
        <Recomendation>Dimensões recomendadas: <strong>200x75</strong></Recomendation>

        <FileInputComponent userID={userID} onValueChange={HandleOnFileSelect}/>
      </ImgWrapper>
    </Container>
  );
}

export { FormHeader };
