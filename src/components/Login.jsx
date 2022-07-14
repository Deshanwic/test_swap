import React from 'react'
import { useState } from "react";
import {FcGoogle} from "react-icons/fc"
import {FaFacebookSquare} from "react-icons/fa"
import LoginImg from "../assets/login1.jpg"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import axios from "axios";


export default function Login() {

  const [userName, setName] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: "",
            password: ""
        }

    });

    const navigate = useNavigate();

    const authhandle = (e) => {
      console.log("login data", userName)
      const url = 'http://18.130.213.30:8080/authenticate'
      axios.post(url, {
        username: userName,
        password: password
      }).then((res) => {
        console.log("response", res.data.body.jwt)
        console.log("user", res.data.body.user.uId)
  
        localStorage.setItem('jwt', res.data.body.jwt)
        localStorage.setItem('user', JSON.stringify(res.data.body.user))
        console.log(res.data.body.user)
        console.log(localStorage.getItem('user'))
  
        if (res.data.body.user.userName == 'jonathancorera@hotmail.com') {
          console.log("type: Admin")
          console.log(res.data.body)
          console.log(res.data.body.user.firstName)
          alert('Welcome !!!  ' + res.data.body.user.firstName)
          navigate("/home")
        
        // } else if (res.data.body.user.type == 'C') {
        //   console.log("type: customer")
        //   alert('Welcome !!!  ' + res.data.body.user.fName)
        //   navigate("/")
        } else {
          // console.log("type: invalid")
          navigate("/home")
          alert('Welcome !!!  ' + res.data.body.user.firstName)
        }
  
      }).catch((err => {
        alert('Invalid ! Please Check Your Email or Password ' + err.name);
      }));
    }
  


  return (

   
    <div className='relative w-full h-screen bg-gray-600'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay ' src={LoginImg} alt="" />
      
      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[420px] w-full max-auto bg-white p-8 ' onSubmit={handleSubmit((data) => {
                    // data.preventDefault();
                    console.log(data);
                    if(errors != ''){authhandle()}else(alert('please fill the fields'))
                })}>

            <h2 className='text-4xl font-bold text-center py-8'> Bookswap</h2>
            <div className='flex flex-col mb-8'>
             
                <input className='border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 ' type="text " placeholder='User Name' {...register("username", { required: 'This is required', pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/  })}  onChange={(e) => setName(e.target.value)} />
                <p className='text-red-400'> {errors.username?.message}</p>
            </div>
            <div className='flex flex-col mb-8'>
          
                <input className='border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100' type="Password" placeholder='Password' {...register("password", { required: 'This is required', minLength: { value: 4, message: "Min length is 4" } })}  onChange={(e) => setPassword(e.target.value)} />
                <p className='text-red-400'> {errors.password?.message}</p>
            </div>

            {/* <Link to={"/home"}> */}
            
            <button type='submit' className='w-full py-3 mt-7 bg-amber-400 hover:bg-slate-500 relative text-black hover:text-white' >Sign In</button>
         
            {/* </Link>   */}





            <p className='flex items-center mt-4 relative '>Forgot password</p>
              

              {/* <a href="/register"><p className=' text-center mt-9'>Not a member? Register now</p> </a> */}

              <Link to={"/newregister"}>
 
              <button className='w-full py-3 mt-8 bg-white relative text-black'>Not a member? Register now</button>
              </Link>  
                 
             {/* <a href="/register"><p className=' text-center mt-9'>Not a member? Register now</p> </a>  */}
           
            <div className='flex justify-between py-8'>
                <p className='border bg-amber-400 shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center hover:bg-slate-500 text-black hover:text-white'><FaFacebookSquare className='mr-2'/>Facebook</p>
                <p className='border bg-amber-400 shadow-lg hover:shadow-xl px-7 py-2 relative  flex items-center hover:bg-slate-500 text-black hover:text-white'><FcGoogle className='mr-2'/>Google</p>
            </div>
        </form>
      </div>
      
      
    </div>
  )
}
