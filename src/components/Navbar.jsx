import { useState,React } from "react"
import { FaShoppingBag } from "react-icons/fa"
import { FaUserAlt } from "react-icons/fa"
import Allbookslist from './pages/Allbookslist';

export default function Navbar() {
    const [title, settitle] = useState('');
    var Jwt = localStorage.getItem("jwt")
    return (
        <div>


            <nav class="bg-amber-400 shadow dark:bg-gray-800">

                <div class="container px-6 py-3 mx-auto">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <a class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Bookswap</a>





                                <div class="hidden mx-10 md:block">
                                    <div class="relative">

                                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                            {/* <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>  */}
                                        </span>

                                        <div class="relative flex w-full">
                                            {/* <select class="w-full py-2 pl-10 pr-44 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-black-400 focus:outline-none focus:ring focus:ring-opacity-40 " >
                                                <option>News</option>
                                                <option>Business</option>
                                                <option>Children books</option>
                                                <option>Cookbooks</option>
                                                <option>History</option>
                                                <option>Literature</option>
                                                <option>Romance</option>
                                                <option>Fantacy</option>
                                            </select> */}
                                        </div>

                                        <input type="text" class="w-full py-2 pl-10 pr-44 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-black-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" onChange={(e) => settitle(e.target.value)}/>
                                        <button  type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white  rounded-r-lg border border-black-700  focus:ring-4 focus:outline-none focus:ring-black-300 bg-amber-400 hover:bg-slate-500 dark:focus:ring-black-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                    </div>
                                </div>
                            </div>


                            <div class="flex md:hidden">

                                <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>

                            </div>
                        </div>


                        <div class="items-center md:flex">


                            <div class="flex items-center py-2 -mx-1 md:mx-0">

                                <p className='border bg-amber-400 shadow-lg hover:shadow-xl px-6 py-2 mx-2 relative flex items-center  hover:bg-slate-500 text-black hover:text-white'><FaUserAlt className='mr-2' />Sign In</p>
                                <p className='border bg-amber-400 shadow-lg hover:shadow-xl px-7 py-2 mx-2 relative  flex items-center hover:bg-slate-500 text-black hover:text-white'><FaShoppingBag className='mr-2' />Shopping Cart</p>


                                {/* <a class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto" href="#">Login</a>
                        <a class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto" href="#">Join free</a> */}
                            </div>


                            <div class="mt-3 md:hidden">
                                <div class="relative">
                                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>

                                    <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden justify-center items-center text-center ">
                        <a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" href="/home">Home</a>
                        <a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" href="/business">Business</a>
                        <a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" href="/childrenbooks">Children books</a>
                        <a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" href="/cookbooks">Cookbooks</a>
                        <a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" href="/history">History</a>
                        <a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" href="/literature">Literature</a>
                        <a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" href="/romance">Romance</a>
                        <a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" href="/fantacy">Fantacy</a>
                        <a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" href="/allbooks">All Books</a>
                        <a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0" href="/Profile">Profile</a>

                    </div>
                </div>
            </nav>
        </div>
    )
}
