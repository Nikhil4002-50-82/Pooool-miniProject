import React,{useState,useContext} from 'react';

import PublishRideComponent from './PublishRideComponent';
import Footer from '../Footer/Footer';

import {destCityNameRideContext, dropLocContext} from "../context/RiderContext";

const DropRide = () => {

  const {dropLoc,setDropLoc}=useContext(dropLocContext);
  const {destCityName,setDestCityName}=useContext(destCityNameRideContext);

  return (
    <div>
        <PublishRideComponent title="Drop-off" setUp={setDropLoc} set={dropLoc} to='/rideDate' cityName={destCityName} setCityName={setDestCityName} />
        <Footer />
    </div>
  );
}

export default DropRide;
