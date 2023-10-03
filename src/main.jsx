import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider, HashRouter } from 'react-router-dom';
import {Ressources} from './components';
import {LegalNotice} from './components';
import {Policy} from './components';

const router = createBrowserRouter ([
  {
    path:"/",
    element: <App />, 
  },
  {
    path:"Ressources",
    element: <Ressources />, 
  },
  {
    path:"Policy",
    element: <Policy />, 
  },
  {
    path:"LegalNotice",
    element: <LegalNotice />, 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <RouterProvider router={router}/>
    </HashRouter>
  </React.StrictMode>
);