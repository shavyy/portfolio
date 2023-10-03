import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Ressources} from './components';
import {LegalNotice} from './components';
import {Policy} from './components';

const router = createBrowserRouter ([
  {
    path:"/portfolio",
    element: <App />, 
  },
  {
    path:"/portfolio/Ressources",
    element: <Ressources />, 
  },
  {
    path:"/portfolio/Policy",
    element: <Policy />, 
  },
  {
    path:"/portfolio/LegalNotice",
    element: <LegalNotice />, 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);