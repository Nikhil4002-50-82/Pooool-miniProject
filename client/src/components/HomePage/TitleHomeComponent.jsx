import React,{useState,useContext, useEffect} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import supabase from "../../../utils/supabase.js"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { LeavingToContext , GoingToContext , DateContext , PassengerCountForPassengerContext, resContext } from "../../components/context/SearchPageContext";

import { FaRegCircle } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";

const token="pk.ca4f9f985dbb3196879a29a5e2e6f9c9";

const TitleHomeComponent = () => {

    const {res,setRes}=useContext(resContext);

    const [srchBtn,setSrchBtn]=useState(false);

    const navigate=useNavigate();

    const [h1,setH1]=useState(false);
    const [h2,setH2]=useState(false);
    const [h3,setH3]=useState(false);
    const [h4,setH4]=useState(false);

    const [autoRes,setAutoRes]=useState([]);

    const { leavingTo, setLeavingTo }=useContext(LeavingToContext);
    const { goingTo, setGoingTo }=useContext(GoingToContext);
    const { travelDate, setTravelDate }=useContext(DateContext);
    const {passengerCount, setPassengerCount }=useContext(PassengerCountForPassengerContext);

    const location = useLocation();
    const fromButton = location.state?.fromButton || false;


    const Search=async()=>{
        try{
            let { data: Drivers, error } = await supabase
            .from('Drivers')
            .select("*")
            
            // Filters
            .eq('startCityName', leavingTo)
            .eq('destCityName',goingTo)
            setRes(Drivers)
        }     
        catch(error){
            console.log(`error message :${error.message}`);
        }       
        finally{
            setSrchBtn(false);
        }
    }

    const AutoComplete=async(value)=>{
        try{
            const response=await axios.get(`https://api.locationiq.com/v1/autocomplete?key=${token}&q=${value}`);
            setAutoRes(response.data);
        }catch(error){
            console.log(`error message : ${error.message}`);
        }
    };

    useEffect(()=>{
        if(srchBtn)Search();
    },[srchBtn])

    useEffect(()=>{
        if(fromButton)Search();
    },[fromButton]);

  return (
            <div className='relative h-[3.5em]  bg-white rounded-2xl shadow-custom grid grid-cols-[3fr_3fr_2fr_3fr_2fr]'>
                    <div className={`p-1 flex items-center justify-between rounded-2xl ${h1?"bg-[#EDEDED]":""}`} onMouseOver={()=>{
                        setH1(true);
                    }} onMouseOut={()=>{
                        setH1(false);
                    }}><FaRegCircle className='text-2xl text-gray-500 font-bold ml-2 mr-0' /><input className={`h-full w-full p-3 focus:outline-none ${h1 ? "bg-[#EDEDED]" : ""}`} type="text" placeholder='Leaving From' value={leavingTo} onChange={(event)=>{
                        let value1=event.target.value;
                        setLeavingTo(value1);
                        // AutoComplete(value1);
                    }}  />
                        {/* {h1&&res && res.length > 0 && (
                            <div className="absolute p-3 w-[30%] top-[3em] left-0 right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto z-10" >
                                {res.map((item,index) => (
                                    <div key={index} className="p-4 pt-0 flex flex-col items-center justify-center hover:bg-[#EDEDED] cursor-pointer rounded-lg">
                                        <h1 className="flex items-center justify-center h-[3em] text-lg ">{item.display_place}</h1>
                                        <p className='flex items-center w-[90%] text-center justify-center text-sm text-gray-500'>{item.display_address}</p>
                                    </div>
                                ))}
                            </div>
                        )} */}

                    </div>
                    <div className={`p-1 flex items-center justify-between rounded-2xl ${h2?"bg-[#EDEDED]":""}`} onMouseOver={()=>{
                        setH2(true);
                    }} onMouseOut={()=>{
                        setH2(false);
                    }}><FaRegCircle className='text-2xl text-gray-500 font-bold ml-2'  /><input className={`h-full w-full p-3 focus:outline-none ${h2 ? "bg-[#EDEDED]" : ""}`} type="text" placeholder='Going to' value={goingTo} onChange={(event)=>{
                        let value2=event.target.value;
                        setGoingTo(value2);
                        // AutoComplete(value2);
                    }} />
                    {/* {h2&&res && res.length > 0 && (
                            <div className="absolute p-3 w-[30%] top-[3em] left-[17.7em] right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-y-auto z-10" >
                                {res.map((item,index) => (
                                    <div key={index} className="p-4 pt-0 flex flex-col items-center justify-center hover:bg-[#EDEDED] cursor-pointer rounded-lg">
                                        <h1 className="flex items-center justify-center h-[3em] text-lg ">{item.display_place}</h1>
                                        <p className='flex items-center w-[90%] text-center justify-center text-sm text-gray-500'>{item.display_address}</p>
                                    </div>
                                ))}
                            </div>
                        )} */}
                    </div>
                    <div className={`p-1 flex items-center justify-between rounded-2xl ${h3?"bg-[#EDEDED]":""}`} onMouseOver={()=>{
                        setH3(true);
                    }} onMouseOut={()=>{
                        setH3(false);
                    }}><BsCalendar2DateFill className='text-4xl text-gray-500 font-bold ml-2' /><DatePicker className={`h-full w-full p-3 focus:outline-none ${h3 ? "bg-[#EDEDED]" : ""}`} dateFormat="dd/MM/yyyy" minDate={new Date()} selected={travelDate} onChange={(date) =>{
                        setTravelDate(date);
                    }} /></div>
                    <div className={`p-1 flex items-center justify-between rounded-2xl ${h4?"bg-[#EDEDED]":""}`} onMouseOver={()=>{
                        setH4(true);
                    }} onMouseOut={()=>{
                        setH4(false);
                    }}><FaUserAlt className='text-xl text-gray-500 font-bold ml-2' /><input type="text" className={`h-full w-full p-3 focus:outline-none ${h4 ? "bg-[#EDEDED]" : ""}`} placeholder='Number of passengers' value={passengerCount} onChange={(event)=>{
                       const count=event.target.value;
                       setPassengerCount(count);
                    }} /></div>
                    <div><button className=' w-full h-[100%] rounded-r-2xl bg-[#0F4FB4] text-white font-semibold' onClick={(event)=>{
                            event.preventDefault();
                            setSrchBtn(true);
                            navigate("/search",{ state: { fromButton: true } });
                            
                    }} >Search</button></div>                  
            </div>
  )
}

export default TitleHomeComponent;
