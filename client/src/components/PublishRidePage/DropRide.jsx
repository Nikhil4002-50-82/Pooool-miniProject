import React,{useState,useContext} from 'react';

import PublishRideComponent from './PublishRideComponent';
import Footer from '../Footer/Footer';

import {dropLocContext} from "../context/RiderContext";

const DropRide = () => {

  const {dropLoc,setDropLoc}=useContext(dropLocContext);

  return (
    <div>
        <PublishRideComponent title="Drop-off" setUp={setDropLoc} set={dropLoc} to='/rideDate' />
        <Footer />
    </div>
  );
}

export default DropRide;
