import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './style.css';

const root = document.getElementById("root");
root ? ReactDom.render(<App/>, root) : null;

module.hot.accept();