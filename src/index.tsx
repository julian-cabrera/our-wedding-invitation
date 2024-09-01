import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.css';
import App from './routes/App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorHandler from './routes/Error';
import ThankYou from './routes/ThankYou';
import PaymentData from './routes/PaymentData';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorHandler />
  },
  {
    path: "/thanks",
    element: <ThankYou />,
    errorElement: <ErrorHandler />
  },
  {
    path: "/paymentdata",
    element: <PaymentData />,
    errorElement: <ErrorHandler />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);