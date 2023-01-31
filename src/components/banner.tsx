import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import '../styles/banner.css'

//   const HomeImage = () => {
//     return (
//         <div className='bannercontainer'>
//             <section className='column-one'>
//                 <div className='motto'>
//                     Train Harder <br />
//                     Than Last Time.
//                 </div>
//                 <div className='caption'>
//                     <p> Click the button below to check out the most effective exercises personalized to you</p>
//                 </div> 
//                 <div className='button-holder'>
//                     <button> Explore Exerscises</button>
//                 </div>
//             </section>
//             <div>
//             <img src='https://media.istockphoto.com/id/615883260/photo/difficult-doesnt-mean-impossible.jpg?s=612x612&w=0&k=20&c=cAEJvjTFRuF9H9gRov1Aj4X4I6xV6DSvMwWsf-2IW-0=' alt="hero-banner" className="hero-banner-img" />
//             </div>
//         </div>
   
//     )
//   }

  const HomeImage = () => (
        <Box  sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
            Train Harder <br />
            Than Last Time.
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
                Check out the most effective exercises personalized to you
            </Typography>
            <Stack>
                <a href="#exercises" 
                style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: 'darkred', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}
                >Explore Exercises</a>
            </Stack>
        </Box>
  );
  
  export default HomeImage;
