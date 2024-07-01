// import React from 'react'
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
export default function Sigup() {
  return (
    <div className="min-h-screen mt-20">
      {/* bada dabba */}
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to={'/'} className="  font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Ankush's</span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password or with google
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-3">
            <div>  <Label value="Your username" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div>  <Label value="Your email" />
              <TextInput type="text" placeholder="email" id="email" />
            </div>
            <div>  <Label value="Your password" />
              <TextInput type="text" placeholder="password" id="password" />
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit">Sign Up</Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account ?</span>
              <Link to='/Singnin' className="text-blue-500" >
              Sign in</Link>
            </div>
        </div>
      </div>
    </div>
  )
}
