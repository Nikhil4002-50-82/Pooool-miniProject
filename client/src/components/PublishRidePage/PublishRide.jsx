import React,{useContext, useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import PublishRideComponent from './PublishRideComponent';

import { pickUpLocContext,startCityNameRideContext,userLogged } from '../context/RiderContext';

import Footer from '../Footer/Footer';

const PublishRide = () => {

  const navigate=useNavigate();

  const {pickUpLoc,setPickUpLoc}=useContext(pickUpLocContext);
  const {startCityName,setStartCityName}=useContext(startCityNameRideContext);
  const {loggedIn,setLoggedIn}=useContext(userLogged);

    useEffect(() => {
      if (!loggedIn) {
        navigate('/login'); // Redirect to login if not logged in
      }
    }, [loggedIn, navigate]); // Run this effect whenever userLogged changes
  
    if (!loggedIn) {
      // Prevent rendering anything until redirect
      return null;
    }
    

  return (
    <div className='h-[auto]'>
        <PublishRideComponent title="Pick-up" setUp={setPickUpLoc} set={pickUpLoc} to="/dropRide" cityName={startCityName} setCityName={setStartCityName} />
        <Footer />
    </div>
  );
}

export default PublishRide;
