import React,{useState} from 'react';

import PublishRideComponent from './PublishRideComponent';

const DropRide = () => {

  const [drop,setDrop]=useState("");

  return (
    <div>
        <PublishRideComponent title="Drop-off" setUp={setDrop} set={drop} to='/rideDate' />
    </div>
  );
}

export default DropRide;
