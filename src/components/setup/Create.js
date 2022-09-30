import React from 'react';
import { Link } from 'react-router-dom';

function Create() {
  return (
    <div className='bg-[#F4F2EE]/[0.2] rounded-xl pt-4 pb-8 px-11 flex flex-col gap-5 justify-center items-center'>
        <h3 className='font-medium text-base'>Create a new Kadet Wallet</h3>
        <Link to='/createPassword' className='bg-gradient-to-r from-[#E4FC70] to-[#9AECA4] py-3 px-10 rounded-full text-[#37393F] font-semibold text-base'>CREATE A WALLET</Link>
    </div>
  )
}

export default Create