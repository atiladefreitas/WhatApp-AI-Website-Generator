import React from 'react';
import { Container } from './styles';
import { main } from '@popperjs/core';

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
  thirdTitle: string;
}

function ThirdSection({isAutonomous, thirdTitle, mainColor, secondaryColor, accentColor, quality1, qualitydescription1, quality2, qualitydescription2, quality3, qualitydescription3, onClick}: IThirdSectionProp): JSX.Element{
  return (
    <Container>
      <div id='thirdSection' className={'third-wrapper'}>
        {
          thirdTitle == '' || thirdTitle == null ? (
            <>
              {isAutonomous == '1' ? (
                <h1 className="sectionTitle" style={{ color: mainColor }}>
                        Meus diferenciais
                </h1>
              ):(
                <h1 className="sectionTitle" style={{ color: mainColor }}>
                        Nossos diferenciais
                </h1>
              )}
            </>
          ) : (
            <>
              <h1>
                {thirdTitle}
              </h1>
            </>
          )
        }
        <div className='cards-wrapper'>


          <div className="difCards">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64.000000 64.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill={secondaryColor}
                stroke="none"
              >
                <path
                  d="M255 601 c-84 -22 -154 -80 -196 -161 -34 -66 -33 -176 3 -245 31
                        -60 77 -105 138 -136 64 -32 176 -32 240 0 61 31 107 76 138 136 37 71 37 179
                        0 250 -49 94 -135 152 -235 160 -32 2 -71 1 -88 -4z m160 -28 c65 -22 136 -93
                        158 -158 76 -222 -126 -424 -348 -348 -31 10 -67 34 -95 63 -107 106 -107 274
                        0 381 75 75 181 98 285 62z"
                />
                <path
                  d="M249 536 c-56 -20 -96 -53 -126 -104 -40 -67 -40 -157 0 -224 15 -27
                        32 -48 37 -48 14 0 13 17 -1 26 -21 13 -49 89 -49 134 0 113 97 210 210 210
                        22 0 40 5 40 10 0 14 -68 12 -111 -4z"
                />
                <path
                  d="M395 520 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8 0
                        -12 -4 -9 -10z"
                />
                <path
                  d="M450 492 c0 -5 10 -17 21 -28 70 -62 76 -205 12 -276 -9 -10 -13 -21
                        -9 -25 12 -12 45 38 62 94 20 69 11 131 -30 191 -29 43 -56 65 -56 44z"
                />
                <path
                  d="M292 407 c-23 -24 -19 -45 5 -26 11 9 13 -3 13 -70 0 -65 -3 -81 -15
                        -81 -8 0 -15 -4 -15 -10 0 -5 18 -10 40 -10 22 0 40 5 40 10 0 6 -7 10 -15 10
                        -12 0 -15 18 -15 100 0 55 -4 100 -8 100 -5 0 -18 -10 -30 -23z"
                />
                <path
                  d="M210 134 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10
                        -7 -10 -16z"
                />
                <path
                  d="M410 141 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
                        -10 -4 -10 -9z"
                />
                <path
                  d="M260 115 c0 -8 2 -15 4 -15 2 0 6 7 10 15 3 8 1 15 -4 15 -6 0 -10
                        -7 -10 -15z"
                />
                <path
                  d="M310 110 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0
                        -10 -9 -10 -20z"
                />
                <path
                  d="M366 115 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0 -7
                        -7 -4 -15z"
                />
              </g>
            </svg>

            <h3 style={{ color: mainColor }}>{quality1}</h3>
            <p>{qualitydescription1}</p>
          </div>

          <div className="difCards">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64.000000 64.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill={secondaryColor}
                stroke="none"
              >
                <path
                  d="M245 611 c-84 -22 -154 -80 -196 -161 -34 -66 -33 -176 3 -245 54
                        -103 146 -159 258 -159 300 0 395 403 128 540 -52 26 -144 38 -193 25z m160
                        -28 c65 -22 136 -93 158 -158 76 -222 -126 -424 -348 -348 -31 10 -67 34 -95
                        63 -107 106 -107 274 0 381 75 75 181 98 285 62z"
                />
                <path
                  d="M252 550 c-52 -12 -109 -56 -139 -107 -39 -67 -39 -159 0 -226 15
                        -26 32 -47 37 -47 14 0 13 17 -1 26 -21 13 -49 89 -49 134 0 113 97 210 210
                        210 22 0 40 5 40 10 0 11 -50 12 -98 0z"
                />
                <path
                  d="M385 530 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8 0
                        -12 -4 -9 -10z"
                />
                <path
                  d="M440 502 c0 -5 10 -17 21 -28 70 -62 76 -205 12 -276 -9 -10 -13 -21
                        -9 -25 12 -13 45 39 62 96 21 68 7 140 -37 200 -27 38 -49 52 -49 33z"
                />
                <path
                  d="M257 422 c-18 -20 -22 -42 -8 -42 5 0 11 9 14 21 5 17 12 20 49 17
                        42 -3 43 -4 46 -41 3 -33 0 -39 -29 -55 -44 -23 -89 -67 -89 -86 0 -13 13 -16
                        70 -16 40 0 70 4 70 10 0 6 -27 10 -61 10 -73 0 -74 12 -3 53 27 16 52 34 56
                        41 14 21 8 73 -10 89 -25 23 -85 22 -105 -1z"
                />
                <path
                  d="M200 144 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10
                        -7 -10 -16z"
                />
                <path
                  d="M400 151 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
                        -10 -4 -10 -9z"
                />
                <path
                  d="M250 125 c0 -8 2 -15 4 -15 2 0 6 7 10 15 3 8 1 15 -4 15 -6 0 -10
                        -7 -10 -15z"
                />
                <path
                  d="M300 120 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0
                        -10 -9 -10 -20z"
                />
                <path
                  d="M356 125 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0 -7
                        -7 -4 -15z"
                />
              </g>
            </svg>

            <h3 style={{ color: mainColor }}>{quality2}</h3>
            <p>{qualitydescription2}</p>
          </div>

          <div className="difCards">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64.000000 64.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill={secondaryColor}
                stroke="none"
              >
                <path
                  d="M255 601 c-84 -22 -154 -80 -196 -161 -34 -66 -33 -176 3 -245 54
                        -103 146 -159 258 -159 300 0 395 403 128 540 -52 26 -144 38 -193 25z m160
                        -28 c65 -22 136 -93 158 -158 76 -222 -126 -424 -348 -348 -31 10 -67 34 -95
                        63 -107 106 -107 274 0 381 75 75 181 98 285 62z"
                />
                <path
                  d="M262 540 c-52 -12 -109 -56 -139 -107 -39 -67 -39 -159 0 -226 15
                        -26 32 -47 37 -47 14 0 13 17 -1 26 -21 13 -49 89 -49 134 0 113 97 210 210
                        210 22 0 40 5 40 10 0 11 -50 12 -98 0z"
                />
                <path
                  d="M395 520 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8 0
                        -12 -4 -9 -10z"
                />
                <path
                  d="M450 492 c0 -5 10 -17 21 -28 70 -62 76 -205 12 -276 -9 -10 -13 -21
                        -9 -25 12 -13 45 39 62 96 21 68 7 140 -37 200 -27 38 -49 52 -49 33z"
                />
                <path
                  d="M267 412 c-18 -20 -22 -42 -8 -42 5 0 11 9 14 21 5 17 12 20 49 17
                        42 -3 43 -4 43 -38 0 -33 -2 -35 -37 -38 -21 -2 -38 -7 -38 -12 0 -5 17 -10
                        38 -12 35 -3 37 -5 37 -38 0 -34 -1 -35 -43 -38 -37 -3 -44 0 -49 17 -6 23
                        -23 29 -23 8 0 -43 92 -64 123 -29 20 22 22 63 5 80 -9 9 -9 15 0 24 18 18 14
                        63 -6 81 -25 23 -85 22 -105 -1z"
                />
                <path
                  d="M210 134 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10
                        -7 -10 -16z"
                />
                <path
                  d="M410 141 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
                        -10 -4 -10 -9z"
                />
                <path
                  d="M260 115 c0 -8 2 -15 4 -15 2 0 6 7 10 15 3 8 1 15 -4 15 -6 0 -10
                        -7 -10 -15z"
                />
                <path
                  d="M310 110 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0
                        -10 -9 -10 -20z"
                />
                <path
                  d="M366 115 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0 -7
                        -7 -4 -15z"
                />
              </g>
            </svg>

            <h3 style={{ color: mainColor }}>{quality3}</h3>
            <p>{qualitydescription3}</p>
          </div>
        </div>
        <button onClick={onClick} style={{ backgroundColor: secondaryColor }} className='btn'>Vamos conversar!</button>
      </div>
    </Container>
  );
}
export {ThirdSection};
