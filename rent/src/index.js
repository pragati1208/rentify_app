//import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Recidencies from './Components/Residencies';
import Seller from './Components/seller';
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "/login",
    element: (<Login/>),
  },
  {
    path: "/signup",
    element: (<Signup/>),
  },
  {
    path: "/buyer page",
    element: (<Recidencies/>),
  },

  {
    path: "/seller page",
    element: (<Seller/>),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
//reportWebVitals();