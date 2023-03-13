import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemRoot from './routes/item';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/type/:id',
    element: <Root />,
  },
  {
    path: '/product/:id',
    element: <ItemRoot />,
  },
  {
    path: 'type/fire/product/:id',
    element: <ItemRoot />,
  },
  {
    path: 'type/water/product/:id',
    element: <ItemRoot />,
  },
  {
    path: 'type/electric/product/:id',
    element: <ItemRoot />,
  },
  {
    path: 'type/legend/product/:id',
    element: <ItemRoot />,
  },
  {
    path: 'type/plant/product/:id',
    element: <ItemRoot />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
