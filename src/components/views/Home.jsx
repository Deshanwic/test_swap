import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function Home() {
  
  return (
    <div>
      <Navbar/>

      <div>
     <div className='bg-gradient-to-tr from-purple-600 to-green-800  h-100 w-full bg-cover bg-center relative'>
        <img src='https://en.unesco.org/sites/default/files/styles/img_688x358/public/courier/photos/shutterstock_book-day-.jpg?itok=awCCawBl' className='w-full h-full object-cover absolute mix-blend-overlay ' />
        <div className='p-24 text-center items-center'>

    
        <h1 className='text-white text-6xl font-bold'> An easy and fun way to swap books you no longer need for books you want to read</h1>
          <h2 className='text-white  text-3xl font-light mt-5'>some realy greate stuff goes here</h2>
          <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-amber-400 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start Now</button>
          </div>
     </div>
    </div>
      

{/*       
        <header class="bg-white dark:bg-gray-800">
       

        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl"> Calling all book lovers! Support your reading habit without paying a dime or even taking a trip to the library....</h1>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">An easy and fun way to swap books you no longer need for books you want to read</p>
                    <div class="grid gap-6 mt-8 sm:grid-cols-2">
                       

                          
                       

                    <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <a href="#" class="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</a>
                        <a href="#" class="block px-3 py-2 text-sm font-semibold text-center text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
                    </div>


                        
                    </div>
                </div>
            </div>
    
            <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://media.npr.org/assets/img/2021/12/02/maureen-corrigan-reads-1_wide-e615c2a00bea413867488f80493e523a08b9ec88.jpg" alt=""/>
            </div>
        </div>
    </header> */}

    

    <section class="container p-6 mx-auto bg-white dark:bg-gray-800">
        <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl justify-center items-center text-center">Top Books</h2>

        <div class="flex items-center justify-center">
            <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="w-full max-w-xs text-center">
                <a href="/bookdatails1"> <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/E937/production/_119630795_hpbook976.jpg" alt=""/></a>
                    

                    <div class="mt-2">
                        
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Harry Potter</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">100$</span>
                    </div>
                </div>

                <div class="w-full max-w-xs text-center">
                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/E937/production/_119630795_hpbook976.jpg" alt=""/>

                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Harry Potter</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">100$</span>
                    </div>
                </div>

                <div class="w-full max-w-xs text-center">
                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/E937/production/_119630795_hpbook976.jpg" alt="" />

                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Harry potter</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">100$</span>
                    </div>
                </div>

                <div class="w-full max-w-xs text-center">
                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/E937/production/_119630795_hpbook976.jpg" alt=""/>

                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Harry Potter</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">100$</span>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="container p-6 mx-auto bg-white dark:bg-gray-800">
        <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl justify-center items-center text-center">Trending Books</h2>

        <div class="flex items-center justify-center">
            <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="w-full max-w-xs text-center">
                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/E937/production/_119630795_hpbook976.jpg" alt=""/>
                    

                    <div class="mt-2">
                        
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Harry Potter</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">100$</span>
                    </div>
                </div>

                <div class="w-full max-w-xs text-center">
                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/E937/production/_119630795_hpbook976.jpg" alt=""/>

                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Harry Potter</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">100$</span>
                    </div>
                </div>

                <div class="w-full max-w-xs text-center">
                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/E937/production/_119630795_hpbook976.jpg" alt="" />

                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Harry potter</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">100$</span>
                    </div>
                </div>

                <div class="w-full max-w-xs text-center">
                    <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/E937/production/_119630795_hpbook976.jpg" alt=""/>

                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Harry Potter</h3>
                        <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">100$</span>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section class="bg-white dark:bg-gray-900">
        
        <div class="container px-6 py-8 mx-auto">
        {/* <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl justify-center items-center text-center">Top Books</h2> */}
            <div class="lg:flex lg:-mx-2">
                <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                <h2 class="text-xl font-medium  capitalize dark:text-white md:text-2xl justify-center items-left  text-left  text-amber-400 relative hover:text-black">Adventure Books</h2>
                
                    <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline relative hover:text-blue-600">Fiction Novels</a>
                    <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline relative hover:text-blue-600">Literary Collection Books</a>
                    <a href="#" class="block font-medium text-blue-600 dark:text-gray-300 hover:underline relative hover:text-blue-600">Mystery, Thriller & Suspense Books</a>
                    <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline relative hover:text-blue-600">Science Fiction & Fantasy Books</a>
                    <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline relative hover:text-blue-600">Poetry Books</a>
                    <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline relative hover:text-blue-600">PLiterary Criticism Books</a>
                    <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline relative hover:text-blue-600">Drama Books</a>
                    <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline relative hover:text-blue-600">True Crime Books</a>
           
                </div>

                <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                        {/* <p class="text-gray-500 dark:text-gray-300">6 Items</p> */}
                        <div class="flex items-center">
                            {/* <p class="text-gray-500 dark:text-gray-300">Sort</p> */}
                            {/* <select class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                <option value="#">Recommended</option>
                                <option value="#">New Book</option>
                                <option value="#">Price</option>
                            </select> */}
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-32">
                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://ae01.alicdn.com/kf/HTB1FkyAM4TpK1RjSZFMq6zG_VXak/The-Little-Prince-Color-Illustration-English-Original-Novel-Reading-Classic-World-Famous-Books-English-Literature-Original.jpg" alt=""/>
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Harry Potter</h4>
                            <p class="text-blue-500">$12.55</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-amber-400 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://ae01.alicdn.com/kf/HTB1FkyAM4TpK1RjSZFMq6zG_VXak/The-Little-Prince-Color-Illustration-English-Original-Novel-Reading-Classic-World-Famous-Books-English-Literature-Original.jpg" alt=""/>
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200"> The Little Prince</h4>
                            <p class="text-blue-500">$18.55</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-amber-400 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://ae01.alicdn.com/kf/HTB1FkyAM4TpK1RjSZFMq6zG_VXak/The-Little-Prince-Color-Illustration-English-Original-Novel-Reading-Classic-World-Famous-Books-English-Literature-Original.jpg" alt=""/>
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">The Little Prince</h4>
                            <p class="text-blue-500">$16.55</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-amber-400 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://ae01.alicdn.com/kf/HTB1FkyAM4TpK1RjSZFMq6zG_VXak/The-Little-Prince-Color-Illustration-English-Original-Novel-Reading-Classic-World-Famous-Books-English-Literature-Original.jpg" alt=""/>
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">The Little Prince</h4>
                            <p class="text-blue-500">$12.55</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-amber-400 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   

    <section class="bg-white dark:bg-gray-900">
        
        <div class=" container px-6 py-8 mx-auto">
        {/* <h2 class="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl justify-center items-center text-center">Top Books</h2> */}
            <div class="lg:flex lg:-mx-2 ">
                <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 ">
                <h2 class="text-xl font-medium capitalize dark:text-white md:text-2xl justify-center items-left  text-left text-amber-400 relative hover:text-black">Children's & Kids Books</h2>
                
                    <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline relative hover:text-blue-600">Genaral Kid's Books</a>
                    <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline relative hover:text-blue-600">Animal</a>
                    <a href="#" class="block font-medium text-blue-600 dark:text-blue-500 hover:underline relative hover:text-blue-600">Action & Adventure</a>
                    <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline relative hover:text-blue-600">Bedtime & Dreams</a>
                    <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline relative hover:text-blue-600">computer & Digital Media </a>
                    <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline relative hover:text-blue-600">Craft, Hobbies,Activities</a>
                    <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline relative hover:text-blue-600">Learning Books</a>
                  
                </div>

                <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                        {/* <p class="text-gray-500 dark:text-gray-300">6 Items</p> */}
                        <div class="flex items-center">
                            
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-32">
                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://ae01.alicdn.com/kf/HTB1wh13M4YaK1RjSZFnq6y80pXa8.jpg" alt=""/>
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Wuthering Heights</h4>
                            <p class="text-blue-500">$12.55</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-amber-400 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://ae01.alicdn.com/kf/HTB1wh13M4YaK1RjSZFnq6y80pXa8.jpg" alt=""/>
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Wuthering Heights </h4>
                            <p class="text-blue-500">$18.70</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-amber-400 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://ae01.alicdn.com/kf/HTB1wh13M4YaK1RjSZFnq6y80pXa8.jpg" alt=""/>
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Wuthering Heights </h4>
                            <p class="text-blue-500">$16.55</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-amber-400 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://ae01.alicdn.com/kf/HTB1wh13M4YaK1RjSZFnq6y80pXa8.jpg"alt=""/>
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Wuthering Heights</h4>
                            <p class="text-blue-500">$12.55</p>

                            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-amber-400 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


<Footer/>





</div>

    

   
 
    
    
  )
}
