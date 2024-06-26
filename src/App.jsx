import { useState, useLocation } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Link, ScrollRestoration } from 'react-router-dom';
import Header from './components/layout/header'
import Footer from './components/layout/footer';
import HomePage from './routes/home';
import CallsPage from './routes/calls'
import CallPage from './routes/calls/call';
import GoToTop from './components/layout/gototop';

import DevPage from './routes/dev';


const PageLayout = () => (
  <>
  
    <header>
      <Header />
    </header>
    <Outlet />
    <footer>
      <Footer />
    </footer>
    <GoToTop />
  </>
);

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "calls/",
        element: <CallsPage />,
      },
      {
        path: "call/",
        element: <CallPage />,
      },
      {
        path: "dev/",
        element: <DevPage />,
      },
      // {
      //   path: "adsb/",
      //   element: <AdsbPage />,
      // },
      // {
      //   path: "adsb/flight",
      //   element: <FlightPage />,
      // },
      // {
      //   path: "incidents/",
      //   element: <IncidentsPage />,
      // }
    ]
  },

]);


function App() {
  console.log("app loading ...")
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

