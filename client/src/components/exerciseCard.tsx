import React, {useState, useEffect} from 'react';
import '../styles/exerciseBox.css';
import axios from "axios"

// fix type later
type ExersciseCardProps = {
    exercise: any; 
}

const ExerciseCard = ({ exercise }: ExersciseCardProps) => {
const [workoutplan, setWorkoutplan] = useState({
	name: exercise.name,
	gif: exercise.gifUrl,
	bodyPart: exercise.bodyPart,
	target: exercise.target
})

const handleClick = () => {
	console.log("hello")
setWorkoutplan(prevExercise => {
	return {
		...prevExercise,
		exercise
	}
})
console.log(workoutplan)
const newExercise = {
	name: exercise.name,
    gifUrl: exercise.gifUrl,
    bodypart: exercise.bodyPart,
    target: exercise.target
}
fetch('http://localhost:3001/create', {
  method: "POST",
  body: JSON.stringify(newExercise),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json));

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.post('http://localhost:3001/create', newExercise)


}
return (
  <section className='exercise-section'>
    <img src={exercise.gifUrl} alt={exercise.name} />
		<div className='exercise-row'>
			<button className='exercise-body-part'> {exercise.bodyPart} </button>
			<button className='exercise-target'> {exercise.target}</button>
		</div>
		<div className='exercise-name'> {exercise.name} </div>
		<div className='button-container'>
				<button 
				className='add'
				onClick={handleClick}
				> Add to Workout plan
				</button>
		</div>
	
  </section>
 )
}

export default ExerciseCard;
