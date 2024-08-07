import React from 'react'
import { useState } from 'react';
import './HeroSecond.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function HeroSecond() {


    // Modal 1
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Modal 2
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (

        <>

            <section className='container p-5'>


                <div className='row'>


                    <div className='col-md-6 hero2-text'>

                        <h2>Happy Couple Solution</h2>

                        <p>One solution for enhanced performance. Combining innovative medicines and advanced devices, we ensure couples rediscover
                            intimacy and joy. Our holistic approach ensures both partners experience increased satisfaction, confidence, and connection.
                            Safe, effective, and easy to use.
                            Happy Couple Solution is your path to a happier, more fulfilling relationship. Rediscover passion and pleasure together</p>


                    </div>



                    <div className='col-md-6 p-5 pt-0 pb-2'>


                        <div className='row'>


                            <div className='col-md-6 hero2-margin' onClick={handleShow}>

                                <div className=' hero2-logo'>


                                    <img src="/ErectaidLog-01.png" className='img-fluid' alt="img" />


                                </div>

                            </div>



                            <div className='col-md-6' >

                                <img src="/263x263-01.jpg" className='img-fluid' alt="img" />

                            </div>



                            <div className='col-md-6 mt-4'>

                                <img src="/263x263-02.jpg" className='img-fluid' alt="img" />

                            </div>



                            <div className='col-md-6 mt-4 hover' onClick={handleShow}>

                                <div className='hero2-logo'>

                                    <img src="/Lygin-01.png" className='img-fluid' alt="img" />

                                </div>

                            </div>


                        </div>

                    </div>

                </div>



                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >



                    <Modal.Header closeButton>

                        <div className='modal-logo'>

                            <img src="/ErectaidLog-01.png" className='img-fluid' alt="" />

                        </div>

                    </Modal.Header>




                    <Modal.Body>

                        <p style={{fontSize:'14px',textAlign:'justify'}}>A revolutionary vacuum device designed to address erectile dysfunction. Combining advanced
                            technology with ease of use, enhances blood flow safely and effectively, promoting natural and
                            sustained erections. Discreet, non-invasive,
                            and user-friendly, it's a game-changer in sexual health and confidence restoration.</p>



                        <div className='modal-logo'>


                            <img src="/263x263-01.jpg" className='img-fluid' alt="" />

                        </div>

                    </Modal.Body>




                    <Modal.Footer>

                        <button className='btn btn-closed' onClick={handleClose}>Close</button>

                       <button className='btn btn-buy'>Buy Now</button>


                    </Modal.Footer>


                </Modal>



            </section>


        </>

    )



}

export default HeroSecond