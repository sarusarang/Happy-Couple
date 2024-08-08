import React from 'react'
import './Doctors.css'
import { useEffect } from 'react';

function Doctors() {




    useEffect(() => {

        
        // TO MOUNT ON THE TOP LEVEL 
        window.scrollTo(0, 0);


    }, []);






    return (

        <>


            <section className='container p-5'>


                <div className='doc-head p-4'>

                    <h3 className='text-center'>Talk to Doctor</h3>

                    <p className='text-center'>Hi, Welcome to Happy Couple Solution</p>

                    <p className='text-center'>Fin Perfect Expert to your Health Concern</p>

                </div>


                <div className='doc-2'>


                    <h4 className='text-center'>Specialist Centre I General Physicians I Health Coaches</h4>


                    <div className='d-flex justify-content-center align-items-center mt-4'>


                        <div className='spec-logo'>

                            <img src="/Erect_Well-04.jpg" className='img-fluid' alt="" />

                            <p className='text-center'>Performance</p>

                        </div>

                        <div className='spec-logo ms-3'>

                            <img src="/Erect_Well-01.jpg" className='img-fluid' alt="" />

                            <p className='text-center'>Stress</p>

                        </div>



                    </div>

                </div>



                <div class="row  d-flex justify-content-center py-5 ">

                    <div class="col-md-8  p-0">

                        <div class="">

                            <div class="doctor-container bg-white shadow">

                                <div class="d-c-top ">

                                    <div class="doctor-image p-0 col-4 col-md-3">
                                        <img src="/Doctor2.png" alt="" />
                                    </div>


                                    <div class="doctor-info col-6 col-md-6">
                                        <h3>Dr.Ajayan Vargees</h3>
                                        <h4>Sexologist</h4>
                                        <p>MBBS, MSc (App. Psych), PGDHSC, PGCC</p>
                                        <p>PGDHSC, PGCC</p>
                                        <p>Experience: 25 years</p>
                                    </div>


                                    <div class="col-2 p-0 online-btn col-md-2">
                                        <button class="btn">Online</button>
                                    </div>

                                </div>

                                <div class="c-d-middle row p-0">
                                    <div class="doctor-experiance"></div>
                                </div>


                                <div class="row pt-2 d-c-footer">

                                    <div class="col-8 chat d-flex justify-content-center">
                                        <button class="btn w-100 btn-chatnow ">Chat Now</button>
                                    </div>


                                    <div class="col-4 info d-flex justify-content-center">
                                        <button class="btn w-100 btn-doc-info">Info</button>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>



            </section>


        </>


    )




}

export default Doctors