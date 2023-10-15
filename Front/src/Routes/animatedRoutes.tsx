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

import GaioMainPage from '../pages/Main/NewLayout';

export default function AnimatedRoutes() {
  const location = useLocation();

  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get<Contact>(
          `${
            import.meta.env.VITE_MAIN_API_URL
          }/findByConvertedName/${location.pathname.replace(/^\/(.*)/, '$1')}`
        );
        setData(response.data);
      } catch (erro) {
        throw 'error';
      } finally {
        setLoading(false);
      }
    }
    fetchData()
      .then(() => {
        console.log('Data fetched!!');
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Routes location={location} key={location.pathname}>
      {data?.origin === 'gaio' ? (
        <Route path="/:id" element={<NewLayout />} />
      ) : data?.origin === 'gaio-2' ? (
        <Route path="/:id" element={<VizeLayout />} />
      ) : data?.origin === 'vize' ? (
        <Route path="/:id" element={<PaginaLegado />} />
      ) : data?.origin === 'vize-2' ? (
        <Route path="/:id" element={<NewBannerSite />} />
      ) : null}
      <Route path="/forms/:id" element={<NewForm />} />
      <Route path="/" element={<GaioMainPage />} />
    </Routes>
  );
}

type typeofAnimatedRoutes = typeof AnimatedRoutes;
