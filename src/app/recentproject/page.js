import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Recentproject = () => {
  return (
    <>
   <div  className=" py-6 bg-white">
        <div className="  md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
       
          <div className="space-y-16">
            <div
              className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/4 space-y-4">
              <h1 className="text-4xl mb-8 tracking-tight font-extrabold text-gray-900 dark:text-black"> OUR RECENT PROJECTS</h1>
                <p>
                Take a look at our recent projects to understand how we can help you.
                </p>
                <Link href='/door/1'>
              <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">See Here</button>
              </Link>           
              </div>
              
            
              <div className="mx-auto w-1/1 md:w-1/3">
               
<div className="grid grid-cols-2 md:grid-cols-2 gap-4">
    <div className="relative  overflow-hidden  rounded-lg   ">
    <Image 
        width={10000}
        height={10000}
        className="h-64 w-80 rounded-lg " src="/AP6.jpg" alt=""/>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30 "></div>
    <p style={{marginTop:'-5rem'}} className="bg-opacity-40 relative  bg-black  text-white md:justify-center md:flex md:items-center">A Plus Studio</p>
    </div>
    <div className="relative max-w-xs overflow-hidden bg-cover rounded-lg  bg-no-repeat">
    <Image 
        width={10000}
        height={10000}
        className="h-64 w-80 rounded-lg " src="/02.jpg" alt=""/>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30 "></div>
      <p style={{marginTop:'-5rem'}} className="bg-opacity-40 relative  bg-black  text-white md:justify-center md:flex md:items-center">A Plus Studio</p>
    </div>
    <div className="relative max-w-xs overflow-hidden bg-cover rounded-lg  bg-no-repeat">
    <Image 
        width={10000}
        height={10000}
        className="h-64 w-80 rounded-lg " src="/AP7.jpg" alt=""/>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30 "></div>
      <p style={{marginTop:'-5rem'}} className="bg-opacity-40 relative  bg-black  text-white md:justify-center md:flex md:items-center">A Plus Studio</p>
    </div>
    <div className="relative max-w-xs overflow-hidden bg-cover rounded-lg  bg-no-repeat">
    <Image 
        width={10000}
        height={10000}
        className="h-64 w-80 rounded-lg " src="/a21.jpg" alt=""/>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30 "></div>
      <p style={{marginTop:'-5rem'}} className="bg-opacity-40 relative  bg-black  text-white md:justify-center md:flex md:items-center">A Plus Studio</p>
    </div>
    
</div>

              </div>
            </div>
            
</div>
          </div>
        </div>
    </>
  )
}

export default Recentproject
