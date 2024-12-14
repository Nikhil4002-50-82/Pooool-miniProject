import React,{useContext, useEffect} from 'react';

import { travelTimeContext } from '../context/RiderContext';

const TimeComponent = () => {

  const {travelTime,setTravelTime}=useContext(travelTimeContext);

  function setTime(event){
    const time=event.target.value;
    setTravelTime(time);
  }

  return (
    <div>
        <select name="pickUpTime" id="" className='w-[5em] h-[1.8em] p-1 text-3xl  bg-[#EDEDED] focus:outline-none rounded-2xl'>
            <option className='text-sm' value="06:00" onClick={setTime}>06:00</option>
            <option className='text-sm' value="06:30" onClick={setTime}>06:30</option>
            <option className='text-sm' value="07:00" onClick={setTime}>07:00</option>
            <option className='text-sm' value="07:30" onClick={setTime}>07:30</option>
            <option className='text-sm' value="08:00" onClick={setTime}>08:00</option>
            <option className='text-sm' value="08:30" onClick={setTime}>08:30</option>
            <option className='text-sm' value="09:00" onClick={setTime}>09:00</option>
            <option className='text-sm' value="10:00" onClick={setTime}>10:00</option>
            <option className='text-sm' value="10:30" onClick={setTime}>10:30</option>
            <option className='text-sm' value="11:00" onClick={setTime}>11:00</option>
            <option className='text-sm' value="11:30" onClick={setTime}>11:30</option>
            <option className='text-sm' value="12:00" onClick={setTime}>12:00</option>
            <option className='text-sm' value="12:30" onClick={setTime}>12:30</option>
            <option className='text-sm' value="13:00" onClick={setTime}>13:00</option>
            <option className='text-sm' value="14:00" onClick={setTime}>14:00</option>
            <option className='text-sm' value="15:00" onClick={setTime}>15:00</option>
            <option className='text-sm' value="16:00" onClick={setTime}>16:00</option>
            <option className='text-sm' value="17:00" onClick={setTime}>17:00</option>
            <option className='text-sm' value="18:00" onClick={setTime}>18:00</option>
        </select>
    </div>
  )
}

export default TimeComponent
