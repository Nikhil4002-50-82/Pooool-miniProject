import React,{useContext, useState} from 'react';

import PublishRideComponent from './PublishRideComponent';

import { pickUpLocContext } from '../context/RiderContext';

import Footer from '../Footer/Footer';

const PublishRide = () => {

  const {pickUpLoc,setPickUpLoc}=useContext(pickUpLocContext);

  return (
    <div className='h-[auto]'>
        <PublishRideComponent title="Pick-up" setUp={setPickUpLoc} set={pickUpLoc} to="/dropRide" />
        <Footer />
    </div>
  );
}

export default PublishRide;
