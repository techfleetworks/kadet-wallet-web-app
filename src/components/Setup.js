import React from 'react'
import Create from './Create'
import Import from './Import'



function Setup() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 px-5 mt-12'>
        <h2 className='text-3xl text-center mb-5 font-medium'>Lets Get Started</h2>
       
        <Create/>
        <Import/>

    </div>
  )
}

export default Setup