import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();