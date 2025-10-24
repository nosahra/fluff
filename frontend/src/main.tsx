// import * as three from 'three';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import NavBar from './NavBar.tsx';
import Landing from './Landing.tsx';


const router = createBrowserRouter([
  {
    path: "",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "about-us/",
        element: <></>
      },
      {
        path: "shop-fluffs/",
        element: <></>
      },
      {
        path: "shop-patterns/",
        element: <></>
      },
      {
        path: "basket/",
        element: <></>
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
