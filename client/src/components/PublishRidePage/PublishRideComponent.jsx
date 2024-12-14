import React ,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const token="pk.ca4f9f985dbb3196879a29a5e2e6f9c9";

const PublishRideComponent = ({title,setUp,set,to,cityName,setCityName}) => {
    const navigate=useNavigate();

    const [res,setRes]=useState([]);
    const AutoComplete=async(value)=>{
    try{
        const response=await axios.get(`https://api.locationiq.com/v1/autocomplete?key=${token}&q=${value}`);
        setRes(response.data);
    }catch(error){
        console.log(`error message : ${error.message}`);
    }
}

  return (
    <div className='p-[8em] h-[auto] flex flex-col'>
        <div className='flex justify-center items-center'>
          <h1 className='text-4xl text-blue-950 font-semibold p-4'>{title}</h1>
        </div>
        <div className='p-3 flex justify-center items-center'>
            <input type="text" className='w-[25%] focus:outline-[#0F4FB4] h-[3em] rounded-xl p-3 bg-[#EDEDED] mr-4' placeholder='City Name' name='cityName' value={cityName} onChange={(event)=>{
                let value=event.target.value;
                setCityName(value);
            }}/>
          <input className='w-[65%] focus:outline-[#0F4FB4] h-[3em] rounded-xl p-3 bg-[#EDEDED]' type="text" placeholder='Enter the full address' name='driverPickUpLoc' value={set} onChange={(event)=>{
                        let value=event.target.value;
                        setUp(value);
                        // AutoComplete(value);
                    }} onKeyDown={(event)=>{
                        if (event.key === "Enter") {
                            navigate(to?to:"/publishRide")
                    }}} />
                        {res && res.length > 0 && (
                            <div className="absolute w-[75%] p-3 top-[16.5em] left-[10em] right-0 mt-1 bg-white  border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto z-10" >
                                {res.map((item,index) => (
                                    <div key={index} className="p-4 pt-0 flex flex-col items-center justify-center hover:bg-[#EDEDED] cursor-pointer rounded-lg">
                                        <h1 className="flex items-center justify-center h-[3em] text-lg ">{item.display_place}</h1>
                                        <p className='flex items-center w-[90%] text-center justify-center text-sm text-gray-500'>{item.display_address}</p>
                                    </div>
                                ))}
                            </div>
                        )}
        </div>
    </div>
  )
}

export default PublishRideComponent
