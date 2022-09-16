import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaySuccess from './pages/body/PaySuccess';
import Main from './pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/paysuccess" element={<PaySuccess />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
