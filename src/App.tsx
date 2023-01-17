import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Workout from './pages/workout';
import Articles from './pages/articles';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Navbar /> 
    <div className='container'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Workout />} />
          <Route path="/about" element={<Articles />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
