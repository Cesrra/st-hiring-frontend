import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventsPage from '../pages/EventsPage';
import SettingsPage from '../pages/SettingsPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
