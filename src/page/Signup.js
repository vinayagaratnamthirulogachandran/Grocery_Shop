import React from 'react'
import loginImage from '../assets/loginIcon.png'
import {BiShow, BiHide} from 'react-icons/bi'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { ImagetoBase64 } from '../utility/ImagetoBase64';

const Signup = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const [data,setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : "",
    image : ""
  });
  console.log(data)

  const handleShowPassword = () =>{
    setShowPassword(preve => !preve)
  }
  const handleShowConfirmPassword = () =>{
    setShowConfirmPassword(preve => !preve)
  }
  const handleOnChange = (e) =>{
    const {name,value} = e.target
    setData((preve) =>{
      return{
        ...preve,
        [name]:[value]
      }
    })
  }

  const handleUploadProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0])
    console.log(data)

    setData((preve) =>{
      return{
        ...preve,
        image : data
      }
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const {firstName,email,password,confirmPassword} = data
    if(firstName && email && password && confirmPassword){
      if(password == confirmPassword){
        alert("successfully created")
      }
      else{
        alert("password and confirmpassword are not equal")
      }
    }
    else{
      alert("Please enter require field")
    }
  }

  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
            {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
            
        <label htmlFor='profileImage'>
        <div className='w-20 h-20 overflow-hidden rounded-full m-auto cursor-pointer'>
            <img src={data.image ? data.image : loginImage} className='w-full h-full'/>
        </div>
        <input type={"file"} id='profileImage' accept='image/*' className='hidden' onChange={handleUploadProfileImage}/>
        </label>
            

            <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First name</label>
                <input 
                type={"text"} 
                id='firstName' 
                name='firstName' 
                className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded border-none outline-none focus-within:outline-blue-500' 
                value={data.firstName}
                onChange={handleOnChange}/>
                

                <label htmlFor='lastName'>Last name</label>
                <input 
                type={"text"} 
                id='lastName' 
                name='lastName' 
                className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded border-none outline-none focus-within:outline-blue-500'
                value={data.lastName}
                onChange={handleOnChange}/>

                <label htmlFor='email'>Email</label>
                <input 
                type={"email"} 
                id='email' name='email' 
                className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded border-none outline-none focus-within:outline-blue-500'
                value={data.email}
                onChange={handleOnChange}/>

                <label htmlFor='password'>Password</label>
                <div className='flex mt-1 mb-2 px-2 py-1 bg-slate-200 rounded border-none outline-none focus-within:outline-blue-500'>
                <input 
                type={showPassword ? "text" : "password"} 
                id='password' 
                name='password' 
                className='w-full bg-slate-200 border-none outline-none '
                value={data.password}
                onChange={handleOnChange}/>
                <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ? <BiShow/> : <BiHide/>}</span>
                </div>

                <label htmlFor='confirmPassword'>Confirm Password</label>
                <div className='flex mt-1 mb-2 px-2 py-1 bg-slate-200 rounded border-none outline-none focus-within:outline-blue-500'>
                <input 
                type={showConfirmPassword ? "text" : "password"} 
                id='confirmPassword' 
                name='confirmPassword' 
                className='w-full bg-slate-200 border-none outline-none '
                value={data.confirmPassword}
                onChange={handleOnChange}/>
                <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}>{showConfirmPassword ? <BiShow/> : <BiHide/>}</span>
                </div>
         
                <button className='max-w-[120px] w-full m-auto mt-4 mb-2 bg-red-500 hover:bg-red-600 cursor-pointer text-xl font-medium text-center rounded-full'>Sign Up</button>
            </form>
              <p className='text-left text-sm'>Already have an account ?<Link to={"/login"} className='text-red-500 underline'> Login</Link></p>
        </div>
    </div>
  )
}

export default Signup