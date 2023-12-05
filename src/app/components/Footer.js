import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image"


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}
const Footer = () => {
    return (
        <>
        <div className='relative z-10'>
            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <Image
                                src="/log2.svg"
                                alt="ecommerce"
                                className={footerStyles.logo_name}
                                width={50}
                                height={80}
                            />
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                            <Link href="/"><i > <FaFacebookF /> </i></Link>
                            <Link href="https://twitter.com/aplusstudio_in"><i > <FaTwitter /> </i> </Link>
                            <Link href="https://www.instagram.com/aplusstudio.in/" target="_blank"><i > <FaInstagram />  </i></Link>
                            <Link href="https://www.linkedin.com/in/a-plus-studio-688644295?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B82KwpL9pR%2Fa8K2n380TcRA%3D%3D"><i > <FaLinkedinIn /> </i></Link>
                            <Link href="#"><i > <FaYoutube />  </i></Link>
                        </div>
                    </div>
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Company</li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/contacts">Contact us</a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/service">Services</a></li>
                            <li><a href="/ourteam">OurTeam</a></li>
                            <li><a href="/">Get started</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Services</li>
                            <li><a href="/gallery">Interior Design</a></li>
                            <li><a href="/door">Door</a></li>
                            <li><a href="/">Designing</a></li>
                            <li><a href="/wallcladding">Wall Cladding</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Account</li>
                            <li><a href="/">Profile</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Prefrences</a></li>
                            <li><a href="/products">Purchase</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>products</li>
                            <li><a href="/wallcladding">Wall Cladding</a></li>
                            <li><a href="/door">Door</a></li>
                            <li><a href="gallery">Photography</a></li>
                            <li><a href="/gallery">Photoshop</a></li>
                        </ul>
                        <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                            <li className={footerStyles.link_name}>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/>"> A Plus Studio.</Link> All rights reserved </span>
                        <span className={footerStyles.policy_terms}>
                            <Link href="/">Privacy policy</Link>
                            <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>
            </div>
        </>
    );
}

export default Footer;