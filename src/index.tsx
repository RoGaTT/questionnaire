import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app';

// Amplify.Logger.LOG_LEVEL = 'DEBUG';

const Component = () => (
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);

ReactDOM.render(<Component />, document.getElementById('root'));
