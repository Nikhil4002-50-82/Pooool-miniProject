import React, { useState, useEffect } from 'react';

import supabase from '../../../utils/supabase';

import TitleHomeComponent from '../HomePage/TitleHomeComponent';
import SortSearchComponent from './SortSearchComponent';
import AvailableRidesComponent from './AvailableRidesComponent';

const Search = () => {

  const [res,setRes]=useState([]);

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
    getDriversData();
    console.log(res);
  },[])
  
        

  const RenderCard=(list)=>{
    return(
      <AvailableRidesComponent
      key={list.id} startLocName={list.startCityName} endLocName={list.destCityName} pickupLoc={list.pickUpLocation} dropLoc={list.dropLocation} driverName={list.driverName} price={list.price} />
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
