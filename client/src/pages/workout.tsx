
import React, { useState } from 'react';
import SearchExercises from '../components/searchbar';
import Exercises from '../components/exercise';

export default function Workout({setData}) {
  const [exercises, setExercises] = useState([]);

    return (
      <section className='workout-container'> 
         <SearchExercises setExercises={setExercises}/>
        <Exercises setExercises={setExercises} exercises={exercises}  /> 
      </section>
   
    )
  }