// import React from 'react'
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { signInStart,signInFailure,signInSuccess } from "../redux/user/userSlice.js";

import OAuth from "../components/OAuth.jsx";
export default function Signin() {
  const [formData,setformData]=useState({})
  // const [errorMessage,setErrorMessage]=useState(null)
  // const [loading ,setLoading]=useState(false)
  const {loading ,error:errorMessage}=useSelector(state=>state.user)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChange =(e)=>{
    // console.log(e.target.value)
    setformData({...formData,[e.target.id]:e.target.value.trim()})
  }
  // console.log(formData)
  const handleSubmit =async (e)=>{
   
  e.preventDefault();

if(!formData.email ||!formData.password)
{
  // return setErrorMessage("please fillout all the fields")
  return dispatch(signInFailure("please fillout all the fields"))
}


  try {
    // setLoading(true)
    // setErrorMessage(null)
    dispatch(signInStart())
    const res= await fetch('/api/auth/signin',{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(formData),

    })
    const data=await res.json();
    if(data.success===false){
      // return setErrorMessage(data.message)
      dispatch(signInFailure(data.message))
    }
    // setLoading(false)
  if(res.ok){
    dispatch(signInSuccess(data))
    navigate('/')
  }    
  } catch (error) {
    // client side error
    // setErrorMessage(error.message)
    // setLoading(false)
    dispatch(signInFailure(data.message))
  }
  
  
  
  }
  return (
    <div className="min-h-screen mt-20">
      {/* bada dabba */}
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to={'/'} className="  font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Ankush's</span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign in with your email and password or with google
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div>  <Label value="Your email" />
              <TextInput type="email" placeholder="name@company.com" id="email"  onChange={handleChange}/>
            </div>
            <div>  <Label value="Your password" />
              <TextInput type="password" placeholder="password" id="password" onChange={handleChange} />
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>
              {
                loading ?
                (
                  <><Spinner size='sm'/>
                  <span className="pl-3">Loading... </span>
                  </>):" Sign In"
              }
             </Button>
          <OAuth/>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Don't have an account ?</span>
              <Link to='/sign-up' className="text-blue-500" >
              Sign Up</Link>
            </div>
            {
              errorMessage && <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            }
        </div>
      </div>
    </div>
  )
}
