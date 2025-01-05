import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LogEvent } from './pages/LogEvent';
import { History } from './pages/History';

const root = document.getElementById('root');
createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<LogEvent />} />
        <Route path="history" element={<History />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
