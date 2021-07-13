import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import HC9 from './components/HC9/HC9';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <HC9 />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
