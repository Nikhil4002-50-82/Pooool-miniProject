import React,{useState} from 'react';

import PublishRideComponent from './PublishRideComponent';
import Footer from '../Footer/Footer';

const DropRide = () => {

  const [drop,setDrop]=useState("");

  return (
    <div>
        <PublishRideComponent title="Drop-off" setUp={setDrop} set={drop} to='/rideDate' />
        <Footer />
    </div>
  );
}

export default DropRide;
