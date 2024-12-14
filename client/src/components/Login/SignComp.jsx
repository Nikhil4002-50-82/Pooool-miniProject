import React from 'react'
import { useNavigate } from 'react-router-dom'

const signComp = () => {

    const navigate = useNavigate();
  return (
    <div className='mt-6'>
      <p>Not a member yet?<span className='text-lg text-[#0F4FB4] font-semibold cursor-pointer' onClick={()=>{
        navigate("/signin")
      }}>Sign up</span></p>
    </div>
  )
}

export default signComp
