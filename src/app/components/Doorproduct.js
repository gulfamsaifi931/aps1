import React from 'react'
import Image from 'next/image'

const Product = () => {
  return (

      <div className="bg-white">
     <div  className="py-8 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <h1 className="mb-4 text-4xl mb-8 tracking-tight font-extrabold text-center text-gray-900 dark:text-white"></h1>
          <div className="space-y-16">
            <div
              className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/4 space-y-4">
                <h1 className="font-medium text-3xl">Door</h1>            
                <p>
                A plus studio provides the high & good quality of doores. with Concealed Hinge quality of Hinges for your interior swinging doors. with movement, Adjustability and functionality.
                </p>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">
              <Image 
            width={10000}
            height={10000}
            className="h-64 w-96 rounded-xl shadow-md  bg-white transition duration-300 ease-in-out  transform hover:scale-110 motion-reduce:transform-none ... " src='/AP3.jpg' alt='' />
           
              </div>
            </div>

          </div>
        </div>
        <div
          className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
          <div className="w-full md:w-1/4 space-y-4">
            <h3 className="font-medium text-2xl">Adjustable Concealed Hinge</h3>
            <p style={{ marginLeft: 20, marginRight: 20 }}>
              A plus studio provides the High quality of hinges for Doores. The concealed hinge design offers a sleek and minimalist aesthetic to furniture and interiors. Concealed hinges, also known as European hinges, are a popular choice for modern cabinetry and doors.
              These hinges are installed inside the cabinet or door, making them invisible when closed.
            </p>
          </div>
          <div className="mx-auto w-1/2 md:w-1/3">
          <Image 
            width={10000}
            height={10000}
            className="h-64 w-96 rounded-xl shadow-md  bg-white transition duration-300 ease-in-out  transform hover:scale-110 motion-reduce:transform-none ... " src='/hinge.jpg' alt='' />
           
          </div>
        </div>
        <div className="py-8 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
          <div className="space-y-16">
            <div
              className=" text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
              <div className="w-full md:w-1/4 space-y-4">
                <h3 className="font-medium text-2xl">Functional Elements of Door</h3>
                <p>
                A Plus studio provides high-quality of Hinge, handles, locks, and other hardware components are integral to a door's functionality. These elements not only facilitate movement but also contribute to the overall design and security of the door.
                </p>
              </div>
              <div className="mx-auto w-1/2 md:w-1/3">
              <Image 
            width={10000}
            height={10000}
            className="h-64 w-96 rounded-xl shadow-md  bg-white transition duration-300 ease-in-out  transform hover:scale-110 motion-reduce:transform-none ... " src='/a21.jpg' alt='' />           
              </div>
            </div>

          </div>
        </div>
       </div>

  );
};
export default Product
