import React from 'react'
import loginImage from '../assets/loginIcon.png'
import {BiShow, BiHide} from 'react-icons/bi'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [showPassword,setShowPassword] = useState(false)
  const [data,setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : ""
  });
  console.log(data)

  const handleShowPassword = () =>{
    setShowPassword(preve => !preve)
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

  const handleUploadProfileImage = (e) => {
    console.log(e.target.files[0])
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const {email,password} = data
    if(email && password){
        alert("successfully created")
        navigate('/login')
      }
    else{
      alert("Please enter require field")
    }
  }

  return (
    <div className='p-3 md:p-4'>
    <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
        {/* <h1 className='text-center text-2xl font-bold'>Login</h1> */}
        
        
        <label htmlFor='profileImage'>
        <div className='w-16 overflow-hidden rounded-full m-auto cursor-pointer'>
            <img src={loginImage} className='w-full'/>
        </div>
        <input type={"file"} id='profileImage' accept='image/*' className='hidden' onChange={handleUploadProfileImage}/>
        </label>

        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
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
     
            <button className='max-w-[120px] w-full m-auto mt-4 mb-2 bg-red-500 hover:bg-red-600 cursor-pointer text-xl font-medium text-center rounded-full'>Login</button>
        </form>
          <p className='text-left text-sm'>Don't have an account ?<Link to={"/signup"} className='text-red-500 underline'> Signup</Link></p>
    </div>
</div>
  )
}

export default Login