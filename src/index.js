import React from 'react';
// import ReactDOM from 'react-dom/client';
import Router from './Router';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Router />
    <Footer />
  </div>
);
