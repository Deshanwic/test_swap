import React from 'react'



    const Allbookslist = ({booksList}) => {
        // var jwt = localStorage.getItem("jwt")
        
        // console.log("jwt "+jwt)
        // console.log("jwt "+url)
       
        // axios({
 
        //     method: "get",
        //     url: url,
        //     headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Methods": "GET,PUT,POST,PATCH,OPTIONS",
        //         "Authorization": `Bearer ` + jwt
        //     }, data: null,
           
        //     mode: "cors",
        // }).then((res) => {
        //  console.log( res.status)
        //     console.log(res.data)
           
    
        //     var books = res.data.body;
        //     localStorage.setItem("BooksList", JSON.stringify(books))
        // }).catch((err=>{console.log ("error ; "+err.name)}))
        //  }
        // const booksObj = localStorage.getItem('BooksList')
        // const booksList = JSON.parse(booksObj);
        // console.log(booksList)
    
  return (
   <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

       {booksList.map(book=>{return(

<div class="w-full max-w-xs text-center">
<a href="/bookdatails1"> <img class="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/E937/production/_119630795_hpbook976.jpg" alt=""/></a>


  <div class="mt-2">

<h3 class="text-sm font-medium text-gray-700 dark:text-gray-200">{book.title}</h3>
{/* <span class="mt-1 font-medium text-gray-600 dark:text-gray-300">100$</span> */}
</div>
</div>

  )})}
      </div>
  );

  }
  export default  Allbookslist;
