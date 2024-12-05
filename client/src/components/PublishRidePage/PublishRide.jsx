import React,{useState} from 'react';

import PublishRideComponent from './PublishRideComponent';

import Footer from '../Footer/Footer';

const PublishRide = () => {

  const [pickUp,setPickUp]=useState("");

  return (
    <div className='h-[auto]'>
        <PublishRideComponent title="Pick-up" setUp={setPickUp} set={pickUp} to="/dropRide" />
        <Footer />
    </div>
  );
}

export default PublishRide;
