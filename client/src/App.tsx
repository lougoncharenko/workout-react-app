import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Workout from './pages/workout';
import WorkoutPlan from './pages/myworkoutplan';
import { Route, Routes } from "react-router-dom"

function App() {
  const [data, setData] = useState(null)

  useEffect(()=> {
    async function fetchData() {
    const res = await fetch("http://localhost:3001/api", {mode: "cors"})
    const json = await res.json() 
    setData(json)
} fetchData()
}, [])
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Workout setData={setData} />} />
          <Route path="/plan" element={<WorkoutPlan data={data}  />} />
        </Routes>
      </div>
    
    </>
  )
}

export default App;
