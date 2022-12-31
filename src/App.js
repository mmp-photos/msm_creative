// PRIMARY FILE FOR NUCAMP SITE CREATES THE SITE BY ARRANGING ALL COMPONENTS //

// IMPORTS //
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import TestPage from './pages/TestPage';

// PAGE CONSTRUCTION START //
function App() {
  return (
    <div className="App" style={{width: "100%"}}>
      <Header />
        <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path="contact" element = {<ContactPage />} />
            <Route path="about" element = {<AboutPage />} />
            <Route path="services" element = {<ServicesPage />} />
            <Route path="portfolio" element = {<PortfolioPage />} />
            <Route path="portfolio/:portId"
                element={<PortfolioPage />} />
            <Route path="test" element = {<TestPage />} />
        </Routes>
      <Footer />
    </div>
  );
}
// PAGE CONSTRUCTION END //

// EXPORT STATEMENT //
export default App;
