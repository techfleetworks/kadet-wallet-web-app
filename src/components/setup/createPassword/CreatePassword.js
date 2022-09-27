import React, { useState, useEffect } from 'react'

function CreatePassword() {
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const [minCheck, setMinCheck] = useState(false);
    const [match, setMatch] = useState(false);
    const [next, setNext] = useState(false);
    const activeNext = "bg-gradient-to-b from-[#E4FC70] to-[#9AECA4]";
    const deactiveNext = "bg-[#7E7E7E]";
    
    const handlePass = (e) => {
        setPass(e.target.value);
    };
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
    };
    const handlePasswordForm = (e) => {
        e.preventDefault();
        // if password is confirmed then activate setNext(true) button
        
    };
    useEffect(() => {
        pass.length >= 8 ? setMinCheck(true) : setMinCheck(false);
        pass === confirm ? setMatch(true) : setMatch(false);
        minCheck && match ? setNext(true) : setNext(false);
    }, [pass, confirm, minCheck, match]);
    

  return (
    <div className='text-center'>
        <button>Back</button>
        <h2 className='text-2xl text-center mb-5 font-medium'>Create a password</h2>
        <p className='font-medium text-base'>You will use this to unlock your wallet</p>
        <form className='flex flex-col items-center'>
            <input onChange={handlePass} type="password" name="password" value={pass} />
            <p>Minimum 8 characters</p>
            <input onChange={handleConfirm} type="password" name="confirm" value={confirm} />
            <p>Passwords do not match</p>
        </form>
        <button className={`${next ? activeNext : deactiveNext } py-3 px-10 rounded-full text-[#37393F] text-base`}>NEXT</button>
    </div>
  )
}

export default CreatePassword