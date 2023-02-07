import React from 'react';

  export default function WorkoutPlan({data}) {
    
    return (
      <>
     <div>{data === null? null: data.message}</div>
     </>
    )
  }
  