import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LeavingToContext , GoingToContext , DateContext , PassengerCountForPassengerContext } from "./components/context/SearchPageContext";

import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import SafeFromScams from './components/SafeFromScamsPage/SafeFromScams';
import Search from './components/SearchPage/Search';
import PublishRide from './components/PublishRidePage/PublishRide';

import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  const [leavingTo, setLeavingTo] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [travelDate, setTravelDate] = useState(new Date());
  const [passengerCount, setPassengerCount] = useState(1);


  return (
    <div className='font-custom'>
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
                    </Routes>
              </BrowserRouter>
          </PassengerCountForPassengerContext.Provider>
        </DateContext.Provider>
      </GoingToContext.Provider>
    </LeavingToContext.Provider>
  );
    </div>
  );
}

export default App;


