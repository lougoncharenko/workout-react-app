import React, {useState, useEffect} from 'react';
import '../styles/exerciseBox.css';

// fix type later
type ExersciseCardProps = {
    exercise: any; 
}

const ExerciseCard = ({ exercise }: ExersciseCardProps) => {
const [workoutplan, setWorkoutplan] = useState([{}])

// useEffect(()=> {
//     async function sendData() {
//     const res = await fetch("http://localhost:3001//data", {mode: "cors"})
//     const json = await res.json() 
//     setData(json)
// } sendData()
// }, [])

const handleClick = () => {
setWorkoutplan(exercise)
console.log(workoutplan)
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
