import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from 'react-router-dom';
import {Ressources} from './components';
import {LegalNotice} from './components';
import {Policy} from './components';
import {PageNotFound} from './components';

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route exact path="/">
      <Route exact path="/" element={<App />}/>
      <Route exact path="/Ressources" element={<Ressources />}/>
      <Route exact path="/Policy" element={<Policy />}/>
      <Route exact path="/LegalNotice" element={<LegalNotice />}/>
      <Route exact path="*" element={<PageNotFound />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
      <Outlet/>
  </React.StrictMode>
);