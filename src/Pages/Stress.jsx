import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import './Stress.css'
import ProductsSlide from '../Components/ProductsSlide'

function Stress() {


    const location = useLocation()

    const [status, SetStatus] = useState(false)


    // To check wheather it is Stress path or Performanace Path 
    useEffect(() => {


        const find = () => {

            if (location.pathname == "/stress") {


                SetStatus(true)


            } else {

                SetStatus(false)

            }

        }

        window.scrollTo(0, 0)

        find()

    }, [location.pathname])




    return (


        <>


            <section className='stress pt-4 '>


                {/* Slider */}
                <div className='container-fluid pb-4'>

                    <Carousel data-bs-theme="dark" controls={false} indicators={false} slide={true}>


                        <Carousel.Item>

                            <img
                                className="d-block w-100"
                                src="/Baner 1080x250 A.jpg"
                                alt="First slide"
                            />


                        </Carousel.Item>


                        <Carousel.Item>

                            <img
                                className="d-block w-100"
                                src="/Baner 1080x250 B.jpg"
                                alt="Second slide"
                            />

                        </Carousel.Item>



                        <Carousel.Item>

                            <img
                                className="d-block w-100"
                                src="/Baner 1080x250 C.jpg"
                                alt="Third slide"
                            />

                        </Carousel.Item>


                    </Carousel>

                </div>


                <section className='hero  bg-light bg-gradient pb-5'>

                    <div className='container'>


                        {/* Hero Head */}
                        <div className='hero-head p-3 text-center'>

                            <h2>{status ? "Our Stress Release Experts Can Help You" : "Our Medical Experts Can Help You"}</h2>

                            <p> {status ? "Book a Confidential Consultation with experts" : "Book a Confidential Consultation with Clinical experts"}</p>

                            <p> {status ? "find the perfect solution and enjoy a Stress-free couple's life" : "find the perfect solution and enjoy your couple's life"}</p>

                        </div>


                        <div className='row mt-5'>



                            <div className='col-md-6 card-display'>

                                <Card style={{ width: '18rem' }} className='shadow'>

                                    <Card.Img variant="top" src="/Doctor2.png" />

                                    <Card.Body>

                                        <Link className='nav-link' to={'/doctors'}>

                                            <Card.Title>Now You Can Talk With Doctor <i class="fa-solid fa-circle-arrow-right"></i></Card.Title>

                                        </Link>



                                    </Card.Body>

                                </Card>

                            </div>




                            <div className='col-md-6 card-display2'>

                                <Card style={{ width: '18rem' }} className='shadow'>

                                    <Card.Img variant="top" src="/assess_myself2.png" />


                                    <Card.Body className='text-center' style={{ paddingBottom: '2.5rem' }}>

                                        <Link to={'/doctors'} className='nav-link'>

                                            <Card.Title>Assess Myself <i class="fa-solid fa-circle-arrow-right"></i></Card.Title>

                                        </Link>

                                    </Card.Body>

                                </Card>

                            </div>



                        </div>


                    </div>


                </section>


                {/* Stress-2 */}
                <section className='pt-5 pb-5 stress-2  bg-light bg-gradient' style={{ borderBottom: '3px dotted #eee' }}>

                    <h3 className='text-center'>How Works Happy Couple Solution</h3>

                    <h3 className='text-center'>To resolve your performance issue</h3>


                    <div className='container'>





                        <div className='row justify-content-center align-items-cente mt-5 p-4'>



                            <div className='col-md-3 d-flex justify-content-center flex-column stress-p'>

                                <div className='stress2-img'>

                                    <img src="/Perfomence-01.jpg" className='img-fluid' alt="" />

                                </div>

                                <p>
                                    Self Assessment, Consult with Doctors & expertsConfirm treatments
                                </p>

                            </div>




                            <div className='col-md-3 d-flex justify-content-center flex-column stress-p'>

                                <div className='stress2-img'>

                                    <img src="/Perfomence-02.jpg" className='img-fluid' alt="" />

                                </div>

                                <p>
                                    Self Assessment, Consult with Doctors & expertsConfirm treatments
                                </p>

                            </div>



                            <div className='col-md-3 d-flex justify-content-center flex-column stress-p'>

                                <div className='stress2-img'>

                                    <img src="/Perfomence-03.jpg" className='img-fluid' alt="" />

                                </div>

                                <p>
                                    Self Assessment, Consult with Doctors & expertsConfirm treatments
                                </p>

                            </div>



                        </div>


                    </div>

                </section>



                {/* Stress-3 */}
                <section className='pt-4' style={{ borderBottom: '3px dotted #eee' }}>

                    <div className='container stress-3 p-4'>

                        <h3>For Your Concerns solutions, <br />
                            Select and solve issue</h3>


                        <div className='row mt-2 mb-5  justify-content-center'>



                            <div className='col-md-3 mt-3 d-flex justify-content-center'>

                                <div className='stress3-img'>

                                    <img src="/Erect_Well-01.jpg" className='img-fluid' alt="" />

                                    <p>Manage Stress</p>

                                </div>

                            </div>

                            <div className='col-md-3 mt-3 d-flex justify-content-center'>

                                <div className='stress3-img'>

                                    <img src="/Erect_Well-02.jpg" className='img-fluid' alt="" />

                                    <p>Control ride Failure</p>

                                </div>

                            </div>


                            <div className='col-md-3 mt-3 d-flex justify-content-center '>

                                <div className='stress3-img'>

                                    <img src="/Erect_Well-03.jpg" className='img-fluid' alt="" />

                                    <p>Erect Well</p>

                                </div>

                            </div>


                            <div className='col-md-3 mt-3 d-flex justify-content-center '>

                                <div className='stress3-img'>

                                    <img src="/Erect_Well-04.jpg" className='img-fluid' alt="" />

                                    <p>Improve Performance</p>

                                </div>

                            </div>


                        </div>

                    </div>

                </section>


                {/* Stress-4 */}
                <section className='pt-4 pb-5' style={{ borderBottom: '3px dotted #eee' }}>


                    <div className='container'>

                        <div className='row p-4'>

                            <div className='col-md-6 stress4-head'>


                                <h3>Our Competencies</h3>

                                <p>At Happy Couple Solution, our doctors and medical experts specialize in sexual health and performance. With extensive
                                    experience and a compassionate approach, they offer personalized treatment plans that combine innovative medicines and
                                    advanced devices. Dedicated to improving intimacy and well-being, our team ensures exceptional care and support for
                                    every patient. We have a team of experienced medical consultants specializing in performance health & Managing stress.
                                    They provide personalized advice treatment plans, and recommendations for combining advanced medicines and unique devices
                                    that were never introduced by anyone. Compassionate and knowledgeable, our consultants
                                    ensure each patient or individual receives expert care and support for a fulfilling and healthy intimate life</p>


                            </div>


                            <div className='col-md-6'>


                                <div className='row'>


                                    <div className='col-md-6 d-flex justify-content-center mt-3'>

                                        <Card style={{ width: '13rem' }} >

                                            <Card.Img variant="top" src="/Doctor2.png" />

                                            <Card.Body className='bg-info'>

                                                <Card.Text >

                                                    <div className='text-card'>

                                                        <p> Dr Ajayan Vargees MBBS, MSc (App. Psych) PGDHSC, PGCC</p>

                                                    </div>

                                                </Card.Text>

                                            </Card.Body>

                                        </Card>

                                    </div>



                                    <div className='col-md-6 d-flex justify-content-center mt-3'>



                                        <Card style={{ width: '13rem' }} >



                                            <Card.Img variant="top" src="/doctor3.jpeg" />


                                            <Card.Body className='bg-info'>

                                                <Card.Text >

                                                    <div className='text-card pb-2'>

                                                        <p>Dr.Sujeesh MBBS, BAMS</p>

                                                    </div>

                                                </Card.Text>

                                            </Card.Body>



                                        </Card>



                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* Products */}
                <section className='pt-5'>


                    <div className='stress-product'>

                        <h3 className='text-center'>We stand for scientific</h3>

                        <p className='text-center'>Deliver Scientifically Proven Medicine,</p>

                        <p className='text-center'>Ensuring Safe, Effective, And Trusted Solutions</p>

                    </div>


                    <ProductsSlide />


                </section>


            </section>


        </>











    )



}

export default Stress