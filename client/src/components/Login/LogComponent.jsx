import React from 'react';

import { MdKeyboardArrowRight } from "react-icons/md";

const LogComponent = ({log,Component}) => {
  return (
    <div className='flex flex-col items-center justify-center pt-[4em]'>
        <h1 className='text-4xl font-semibold mt-[1em] mb-[1em]'>How do you want to {log}?</h1>
        <div className='w-[60%] mb-2'>
            <p className='w-[100%] flex items-center justify-between p-4 hover:bg-[#EDEDED] cursor-pointer rounded-xl' onClick={()=>{
                              navigate("/login");
                          }}>
                            Continue With Gmail
                <MdKeyboardArrowRight className='text-3xl text-gray-400' />
            </p>
        </div>
        <hr className='w-[60%] border-[0.1em] border-gray-300'/>
        <Component />
    </div>
  )
}

export default LogComponent
