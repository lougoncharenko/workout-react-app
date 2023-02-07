import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import '../styles/loader.css'

const Loader = () => (
    // <section className="loaderContainer">
    //   <InfinitySpin color="grey" />
    // </section>
    <div className="loading-container">
      <div className="loading-spinner">
      </div>
    </div>
  );
  
  export default Loader;