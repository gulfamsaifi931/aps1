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
        size2: "",
        colorName: "",
        polish: "",
        hinge: "",
        door_opning: "",
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
            const response = await fetch('/api/door_form', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    custumer_name: user.custumer_name,
                    productname: user.productname,
                    code: user.code,
                    quantity: user.quantity,
                    size: user.size,
                    size2: user.size2,
                    colorName: user.colorName,
                    polish: user.polish,
                    hinge: user.hinge,
                    door_opning: user.door_opning,
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
                    size2:"", 
                    colorName: "",  
                    polish: "",
                    hinge: "",
                    door_opning: "",     
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
        
    <div style={{marginTop:'-3rem'}}>
        <h1>For Door order</h1>
        <p className="text-white">It is the door form. Please fill the all details for contecting with our team.</p>
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

            <label htmlFor="Size" className={styles.label}>
                    Door size
                    </label>
            <div class="flex rounded-md shadow-sm">
        
                    <input type="number" name="size" id="size"
                        placeholder="Height"
                        className=' py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                        value={user.size}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                    
                    <input  type="number" name="size2" id="size2"
                        placeholder="weidth"
                        className='py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                        value={user.size2}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
            </div>

<div>    
</div>




<div className={styles.input_field}>
             <label htmlFor="colorName" className={styles.label}>
                    Colour Names
                    <input type="text" name="colorName" id="colorName"
                        placeholder="Colours name   "
                        className={mulish.className}
                        value={user.colorName}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>



            <div className={styles.input_field}>
             <label htmlFor="polish" className={styles.label}>
                    Polish / vineer
                    <input type="text" name="polish" id="polish"
                        placeholder="Matt, Glass/six side vineer   "
                        className={mulish.className}
                        value={user.polish}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>



            <div className={styles.input_field}>
             <label htmlFor="hinge" className={styles.label}>
                    Hinge with size
                    <input type="text" name="hinge" id="hinge"
                        placeholder="Number of hinge with size  "
                        className={mulish.className}
                        value={user.hinge}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>



            <div className={styles.input_field}>
             <label htmlFor="door_opning" className={styles.label}>
                    Door opning
                    <input type="text" name="door_opning" id="door_opning"
                        placeholder="right / left"
                        className={mulish.className}
                        value={user.door_opning}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>







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
    </div>
        
    );
};

export default Orderform;