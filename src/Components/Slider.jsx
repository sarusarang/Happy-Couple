import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

function Slider() {



    return (


        <>

            <section className='container-fluid  Slider-main'>


                <div className='row'>


                    <div className='col-md-6'>


                        <Carousel data-bs-theme="dark" controls={false} indicators={false} slide={true}>


                            <Carousel.Item>

                                <img
                                    className="d-block w-100"
                                    src="/slide-1.jpeg"
                                    alt="First slide"
                                />


                            </Carousel.Item>


                            <Carousel.Item>

                                <img
                                    className="d-block w-100"
                                    src="/slide-2.jpeg"
                                    alt="Second slide"
                                />

                            </Carousel.Item>



                            <Carousel.Item>

                                <img
                                    className="d-block w-100"
                                    src="/slide-3.jpeg"
                                    alt="Third slide"
                                />

                            </Carousel.Item>


                            <Carousel.Item>

                                <img
                                    className="d-block w-100"
                                    src="/slide-4.jpeg"
                                    alt="Third slide"
                                />

                            </Carousel.Item>



                        </Carousel>



                    </div>



                    <div className='col-md-6'>

                        <div className='row'>
                            

                            <div className='col-md-6 Slide-hover slider-margin'>

                                <img src="/Side_Baner_(385x330)-01.jpg" className='img-fluid' alt=""/>

                                <div className='text-over'>

                                    <h4>Find Your Doctor</h4>

                                </div>

                            </div>


                            <div className='col-md-6 Slide-hover slider-margin'>

                                <img src="/li-2.jpeg" className='img-fluid' alt="" />

                                <div className='text-over'>

                                    <h4>Self Assessment</h4>

                                </div>

                            </div>


                            <div className='col-md-6 Slide-hover' style={{ marginTop: '1.3rem' }} >

                                <img src="/li-3.jpeg" className='img-fluid' alt="" />


                                <div className='text-over'>

                                    <h4>Consult Now</h4>

                                </div>


                            </div>


                            <div className='col-md-6 Slide-hover' style={{ marginTop: '1.3rem' }}>

                                <img src="/li-4.jpeg" className='img-fluid' alt="" />


                                <div className='text-over'>

                                    <h4>Manage Stress</h4>

                                </div>

                            </div>


                        </div>


                    </div>


                </div>





            </section>


        </>

    )





}

export default Slider