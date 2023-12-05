import React from 'react'
import Link from 'next/link'

import baseUrl from '@/utils/baseUrl'
import Image from 'next/image'
const getProducts = async () => {
  try {
    const NextResponse = await fetch(`${baseUrl}/api/products`,{
      cache: "no-store",
    });

    if (!NextResponse.ok) {
      throw new Error("Failed to fetch products");
    }

    return NextResponse.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

export default async function ProductsList() {
  const { products } =  await getProducts ()|| {}
  return (
    <>
      <div style={{marginBottom:'-6rem'}} className="bg-gradient-to-r from-violet-100 to-pink-100  py-12  px-5 p-10 lg:px-320 lg:pt-12 ">
      <div style={{marginBottom:'-4rem'}} className=" mx-auto max-w-2xl   py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        
  <h1 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 text-black py-2"> Gallery </h1>
  <p className="bg-black bg-opacity-25 text-1xl mb-4 tracking-tight  text-center text-gray-900 dark:text-black"> A Plus Studio has completed some project. you can see in our gallery section. thank you from A Plus Studio. </p>
  </div>
  <div className=" flex flex-wrap md:-m-">
  {products && products.map((products) => (
    <div 
    key={products._id}
     className="flex w-1/3 flex-wrap">
      <div className="w-full p-0 md:p-6">
        <Link href={`/gallery/${products._id}`}>
        <Image
        width={1000}
        height={1000}
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center p-1 transition duration-300 ease-in-out  transform hover:scale-110 motion-reduce:transform-none ... "
          src={products.mediaUrl} />
          </Link>
      </div>
      
    </div>
    
    ))}
  
  </div>
</div>

    </>
  )
}


