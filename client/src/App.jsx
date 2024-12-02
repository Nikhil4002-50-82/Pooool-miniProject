import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import SafeFromScams from './components/SafeFromScams';
import Search from './components/Search';

import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  return (
    <div className='font-custom'>
      <BrowserRouter>
      <Header />
      <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/safeFromScams" element={<SafeFromScams />} />
            <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


