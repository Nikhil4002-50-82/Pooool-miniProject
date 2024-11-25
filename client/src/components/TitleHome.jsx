import React,{useState} from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FaRegCircle } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoCarSport } from "react-icons/io5";

const TitleHome = () => {
    const [h1,setH1]=useState(false);
    const [h2,setH2]=useState(false);
    const [h3,setH3]=useState(false);
    const [h4,setH4]=useState(false);
    const [passengerCount,setPassengerCount]=useState(0);

    const [startDate, setStartDate] = useState(new Date());

  return (
        <div className='h-[18em] bg-[#00AFF5] p-5 pt-1 pb-1 flex flex-col mb-4'>
            <h1 className='text-white font-semibold text-6xl text-center'>Carpool to thousands of destinations at low prices</h1>
            <div className='flex items-center justify-center'><IoCarSport className='text-9xl text-gray-100' /></div>
            <div className='relative h-[3.5em] top-[0.7em] bg-white rounded-2xl shadow-custom grid grid-cols-[3fr_3fr_2fr_3fr_2fr]'>
                    <div className={`p-1 flex items-center justify-between rounded-2xl ${h1?"bg-[#EDEDED]":""}`} onMouseOver={()=>{
                        setH1(true);
                    }} onMouseOut={()=>{
                        setH1(false);
                    }}><FaRegCircle className='text-2xl text-gray-500 font-bold ml-2 mr-0' /><input className={`h-full w-full p-3 focus:outline-none ${h1 ? "bg-[#EDEDED]" : ""}`} type="text" placeholder='Leaving From' /></div>
                    <div className={`p-1 flex items-center justify-between rounded-2xl ${h2?"bg-[#EDEDED]":""}`} onMouseOver={()=>{
                        setH2(true);
                    }} onMouseOut={()=>{
                        setH2(false);
                    }}><FaRegCircle className='text-2xl text-gray-500 font-bold ml-2'  /><input className={`h-full w-full p-3 focus:outline-none ${h2 ? "bg-[#EDEDED]" : ""}`} type="text" placeholder='Going to' /></div>
                    <div className={`p-1 flex items-center justify-between rounded-2xl ${h3?"bg-[#EDEDED]":""}`} onMouseOver={()=>{
                        setH3(true);
                    }} onMouseOut={()=>{
                        setH3(false);
                    }}><BsCalendar2DateFill className='text-4xl text-gray-500 font-bold ml-2' /><DatePicker className={`h-full w-full p-3 focus:outline-none ${h3 ? "bg-[#EDEDED]" : ""}`} selected={startDate} onChange={(date) => setStartDate(date)} /></div>
                    <div className={`p-1 flex items-center justify-between rounded-2xl ${h4?"bg-[#EDEDED]":""}`} onMouseOver={()=>{
                        setH4(true);
                    }} onMouseOut={()=>{
                        setH4(false);
                    }}><FaUserAlt className='text-xl text-gray-500 font-bold ml-2' /><input type="text" className={`h-full w-full p-3 focus:outline-none ${h4 ? "bg-[#EDEDED]" : ""}`} placeholder='Number of passengers' onChange={(event)=>{
                       const value=event.target.value;
                       setPassengerCount(value);

                    }} /></div>
                    <div><button className=' w-full h-[100%] rounded-r-2xl bg-[#00AFF5] text-white font-semibold'>Search</button></div>                  
            </div>
        </div>    
  );
}

export default TitleHome;
