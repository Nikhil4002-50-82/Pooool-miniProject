import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LeavingToContext , GoingToContext , DateContext , PassengerCountForPassengerContext } from "./components/context/SearchPageContext";
import {travelDateContext,pickUpLocContext,dropLocContext,travelPriceContext,travelTimeContext,noOfPassengersContext} from "./components/context/RiderContext"

import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import SafeFromScams from './components/SafeFromScamsPage/SafeFromScams';
import Search from './components/SearchPage/Search';
import PublishRide from './components/PublishRidePage/PublishRide';
import DropRide from './components/PublishRidePage/DropRide';
import RideDate from './components/PublishRidePage/Date';
import RideTime from './components/PublishRidePage/Time';

import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  const [leavingTo, setLeavingTo] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [travelDate, setTravelDate] = useState(new Date());
  const [passengerCount, setPassengerCount] = useState(1);

  const [travelDateRide,setTravelDateRide]=useState();
  const [pickUpLoc,setPickUpLoc]=useState("");
  const [dropLoc,setDropLoc]=useState("");
  const [travelPrice,setTravelPrice]=useState(0);
  const [noOfPassengers,setNoOfPassengers]=useState(2);
  const [travelTime,setTravelTime]=useState("");


  return (
    <div className='font-custom'>
      <travelTimeContext.Provider value={{travelTime,setTravelTime}} >
          <travelDateContext.Provider value={{travelDateRide,setTravelDateRide}}>
            <pickUpLocContext.Provider value={{pickUpLoc,setPickUpLoc}}>
              <dropLocContext.Provider value={{dropLoc,setDropLoc}}>
                <travelPriceContext.Provider value={{travelPrice,setTravelPrice}} >
                  <noOfPassengersContext.Provider value={{noOfPassengers,setNoOfPassengers}} >
                  <LeavingToContext.Provider value={{ leavingTo, setLeavingTo }}>
                      <GoingToContext.Provider value={{ goingTo, setGoingTo }}>
                        <DateContext.Provider value={{ travelDate, setTravelDate }}>
                          <PassengerCountForPassengerContext.Provider value={{ passengerCount, setPassengerCount }}>
                              <BrowserRouter>
                                  <Header />
                                  <ScrollToTop />
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/safeFromScams" element={<SafeFromScams />} />
                                        <Route path='/search' element={<Search />} />
                                        <Route path='/publishRide' element={<PublishRide />} />
                                        <Route path='/dropRide' element={<DropRide />} />
                                        <Route path='/rideDate' element={<RideDate />} />
                                        <Route path='/rideTime' element={<RideTime />} />
                                    </Routes>
                              </BrowserRouter>
                          </PassengerCountForPassengerContext.Provider>
                        </DateContext.Provider>
                      </GoingToContext.Provider>
                    </LeavingToContext.Provider>
                  </noOfPassengersContext.Provider>
                </travelPriceContext.Provider>
              </dropLocContext.Provider>
            </pickUpLocContext.Provider>
          </travelDateContext.Provider>
      </travelTimeContext.Provider>
    </div>
  );
}

export default App;


