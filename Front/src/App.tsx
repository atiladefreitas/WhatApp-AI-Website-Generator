import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './Routes/animatedRoutes';

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
