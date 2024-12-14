import React from 'react';

import LogComponent from './LogComponent';
import LogComp from './LogComp';

const SignUp = () => {
  return (
    <div className='p-[5em]'>
        <LogComponent log="sign up" Component={LogComp} />
    </div>
  )
}

export default SignUp
