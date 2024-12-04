import React,{useState} from 'react';

import PublishRideComponent from './PublishRideComponent';

const PublishRide = () => {

  const [pickUp,setPickUp]=useState("");

  return (
    <div>
        <PublishRideComponent title="Pick-up" setUp={setPickUp} set={pickUp} to="/dropRide" />
    </div>
  );
}

export default PublishRide;
