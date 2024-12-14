import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogComp = () => {

  const navigate=useNavigate();

  return (
    <div className='mt-6'>
      <p>Already a member?<span className='text-lg text-[#0F4FB4] font-semibold cursor-pointer'
      onClick={() => {
        navigate('/login');
      }}
      >Log in</span></p>
    </div>
  )
}

export default LogComp
