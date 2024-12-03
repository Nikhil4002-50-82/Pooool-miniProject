import React from 'react';

const SearchFormComponent = ({Component,label,value}) => {
  return (
    <div className='flex items-center pr-8 justify-between hover:bg-[#EDEDED] rounded-lg'>
        <div className='flex p-4 text-md'>
                <input className='w-[1.5em] h-[1.5em] mr-6 text-[#00AFF5] ' id={value} type="radio" name='sort' value={value} />
                <label className='font-semibold text-blue-950' htmlFor={value}>{label}</label>
        </div>
        <Component className='text-2xl  text-gray-500'/>
    </div>
  )
}

export default SearchFormComponent;
