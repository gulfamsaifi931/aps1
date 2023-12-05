'use client'

import styles from "@/app/orderdetails/orderdetails.module.css"
import { Mulish } from "next/font/google";
import { useState } from "react";
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})
const Orderform = () => {
    const [user, setUser] = useState({
        custumer_name: "",
        productname: "",
        code: "",
        quantity: "",
        size: "",
        message: ""
    })
    const [status, setStatus] = useState(null);


    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/orderdetails', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    custumer_name: user.custumer_name,
                    productname: user.productname,
                    code: user.code,
                    quantity: user.quantity,
                    size: user.size,
                    message: user.message
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    custumer_name: "",
                    productname: "",
                    code: "",
                    quantity: "",
                    size:"",        
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('error');
            }

        } catch (e) {
            console.log(e)
        }
    }
    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
             <div className={styles.input_field}>
             <label htmlFor="custumer_name" className={styles.label}>
                    Enter your name
                    <input type="text" name="custumer_name" id="custumer_name"
                        placeholder="name"
                        className={mulish.className}
                        value={user.custumer_name}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="productname" className={styles.label}>
                    Enter Product name
                    <input type="text" name="productname" id="productname"
                        placeholder="product name"
                        className={mulish.className}
                        value={user.productname}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
          <div className={styles.input_field}>
                <label htmlFor="code" className={styles.label}>
                   Product Code Number
                    <input type="text" name="code" id="code"
                        placeholder="Check on produt & Enter"
                        className={mulish.className}
                        value={user.code}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="quantity" className={styles.label}>
                    Product Quantity
                    <input type="number" name="quantity" id="quantity"
                        placeholder="quantity"
                        className={mulish.className}
                        value={user.quantity}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>


            <div class="flex rounded-md shadow-sm">
                <label htmlFor="size" className='px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400'>
                    Size
                    <input type="number" name="size" id="size"
                        placeholder="Height"
                        className='py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                        value={user.size}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                     <input type="number" name="size" id="size"
                        placeholder="weidth"
                        className='py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                        value={user.size}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>

            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Contact Information
        </h6>
















            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea name="message" id="message" rows={5}
                        placeholder="message about product"
                        className={mulish.className}
                        value={user.message}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>
            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                <button type="submit" className="shadow-lg shadow-cyan-500/50 ... text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send</button>
            </div>
        </form>
        
    );
};

export default Orderform;