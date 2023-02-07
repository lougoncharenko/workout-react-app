import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import '../styles/loader.css'

const Loader = () => (
    <section className="loaderContainer">
      <InfinitySpin color="grey" />
    </section>
  );
  
  export default Loader;