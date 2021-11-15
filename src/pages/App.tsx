import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {Home} from './Home';
export const App = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);
