
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SemesterPage from './pages/SemesterPage';
import ResourcesPage from './pages/ResourcesPage';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/semester/:id" element={<SemesterPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
};

export default App;
