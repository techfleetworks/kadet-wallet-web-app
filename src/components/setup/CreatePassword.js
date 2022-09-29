import React, { useState, useEffect } from 'react'

function CreatePassword() {
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const [minCheck, setMinCheck] = useState(false);
    const [match, setMatch] = useState(false);
    const [next, setNext] = useState(false);
    const activeNext = "bg-gradient-to-b from-[#E4FC70] to-[#9AECA4]";
    const deactiveNext = "bg-[#D8D8D8]";
    const [check, setCheck] = useState(false)
    
    const handlePass = (e) => {
        setPass(e.target.value);
    };
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
    };
    const handlePasswordForm = (e) => {
        e.preventDefault();
    };
    const handleCheck = (e) => {
        setCheck(!check)
    };
    useEffect(() => {
        pass.length >= 8 ? setMinCheck(true) : setMinCheck(false);
        pass === confirm ? setMatch(true) : setMatch(false);
        minCheck && match && check ? setNext(true) : setNext(false);
    }, [pass, confirm, minCheck, match, check]);
    

  return (
    <div className='text-center w-full flex flex-col justify-between relative h-full'>
        <div className='absolute h-[20px] w-[20px] top-[-70px] p-[1px] rounded-sm bg-gradient-to-r from-[#E4FC70] to-[#9AECA4]'>
            <div className='bg-[#37393F] rounded-sm'>
                <button className='text-transparent bg-clip-text bg-gradient-to-r from-[#E4FC70] to-[#9AECA4]'>&#60;</button>
            </div>
        </div>
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col'>
                <h2 className='text-2xl text-center mb-5 font-medium'>Create a password</h2>
                <p className='font-medium text-base'>You will use this to unlock your wallet</p>
            </div>
            <form className='flex flex-col items-center w-full text-[#F4F2EE]/[0.5] gap-4 mt-10'>
                <div className='w-full flex flex-col items-center'>
                    <input className='w-5/6 bg-transparent py-1 px-4 rounded border border-[#F4F2EE]' onChange={handlePass} type="password" name="password" value={pass} placeholder="Password"/>
                    <p className='w-5/6 text-left'>Minimum 8 characters</p>
                </div>
                <div className='w-full flex flex-col items-center'>
                    <input className='w-5/6 bg-transparent py-1 px-4 rounded border border-[#F4F2EE]' onChange={handleConfirm} type="password" name="confirm" value={confirm} placeholder="Confirm password" />
                    <div className='w-5/6'>
                        <p className={`${match ? 'opacity-0' : 'opacity-1' } cursor-default text-left text-[#FF7171]`}>Passwords do not match</p>
                    </div>
                </div>
                {/* accent-[#37393F] bg-[#37393F] */}
                <div className="flex items-center font-normal text-sm text-white">
                    <label className='cursor-pointer relative w-4 h-4 rounded border border-[#F4F2EE]'>
                        <input id="link-checkbox" onChange={handleCheck} checked={check} type="checkbox" className="absolute cursor-pointer opacity-0 w-4 h-4  appearance-none"/>
                        <span className={`absolute top-0 left-0 ${check ? 'bg-[#37393F] block rotate-45 transform left-[5px] top-0.5 w-[5px] h-[8px] border-2 border-t-0 border-l-0 border-[#F4F2EE] ' : 'bg-[#37393F] hidden'}  h-[20px] w-[20px] content-[""]`}></span>
                    </label>

                    <label for="link-checkbox" className="ml-2">I agree to <a href="#" target="_blank" rel="noopener" className="text-[#E4FC70] underline">Terms of Service</a>
                    </label>
                </div>
            </form>
        </div>
        
        <button className={`${next ? activeNext : deactiveNext } py-3 px-10 rounded-full text-[#37393F] text-base`}>NEXT</button>
    </div>
  )
}

export default CreatePassword