import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReportScamsHome = () => {
    const navigate=useNavigate();
    return (
        <div className='h-[25em] bg-[#00AFF5] p-[10em] pt-[3em] pb-[3em] grid grid-cols-2 '>
            <div className='flex items-center justify-center'>
              <img className='h-[100%] w-[100%] rounded-2xl' src="https://cdni.iconscout.com/illustration/premium/thumb/complaint-resolution-specialist-handling-customer-complaints-and-working-to-resolve-them-illustration-download-in-svg-png-gif-file-formats--support-pack-services-illustrations-7328703.png?f=webp" alt="" />
            </div>
            <div className='p-5 flex flex-col items-center justify-center'>
              <h1 className='text-3xl font-semibold text-white mb-3'>Help us keep you safe from scams</h1>
              <p className='text-white mb-4'>At Pooool, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.</p>
              <button className='text-[#00AFF5] font-semibold bg-white w-[8em] h-12 rounded-3xl mb-5' 
              onClick={(event)=>{
                  event.preventDefault();
                  navigate("/safeFromScams")
              }}>Learn more</button>
            </div>
        </div>
    );
}

export default ReportScamsHome;
