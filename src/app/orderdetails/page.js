import React from 'react';
import styles from "../formdetails/formdetails.module.css";
import Orderdetails from "@/app/components/Orderdetails";
const Contact = () => {
    return (
        <>
        <div style={{marginBottom: '-6rem'}} className="bg-cover bg-center py-24 bg-[url('/AP10.jpg')] bg-fixed">
            <div  className={styles.container}>
                <section className={styles.contact_section}>
                    <h1 >Order Form</h1>
                        <h2>We'd love to hear <span> from you </span></h2>
                        <Orderdetails />
                    </section>
                </div>
            </div>
        </>
    );
};
export default Contact;