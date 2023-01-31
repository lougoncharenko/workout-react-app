import React from 'react';
import '../styles/home.css'
import HomeImage from '../components/banner';

export default function Home() {
    return (
     <div>
      <div className='cover-photo'>
        {/* cover image goes here */}
      </div>
      <HomeImage />
    </div> 
    )
  
  }