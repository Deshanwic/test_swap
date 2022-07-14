import React from 'react'
import Navbar from '../Navbar'

export default function Profile() {
  const userobj=localStorage.getItem('user');
  const user=JSON.parse(userobj);
  console.log("user"+user.userId)

  return (
    <div>
        <Navbar/>
        <div>
      
     

       <div  class=" h-40 w-40 mb-4  mr-4 mt-10 item-center justify-center mx-96" >
                        <img src="https://www.participate.nyc.gov/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg" alt="man avatar" class="h-full w-full rounded-full overflow-hidden shadow justify-center items-center mx-72" />
                    </div> 
    

        <div class="text-gray-700 items-center justify-center mx-36">
                        <div class="grid md:grid-cols-2 text-sm items-center justify-center mt-20">
                            <div class="grid grid-cols-2 " >
                                <div class="px-4 py-2 font-semibold">First Name</div>
                                <div class="px-4 py-2">{user.firstName}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Last Name</div>
                                <div class="px-4 py-2">{user.lastName}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Title</div>
                                <div class="px-4 py-2">Miss</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                <div class="px-4 py-2">{user.contactNo}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Current Address</div>
                                <div class="px-4 py-2">{user.address.addressLine1} {user.address.addressLine2} </div>
                                </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Password</div>
                                <div class="px-4 py-2">{user.password}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email.</div>
                                <div class="px-4 py-2">
                                    <a class="text-blue-800" href="mailto:{user.userName}">{user.userName}</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">City</div>
                                <div class="px-4 py-2">{user.address.city}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Province</div>
                                <div class="px-4 py-2">{user.address.province}</div>
                            </div>
                        </div>
                    </div>
                  
                </div>
       </div>
       
 
  )
}
