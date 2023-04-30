import React from 'react'
import loginImage from '../assets/tea_logo.jpg'
import {BiShow, BiHide} from 'react-icons/bi'

const Signup = () => {
  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
            {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
            <div className='w-16 overflow-hidden rounded-full drop-shadow-md shadow-md'>
                <img src='loginImage' className='w-full'/>
            </div>

            <form className='w-full py-3'>
                <label htmlFor='firstName'>First name</label>
                <input type={"text"} id='firstName' name='firstName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded'/>

                <label htmlFor='lastName'>Last name</label>
                <input type={"text"} id='lastName' name='lastName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded'/>

                <label htmlFor='email'>Email</label>
                <input type={"email"} id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded'/>

                <label htmlFor='password'>Password</label>
                <div className='flex mt-1 mb-2 px-2 py-1 rounded'>
                <input type={"password"} id='password' name='password' className='w-full bg-slate-200 border-none outline-none'/>
                <span><BiShow/><BiHide/></span>
                </div>
         
         
            </form>
        </div>
    </div>
  )
}

export default Signup