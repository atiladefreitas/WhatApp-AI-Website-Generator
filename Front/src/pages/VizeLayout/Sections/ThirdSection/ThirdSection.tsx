import React from 'react';
import { Container } from './styles';

import WappLogo from '../../../../assets/svg/whatsapp-svgrepo-com.svg';

interface IThirdSectionProp {
  mainColor: string;
  secondaryColor: string;
  accentColor: string;
  onClick: any;
  quality1: string;
  qualitydescription1: string;
  quality2: string;
  qualitydescription2: string;
  quality3: string;
  qualitydescription3: string;
  isAutonomous: string;
  isThirdButtonDisabled: string;
  thirdButtonText: string | undefined;
}

function ThirdSection({isAutonomous, mainColor,thirdButtonText, isThirdButtonDisabled, secondaryColor, accentColor, quality1, qualitydescription1, quality2, qualitydescription2, quality3, qualitydescription3, onClick}: IThirdSectionProp): JSX.Element{
  return (
    <Container>
      <div id='thirdSection'className={'third-wrapper'}>
        {isAutonomous == '1' ? (
          <h1 className="sectionTitle" style={{ color: mainColor }}>
          Meus diferenciais
          </h1>
        ):(
          <h1 className="sectionTitle" style={{ color: mainColor }}>
          Nossos diferenciais
          </h1>
        )}

        <div className="difCards" style={{backgroundColor: mainColor}}>
          <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.42 1.13918C21.7688 1.13918 25.8575 2.83277 28.9324 5.90761C32.0072 8.98245 33.7008 13.0712 33.7008 17.42C33.7008 21.7688 32.0072 25.8575 28.9324 28.9324C25.8575 32.0072 21.7688 33.7008 17.42 33.7008C13.0712 33.7008 8.98245 32.0072 5.90761 28.9324C2.83277 25.8575 1.13918 21.7688 1.13918 17.42C1.13918 13.0712 2.83277 8.98245 5.90761 5.90761C8.98245 2.83277 13.0712 1.13918 17.42 1.13918ZM17.42 0C7.7996 0 0 7.7996 0 17.42C0 27.0404 7.7996 34.84 17.42 34.84C27.0404 34.84 34.84 27.0404 34.84 17.42C34.84 7.7996 27.0404 0 17.42 0Z" fill={secondaryColor}/>
            <path d="M16.2551 11.3453H13.3359V6.65662H21.5039V28.1815H16.2551V11.3444V11.3453Z" fill={secondaryColor}/>
            <path d="M17.42 32.8464C25.9397 32.8464 32.8464 25.9397 32.8464 17.42C32.8464 8.90018 25.9397 1.99353 17.42 1.99353C8.90018 1.99353 1.99353 8.90018 1.99353 17.42C1.99353 25.9397 8.90018 32.8464 17.42 32.8464Z" stroke={secondaryColor} strokeWidth="0.481798" strokeMiterlimit="10"/>
          </svg>


          <h3>{quality1}</h3>
          <p>{qualitydescription1}</p>
        </div>

        <div className="difCards" style={{backgroundColor: mainColor}}>
          <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.42 1.13918C21.7688 1.13918 25.8575 2.83277 28.9324 5.90761C32.0072 8.98245 33.7008 13.0712 33.7008 17.42C33.7008 21.7688 32.0072 25.8575 28.9324 28.9324C25.8575 32.0072 21.7688 33.7008 17.42 33.7008C13.0712 33.7008 8.98245 32.0072 5.90761 28.9324C2.83277 25.8575 1.13918 21.7688 1.13918 17.42C1.13918 13.0712 2.83277 8.98245 5.90761 5.90761C8.98245 2.83277 13.0712 1.13918 17.42 1.13918ZM17.42 0C7.7996 0 0 7.7996 0 17.42C0 27.0404 7.7996 34.84 17.42 34.84C27.0404 34.84 34.84 27.0404 34.84 17.42C34.84 7.7996 27.0404 0 17.42 0Z" fill={secondaryColor}/>
            <path d="M10.0486 24.5266C14.6186 20.7521 19.4839 17.007 19.4839 13.3806C19.4839 11.818 18.7766 10.8155 17.2425 10.8155C15.7084 10.8155 14.854 11.9946 14.854 14.0299H9.98877C10.1359 8.81058 13.5269 6.57019 17.4485 6.57019C22.3432 6.57019 24.5257 9.43049 24.5257 13.0569C24.5257 17.775 20.3088 21.5495 16.8884 24.1734H24.8494V28.2716H10.0486V24.5266Z" fill={secondaryColor}/>
            <path d="M17.42 32.8464C25.9397 32.8464 32.8464 25.9397 32.8464 17.42C32.8464 8.90018 25.9397 1.99353 17.42 1.99353C8.90018 1.99353 1.99353 8.90018 1.99353 17.42C1.99353 25.9397 8.90018 32.8464 17.42 32.8464Z" stroke={secondaryColor} strokeWidth="0.768583" strokeMiterlimit="10"/>
          </svg>


          <h3>{quality2}</h3>
          <p>{qualitydescription2}</p>
        </div>

        <div className="difCards" style={{backgroundColor: mainColor}}>
          <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.42 1.13918C21.7688 1.13918 25.8575 2.83277 28.9324 5.90761C32.0072 8.98245 33.7008 13.0712 33.7008 17.42C33.7008 21.7688 32.0072 25.8575 28.9324 28.9324C25.8575 32.0072 21.7688 33.7008 17.42 33.7008C13.0712 33.7008 8.98245 32.0072 5.90761 28.9324C2.83277 25.8575 1.13918 21.7688 1.13918 17.42C1.13918 13.0712 2.83277 8.98245 5.90761 5.90761C8.98245 2.83277 13.0712 1.13918 17.42 1.13918ZM17.42 0C7.7996 0 0 7.7996 0 17.42C0 27.0404 7.7996 34.84 17.42 34.84C27.0404 34.84 34.84 27.0404 34.84 17.42C34.84 7.7996 27.0404 0 17.42 0Z" fill={secondaryColor}/>
            <path d="M17.5378 6.31873C22.0784 6.31873 24.5257 8.91321 24.5257 12.157C24.5257 14.9879 22.7562 16.4916 21.2819 16.9929V17.1106C23.434 17.8188 24.9092 19.4696 24.9092 22.3005C24.9092 25.9279 22.3147 28.5223 17.8026 28.5223C13.2905 28.5223 10.0771 26.3997 9.92993 21.5344H14.8246C14.854 23.2147 15.7682 24.3358 17.6261 24.3358C19.1886 24.3358 20.044 23.3334 20.044 21.9179C20.044 20.0013 18.8943 19.2342 16.2695 19.2342H15.3259V15.136H16.2695C17.9802 15.136 19.631 14.723 19.631 12.7769C19.631 11.3321 18.7757 10.5356 17.4191 10.5356C15.7977 10.5356 15.2081 11.7147 15.1189 12.8947H10.1948C10.3714 8.64835 13.1434 6.31873 17.5368 6.31873H17.5378Z" fill={secondaryColor}/>
            <path d="M17.42 32.8464C25.9397 32.8464 32.8464 25.9397 32.8464 17.42C32.8464 8.90018 25.9397 1.99353 17.42 1.99353C8.90018 1.99353 1.99353 8.90018 1.99353 17.42C1.99353 25.9397 8.90018 32.8464 17.42 32.8464Z" stroke={secondaryColor} strokeWidth="0.573569" strokeMiterlimit="10"/>
          </svg>


          <h3>{quality3}</h3>
          <p>{qualitydescription3}</p>
        </div>

        {
          isThirdButtonDisabled == 'on' || isThirdButtonDisabled == null ? (
            <>
              <button onClick={onClick}> <div className='buttonContent'> <img src={WappLogo} alt="logo whats" style={{ margin:'0'}}/>
                {
                  thirdButtonText === '' || thirdButtonText === undefined ? (
                    <>
                                  Vamos conversar!
                    </>
                  ) : (
                    <>
                      {thirdButtonText}
                    </>
                  )
                }
              </div> </button>
            </>
          ) : (
            <></>
          )
        }
      </div>
    </Container>
  );
}
export {ThirdSection};
