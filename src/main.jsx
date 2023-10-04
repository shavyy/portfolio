import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from 'react-router-dom';
import {Ressources} from './components';
import {LegalNotice} from './components';
import {Policy} from './components';

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route exact path="/portfolio" element={<App />}>
      <Route exact path="/portfolio/Ressources" element={<Ressources />}/>
      <Route exact path="/portfolio/Policy" element={<Policy />}/>
      <Route exact path="/portfolio/LegalNotice" element={<LegalNotice />}/>
    </Route>
  )
//    [
//    {
//     path:"/portfolio/",
//      element: <App />, 
//    },
//    {
//      path:"/portfolio/Ressources",
//      element: <Ressources />, 
//    },
//    {
//      path:"/portfolio/Policy",
//      element: <Policy />, 
//    },
//    {
//      path:"/portfolio/LegalNotice",
//      element: <LegalNotice />, 
//    },
//  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} basename={process.env.PUBLIC_URL}/>
      <Outlet/>
  </React.StrictMode>
);