import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useState, useEffect} from "react";
import RingLoader from "react-spinners/RingLoader";

export default function Bookdatails1() {
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
  },[]);
  return (
      <div>
        {
          loading ?
          
          <div class='spinner-item grid h-screen place-items-center' >
          <RingLoader color={"#f37a24"}  size={150}   />
           </div>
      //     <div class="text-center">
      //     <svg role="status" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      //         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      //         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      //     </svg>
      // </div>

          :

          <><Navbar /><section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecomm
                erce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/E937/production/_119630795_hpbook976.jpg" />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                  <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Harry Potter and the philosopher's stone</h1>

                  <div class="flex mb-4">
                    <span class="flex items-center">
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4  text-yellow-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span class="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                    <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                      <a class="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>


                  </div>
                  <div class="justify-between mt-4">
                    <span class="text-sm text-black">Book Id: </span>

                    <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">J.K.Rowlling</a>
                  </div>
                  <div class="justify-between mt-1">
                    <span class="text-sm text-black">Book Owner: </span>

                    <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">223</a>
                  </div>
                  <div class="justify-between mt-1">
                    <span class="text-sm text-black">currently with: </span>

                    <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Used</a>
                  </div>
                  <div class="justify-between mt-1">
                    <span class="text-sm text-black">Description: </span>

                    <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Dhananjali</a>
                  </div>
                  <div class="justify-between mt-1">
                    <span class="text-sm text-black">Genre: </span>

                    <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">9780747532743</a>
                  </div>
                  <div class="justify-between mt-1">
                    <span class="text-sm text-black">Isbn: </span>

                    <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">9780747532743</a>
                  </div>
                  <div class="justify-between mt-1">
                    <span class="text-sm text-black">Owner ID: </span>

                    <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">9780747532743</a>
                  </div>
                  <div class="justify-between mt-1">
                    <span class="text-sm text-black">Status: </span>

                    <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">9780747532743</a>
                  </div>

                  <div class="justify-between mt-1">
                    <span class="text-sm text-black">Title: </span>

                    <a href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">9780747532743</a>
                  </div>


                  <details class="relative mt-4 group">
                    <summary class="block">
                      <div>
                        <div class="prose max-w-none ">
                          <h3 class="text-sm text-black">Description</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam dicta beatae eos ex error culpa delectus rem tenetur, architecto quam nesciunt, dolor veritatis nisi minus inventore, rerum at recusandae?
                          </p>
                        </div>

                        <span class="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                          Read More
                        </span>


                      </div>
                    </summary>

                    <div class="pb-6 prose max-w-none">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam dicta beatae eos ex error culpa delectus rem tenetur, architecto quam nesciunt, dolor veritatis nisi minus inventore, rerum at recusandae?
                      </p>

                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam sapiente nobis ea veritatis error consequatur nisi exercitationem iure laudantium culpa, animi temporibus non! Maxime et quisquam amet. A, deserunt!
                      </p>


                    </div>

                  </details>


                  <p class="text-2xl mt-2 text-black mb-8 w-full">$100.22</p>


                  <div class="flex mt-4">

                    <button class="w-32 py-3 mt-7 bg-amber-400 hover:bg-slate-500 relative text-black hover:text-white ">Swap


                    </button>
                    <button class="bg-amber-400 w-32 py-3 mt-7 relative  items-center ml-4 hover:bg-slate-500 text-black hover:text-white">Add to Cart


                    </button>
                  </div>
                  <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">


                  </div>

                </div>
              </div>
            </div>
          </section><Footer /></>
          
        }
         
    </div>
   
  )
}
