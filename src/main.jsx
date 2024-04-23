import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Layout/Root';
import Homepage from './Pages/Home/Homepage';
import AddCoffee from './Pages/AddCoffee/AddCoffee';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element:<Homepage/>
      },
      {
        path: '/addcoffee',
        element:<AddCoffee/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
