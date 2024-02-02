import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './app/store';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { peopleApi } from "./features/apiSlice";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={peopleApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);