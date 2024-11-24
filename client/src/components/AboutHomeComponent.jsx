import React from 'react';

const AboutHomeComponent = ({Component,title,description}) => {
  return (
        <div>
          <Component className='text-4xl text-gray-500 mb-3' />
          <h1 className='font-semibold text-lg'>{title}</h1>
          <p className='text-gray-500'>{description}</p>
        </div>
  );
}

export default AboutHomeComponent;
