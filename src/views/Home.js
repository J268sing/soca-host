import React from 'react';

import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Teams from './Teams';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      
      
      <Teams topDivider />
      <Cta split />
    </>
  );
}

export default Home; 

//<FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />