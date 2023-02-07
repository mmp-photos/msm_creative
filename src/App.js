// PRIMARY FILE FOR NUCAMP SITE CREATES THE SITE BY ARRANGING ALL COMPONENTS //

// IMPORTS //
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import PortfolioPage from './pages/PortfolioPage';
import TestPage from './pages/TestPage';
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

// PAGE CONSTRUCTION START //
function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <Header></Header>
        <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path="/contact" element = {<ContactPage />} />
            <Route path="/about" element = {<AboutPage />} />
            <Route path="/work" element = {<WorkPage />} />
            <Route path="/portfolio/:portId"
                element={<PortfolioPage />} />
            <Route path="/test" element = {<TestPage />} />
        </Routes>
      <Footer />
    </HelmetProvider>
  );
}
// PAGE CONSTRUCTION END //

// EXPORT STATEMENT //
export default App;
