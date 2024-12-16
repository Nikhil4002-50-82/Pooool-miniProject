import React,{useContext,useState} from 'react';
import supabase from '../../../utils/supabase';
import { useNavigate } from 'react-router-dom';

import { userContext,userLogged } from '../context/RiderContext';

const LogComponent = ({log,Component}) => {

  const navigate=useNavigate();

  const {user,setUser}=useContext(userContext);
  const {loggedIn,setLoggedIn}=useContext(userLogged);

  const [val1,setVal1]=useState("");
  const [val2,setVal2]=useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the fields are empty
    if (!val1 || !val2) {
      alert('Both username and password are required.');
      return;
    }

    try {
      // Query the Auth table to find a matching username and password
      
      let { data: Auth, error } = await supabase
      .from('Auth')
      .select("*")

      // Filters
      .eq('userName', val1)
      .eq('password', val2)

      if (error) {
        throw error;
      }

      if (Auth.length>0) {
        // If a matching record is found, set the user and loggedIn state
        await setUser(Auth[0].name);
        setLoggedIn(true);
        alert('Logged in successfully!');
        navigate("/search");
      } else {
        // If no record is found, show an error
        alert('Invalid username or password.');
        setLoggedIn(false);
        setVal2("")
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center pt-[1em]'>
        <h1 className='text-4xl font-semibold mt-[1em] mb-[1em]'>How do you want to {log}?</h1>
        <div className='w-[50%] mb-4'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <label htmlFor="userName" >Username</label>
                <input type="text" className='bg-[#EDEDED] focus:outline-[#0F4FB4] h-[2.5em] mb-[1em] p-4 rounded-lg' name='userName' id="userName" value={val1} onChange={(event)=>{
                  setVal1(event.target.value)
                }} />
                <label htmlFor="password" >Password</label>
                <input type="password" className='bg-[#EDEDED] focus:outline-[#0F4FB4] h-[2.5em] mb-[1em] p-4 rounded-lg' name='password' id="password" value={val2} onChange={(event)=>{
                  setVal2(event.target.value)
                }}/>
                <div className='flex items-center justify-center'><button className='w-[7em] h-[2.5em] flex items-center justify-center rounded-md font-semibold bg-[blue] text-white' >Submit</button></div>
            </form>
        </div>
        <hr className='w-[50%] border-[0.1em] border-gray-300'/>
        <Component />
    </div>
  )
}

export default LogComponent
