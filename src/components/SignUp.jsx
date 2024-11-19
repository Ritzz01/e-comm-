import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth,createUserWithEmailAndPassword} from "../firebase"

function SignUp() {
    const[email,setEmail]=useState()
    const[passwd,setPasswd]=useState()

    const navigate=useNavigate()

    const submit=async(e)=>{
        e.preventDefault()
        try {
          await createUserWithEmailAndPassword(auth,email,passwd)
          console.log("account create");
          navigate('/home')
          
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100" >
      <fieldset className="border border-black p-6 bg-teal-400 rounded-lg shadow-lg text-center w-80">
        <legend className="font-bold text-xl mb-4">Sign Up</legend>
        <form className="flex flex-col space-y-4" onSubmit={submit}>
          <label className="text-left text-black">
           Email
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}
            />
          </label>

          <label className="text-left text-black">
            Password
            <input
              type="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"  value={passwd} onChange={(e)=>setPasswd(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <h3 className="mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 hover:underline">
            Click here
          </Link>
        </h3>
      </fieldset>
    </div>
  );
}

export default SignUp;
