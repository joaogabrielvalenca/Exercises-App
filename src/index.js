import ReactDOM from 'react-dom';
import React from 'react'; 
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);