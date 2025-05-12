import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CustomThemeProvider } from './theme/ColorModeContext';

const root = createRoot(document.getElementById('root')!);
root.render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>
);
