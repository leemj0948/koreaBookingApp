import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaySuccess from './pages/body/PaySuccess';
import Main from './pages/Main';
import Course from './pages/body/Course';
import MyPage from './pages/body/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/mypage" element={<MyPage />} />
        <Route exact path="/course" element={<Course />} />
        <Route exact path="/paysuccess" element={<PaySuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
