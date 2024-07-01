import { useState, useLocation } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet, Link, ScrollRestoration } from 'react-router-dom';
import Header from './components/layout/header'
import Footer from './components/layout/footer';
import HomePage from './routes/home';
import CallsPage from './routes/calls'
import CallPage from './routes/calls/call';
import IncidentsPage from './routes/incidents';
import IncidentPage from './routes/incidents/incident';
import ArrestsPage from './routes/arrests';
import ArrestPage from './routes/arrests/arrest';
import GoToTop from './components/layout/gototop';


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
        path: "incidents/",
        element: <IncidentsPage />,
      }
      ,
      {
        path: "incident/",
        element: <IncidentPage />,
      },
      {
        path: "arrests/",
        element: <ArrestsPage />,
      }
      ,
      {
        path: "arrest/",
        element: <ArrestPage />,
      }
      // {
      //   path: "adsb/",
      //   element: <AdsbPage />,
      // },
      // {
      //   path: "adsb/flight",
      //   element: <FlightPage />,
      // },

    ]
  },

]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

