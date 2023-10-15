/* eslint-disable react/jsx-key */
import React, { useState} from 'react';

import {
  ColorOption, ColorPicker,
} from './styles';

// interface IColorPickerProps {
//   main?: string;
//   second?: string;
//   accent?: string;
// }


function ColorPickerComponent(): JSX.Element {
  const [mainColor, setMainColor] = useState<string>('#034AA3');
  const [secondaryColor, setSecondaryColor] = useState<string>('#034AA3');
  const [accentColor, setAccentColor] = useState<string>('#034AA3');

  const [options, setoptions] = useState([
    { mainColor: '#013759', secondaryColor: '#378DBD', accentColor:'#EBF2F3', title: 'Profundeza' },
    { mainColor: '#3D5E63', secondaryColor: '#85BDB0', accentColor:'#E3E0E7', title: 'Serenidade' },
    { mainColor: '#691FB1', secondaryColor: '#5F90D3', accentColor:'#A0FCDD', title: 'Encanto' },
    { mainColor: '#4B5556', secondaryColor: '#5F7880', accentColor:'#D3D5D4', title: 'Elegância' },
    { mainColor: '#000000', secondaryColor: '#3D94B0', accentColor:'#F5F5F5', title: 'Contraste' },
    { mainColor: '#50000B', secondaryColor: '#720026', accentColor:'#DFD0C7', title: 'Paixão' },
    { mainColor: '#626262', secondaryColor: '#04283E', accentColor:'#CFEEFF', title: 'Equilíbrio' },
    { mainColor: '#B8365F', secondaryColor: '#406950', accentColor:'#C4E1DA', title: 'Harmonia' },
    { mainColor: '#5A8D6C', secondaryColor: '#D2DCC4', accentColor:'#FBF5E5', title: 'Renovação' },
    { mainColor: '#3A096A', secondaryColor: '#1B65BD', accentColor:'#EBF2F3', title: 'Profundidade' },
    { mainColor: '#4B1B31', secondaryColor: '#AC779D', accentColor:'#FFE4E4', title: 'Amoroso' },
    { mainColor: '#FF5733', secondaryColor: '#C70039', accentColor:'#FFEFBC', title: 'Vibrante' },
    { mainColor: '#E1AD01', secondaryColor: '#035956', accentColor:'#C0DDC7', title: 'Resplendor' },
    { mainColor: '#383333', secondaryColor: '#9D7968', accentColor:'#EEEBE9', title: 'Intemporal' },
    { mainColor: '#331609', secondaryColor: '#792600', accentColor:'#EEEBE9', title: 'Aconchego' },
  ]);

  const handleColorChange = (main: string, secondary: string, accent: string) => {
    setMainColor(main);
    setSecondaryColor(secondary);
    setAccentColor(accent);
  };

  return (
    <>
      <ColorPicker style={{ backgroundColor: mainColor }}>
        <div className="options">
          {options.map((opt) => (
            <div
              className={mainColor  === opt.mainColor ? 'selected' : 'non-selected'}
              onClick={() => {
                if (opt.mainColor !== undefined && opt.secondaryColor !== undefined && opt.accentColor !== undefined) {
                  setMainColor(opt.mainColor);
                  setSecondaryColor(opt.secondaryColor);
                  setAccentColor(opt.accentColor);
                }
              }}
            >
              <ColorOption>
                <div className='mainColor' style={{ backgroundColor: opt.mainColor }}></div>
                <div className='secondaryColor' style={{ backgroundColor: opt.secondaryColor }}></div>
                <div className='accentColor' style={{ backgroundColor: opt.accentColor }}></div>
              </ColorOption>
              <h1>{opt.title}</h1>
            </div>
          ))}
        </div>

        { secondaryColor == '#034AA3' ? (
          <></>
        ) : (
          <div className='colorDemonstration'>
            <div className='demonstrationWrapper'>
              <div className='exampleSecondary' style={{ backgroundColor: secondaryColor }}></div>
              <h4>Cor secundária</h4>
            </div>

            <div className='demonstrationWrapper'>
              <div className='exampleAccent' style={{ backgroundColor: accentColor }}></div>
              <h4>Cor de destaque</h4>
            </div>
          </div>
        )}
      </ColorPicker>
    </>
  );
}

export { ColorPickerComponent };
