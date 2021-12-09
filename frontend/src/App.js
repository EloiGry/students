import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './pages/Form';
import Home from './pages/Home';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
