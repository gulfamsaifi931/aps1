import React from 'react'
import Image from 'next/image'
const Wall = () => {
  return (

      <div className="bg-white">
     <div  className="py-8 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <h1 className="mb-4 text-4xl mb-8 tracking-tight font-extrabold text-center text-gray-900 dark:text-white"></h1>
          <div className="space-y-16">
            <div
              className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/4 space-y-4">

                <h1 className="font-medium text-2xl">Wall Cladding</h1>
                
                <p>
                A plus studio provides the good and unique quality of Wall cladding for the covering of a wall with materials that provide both aesthetic and functional benefits. and it is easy to install.
                </p>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">
                
                   <Image 
            width={10000}
            height={10000}
            className=" rounded-xl  transition duration-300 ease-in-out  transform hover:scale-110 motion-reduce:transform-none ... " src='/S-1 copy.jpg' alt='' />
           
              </div>
            </div>

          </div>
        </div>
        <div
          className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
          <div className="w-full md:w-1/4 space-y-4">
            <h3 className="font-medium text-2xl">Deffrent color Wall cladding</h3>
            <p style={{ marginLeft: 20, marginRight: 20 }}>
           we provides good and deffrent color of Wall cladding and It is an exterior covering applied to the walls of a building to protect it from weather conditions.
            </p>
          </div>
          <div className="mx-auto w-1/2 md:w-1/3">
            <Image
              src="/01.jpg"
              alt="ecommerce"
              width={400}
              height={100}
              className='rounded-xl'
            />
          </div>
        </div>
        <div className="py-8 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <div className="space-y-16">
            <div
              className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/4 space-y-4">
                <h3 className="font-medium text-2xl"> Wall Cladding</h3>
                <p>
               We provides deffrent size of Cladding. it can be installed horizontally, vertically, or diagonally, allowing for creative and customized design patterns. Wall Cladding come in various styles and designs, allowing architects and designers to achieve diverse aesthetic effects.
                </p>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">
                <Image
                  src="/01.jpg"
                  alt="ecommerce"
                  width={400}
                  height={100}
                  className='rounded-xl'
                />
              </div>
            </div>

          </div>
        </div>
       </div>

  );
};
export default Wall
