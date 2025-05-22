import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
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
import RoadIncidentsPage from './routes/roadincidents';

const App = () => {

   const { isAuthenticated, loginWithRedirect, logout, isLoading, user } = useAuth0();

   

  return (
    <BrowserRouter basename="/patrolx-interface">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="calls" element={<CallsPage />} />
          <Route path="incidents" element={<IncidentsPage />} />
          <Route path="trafficstops" element={<TrafficStopsPage />} />
          <Route path="crashlocations" element={<CrashLocationsPage />} />
          <Route path="roadincidents" element={<RoadIncidentsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
