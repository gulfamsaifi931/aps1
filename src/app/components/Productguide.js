import React from 'react'
import Link from 'next/link'

const Productguide = () => {
    return (
        <>
            <section style={{ marginTop: '-2rem', marginBottom: '-11rem' }} className=" bg-[url('/door.jpg')] h-90 relative z-10 my-4 overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
                <div className="py-8 mb-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
                    <h1 className=" pt-2 relative z-10 my-4 mb-4 text-4xl mb-8 tracking-tight font-extrabold text-center text-gray-900 text-white">Order Guide</h1>
                </div>
                <div className="space-y-16">
                    <div
                        className=" relative z-10 my-4 text-xl space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
                        <div style={{ marginTop: '-5rem' }} className=" text-justify  text-white w-full md:w-1/3 space-y-4">
                            <p className='font-light' style={{ marginLeft: 20, marginRight: 20 }}>
                                For order guide is that if you want to order Door then you can click on the For Order button and choose good Doors for your's Office or home.
                                A Plus Studi pivot hinge offers the architect the possibility to design pivot doors without limitations.and thank you for connecting us.
                            </p>
                        </div>
                        <div className="mx-auto w-1/2 md:w-1/3">
                            <Link href='/products'>
                                <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">For Order</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 my-4 container px-7 py-24 mx-auto flex flex-wrap">
                    <div className="-mx-4 flex flex-wrap items-center justify-between">
                    </div>
                </div>
            </section>

        </>
    )
};

export default Productguide
