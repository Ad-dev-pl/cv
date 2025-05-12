import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Calendar from './pages/Calendar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';
import CalendarPage from './pages/Calendar';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Router>
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box flexGrow={1}>
        <AnimatedRoutes />
      </Box>
      <Footer />
    </Box>
  </Router>
);

export default App;
