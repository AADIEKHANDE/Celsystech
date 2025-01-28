import React from 'react'
import Navbar from './Navbar'
import '../style/Home.css'
import Typewriter from 'typewriter-effect';


const Home = () => {
    return (
        <>
            <Navbar />
            <div className=''>
                <section id="section1" className="h-screen bg-white-200">

                    <div className='flex root'>
                        <div className='flex-1'>
                        <h1 className='text-6xl m-4 main-heading typewriter'>
                            <span>

                            <Typewriter
                                options={{
                                    strings: ['CUTTING EDGE', 'ADVANCE','INNOVATIVE'],
                                    autoStart: true,
                                    loop: true,
                                }}
                                /> 
                                </span>
                                </h1>
                            <h1 className='text-6xl m-4 main-heading'> TECHNOLOGICAL SOLUTIONS</h1>
                            <p className='m-4'>At Innovative Tech, we transform ideas into impactful digital solutions. Specializing in website and app development, project management, and blockchain technology, we empower businesses to grow through technology. Our team is dedicated to delivering tailored solutions that meet your unique needs with creativity, precision, and expertise. Let’s build something extraordinary together!</p>
                            <button className='m-4 bg-emerald-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-emerald-700'>Get a Quote</button>
                        </div>
                        <div className='flex-1 justify-items-center'>
                            <img className='w-120' src="https://img.freepik.com/free-vector/man-playing-online-games-concept_52683-37362.jpg?t=st=1738068513~exp=1738072113~hmac=7660445e5a3d0ea016191620f62a3dcfd216221dd8a2e8088a7f3fe2d0cdfd14&w=740" alt="" />
                        </div>
                    </div>
                </section>
                <section id="section2" className="h-screen bg-blue-200">
                    About us
                </section>
                <section id="section3" className="h-screen bg-green-200">
                    Services
                </section>
                <section id="section4" className="h-screen bg-green-200">
                    blog
                </section>
                <section id="section5" className="h-screen bg-green-200">
                    Contact
                </section>
            </div>
        </>
    )
}

export default Home