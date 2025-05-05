// src/App.jsx (Sin DemoDialogProvider)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import LandingPage from './pages/landing';
import './styles/global.css';
// Elimina esta línea:
// import { DemoDialogProvider } from './components/DemoDialog';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Elimina el DemoDialogProvider */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;