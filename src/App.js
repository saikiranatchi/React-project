import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import Destination from './components/Destination';
import Footer from './components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <div>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <div className="container mt-4">
      <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login handleLogin={handleLogin} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destination" element={<Destination />} />
          </Routes>
      </div>
      <Footer />
      </div>
    </Router>
  );
}
export default App;