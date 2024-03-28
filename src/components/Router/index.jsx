import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';

import React from 'react';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
