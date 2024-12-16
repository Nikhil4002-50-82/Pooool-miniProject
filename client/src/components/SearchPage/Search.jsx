import React, { useState,useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import supabase from '../../../utils/supabase';

import TitleHomeComponent from '../HomePage/TitleHomeComponent';
import SortSearchComponent from './SortSearchComponent';
import AvailableRidesComponent from './AvailableRidesComponent';

import { resContext } from '../context/SearchPageContext';
import { userLogged } from '../context/RiderContext';

const Search = () => {

  const {res,setRes}=useContext(resContext);
  const {loggedIn,setLoggedIn}=useContext(userLogged);

  const navigate=useNavigate();

  const getDriversData=async()=>{
    try{
      let { data: Drivers, error } = await supabase
      .from('Drivers')
      .select('*');
      setRes(Drivers);
    }catch(error){
      console.log(`error message :${error.message}`);
    }
  }
  
  useEffect(()=>{
    if(loggedIn)getDriversData();
  },[loggedIn])

  useEffect(() => {
    if (!loggedIn) {
      navigate('/login'); // Redirect to login if not logged in
    }
  }, [loggedIn, navigate]); // Run this effect whenever userLogged changes

  if (!loggedIn) {
    // Prevent rendering anything until redirect
    return null;
  }
  
        

  const RenderCard=(list)=>{
    return(
      <AvailableRidesComponent
      key={list.id} startLocName={list.startCityName} endLocName={list.destCityName} pickupLoc={list.pickUpLocation} dropLoc={list.dropLocation} driverName={list.driverName} price={list.price} departureTime={list.travelTimings} />
    );
  }

  return (
    <div>
      <div className="pt-[5em] h-[9.5em] p-3 fixed bg-white z-10">
        <TitleHomeComponent />
      </div>
      <div className="pt-[9em] bg-[#f3f1f1cb]">
        <div className="p-6 grid grid-cols-[3fr_6fr] gap-10">
          <SortSearchComponent />
          <div className="">
              {res.map(RenderCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
