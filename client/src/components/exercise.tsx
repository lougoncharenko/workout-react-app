import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack } from '@mui/material';
import ExerciseCard from './exerciseCard';
import { InfinitySpin } from 'react-loader-spinner';
import Loader from './loader';

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

  if (!currentExercises.length) return <Loader />; 

    return (
        <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
          <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercise:string, idx:number) => (
              <ExerciseCard key={idx} exercise={exercise}/>
            ))}
          </Stack>
          <div>
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
          </div>
        </Box>
      );
}

export default Exercises;