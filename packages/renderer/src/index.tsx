import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const domNode = document.getElementById('app');

if (!domNode) throw new Error('No dom node found');

const root = createRoot(domNode);
root.render(<App />)