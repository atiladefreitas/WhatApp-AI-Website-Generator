import { Skeleton, Stack } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Loader from '../Loader/Loader';

function LoadingPage(): JSX.Element {
  return (
    <Loading>
      <div className={'loading-wrapper'}>
        <Stack spacing={1}>
          <div className='skeletonHeaderWrapper'>
            <Skeleton variant="rectangular" width={1500} height={80} />
          </div>

          <div className='skeletonTitleWrapper'>
            <Skeleton className='skeletonTitle' variant="text" sx={{ fontSize: '8rem' }} />
          </div>

          <div className='skeletonTextWrapper'>
            <Skeleton className='skeletonText' variant="text" sx={{ fontSize: '1.5rem' }} />
          </div>

          <div className='skeletonTextWrapper'>
            <Skeleton className='skeletonText' variant="text" sx={{ fontSize: '1.5rem' }} />
          </div>

          <div className='skeletonTextWrapper'>
            <Skeleton className='skeletonText' variant="text" sx={{ fontSize: '1.5rem' }} />
          </div>


          <div className='skeletonImageWrapper'>
            <Skeleton className='skeletonImage' variant="rounded" height={250} />
          </div>

          <div className='skeletonButtonWrapper'>
            <Skeleton className='skeletonButton' variant="rounded" height={60} />
          </div>
        </Stack>

        <div className='fadeWhite'>
          <Loader/>
        </div>

      </div>
    </Loading>
  );
}

export { LoadingPage };

const Loading = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .loading-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 800px) {
      width: 100%;
      height: 100%;
    }

    & .skeletonHeaderWrapper{
      width: 95vw;
      border-radius: 8px;
      overflow: hidden;
    }

    & .skeletonTitleWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      & span{
        width: 80%;
      }
    }

    & .skeletonTextWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      & .skeletonText{
        width: 80%;
      }
    }

    & .skeletonImageWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 2rem 0;

      & .skeletonImage{
        @media screen and (max-width: 800px) {
          width: 60%;
          height: 100%;
        }
        width: 40%;
      }
    }

    & .skeletonButtonWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      & .skeletonButton{
        width: 80%;
      }
    }

    & .fadeWhite{
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(rgba(255, 255, 255, 0), rgba(255,255,255, .6) 70%, rgba(255,255,255, 1));

    }
  }
`;
