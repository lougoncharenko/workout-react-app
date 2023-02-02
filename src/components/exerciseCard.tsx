import React from 'react';
import '../styles/exerciseBox.css';

// fix type later
type ExersciseCardProps = {
    exercise: any; 
}

const ExerciseCard = ({ exercise }: ExersciseCardProps) => (
  <section className='exercise-section'>
    <img src={exercise.gifUrl} alt={exercise.name} />
		<div className='exercise-row'>
			<button className='exercise-body-part'> {exercise.bodyPart} </button>
			<button className='exercise-target'> {exercise.target}</button>
		</div>
		<div className='exercise-name'> {exercise.name} </div>
  </section>
)

export default ExerciseCard;
