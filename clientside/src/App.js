import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Encoder from './components/Encoder';
import Decoder from './components/Decoder';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/Encode" element={<Encoder />} />
        <Route path="/Decode" element={<Decoder />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
