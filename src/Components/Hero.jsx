import React from 'react'
import './Hero.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Hero() {


    return (


        <>

            {/* Hero */}
            <section className='hero  bg-light bg-gradient pb-5'>

                <div className='container'>

                    {/* Hero Head */}
                    <div className='hero-head p-3 text-center'>

                        <h2>Our Medical Experts Can Help You</h2>

                        <p>Book a Confidential Consultation with Clinical experts</p>

                        <p> find the perfect solution and enjoy your couple's life.</p>

                    </div>


                    <div className='row mt-5'>

                        <div className='col-md-6 card-display'>

                            <Card style={{ width: '18rem' }} className='shadow'>

                                <Card.Img variant="top" src="/Doctor2.png" />

                                <Card.Body>

                                    <Link to={'/doctors'} className='nav-link'>

                                        <Card.Title>Now You Can Talk With Doctor <i class="fa-solid fa-circle-arrow-right"></i></Card.Title>

                                    </Link>


                                </Card.Body>

                            </Card>


                        </div>


                        <div className='col-md-6 card-display2'>


                            <Card style={{ width: '18rem' }} className='shadow'>

                                <Card.Img variant="top" src="/assess_myself2.png" />


                                <Card.Body className='text-center' style={{ paddingBottom: '2.5rem' }}>

                                    <Link to={'/ai'} className='nav-link'>

                                        <Card.Title>Assess Myself <i class="fa-solid fa-circle-arrow-right"></i></Card.Title>

                                    </Link>



                                </Card.Body>

                            </Card>


                        </div>

                    </div>


                </div>

            </section>


        </>

    )

}

export default Hero