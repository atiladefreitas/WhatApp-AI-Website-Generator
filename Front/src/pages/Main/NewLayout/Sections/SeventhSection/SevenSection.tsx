import React from 'react';
import { Container } from './styles';
import CopyToClipboardButton from '../../../../../global/CopyToClipboard';

interface ISeventhSectionProp {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  mainColor: string;
  secondaryColor: string;
  neightborhood: string;
}

function SeventhSection({ mainColor, secondaryColor, neightborhood, zipCode, street, number, city, state, complement}: ISeventhSectionProp): JSX.Element{
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
                {street}, {neightborhood}, {number},{' '}
                {complement}
                <br />
                {city}/{state}{' '}
              </p>
            )}
          </div>

          <div
            style={{
              width: '100%',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              boxSizing: 'border-box'
            }}
          >
            <CopyToClipboardButton
              path={
                `${street}, ${neightborhood}, ${number}, ${complement} ${city}, ${state}, ${zipCode}`
              }
            />
          </div>

          {/* <button
                        className="buttonCopy"
                        onClick={() =>
                            navigator.clipboard.writeText(
                                `${street}, ${number}, ${complement} ${city}, ${state}`
                            )
                        }
                    >

                        <div>
                            <span style={{ backgroundColor: secondaryColor }}>
                                <p>Copiar endereço</p>
                            </span>
                        </div>

                        <div>
                            <span>
                                <p>Endereço copiado!</p>
                            </span>
                        </div>
                    </button> */}
        </div>
      </div>
    </Container>
  );
}
export { SeventhSection };
