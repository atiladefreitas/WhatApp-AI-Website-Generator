import React from 'react';
import { Container } from './styles';

interface ISeventhSectionProp {

  zipCode: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  mainColor: string;
  secondaryColor: string;
  accentColor: string;
}

function SeventhSection({ mainColor, accentColor, secondaryColor, zipCode, street, number, city, state, complement}: ISeventhSectionProp): JSX.Element{
  return (
    <Container>
      <div id='seventhSection' className="seventh-wrapper">
        <h1 className="sectionTitle" style={{ color: mainColor }}>
          Endereço
        </h1>

        <div className="adressWrapper">
          <div className="userAdress">
            {zipCode == '' ? (
              <p>
                Rua exemplo, 45, 302, <br /> sua cidade / estado
              </p>
            ) : (
              <p>
                {street}, {number},{' '}
                {complement}
                <br />
                {city}/{state}{' '}
              </p>
            )}
          </div>

          <button
            className="buttonCopy"
            onClick={() =>
              navigator.clipboard.writeText(
                `${street}, ${number}, ${complement} ${city}, ${state}`
              )
            }
          >
            <div>
              <span style={{ backgroundColor: secondaryColor }}>
                <p style={{color: accentColor}}>Copiar endereço</p>
              </span>
            </div>

            <div>
              <span>
                <p>Endereço copiado!</p>
              </span>
            </div>
          </button>
        </div>
      </div>
    </Container>
  );
}
export { SeventhSection };
