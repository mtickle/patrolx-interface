import { useAuth0 } from '@auth0/auth0-react';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';

// --- Dynamic/Lazy Imports (Code Splitting) ---
// Note: This automatically creates separate JS files for each route bundle.

// 1. Main Pages (Dashboard tabs)
const HomePage = React.lazy(() => import('./routes/home'));
const CallsPage = React.lazy(() => import('./routes/calls'));
const IncidentsPage = React.lazy(() => import('./routes/incidents'));
const TrafficStopsPage = React.lazy(() => import('./routes/traffic'));
const CrashLocationsPage = React.lazy(() => import('./routes/crashes'));
const RoadIncidentsPage = React.lazy(() => import('./routes/roadincidents'));
const ArrestsPage = React.lazy(() => import('./routes/arrests'));

// 2. Detail Pages (Pages with Maps/Forms - usually large)
// const CallPage = React.lazy(() => import('./routes/calls/call'));
// const IncidentPage = React.lazy(() => import('./routes/incidents/incident'));
// const CrashLocationPage = React.lazy(() => import('./routes/crashes/crash'));
// const ArrestPage = React.lazy(() => import('./routes/arrests/arrest'));
// const TrafficStopPage = React.lazy(() => import('./routes/traffic/stop'));


const App = () => {

  const { isAuthenticated, loginWithRedirect, logout, isLoading, user } = useAuth0();

  // A simple loading fallback for the Suspense boundary
  const LoadingFallback = (
    <div className="d-flex justify-content-center p-5 text-primary">
      Loading Application...
    </div>
  );

  return (
    <BrowserRouter basename="/patrolx-interface">
      {/* 🚨 Wrap the entire route tree in Suspense to handle lazy loading 🚨 */}
      <Suspense fallback={LoadingFallback}>
        <Routes>
          <Route path="/" element={<Layout />}>

            {/* Main Page Routes */}
            <Route index element={<HomePage />} />
            <Route path="calls" element={<CallsPage />} />
            <Route path="incidents" element={<IncidentsPage />} />
            <Route path="trafficstops" element={<TrafficStopsPage />} />
            <Route path="crashlocations" element={<CrashLocationsPage />} />
            <Route path="roadincidents" element={<RoadIncidentsPage />} />
            <Route path="arrests" element={<ArrestsPage />} />

            {/* Detail Routes (Added back based on our previous refactoring) */}
            {/* <Route path="calls/:id" element={<CallPage />} />
            <Route path="incidents/:id" element={<IncidentPage />} />
            <Route path="crashlocations/:id" element={<CrashLocationPage />} />
            <Route path="arrests/:id" element={<ArrestPage />} />
            <Route path="trafficstops/:id" element={<TrafficStopPage />} /> */}

            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;