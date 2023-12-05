import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const futured_product = () => {
  return (
    <>
      <section style={{ marginBottom: '-6rem' }} className="relative z-10 my-4 overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <video src=
          "/pro.mp4"
          autoPlay="{true}" loop muted
          className="absolute z-10 w-auto 
            min-w-full min-h-full max-w-none">
        </video>

        <section className="  bg-cover bg-fixed relative z-10 my-4  overflow-hidden pt-40  lg:pt-[200px] lg:pb-[90px]">       
        <div className="space-y-15">
          <div
            className=" relative z-10 my-4 text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
            <div  className=" text-justify text-white w-full md:w-1/2 space-y-4">
            <h1 className=" relative z-10 my-4  text-4xl tracking-tight font-extrabold text-center  text-gray-900 text-white"> A Plus Studio featured projects </h1>       
              <p className='font-light' style={{ marginLeft: 20, marginRight: 20 }}>
              A Plus Studio Concealed Door Hinges are applied to residential and commercial door projects from all over the world. and A plus studio provide perfect & high-quality Wall Cladding.               
              </p>
            </div>
            <div className="mx-auto w-1/2 md:w-1/3">
            <Link href="/gallery">
              <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">See Projects</button>
            </Link>         
            </div>
          </div>
        </div>
        <div className="relative z-10 my-4 container px-7 py-24 mx-auto flex flex-wrap">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
          </div>
        </div>
      </section>
        
      </section>
    </>
  )
}

export default futured_product