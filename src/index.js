import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  StateProvider } from './components/StateProvider';
import reducer, { initialState } from './components/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>
);

