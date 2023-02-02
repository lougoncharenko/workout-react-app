import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../scripts/fetchData';
import ExerciseCard from './exerciseCard';

type ExercisesTypes = {
    exercises:  any;
    setExercises: any;
}

const Exercises = ({ exercises, setExercises }: ExercisesTypes) => { 
    const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event:any, value:any) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };
    return (
        <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
          <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercise:string, idx:number) => (
              <ExerciseCard key={idx} exercise={exercise} />
            ))}
          </Stack>
          <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
            {exercises.length > 9 && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
          </Stack>
        </Box>
      );
}

export default Exercises;