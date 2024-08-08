import React from 'react'
import { useEffect } from 'react'
import './AboutUs.css'

function AboutUs() {



    useEffect(() => {


        // TO MOUNT ON THE TOP LEVEL 
        window.scrollTo(0, 0);


    }, []);



    return (


        <>


            <section className='container about pt-1'>


                <div className='row'>


                    <div className='col-md-6'>

                        <img src="https://st4.depositphotos.com/26272580/31072/v/450/depositphotos_310724682-stock-illustration-contact-us-woman-with-headphones.jpg" className='img-fluid' alt="about" />


                    </div>


                    <div className='col-md-6 about-head'>


                        <h2>About Us</h2>



                        <p>Medicapharma, with 15 years of experience in the pharmaceutical industry, specializes in providing effective
                            solutions for sexual health issues. Our mission is to support individuals and couples in overcoming these challenges
                            and enhancing their quality of life and relationships. Our dedicated team of experts ensures that our products are safe,
                            reliable, and tailored to meet the unique needs of our customers. Medicapharma believes in
                            fostering happiness and intimacy in relationships, helping couples rediscover their joy and connection. <br /> <br />

                            Offers innovative solutions for sexual health issues through happycouplesolution.com. Our goal is to enhance relationships
                            and foster happiness among couples, providing
                            safe and effective products tailored to individual needs. Discover a happier, more connected life with Medicapharma.


                        </p>


                        <div className='about-social pt-4'>

                            <a href="" className='btn-about btn'><i class="fa-brands fa-facebook-f"></i></a>

                            <a href="" className='btn-about btn'><i class="fa-brands fa-instagram"></i></a>

                            <a href="" className='btn-about btn'><i class="fa-brands fa-x-twitter"></i></a>

                            <a href="" className='btn-about btn'><i class="fa-brands fa-pinterest"></i></a>


                        </div>


                    </div>

                </div>




                <div className=' mt-5 about-foot'>

                    <h2>HAPPY COUPLE SOLUTION</h2>


                    <p>Welcome to Happy Couple Solutions! We make accessing and purchasing couple therapy treatments
                        easy and completely confidential. Specializing in unique scientific solutions for erectile
                        dysfunction (ED) and other intimate health issues, we provide high-quality care with total privacy.
                        Our team of experts is dedicated to breaking taboos around sexual health, offering personalized and
                        evidence-based treatments tailored to your needs. Trust us to enhance your well-being and satisfaction
                        through our advanced, discreet solutions, backed by years of research and
                        a commitment to excellence. Join us on a journey towards a happier, healthier relationship.</p>


                    <h4>Our unique product and services</h4>

                    <p>Lygin-M and Erect Aid T10 are medications designed to address erectile dysfunction (ED) and premature
                        ejaculation (PE), common male sexual health issues. Lygin-M enhances blood flow to the penis, aiding
                        in achieving and maintaining an erection. Erect Aid T10 combines ingredients that not only support
                        erectile function but also help in delaying ejaculation, improving sexual performance and satisfaction.
                        Both medications aim to restore confidence and improve intimate relationships by tackling the physical
                        aspects of ED and PE. Their effectiveness varies among individuals, and they should be used under medical
                        supervision to ensure safety and optimal results.
                    </p>

                    <p>Happy Couple Solutions offers counseling services focused on sexual wellness and stress management.
                        They provide personalized treatment plans to enhance intimacy, resolve sexual dysfunction, and manage
                        stress. Their holistic approach includes therapy, education, and support, helping couples achieve greater
                        satisfaction and harmony in their relationships.
                    </p>


                    <p>Erectaid Ultra is a unique vacuum therapy device for erectile dysfunction, providing a non-invasive solution to
                        achieve and maintain erections. It uses gentle suction to increase blood flow to the penis, offering an effective
                        alternative to medications. This device promotes natural sexual function and enhances overall sexual wellness.</p>


                </div>





            </section>

        </>


    )



}

export default AboutUs