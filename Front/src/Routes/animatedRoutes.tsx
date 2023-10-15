import React, { useEffect, useState } from 'react';
import { Routes, useLocation, Route } from 'react-router-dom';

import { Contact } from '../types';
import NewLayout from '../pages/NewLayout';
import axios from 'axios';

import VizeLayout from '../pages/VizeLayout/Products';
import PaginaLegado from '../pages/OldLayout/Products';
import NewBannerSite from '../pages/OldLayout/Products';

import { LoadingPage } from '../pages/Components/LoadingPage';
import { NewForm } from '../pages/NewForm';

export default function AnimatedRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(true);

  // if (loading) {
  //   return <LoadingPage />;
  // }

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/:id" element={<NewLayout />} />

      <Route path="/forms/:id" element={<NewForm />} />
    </Routes>
  );
}

type typeofAnimatedRoutes = typeof AnimatedRoutes;
