import React from 'react'
import Link from 'next/link'
const Door = () => {
  return (
    <>
    <div style={{marginBottom:'-9rem', marginTop:'-1rem'}}>
      <section className=" bg-[url('/AP10.jpg')] bg-cover bg-fixed relative z-10 my-4  overflow-hidden pt-40  lg:pt-[200px] lg:pb-[90px]">       
          <h1  className=" pt-2 relative z-10 my-4  text-4xl mb-12 tracking-tight font-extrabold text-center  text-gray-900 text-white">Wall Cladding</h1>       
        <div className="space-y-15">
          <div
            className=" relative z-10 my-4 text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
            <div style={{ marginTop: '-2rem' }} className=" text-justify text-white w-full md:w-1/3 space-y-4">
              <p className='font-light' style={{ marginLeft: 20, marginRight: 20 }}>
              We provide wall cladding and we offer a comprehensive range of profiles, built-up systems and structural liner trays, to meet all your cladding requirements.
              </p>
            </div>
            <div className="mx-auto w-1/2 md:w-1/3">
              <Link href='/wallcladding'>
              <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View / Order</button>
              </Link>           
            </div>
          </div>
        </div>
        <div className="relative z-10 my-4 container px-7 py-24 mx-auto flex flex-wrap">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
          </div>
        </div>
      </section>
      </div>
    </>
  )
};
export default Door
