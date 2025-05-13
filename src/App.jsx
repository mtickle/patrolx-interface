import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter, Routes, Route  } from 'react-router-dom';
import Header from './components/layout/header'
import Footer from './components/layout/footer';
import Layout from './components/layout/layout';
import HomePage from './routes/home';
import CallsPage from './routes/calls'
import CallPage from './routes/calls/call';
import IncidentsPage from './routes/incidents';
import IncidentPage from './routes/incidents/incident';
import ArrestsPage from './routes/arrests';
import ArrestPage from './routes/arrests/arrest';
import TrafficStopsPage from './routes/traffic';
import CrashLocationsPage from './routes/crashes';
import CrashLocationPage from './routes/crashes/crash';
//import GoToTop from './components/layout/gototop';

const App = () => {
  return (
<BrowserRouter basename="/patrolx-interface">
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="calls" element={<CallsPage />} />
      <Route path="incidents" element={<IncidentsPage />} />
      <Route path="trafficstops" element={<TrafficStopsPage />} />
      <Route path="crashlocations" element={<CrashLocationsPage />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Route>
  </Routes>
</BrowserRouter>

);
};

export default App;


// const PageLayout = () => (
//   <>
  
//     <header>
//       <Header />
//     </header>
//     <Outlet />
//     <footer>
//       <Footer />
//     </footer>
//     {/* <GoToTop /> */}
//   </>
// );

// const router = createBrowserRouter([
//   {
//     element: <PageLayout />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "calls/",
//         element: <CallsPage />,
//       },
//       {
//         path: "call/",
//         element: <CallPage />,
//       },
//       {
//         path: "incidents/",
//         element: <IncidentsPage />,
//       }
//       ,
//       {
//         path: "incident/",
//         element: <IncidentPage />,
//       },
//       {
//         path: "arrests/",
//         element: <ArrestsPage />,
//       }
//       ,
//       {
//         path: "arrest/",
//         element: <ArrestPage />,
//       },
//       {
//         path: "trafficstops/",
//         element: <TrafficStopsPage />,
//       },
//       {
//         path: "crashlocations/",
//         element: <CrashLocationsPage />,
//       },
//       {
//         path: "crashlocation/",
//         element: <CrashLocationPage />,
//       }
//     ]
//   },

// ]  , { basename: "/patrolx-interface" }

// );


// function App() {

//   return (
//     <>
//       <RouterProvider router={router} basename="/patrolx-interface" />
//     </>
//   )
// }

// export default App

