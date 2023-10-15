import React from 'react';
import { Skeleton } from '@mui/material';

interface ILoadingProps {
  loading: any;
  component: any;
  width?: string;
  height: string;
}

function LoadingComponent({ loading, component, height, width = '100%' }: ILoadingProps): JSX.Element {
  return (
    <>
      { loading ? (
        <>
          <Skeleton variant="rectangular" width={width} height={height} />
        </>
      ):(
        component
      )}
    </>
  );
}

export { LoadingComponent };
