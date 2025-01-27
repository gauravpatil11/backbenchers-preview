import React from 'react';
import Logo from '../assets/images/Logo.png'
import './Footer.css'
import { a } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer class="text-gray-400 bg-gray-800 body-font">
                <div class="footer-container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <img src={Logo} alt="" className='img-header' />
                        </a>
                    </div>
                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div class="lg:w-1/3 md:w-1/2 w-full px-5">
                            <h2 class="title-font font-medium text-white tracking-widest text-md mb-3">Company</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='https://discord.gg/uubrUH8eRW'>Discord Server</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='https://chat.whatsapp.com/Cf7QS5vT6lpB4eEaCzjLwF'>Whatsapp</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='#'>Euphoria (Coming Soon) </a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='https://backbenchers-edtech.typeform.com/work-with-us'>Work with us</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='https://www.instagram.com/backbenchersed.tech/'>Gamified Learning</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='https://backbenchers-edtech.typeform.com/student-dvlp-pg'>Apply for Students Developer Program</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 w-full px-5">
                            <h2 class="title-font font-medium text-white tracking-widest text-md mb-3">Products</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='https://drive.google.com/drive/folders/1eu7RkTDVTfNsWNs0ak3IDRP9-wnfewgf?usp=sharing'>Meme Cheatsheets</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='https://drive.google.com/drive/folders/1NK86QICo0qYRvJ1TQe05p5r_8ESaWZHT?usp=sharing'>Interactive Classes</a>
                                </li>
                                <li>
                                    <a class="text-gray-400 hover:text-white" href='#'>Book A Walk Through</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 w-full px-5">
                            <h2 class="title-font font-medium text-white tracking-widest text-md mb-3">About</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a
                                        href='/Privacy'
                                        className="text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='/Services'
                                        className="text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        Live Mentorship T&C
                                    </a>
                                </li>
                                <li>
                                    <a
                                        exact
                                        href='/Guidelines'
                                        className="text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        Guidelines
                                    </a>
                                </li>
                                <li>
                                    <a
                                        exact
                                        href='/Refund'
                                        className="text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        Refund Policy
                                    </a>

                                </li>
                                <li>
                                    <a
                                        exact
                                        href='/Code'
                                        className="text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        Code of Conduct
                                    </a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-800 bg-opacity-75">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-400 text-md text-center sm:text-left">© Copyrights 2021 —
                            <a href="https://www.instagram.com/backbenchersed.tech/" rel="noopener noreferrer" class="text-gray-500 ml-1" target="_blank">@BackBenchers Edtech</a>
                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a class="text-gray-400 hover:text-white" href="https://www.facebook.com/BackBenchers-Edtech-105416761838435/?view_public_for=105416761838435">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="ml-3 text-gray-400 hover:text-white" href="https://twitter.com/BackBenchersEd">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a class="ml-3 text-gray-400 hover:text-white" href="https://www.instagram.com/backbenchersed.tech/">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="ml-3 text-gray-400 hover:text-white" href="https://www.aedin.com/company/backbenchers-edtech">
                                <i class="fab fa-aedin-in"></i>
                            </a>
                        </span>
                    </div>
                    <ScrollToTop smooth component={<FaChevronUp/>} style={{color:'black', background:'cyan', padding: '12px', boxShadow: '0px 0px 5px rgba(0,0,0,.5)'}} />
                </div>
            </footer>
        </div>
    );
}

export default Footer;
