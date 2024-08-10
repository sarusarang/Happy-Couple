import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './Buy.css'

function Buy() {


    // Modal State
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    // TO SET ADD ADDRESS STATUS
    const [AddressStatus, SetAddressStatus] = useState(true)



    return (



        <>

            <section className='d-flex justify-content-center bg-light pb-5 pt-2' >

                <div className="iphone">


                    <h3 className='text-center'>Checkout</h3>

                    <form className="form mt-5" onSubmit={(e) => { e.preventDefault() }}>

                        <div>

                            <h4>Address</h4>

                            <div className="card">

                                <address >
                                    Delivery to <span className='fw-bold'>Kannur 670622</span> <br />
                                    HOUSE Peralassery Vadakumbad Kerala 670622 India
                                </address>

                                <div>

                                    <i class="fa-solid fa-pen-to-square fa-lg" onClick={handleShow} style={{ cursor: 'pointer' }}></i>

                                </div>

                            </div>

                        </div>


                        <div className='mt-3'>

                            <h4>Shopping Bill</h4>

                            <table>
                                <tbody>

                                    <tr>
                                        <td>Shipping fee <i class="fa-solid fa-truck-fast text-success"></i></td>
                                        <td align="right" className='text-success'>Free</td>
                                    </tr>


                                    <tr>
                                        <td>Discount 0% <i class="fa-solid fa-tag text-success"></i></td>
                                        <td align="right" className='text-success'>₹0</td>
                                    </tr>


                                    <tr>
                                        <td>Total Items</td>
                                        <td align="right" className='text-success'>0</td>
                                    </tr>


                                </tbody>

                                <tfoot>
                                    <tr>
                                        <td>Total</td>
                                        <td align="right">₹00.00</td>
                                    </tr>
                                </tfoot>

                            </table>

                        </div>

                        <div className=''>

                            <button className="button button--full" type="submit">Pay Now<i className="fa-solid fa-lock"></i></button>

                        </div>



                    </form>


                </div>


            </section>




            {/* Address Modal */}


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className='border-0'>

                    <h5>{AddressStatus ? "Saved Address" : "Add Address"}</h5>

                </Modal.Header>

                <Modal.Body>

                    <div className='ps-3 pt-3 d-flex flex-column'>


                        {/* Address  */}
                        {

                            AddressStatus &&


                            <div>


                                <div className='Address-scroll col-12'>

                                    <div className='d-flex mb-4'>

                                        <input type="radio" value={""} name='a'  className='large-radio'/>

                                        <div className='ms-3'>

                                            <p className='mb-0 fw-bold'>Vijith</p>
                                            <p className='mb-0'>Kannur,Kerala 670622</p>

                                        </div>

                                    </div>



                                    <div className='d-flex mb-4'>
 
                                        <input type="radio" value={""} name='a' className='large-radio' />

                                        <div className='ms-3'>

                                            <p className='mb-0 fw-bold'>Ajith</p>
                                            <p className='mb-0'>Kozhikode,Kerala 630622</p>

                                        </div>

                                    </div>





                                </div>


                                <div className='col-12 p-2 text-center'>

                                    <button onClick={(e) => { SetAddressStatus(false) }} className='btn btn-address w-75'>Add New Address <i class="fa-solid fa-plus"></i></button>

                                </div>


                            </div>


                        }




                        {/* Add Address */}
                        {

                            !AddressStatus &&


                            <div className='ps-3 pb-4 pe-3'>

                                <form onSubmit={(e) => { e.preventDefault() }}>

                                    <input type="text" placeholder='Name' className='form-control mb-3' />

                                    <input type="text" placeholder='Please enter a 6-digit pincode' className='form-control mb-3' maxlength="6" pattern="\d{6}" />

                                    <input type="text" placeholder='City' className='form-control mb-3' />

                                    <input type="text" placeholder='State' className='form-control mb-3' />

                                    <input type="text" placeholder='Landmark' className='form-control mb-3' />

                                    <input type="text" placeholder='Phone' className='form-control mb-3' maxlength="10" pattern="\d{6}" />

                                    <div className='pb-3 mt-4'>

                                        <button onClick={() => { SetAddressStatus(true) }} type='submit' className='btn btn-address ms-2 w-25'>Close</button>

                                        <button onClick={() => { SetAddressStatus(true) }} type='submit' className='btn btn-address ms-2 w-50'>Save</button>

                                    </div>

                                </form>


                            </div>

                        }







                    </div>

                </Modal.Body>





            </Modal>


        </>


    )




}

export default Buy