import React from 'react';
import styles from "./formdetails.module.css";
import Formdetails from "@/app/components/Formdetails";
const Contact = () => {
    return (
        <>
            <div style={{marginBottom: '-6rem'}} class="bg-cover bg-center bg-[url('/AP10.jpg')] bg-fixed">
                <div className={styles.container}>
                    <section className={styles.contact_section}>
                        <h1>order details</h1>
                        <h2 >We'd love to hear <span> from you </span></h2>
                        <Formdetails />
                    </section>
                </div>
            </div>
        </>
    );
};
export default Contact;