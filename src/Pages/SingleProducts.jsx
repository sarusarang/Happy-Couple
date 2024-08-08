import React from 'react'
import { useState } from 'react';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from "mdb-react-ui-kit";

function SingleProducts() {


    const [activeItem, setActiveItem] = useState('tab1')


    const handleTabClick = (value) => {

        if (value === activeItem) {

            return;
        }

        setActiveItem(value);
    }

    
    

    return (


        <>

            <section className="py-5">


                <div className="container">


                    <div className="row gx-5">


                        <aside className="col-lg-6">


                            <div className="border rounded-4 mb-3 d-flex justify-content-center">

                                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image">
                                    <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src="/LYGIN_M.jpg" />
                                </a>

                            </div>


                            <div className="d-flex justify-content-center mb-3">

                                <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image">
                                    <img width="60" height="60" className="rounded-2" src="/LYGIN_M.jpg" />
                                </a>

                            </div>


                        </aside>


                        <main className="col-lg-6">

                            <div className="ps-lg-3">

                                {/* Tittle */}
                                <h3 className="title text-dark">
                                    Lygin-M 30 Tables
                                </h3>


                                {/* Rating */}
                                <div className="d-flex flex-row my-3">

                                    <div className="text-warning mb-1 me-2">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <span className="ms-1">
                                            4.5
                                        </span>
                                    </div>


                                    <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                    <span className="text-success ms-2">In stock</span>


                                </div>


                                {/* Price */}
                                <div className="mb-3">
                                    <span className="h5">$75.00</span>
                                    <span className="text-muted">/per box</span>
                                </div>


                                <p style={{ fontWeight: '600' }}>
                                    For Concerned of : <br />
                                    Initial ED I Premature Ejaculation I Low Drive I Consistent Performance I

                                </p>

                                {/* Description */}
                                <p className='mb-4'>
                                    Erectile Dysfunction Premature ejaculation I Low Drive I Zero Erection I Vacuum Device I Energy Boost I Stamina I Manage Stress I
                                </p>





                                {/* Deatils */}
                                {/* <div className="row">
                                    <dt className="col-3">Type:</dt>
                                    <dd className="col-9">Regular</dd>

                                    <dt className="col-3">Color</dt>
                                    <dd className="col-9">Brown</dd>

                                    <dt className="col-3">Material</dt>
                                    <dd className="col-9">Cotton, Jeans</dd>

                                    <dt className="col-3">Brand</dt>
                                    <dd className="col-9">Reebook</dd>
                                </div> */}



                                <hr />


                                {/* Quanity */}
                                <div className="row mb-4 mt-3">


                                    <div className="col-md-4 col-6">

                                        <label className="mb-2">Quantity : Nos</label>
                                        <select className="form-select border border-secondary" style={{ height: '35px' }}>
                                            <option>30</option>
                                            <option>60</option>
                                            <option>90</option>
                                            <option>120</option>
                                        </select>


                                    </div>

                                    {/* 
                                    <div className="col-md-4 col-6 mb-3">

                                        <label className="mb-2 d-block">Quantity</label>


                                        <div className="input-group mb-3" style={{ width: '170px' }}>
                                            <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <input type="text" className="form-control text-center border border-secondary" placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                            <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>


                                    </div> */}

                                </div>



                                {/* Buy Now */}
                                <a href="#" className="btn btn-buynow shadow me-3 "> Buy now </a>
                                <a href="#" className="btn btn-addcart shadow"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>



                            </div>


                        </main>
                    </div>
                </div>


            </section>




            <section className="bg-light border-top py-4">


                <div className="container">


                    <div className="row gx-4">

                        {/* SPECS */}
                        <div className="col-lg-8 mb-4">

                            <div>

                                <MDBTabs pills className="mb-3">

                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleTabClick('tab1')} active={activeItem === 'tab1'}>
                                            Key Benifits
                                        </MDBTabsLink>
                                    </MDBTabsItem>

                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleTabClick('tab2')} active={activeItem === 'tab2'}>
                                        How to Use
                                        </MDBTabsLink>
                                    </MDBTabsItem>


                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleTabClick('tab3')} active={activeItem === 'tab3'}>
                                        Customer Reviews
                                        </MDBTabsLink>
                                    </MDBTabsItem>


                                    <MDBTabsItem>
                                        <MDBTabsLink onClick={() => handleTabClick('tab4')} active={activeItem === 'tab4'}>
                                        FAQs
                                        </MDBTabsLink>
                                    </MDBTabsItem>


                                </MDBTabs>


                                <MDBTabsContent>


                                    <MDBTabsPane show = {activeItem == 'tab1'}> 

                                        <p>With supporting text below as a natural lead-in to additional content...</p>

                                    </MDBTabsPane>


                                    <MDBTabsPane show={activeItem === 'tab2'}>

                                        <p>Tab content or sample information now...</p>

                                    </MDBTabsPane>


                                    <MDBTabsPane show={activeItem === 'tab3'}>

                                        <p>Another tab content or sample information now...</p>

                                    </MDBTabsPane>


                                    <MDBTabsPane show={activeItem === 'tab4'}>

                                        <p>Some other tab content or sample information now...</p>

                                    </MDBTabsPane>

                                </MDBTabsContent>

                            </div>

                        </div>



                        {/* Similar Products */}
                        <div className="col-lg-4">

                            <div className="px-0  rounded-2 shadow">

                                <div className="card">

                                    <div className="card-body bg-white">

                                        <h5 className="card-title text-dark">Related Products</h5>

                                        <div className="d-flex mb-3">

                                            <a href="#" className="me-3">
                                                <img src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/8.webp" style={{ minWidth: '96px', height: '96px' }} className="img-md img-thumbnail" />
                                            </a>


                                            <div className="info">
                                                <a href="#" className="nav-link mb-1">
                                                    Rucksack Backpack Large <br />
                                                    Line Mounts
                                                </a>
                                                <strong className="text-dark"> $38.90</strong>
                                            </div>


                                        </div>


                                       
                    


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

export default SingleProducts