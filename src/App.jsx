import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import ArrestsPage from './routes/arrests';
import CallsPage from './routes/calls';
import CrashLocationsPage from './routes/crashes';
import HomePage from './routes/home';
import IncidentsPage from './routes/incidents';
import RoadIncidentsPage from './routes/roadincidents';
import TrafficStopsPage from './routes/traffic';

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
          <Route path="arrests" element={<ArrestsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
