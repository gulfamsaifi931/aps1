'use client'
import styles from "@/app/formdetails/formdetails.module.css"
import { Mulish } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})
const ContactForm = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        address: ""
    })
    const [status, setStatus] = useState(null);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        router.push('/orderdetails')

        try {
            const response = await fetch('/api/formdetails', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    address: user.address
                })
            })
            // Set the status based on the response from the API route
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    address: ""
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
                <label htmlFor="username" className={styles.label}>
                    Enter your name
                    <input type="text" name="username" id="username"
                        placeholder="Enter your name"
                        className={mulish.className}
                        value={user.username}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" name="email" id="email"
                        placeholder="Enter your email"
                        className={mulish.className}
                        value={user.email}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input type="number" name="phone" id="phone"
                        placeholder="Enter your phone"
                        className={mulish.className}
                        value={user.phone}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="address" className={styles.label}>
                    Address
                    <textarea name="address" id="address" rows={5}
                        placeholder="Enter your full Address"
                        className={mulish.className}
                        value={user.address}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
            </div>
            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

                <button type="submit" className="shadow-lg shadow-cyan-500/50 ... text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send Details</button>
            </div>
        </form>
    );
};

export default ContactForm;