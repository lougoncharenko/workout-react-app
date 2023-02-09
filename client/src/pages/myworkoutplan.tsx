import React from 'react';
import ExerciseCard from '../components/exerciseCard';

  export default function WorkoutPlan({data}) {
    
    return (
      <>
     {data === null? null: data.map((exercise:string, idx:number) => 
      <ExerciseCard key={idx} exercise={exercise}/>
      )}
     </>
    )
  }
  