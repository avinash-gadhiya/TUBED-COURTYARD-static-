import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Pages
import Home from '../pages/Home/Home';
import OurStory from '../pages/OurStory/OurStory';
import Menu from '../pages/Menu/Menu';
import Experience from '../pages/Experience/Experience';
import Gallery from '../pages/Gallery/Gallery';
import ReserveTable from '../pages/ReserveTable/ReserveTable';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

export default function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reserve" element={<ReserveTable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
