"use client"
import React, { useRef, useState } from "react";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import styles from "@/app/contacts/contact.module.css";

const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    
      .sendForm(
        "service_o4yyb0q",
        "template_daus7jp",
        form.current,
        "PaPS_NUFVatocWFMW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
      
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  function fun(){
    document.getElementById('name').value='';
    document.getElementById('mail').value='';
    document.getElementById('phone').value='';
    }

  return (
    <>
     <div className="container py-24 mx-auto md:px-6 ">
  <section  className=" margin={5}">
    <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
    <div className="container px-6 md:px-12">
      <div
        className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
        <div className="flex flex-wrap">       
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">If you have any query then you can contect with our team. thank you from A Plus studio.If you have any query then you can contect with our team.</p>   
     <form  ref={form}  onSubmit={sendEmail} action="#" className="space-y-8">
         <div>
              <label htmlFor="name" name="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input type="text" name="user_name" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div>
              <label htmlFor="email"  name="user_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" name="user_email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name="message"  rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>       
                  <button type="submit" value="Send" className="shadow-lg shadow-cyan-500/50 ... text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Send message</button>
          <h1 style={{color:"green"}}>{done && "Thanks htmlFor Contacting US"}</h1>
      </form>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex flex-wrap">
              <div className=" mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div className=" pt-10 flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">

                    <MdEmail />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-black">
                      Email
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-00">
                      Info@aplusstudio.in
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">Monday to Saturday Expected </p>
                        <p className="text-neutral-500 dark:text-neutral-200">response time: 24 hours </p>
                        <Link href="https://gmail.com">  Send Email <span>-&gt;</span></Link>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div className=" pt-7 flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                        stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-black">
                      Sales questions
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      aplusstudio.in
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                        stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-black">Press</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      aplusstudio.in
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <MdVoiceChat />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-black">Live Chat
                        </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                     Info@aplusstudio.in
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">Weekdays: 9 AM — 6 PM ET</p>
                        <p className="text-neutral-500 dark:text-neutral-200">Weekends: 9 AM — 5 PM ET </p>
                        <Link href="/" >  Chat Now <span>-&gt;</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>
<iframe style={{marginTop:'-7rem', marginBottom:'-6rem'}} 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14022.1804498434!2d77.3962677!3d28.5233307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9d48b8267cd%3A0xb8ae7c7899c59509!2sInterior%20Craft!5e0!3m2!1sen!2sin!4v1695297049862!5m2!1sen!2sin"
                width={100} height={450}  allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>

</>
  )
};

export default Contact