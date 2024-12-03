import React from 'react';

const WhereToDriveHome = () => {
  return (
    <div className='h-[25em] p-[10em] pt-[3em] pb-[3em] grid grid-cols-2'>
            <div className='p-5 flex flex-col justify-center'>
              <h1 className='text-3xl font-semibold text-gray-800 mb-3'>Where do you want to drive to?</h1>
              <p className='text-gray-500 mb-4'>Let's make this your least expensive journey ever.</p>
              <button className='text-white font-semibold bg-[#00AFF5] w-[9em] h-12 rounded-3xl mb-5'>Offer a ride</button>
            </div>
            <div className='flex items-center justify-center'>
              <img className='h-[100%] w-[100%]' src="https://cdni.iconscout.com/illustration/premium/thumb/man-refuels-his-car-before-going-on-adventure-illustration-download-in-svg-png-gif-file-formats--gasoline-fuel-station-gas-refueling-pack-services-illustrations-9983727.png?f=webp" alt="" />
            </div>
    </div>
  );
}

export default WhereToDriveHome;
