import React, { useState,useContext, useEffect } from 'react';
import supabase from '../../../utils/supabase';
import { useNavigate } from 'react-router-dom';

import TimeComponent from './TimeComponent';
import Footer from '../Footer/Footer';

import {travelDateContext,pickUpLocContext,dropLocContext,travelPriceContext,travelTimeContext,noOfPassengersContext,startCityNameRideContext,destCityNameRideContext,userContext} from "../context/RiderContext";

const Time = () => {

    const navigate=useNavigate();

    const [btn,setBtn]=useState(false);
    

    const {noOfPassengers,setNoOfPassengers}=useContext(noOfPassengersContext);
    const {travelPrice,setTravelPrice}=useContext(travelPriceContext);
    const {travelDateRide,setTravelDateRide}=useContext(travelDateContext);
    const {pickUpLoc,setPickUpLoc}=useContext(pickUpLocContext);
    const {dropLoc,setDropLoc}=useContext(dropLocContext);
    const {travelTime,setTravelTime}=useContext(travelTimeContext);
    const {startCityName,setStartCityName}=useContext(startCityNameRideContext);
    const {destCityName,setDestCityName}=useContext(destCityNameRideContext);
    const {user,setUser}=useContext(userContext);

  useEffect(()=>{
    const setRide=async()=>{      
        try{
          const { data, error } = await supabase
        .from('Drivers')
        .insert([
          { dropLocation: dropLoc, pickUpLocation: pickUpLoc , driverName: user , price: travelPrice ,travelTimings: travelTime ,travelDate: travelDateRide, startCityName: startCityName, destCityName:destCityName},
        ])
        .select()   
        }
        catch(error){
          console.log(`error message : ${error.message}`);
        }
        finally{
          setBtn(false);
        }
    }

    if(btn)setRide();
  },[btn])

  return (
    <div>
      <div className='pt-[5em] pb-[2em] p-[7em]'>
        <div className=' grid grid-cols-2 grid-rows-2'>
        <div className=" flex justify-center items-center">
          <h2 className='text-2xl w-[50%] text-blue-950 font-semibold p-4 mb-2'>At what time will you pick passengers up?</h2>
          <div className='mb-1'>
              <TimeComponent />
          </div>
        </div>
        <div className=' flex justify-center items-center'>
          <h2 className='text-2xl w-[50%] text-blue-950 font-semibold p-4 mb-2'>So how many passengers can you take?</h2>
          <input type="text" name='passengerLimit' value={noOfPassengers} className='bg-[#EDEDED] focus:outline-[#0F4FB4] h-[1.8em] w-[5em] text-3xl p-4 rounded-xl mb-2' onChange={(event)=>{
            let value=event.target.value;
            setNoOfPassengers(value);
          }}/>
        </div>
          <div className='flex flex-col items-center col-span-2'>
            <h2 className='text-2xl text-blue-950 font-semibold p-4'>Set your price per seat</h2>
            <input type="text" name='passengerLimit' value={travelPrice} className=' bg-[#EDEDED] focus:outline-[#0F4FB4] h-[1.8em] w-[5em] text-3xl p-4 rounded-xl mb-3' onChange={(event)=>{
              let value=event.target.value;
              setTravelPrice(value);
            }}/>
            <button className='w-[8em] h-[3em] mb-[2em] bg-[#0F4FB4] text-white flex justify-center items-center rounded-xl font-semibold' onClick={(event)=>{
              event.preventDefault();
              setBtn(true);
              navigate("/response");
            }}>Continue</button>
          </div>
      </div>
        
    </div>
    <Footer/>
    </div>
  )
}

export default Time;
