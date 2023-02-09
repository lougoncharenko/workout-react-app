import React from 'react';
import '../styles/exerciseBox.css';

// fix type later
type ExersciseCardProps = {
    exercise: any; 
}

const WorkoutPlanCard = ({ exercise }: ExersciseCardProps) => {

const handleDelete = () => {
    console.log("delete")
// const newExercise = {
// 	name: exercise.name,
//     gifUrl: exercise.gifUrl,
//     bodypart: exercise.bodyPart,
//     target: exercise.target
// }
// fetch('http://localhost:3001/create', {
//   method: "POST",
//   body: JSON.stringify(newExercise),
//   headers: {"Content-type": "application/json; charset=UTF-8"}
// })
// .then(response => response.json()) 
// .then(json => console.log(json));

}
return (
  <section className='exercise-section'>
    <img src={exercise.gifUrl} alt={exercise.name} />
		<div className='exercise-row'>
			<button className='exercise-body-part'> {exercise.bodypart} </button>
			<button className='exercise-target'> {exercise.target}</button>
		</div>
		<div className='exercise-name'> {exercise.name} </div>
		<div className='button-container'>
				<button 
				className='delete'
				onClick={handleDelete}
				> Delete Exercise
				</button>
		</div>
	
  </section>
 )
}

export default WorkoutPlanCard;
