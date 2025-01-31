import React from 'react'
import Navbar from './Navbar'
import '../style/Home.css'
import Typewriter from 'typewriter-effect';
import { Link, animateScroll as scroll } from "react-scroll";



const Home = () => {
    return (
        <>
            <Navbar />
            <div className='masterdiv'>


                <section id="home" className="h-screen bg-white-200 p-8 sm:p-30" >
                    <br /><br /><br />

                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 sm:col-span-6 justify-items-center'>
                            <h1 className='sm:text-6xl text-4xl main-heading typewriter place-self-start'>
                                <span>

                                    <Typewriter
                                        options={{
                                            strings: ['CUTTING EDGE', 'ADVANCE', 'INNOVATIVE'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </h1>
                            <h1 className='sm:text-6xl text-4xl main-heading'> TECHNOLOGICAL SOLUTIONS</h1>
                            <p className='mt-3 text-justify'>At Innovative Tech, we transform ideas into impactful digital solutions. Specializing in website and app development, project management, and blockchain technology, we empower businesses to grow through technology. Our team is dedicated to delivering tailored solutions that meet your unique needs with creativity, precision, and expertise. Let’s build something extraordinary together!</p>
                            <button className='mt-8  bg-emerald-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-emerald-700'>Get a Quote</button>
                        </div>
                        <div className='col-span-12 sm:col-span-6 justify-items-center'>
                            <img className='w-md ' src="https://img.freepik.com/free-vector/man-playing-online-games-concept_52683-37362.jpg?t=st=1738068513~exp=1738072113~hmac=7660445e5a3d0ea016191620f62a3dcfd216221dd8a2e8088a7f3fe2d0cdfd14&w=740" alt="" />
                        </div>
                    </div>
                </section>




                <section id="about" className="h-screen p-8 sm:p-30 mt-40 sm:mt-0">
                    {/* <br /><br /><br /><br /><br /><br /><br /> */}

                    <h1 className='text-center sm:text-6xl mb-15 font-bold text-4xl'>WHAT DO WE DO?</h1>
                    <div className='grid grid-cols-12 '>
                        <div className='col-span-12 sm:col-span-6 justify-items-center'>
                            <img className='w-xs sm:w-xl' src="https://img.freepik.com/free-vector/product-presentation-concept-illustration_114360-8196.jpg?t=st=1738093439~exp=1738097039~hmac=557f82c6d8a15bc3e9bc99a03b81d84287a629accd10a69b0b97bd5cc731fbaf&w=996" alt="" />
                        </div>
                        <div className='col-span-12 sm:col-span-6 overflow-y-scroll mt-10 p-5 sm:p-10 h-95 w-full text-center custom-scrollbar sm:text-5xl text-3xl'>

                            <h1 className=' main-heading ' >Transform Your Business with <span className='bg-yellow-200'>Advanced Tech!</span> Our specialists provide the latest solutions to drive your success in the digital world.</h1>
                            <br />
                            <h1 className='mt-20 main-heading' >Harness the Power of Smart Technology! Discover <span className='bg-yellow-200'>Advanced Tools</span> designed to streamline operations and sharpen your competitive edge in the digital landscape.</h1>
                            <br />
                            <h1 className=' mt-20 main-heading' >Unlock New Possibilities with Smart Tech Solutions! Our <span className='bg-yellow-200 '>Dedicated Team</span> offers the most advanced tools to streamline operations and enhance your competitive edge in the digital realm.</h1>
                        </div>
                    </div>
                </section>




                <section id="services" className="h-screen  p-8 sm:p-30">

                    <div className=' text-xl text-center'>
                        <h1 className='text-center sm:text-6xl text-4xl mb-15 font-bold'>WHAT DO WE PROVIDE?</h1>
                        <p className='text-justify'>We are a dynamic startup based in Pune, driven by a team of young and passionate developers dedicated to revolutionizing the IT industry. Our mission is to deliver exceptional services by leveraging our extensive skills and expertise. We are committed to understanding and addressing the unique pain points of our customers, ensuring that we meet their specific requirements while respecting budget constraints. </p>
                        <p className='hidden sm:block text-justify indent-12'>Our innovative approach and customer-centric mindset empower us to create tailored solutions that not only fulfill immediate needs but also foster long-term success. By staying at the forefront of technology and industry trends, we strive to exceed expectations and build lasting partnerships with our clients. Join us on our journey to transform ideas into impactful digital solutions that drive growth and innovation.</p>
                    </div>

                    {/* <h2 className="text-xl font-bold mb-4">Horizontally Scrollable Section</h2> */}
                    <div className="overflow-x-auto horizontal-scroll mt-20 custom-scrollbar ">
                        <div className="inline-flex space-x-4 ">


                            <div className="w-70 h-42 items-center justify-center bg-emerald-400 text-white rounded-lg shadow-lg p-4 break-words overflow-y-auto  ">
                                <h1 className='text-center text-xl font-bold'>Website Development</h1>
                                <br />
                                <p className='text-center' >Build stunning, high-performance websites.</p>
                            </div>

                            <div

                                className="w-70  h-42 items-center justify-center bg-emerald-400 text-white rounded-lg shadow-lg p-4 break-words overflow-y-auto "
                            >
                                <h1 className='text-center text-xl font-bold'>Android Application Development</h1>
                                <br />
                                <p className='text-center' >Create seamless mobile experiences.</p>

                            </div>

                            <div className="w-70  h-42 items-center justify-center bg-emerald-400 text-white rounded-lg shadow-lg p-4 break-words overflow-y-auto  ">
                                <h1 className='text-center text-xl font-bold'>IOS Application Development</h1>
                                <br />
                                <p className='text-center' >Engaging users with cutting-edge tech.</p>
                            </div>

                            <div

                                className="w-70  h-42 items-center justify-center bg-emerald-400 text-white rounded-lg shadow-lg p-4 break-words overflow-y-auto "
                            >
                                <h1 className='text-center text-xl font-bold'>Digital Marketing</h1>
                                <br />
                                <p className='text-center' >Boost your reach with data-driven strategies.</p>

                            </div>

                            <div className="w-70  h-42 items-center justify-center bg-emerald-400 text-white rounded-lg shadow-lg p-4 break-words overflow-y-auto  ">
                                <h1 className='text-center text-xl font-bold'>Graphic Design</h1>
                                <br />
                                <p className='text-center' >Transform ideas into visual masterpieces.</p>
                            </div>

                            <div

                                className="w-70  h-42 items-center justify-center bg-emerald-400 text-white rounded-lg shadow-lg p-4 break-words overflow-y-auto "
                            >
                                <h1 className='text-center text-xl font-bold'>User Interface & User Experience</h1>
                                <br />
                                <p className='text-center' >Bring ideas to life with interactive designs.</p>

                            </div>


                        </div>
                    </div>





                </section>






                <section id="blog" className="h-screen sm:mt-0 sm:p-30 p-8">
                    <div className=''>
                        <div className=''>
                        <h1 className='text-center sm:text-6xl text-4xl font-bold'>OUR BLOGS</h1>

                        </div>
                    </div>
                </section>






                <section id="contact" className="h-screen sm:p-30 bg-emerald-500 sm:bg-white">
                    <div className='grid grid-cols-12 bg-emerald-500 w-full h-full gap-4 sm:p-15 p-8 rounded-2xl'>
                        <div className='col-span-12 text-white sm:col-span-6'>
                            <h1 className='sm:text-7xl text-4xl font-bold '>WE'D LOVE TO HEAR FORM YOU!</h1>
                            <br />
                            <p className='text-justify'> Whether you have a question about our services, need assistance, or just want to share feedback, we're here to help. Reach out to us, and our team will get back to you as soon as possible.Fill out the form below, and we'll get back to you promptly. Alternatively, you can reach us via email or phone.</p>
                            <div className='flex'>
                                <a href="" className='social-icon'>
                                    <img src="https://cdn-icons-png.flaticon.com/128/646/646094.png" alt="" />
                                </a>
                                <a href="" className='social-icon'>
                                    <img src="https://cdn-icons-png.flaticon.com/128/126/126509.png" alt="" />
                                </a>
                                <a href="" className='social-icon'>
                                    <img src="https://cdn-icons-png.flaticon.com/128/220/220343.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className='col-span-12 sm:col-span-6 '>
                            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
                                <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter your message"
                                        />
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home