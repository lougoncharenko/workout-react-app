import React, { useState } from 'react';

import { exerciseOptions, fetchData } from '../scripts/fetchData';
import '../styles/searchExercises.css'

const SearchExercises = () => {
  const [search, setSearch] = useState<string>('')
	const [type, setType] = useState<string>('')
	const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    console.log(search)
		console.log(type)
      if (search)  {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
				const searchedExercises = exercisesData.filter(
					(item:any) => item.name.toLowerCase().includes(search)
					&& item.equipment.toLowerCase().includes(type)
				)
        console.log(searchedExercises)
				console.log(searchedExercises[1])
				setSearch('')
			}	
    }

   return (
    <section className='search-container'>
        <div className='heading'>Search for Exercises:</div>
        <section className='text-field-container'>
          <input 
          type="text" 
          value = {search} 
          placeholder="Search Exercises"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
					<select
					onChange={(e) => setType(e.target.value.toLowerCase())}
					value = {type}
					>
						<option>Please choose one option</option>
						<option value= "Band"> Band </option>
						<option value= "Barbell"> Barbell </option>
						<option value = 'body weight'> Body Weight </option>
						<option value = 'cable'> Cable </option>
						<option value = 'dumbbell'> Dumbbell </option>
						<option value = 'kettlebell'> Kettlebell </option>
					</select>
          <button
          onClick={handleSearch}
          >Search</button>
        </section>
    </section>
    )
}

export default SearchExercises;