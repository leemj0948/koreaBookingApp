import React from 'react';
// import ReactDOM from 'react-dom/client';
import Router from './Router';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={<Theme />}>
    <GlobalStyle />
    <Header />
    <Router />
    <Footer />
  </ThemeProvider>
);
