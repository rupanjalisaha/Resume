import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Art from './pages/Art';
import Writing from './pages/Writing';
import Contact from './pages/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Art",
    element: <Art/>
  },
  {
    path: "Writing",
    element: <Writing/>
  },
  {
    path: "Contact",
    element: <Contact/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
