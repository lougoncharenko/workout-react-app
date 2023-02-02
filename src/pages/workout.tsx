
import React, { useState } from 'react';
import SearchExercises from '../components/searchbar';

export default function Workout() {
  const [exercises, setExercises] = useState([]);

    return (
      <SearchExercises setExercises={setExercises}/>
    )
  }