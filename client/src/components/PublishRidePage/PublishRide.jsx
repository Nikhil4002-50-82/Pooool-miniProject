import React,{useContext, useState} from 'react';

import PublishRideComponent from './PublishRideComponent';

import { pickUpLocContext,startCityNameRideContext } from '../context/RiderContext';

import Footer from '../Footer/Footer';

const PublishRide = () => {

  const {pickUpLoc,setPickUpLoc}=useContext(pickUpLocContext);
  const {startCityName,setStartCityName}=useContext(startCityNameRideContext);

  return (
    <div className='h-[auto]'>
        <PublishRideComponent title="Pick-up" setUp={setPickUpLoc} set={pickUpLoc} to="/dropRide" cityName={startCityName} setCityName={setStartCityName} />
        <Footer />
    </div>
  );
}

export default PublishRide;
