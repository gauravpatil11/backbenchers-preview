import React from 'react';
import './Demo.css'

const Demo = () => {
    return (
        <div>
            <div className="demo ">
                <div class="demo-container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="demo-contents lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                        <h1 class="title-font sm:text-4xl text-3xl  font-medium cyan">Beta Testing Phase 2
                        </h1>
                        <p class=" leading-relaxed text-gray-300 w-4/5 pt-2">We are back with our exclusive beta testing 2 along with  some exciting offers
                            Moreover, we have added one more option with : </p>
                        <div className="">
                            <ul className=" text-gray-300">
                                <li ><i class="fas fa-check-circle mr-1 cyan"></i> Coding</li>
                                <li><i class="fas fa-check-circle mr-1 cyan"></i> Mathematics Tips & Tricks</li>
                            </ul>
                            <div className="py-5">
                                <h1 className="text-2xl font-bold cyan">Course Contents</h1>
                                <ul className=" text-gray-300">
                                    <li><i class="fas fa-check-circle mr-1 cyan"></i> 1:1 Live classes</li>
                                    <li><i class="fas fa-check-circle mr-1 cyan"></i> Recorded Sessions</li>
                                    <li><i class="fas fa-check-circle mr-1 cyan"></i> Conceptual Test</li>
                                    <li><i class="fas fa-check-circle mr-1 cyan"></i> Doubt & difficulty</li>
                                    <li><i class="fas fa-check-circle mr-1 cyan"></i> Mentorship</li>
                                    <li><i class="fas fa-check-circle mr-1 cyan"></i> 4+ types of notes</li>
                                    <li><i class="fas fa-check-circle mr-1 cyan"></i> Meme based Learning</li>
                                    <li><i class="fas fa-check-circle mr-1 cyan"></i> Boundless Library</li>
                                    <li><i class="fas fa-check-circle mr-1 cyan"></i> Projects & certifications</li>
                                    <li><i class="fas fa-check-circle mr-1 cyan"></i> Alumni Network</li>
                                    <li><i class="fas fa-check-circle mr-1 cyan"></i> India's First Gamified Virtual Campus</li>
                                    <li><i class="fas fa-check-circle mr-1 cyan"></i> Seminars/webinars/Fests/Events</li>
                                    <li><i class="fas fa-check-circle mr-1 cyan"></i> & many more...</li>
                                </ul>
                            </div>
                            <h1 className="text-2xl font-bold cyan">Subscription Fees</h1>
                            <div className="py-2">
                                <ul className="price-list text-gray-300">
                                    <li>For CODING<span className="subs-price text-red-400"> ₹99/Student</span></li>
                                    <li>For MATHEMATICS TIPS & TRICKS<span className="subs-price text-red-400">₹99/Student</span></li>
                                    <li>For COMBO COURSE REGISTRATION<br/>[ CODING + MATHEMATICS TIPS & TRICKS ] <span className="subs-price text-red-400">₹149/Student</span></li>
                                    <h1 className="py-5 pt-16 font-medium text-lg cyan">Special Discount For Group Registration[Only valid for Combo Course Registration]</h1>
                                    <li>Registration of 3 Students<span className="subs-price text-red-400">₹125/student</span></li>
                                    <li>Registration of 4 Students <span className="subs-price text-red-400">₹99/student</span></li>
                                    <li>Registration of 5+ students<span className="subs-price text-red-400">₹75/student</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex justify-center w-4/5">
                            <a target='_blank' href="https://www.townscript.com/e/backbenchers-edtech-beta-testing-phase-2-242430">
                                <button class="inline-flex text-white  btn  border-0 py-4 px-10 focus:outline-none rounded text-lg">Register Now</button>
                            </a>
                        </div>
                        <div className="w-3/4 py-5 pt-10">
                            <h1 className="text-2xl cyan">What’s more?</h1>
                            <p className="text-gray-400">All the proceedings[Subscription Fees] will be donated for a social cause which will either be for flood relief  or Orphanage or both</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Demo;
