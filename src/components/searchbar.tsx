import React from 'react';

// import { exerciseOptions, fetchData } from '../scripts/fetchData';
import '../styles/searchExercises.css'

const SearchExercises = () => {
   return (
    <section className='search-container'>
        <div className='heading'>Search for Exercises:</div>
        <section className='text-field-container'>
           <input type="text"  placeholder="Search Exercises"/>
            <button>Search</button>
        </section>
    </section>
    )
}

export default SearchExercises;