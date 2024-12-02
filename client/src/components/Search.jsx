import React, { useRef, useEffect } from 'react';

import TitleHomeComponent from './TitleHomeComponent';
import SortSearchComponent from './SortSearchComponent';
import AvailableRidesComponent from './AvailableRidesComponent';

const frontendTesting=[
  {
    id:1,
    startLocName:"Mysuru",
    endLocName:"Bengaluru" ,
    pickupLoc:"Agrahara, Chamrajpura, Mysuru, Karnataka 570004" ,
    dropLoc:"Bannerghatta Rd, Hulimavu, Bengaluru, Karnataka 560076" ,
    driverName:"Naveen Kumar" ,
    price:"330"
  },
  {
    id:2,
    startLocName:"Mysuru",
    endLocName:"Bengaluru" ,
    pickupLoc:"Agrahara, Chamrajpura, Mysuru, Karnataka 570004" ,
    dropLoc:"Bannerghatta Rd, Hulimavu, Bengaluru, Karnataka 560076" ,
    driverName:"Nikhil R Nambiar" ,
    price:"450"
  },
  {
    id:3,
    startLocName:"Mysuru",
    endLocName:"Bengaluru" ,
    pickupLoc:"Agrahara, Chamrajpura, Mysuru, Karnataka 570004" ,
    dropLoc:"Bannerghatta Rd, Hulimavu, Bengaluru, Karnataka 560076" ,
    driverName:"Rahul B" ,
    price:"300"
  },
  {
    id:4,
    startLocName:"Mysuru",
    endLocName:"Bengaluru" ,
    pickupLoc:"Agrahara, Chamrajpura, Mysuru, Karnataka 570004" ,
    dropLoc:"Bannerghatta Rd, Hulimavu, Bengaluru, Karnataka 560076" ,
    driverName:"Vilas R Naik" ,
    price:"500"
  },
]

const Search = () => {

  const RenderCard=(list)=>{
    return(
      <AvailableRidesComponent
      key={list.id} startLocName={list.startLocName} endLocName={list.endLocName} pickupLoc={list.pickupLoc} dropLoc={list.dropLoc} driverName={list.driverName} price={list.price} />
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
              {frontendTesting.map(RenderCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
