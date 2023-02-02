import React, { useEffect, useState } from 'react';

import { exerciseOptions, fetchData } from '../scripts/fetchData';
import '../styles/searchExercises.css'

const SearchExercises = () => {
  const [search, setSearch] = useState<string>('')

    
  const handleSearch = async () => {
    console.log(search)
      // if (search)  {
      //   const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      // }
			setSearch('')
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
          <button
          onClick={handleSearch}
          >Search</button>
        </section>
    </section>
    )
}

export default SearchExercises;