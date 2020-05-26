import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {BizProvider} from './providers/BizProvider';


ReactDOM.render(
  <React.StrictMode>
    <BizProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BizProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


