import React from 'react';

import LogComponent from './LogComponent';
import signComp from './signComp';

const login = () => {
  return (
    <div className='p-[5em]'>
        <LogComponent log="log in" Component={signComp} />
    </div>
  )
}

export default login
