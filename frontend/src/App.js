import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OutfitProvider } from './context/OutfitContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Outfits from './pages/Outfits';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <OutfitProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/outfits" element={<Outfits />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </OutfitProvider>
  );
}

export default App;