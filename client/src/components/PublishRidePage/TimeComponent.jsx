import React from 'react'

const TimeComponent = () => {
  return (
    <div>
        <select name="pickUpTime" id="" className='w-[10em] h-[1.8em] p-1 text-3xl  bg-[#EDEDED] focus:outline-none rounded-2xl'>
            <option className='text-sm' value="06:00">06:00</option>
            <option className='text-sm' value="06:30">06:30</option>
            <option className='text-sm' value="07:00">07:00</option>
            <option className='text-sm' value="07:30">07:30</option>
            <option className='text-sm' value="08:00">08:00</option>
            <option className='text-sm' value="08:30">08:30</option>
            <option className='text-sm' value="09:00">09:00</option>
            <option className='text-sm' value="10:00">10:00</option>
            <option className='text-sm' value="10:30">10:30</option>
            <option className='text-sm' value="11:00">11:00</option>
            <option className='text-sm' value="11:30">11:30</option>
            <option className='text-sm' value="12:00">12:00</option>
            <option className='text-sm' value="12:30">12:30</option>
            <option className='text-sm' value="13:00">13:00</option>
            <option className='text-sm' value="14:00">14:00</option>
            <option className='text-sm' value="15:00">15:00</option>
            <option className='text-sm' value="16:00">16:00</option>
            <option className='text-sm' value="17:00">17:00</option>
            <option className='text-sm' value="18:00">18:00</option>
        </select>
    </div>
  )
}

export default TimeComponent
