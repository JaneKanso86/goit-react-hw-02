import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App/App.jsx';
import 'modern-normalize';

createRoot(document.getElementById('root')).render(<App />);
