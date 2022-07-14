import { React, useEffect } from 'react'
import Navbar from '../Navbar'
import axios from "axios";
import Allbookslist from './Allbookslist';
import useFetch from "./usefetch";



export default function Allbooks() {
  var Jwt = localStorage.getItem("jwt")
  const { data, isPending, error } = useFetch('http://18.130.213.30:8080/books/', Jwt);
  console.log(data)
  useEffect(() => {
    console.log('hi')
    
  });

  return (

    <div>
      <Navbar />

      <section class="container p-6 mx-auto bg-white dark:bg-gray-800">
        <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl justify-center items-center text-center">All Books</h2>

        <div class="flex items-center justify-center">
          {/* <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
          <Allbookslist booksList={data} />



        </div>
        {/* </div> */}
      </section>

    </div>


  )
}
