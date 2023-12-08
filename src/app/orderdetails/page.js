import React from 'react';
import styles from "../formdetails/formdetails.module.css";
import Orderdetails from "@/app/components/Orderdetails";
const Contact = () => {
    return (
        <>
        <div style={{marginBottom: '-6rem'}} className="bg-cover bg-center py-1 bg-[url('/AP10.jpg')] bg-fixed">
            <div  className={styles.container}>
                <section className={styles.contact_section}>
                    <h1 >Order Form</h1>
                    <p className='text-white'>Door & Wall cladding form:- Door form down side.</p>
                    <div className="mt-2 opacity-40 relative z-10 inline-block animate-bounce rounded-full p-4 bg-black text-white text-sm">
        <svg className="w-2 h-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
    </div>
                        <h2>We'd love to hear <span> from you </span></h2>
                        <Orderdetails />
                    </section>
                </div>
            </div>
        </>
    );
};
export default Contact;