import React from 'react'
import LoginImg from "../assets/login1.jpg"
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Newregister() {
    const [mrCheck,setMrCheck]= useState(false);
    const [mrsCheck,setMrsCheck]= useState(false);
    const [firstName, setFName] = useState('');
    const [lastName, setLName] = useState('');
    const [userName, setUserName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [password, setPassword] = useState('');
    const [contactNo, setContactNo] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "",
            lastName:"",
            userName: "",
            addressLine1:"",
            addressLine2:"",
            city:"",
            province:"",
            password: "",
            contactNo:""
        }
  
    });
    var jwt = localStorage.getItem("jwt")
      const userObj1 = localStorage.getItem('user1')
      const user1 = JSON.parse(userObj1);
      const navigate = useNavigate();
      // const back = (e) => {
      //     if (user1.userType == 'admin') {
      //         console.log("type: Admin")
      //         navigate("/home");
      //         // navigator('/home')
      //     } else if (user1.userType == 'employee') {
      //         console.log("type: employee")
      //         navigate("/bankemployee");
      //     } else if (user1.userType == 'customer') {
      //         console.log("type: customer")
      //         navigate("/customer");
      //     }
      // }
      const CreateUser = (e) => {
          console.log("firstName", firstName)
          console.log("lastName", lastName)
          console.log("userName", userName)
          console.log("addressLine1", addressLine1)
          console.log("addressLine2", addressLine2)
          console.log("city", city)
          console.log("province", province)
          console.log("password", password)
          console.log("contactNo", contactNo)
          console.log("jwt", jwt)
          
          axios({
              method: "post",
              url: "http://18.130.213.30:8080/users/signup/",
              headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                  "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  
              },
              data: {
                  firstName: firstName,
                  lastName: lastName,
                  addressLine1: addressLine1,
                  addressLine2: addressLine2,
                  city: city,
                  province: province,
                  userName: userName,
                  password: password,
                  contactNo: contactNo
              },
              // withCredentials: true,
              mode: "cors",
          }).then((res) => {
              console.log("response", res)
              if(res.status==200){
                  alert('Successfully Added')
                  navigate("/")
              }
             
          })
      }
      console.log(errors)
    
  const handleCheckmr=()=>{
    setMrCheck(!mrCheck);
    
  }
  const check=()=>{
    var all = document.getElementById("all"),
        group = document.getElementById("servers");
    if(all.checked == true){
        group.checked = false;
    } else if(group.checked == true){
        all.checked = false;
    }
    
  }

  return (
     
    <div className='bg-gray-600 h-screen w-full bg-cover bg-center relative'>
    <img src={LoginImg} className='w-full h-full object-cover absolute mix-blend-overlay ' />
    {/* <div className='p-24 text-center items-center'> */}
    <div className='flex justify-center items-center h-full top-10'>

    <form className='max-w-[500px] w-full max-auto bg-white p-8 pb-20 h-screen'onSubmit={handleSubmit((data) => {
                    // data.preventDefault();
                    console.log(data);
                    if(errors != ''){CreateUser()}else(alert('please fill the fields'))
                })}>
        <h2 className='text-4xl font-bold text-center px-1 py-1'>Create an Account</h2>

        <div className='flex justify-between text-gray-600 py-2 '>
       {/* <p className='flex items-center relative'><input className='mr-2' type="checkbox" id="gender" checked={mrCheck} onChange ={handleCheckmrs}/>MR</p>
       <p>{mrCheck ? "" : "unchecked" }</p>
       <p className='flex items-center relative'><input className='mr-1' type="checkbox" id="gender" checked={mrsCheck} onChange ={handleCheckmrs}/>MRS</p>
       <p>{mrsCheck ? "" : "unchecked" }</p> */}
       <input type="checkbox" id="all" value="all" name="all" onChange="check()"/>ALL <br/>
    <input type="checkbox" id="servers" value="xampp" name="server[]" onChange="check()" />XAMPP <br/>
    <input type="checkbox" id="servers" value="xampp" name="server[]" onChange="check()" />XAMPP <br/>
       
       </div>

       <div className='flex space-x-8'>
       <div className=' w-1/2 '>
          
          <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 px-2 placeholder-gray-500 placeholder-opacity-100 ' type="text"placeholder='First Name'{...register("firstName", { required: "This is required" })}  onChange={(e) => setFName(e.target.value)}/>
          <p className='text-red-400'> {errors.firstName?.message}</p>
      </div>

      <div className=' w-1/2   mb-4'>
         
          <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="text"placeholder='Last Name'  {...register("lastName", { required: 'This is required' })}  onChange={(e) => setLName(e.target.value)}  />
          <p className='text-red-400'> {errors.lastName?.message}</p>
      </div> 


       </div>

       

         <div className='flex flex-col mb-3'>
          
            <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="Email" placeholder='Email' {...register("userName", { required: 'This is required', pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/  })}  onChange={(e) => setUserName(e.target.value)} />
            <p className='text-red-400'> {errors.userName?.message}</p>
        </div>

        <div className='flex flex-col mb-3'>
            
            <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="text" placeholder='Contact No' {...register("contactNo", { required: 'Enter the only numbers', pattern: /^[0-9]/  })}  onChange={(e) => setContactNo(e.target.value)}/>
            <p className='text-red-400'> {errors.contactNo?.message}</p>
        </div>

        <div className='flex flex-col mb-3'>
           
            <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="Password" placeholder='Password'{...register(" password", { required: 'This is required', minLength: { value: 4, message: "Min length is 4" } })}  onChange={(e) => setPassword(e.target.value)} />
            <p className='text-red-400'> {errors.password?.message}</p>
        </div>

        <div className='flex space-x-8'>
       <div className=' w-1/2 '>
          
          <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 px-2 placeholder-gray-500 placeholder-opacity-100 ' type="text"placeholder='AddressLine1'{...register("addressLine1", { required: 'This is required' })}  onChange={(e) => setAddressLine1(e.target.value)}/>
          <p className='text-red-400'> {errors.addressLine1?.message}</p>
      </div>

      <div className=' w-1/2   mb-3'>
         
          <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="text"placeholder='AddressLine2' {...register("addressLine2", { required: 'This is required' })}  onChange={(e) => setAddressLine2(e.target.value)}/>
          <p className='text-red-400'> {errors.addressLine2?.message}</p>
      </div> 
      </div>
      <div className='flex space-x-8'>
       <div className=' w-1/2 '>
          
          <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 px-2 placeholder-gray-500 placeholder-opacity-100 ' type="text"placeholder='City'{...register("city", { required: 'This is required' })}  onChange={(e) => setCity(e.target.value)}/>
          <p className='text-red-400'> {errors.city?.message}</p>
      </div>

      <div className=' w-1/2   mb-3'>
         
          <input className=' border-solid border-2 border-black-600 relative bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 'type="text"placeholder='Province' {...register("province", { required: 'This is required' })}  onChange={(e) => setProvince(e.target.value)}/>
          <p className='text-red-400'> {errors.province?.message}</p>
      </div> 
      </div>

       


        <div className='flex justify-between text-gray-600 '>
       <p className='flex items-center relative text-sm '><input className='mr-2' type="checkbox" name='checks' {...register("chooseCb",{required:'This is required'} )}  />I agree to the terms and conditions and the privacy policy</p>
       
        

       

      </div>
      <div><p className='text-red-400'> {errors.chooseCb?.message} </p></div>


        <button  type='submit' className='w-full py-2 mt-6 bg-amber-400 hover:bg-slate-500 relative text-black hover:text-white '>Sign up</button>
        <Link to={"/"}>
        <button className='w-full py-2 mt-4 bg-amber-400  hover:bg-slate-500   relative text-black hover:text-white '>Back to Login</button>
        </Link>
       
        
    </form>
    </div>
</div>
  )
}
