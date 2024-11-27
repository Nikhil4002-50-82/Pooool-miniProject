import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SafeFromScams from './components/SafeFromScams';


const App = () => {
  return (
    <div className='font-custom'>
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/safeFromScams" element={<SafeFromScams />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
