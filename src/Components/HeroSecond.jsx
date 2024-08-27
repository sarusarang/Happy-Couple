import React from 'react'
import { useState, useEffect } from 'react';
import './HeroSecond.css'
import Modal from 'react-bootstrap/Modal';
import { GetAllProducts } from '../Services/AllApi'
import { useNavigate } from 'react-router-dom';

function HeroSecond() {



    const Navigate = useNavigate()


    // Modal 1
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Product data
    const [Product, SetProduct] = useState([])

    // Modal Product
    const [ModalProduct, setModalProduct] = useState({})




    useEffect(() => {


        // Get the Product
        const GetProduct = async () => {

            try {

                const res = await GetAllProducts()

                if (res.status >= 200 && res.status <= 300) {

                    const Result = res.data.filter((item) => item.id == 1 || item.id == 3)

                    SetProduct(Result)

                }

            }
            catch (err) {

                console.log(err);

            }

        }

        GetProduct()

    }, []);



    const HeroModalClick = (data) => {


        if (data == "Lygin") {

            handleShow()
            const res = Product.find((item) => (item.id == 1))
            setModalProduct(res)

        }
        else {

            handleShow()
            const res = Product.find((item) => (item.id == 3))
            setModalProduct(res)

        }

    }


   
    



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


                            <div className='col-md-6 hero2-margin' onClick={HeroModalClick}>

                                <div className=' hero2-logo'>


                                    <img src="https://www.happycouplesolution.com/ErectaidLog-01.png" loading='lazy' className='img-fluid' alt="img" />


                                </div>

                            </div>



                            <div className='col-md-6' onClick={()=>{Navigate('/pro/3')}} style={{cursor:'pointer'}}>

                                <img src="https://www.happycouplesolution.com/263x263-01.jpg" loading='lazy' className='img-fluid' alt="img" />

                            </div>



                            <div className='col-md-6 mt-4' onClick={()=>{Navigate('/pro/1')}} style={{cursor:'pointer'}}>

                                <img src="https://www.happycouplesolution.com/263x263-02.jpg" loading='lazy' className='img-fluid' alt="img" />

                            </div>



                            <div className='col-md-6 mt-4 hover' onClick={()=>{HeroModalClick("Lygin")}} >

                                <div className='hero2-logo'>

                                    <img src="https://www.happycouplesolution.com/Lygin-01.png" loading='lazy' className='img-fluid' alt="img" />

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

                            <img src="https://www.happycouplesolution.com/ErectaidLog-01.png" loading='lazy' className='img-fluid' alt="" />

                        </div>

                    </Modal.Header>




                    <Modal.Body>

                        <p style={{ fontSize: '14px', textAlign: 'justify' }}>{ModalProduct.description}</p>



                        <div className='modal-logo'>


                            <img src={ModalProduct.image} className='img-fluid' alt="" />

                        </div>

                    </Modal.Body>


                    <Modal.Footer>

                        <button className='btn btn-closed' onClick={handleClose}>Close</button>

                        <button className='btn btn-buy' onClick={()=>{Navigate(`/pro/${ModalProduct.id}`)}}>Buy Now</button>


                    </Modal.Footer>


                </Modal>


            </section>


        </>

    )



}

export default HeroSecond