import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import localFont from 'next/font/local'


const myFont = localFont({ src: '../fonts/bodoni-mt-black-2.ttf' })


const clip = () => {
  return (
    <>
      <section className=" relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className=" video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video src=
          "/AP8.mp4"
          autoPlay="{true}" loop muted
          className="absolute z-10 w-auto h-auto
            min-w-full min-h-full max-w-none">
        </video>
        </div>
        <div style={{marginTop:'9.5rem'}} className="relative z-10 my-4 video-content space-y-2">
        <div className={myFont.className}>
          <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white  animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text text-transparent">APS Wall Cladding and Doors</h1>
          </div>
          <p className=" bg-black bg-opacity-25 p-2 max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400" > A plus studio is specialized in manufacturing engineered products. It is specialized in manufacturing of Doors and Wall-Cladding.
          </p>
          <Link href="/" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Get started
          </Link>
          <Link href='/products'>
          <button type="button" className="shadow-lg shadow-cyan-500/50 ... text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Speak to sales</button>
        </Link>
        </div>
        
        <div className="mt-12 opacity-40 relative z-10 inline-block animate-bounce rounded-full p-4 bg-black text-white text-sm">
        <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
    </div>
      </section>

    </>
  )
}




















































































































export default clip
