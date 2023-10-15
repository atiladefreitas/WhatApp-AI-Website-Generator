import React from 'react';
import { Container, IconWrapper } from './styles';
import { GrInstagram } from 'react-icons/gr';
import { AiFillInstagram } from 'react-icons/ai';
import Insta from '../../../../../assets/social/insta.png';
import Face from '../../../../../assets/social/face.png';
import Whats from '../../../../../assets/social/whats.png';
import Tiktok from '../../../../../assets/social/tiktok.png';
import Youtube from '../../../../../assets/social/youtube.png';

interface IHeaderSectionProp {
  photoBase64?: string;
  secondaryColor?: string;
  name: string;
  insta: string;
  face?: string;
  whats?: string;
  color: string;
  youtube?:string;
  tiktok?: string;
}

function HeaderSection({ photoBase64, secondaryColor, name, insta, whats, face, color, youtube, tiktok }: IHeaderSectionProp): JSX.Element {
  return (
    <Container style={{ justifyContent: insta || whats || face ?  'space-between' : 'center'}} bgColor={color}>
      {
        photoBase64 === '' ? (

          <h1 style={{ color: secondaryColor }}>{name}</h1>
        ): (
          <img className="logo" src={photoBase64}/>
        )
      }
      <IconWrapper>
        {insta === '' ? (
          <></>
        ) : (
          <a className='icon' href={`https://instagram.com/${insta}`} target='blank'>
            <img className='badge' src={Insta} />
            {
              face === '' || face === undefined ||
                    whats != '' || whats === undefined ||
                    tiktok === '' || tiktok === undefined ||
                    youtube === '' || youtube === undefined
                ? (
                  <>
                  </>
                ):(
                  <p>@{insta}</p>
                )
            }
          </a>
        )}
        {
          face === '' || face === undefined ? (
            <>
            </>
          ) : (
            <a className='icon' href={face} target='blank'>
              <img className='badge' src={Face} />
            </a>
          )
        }
        {
          tiktok === '' || tiktok === undefined ? (
            <>
            </>
          ) : (
            <a className='icon' href={tiktok} target='blank'>
              <img className='badge' src={Tiktok} />
            </a>
          )
        }
        {
          youtube === '' || youtube === undefined ? (
            <>
            </>
          ) : (
            <a className='icon' href={youtube} target='blank'>
              <img className='badge' src={Youtube} />
            </a>
          )
        }
        {
          whats === '' || whats === undefined ? (
            <>
            </>
          ) : (
            <a className='icon' href={`https://wa.me/${whats}`} target='blank'>
              <img className='badge' src={Whats} />
            </a>
          )
        }
      </IconWrapper>
    </Container>
  );
}

export { HeaderSection };
