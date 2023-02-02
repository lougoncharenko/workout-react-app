
import React, { useState } from 'react';
import SearchExercises from '../components/searchbar';

export default function Workout() {
  const [exercises, setExercises] = useState([]);

    return (
      <section className='workout-container'> 
         <SearchExercises setExercises={setExercises}/>
      {/* // <Exercises setExercises={setExercises} exercises={exercises}  /> */}
      </section>
   
    )
  }