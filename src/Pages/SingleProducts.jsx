import React from 'react'
import { useState, useEffect } from 'react'
import "mdb-react-ui-kit/dist/css/mdb.min.css"
import { MDBTabs, MDBTabsItem, MDBTabsLink } from "mdb-react-ui-kit"
import ProductsSlide from '../Components/ProductsSlide'

function SingleProducts() {




    useEffect(() => {


        // TO MOUNT ON THE TOP LEVEL 
        window.scrollTo(0, 0);



    }, []);



    // To handle Spec Tabs
    const [activeItem, setActiveItem] = useState('tab1')



    // To handle Spec Tabs
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
                                    <span className="h5">₹75.00</span>
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




            <section className="bg-light border-top py-4 pb-5 mb-5 pt-5" style={{ borderBottom: '3px dotted #eee' }}>


                <div className="container">


                    <div className="row gx-4">

                        {/* SPECS */}
                        <div className="col-lg-8 mb-4">

                            <div className='border rounded-2 shadow px-3 py-2 bg-white'>

                                <MDBTabs pills className="mb-3 p-3">

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



                                {

                                    activeItem == "tab1" &&

                                    <div className='key-benfits pb-5'>

                                        <ul>

                                            <li>Supports Erectile Function: L-arginine helps increase blood flow, enhancing erectile response.</li>
                                            <li>Enhances Vitality and Stamina: Ginseng and Ashwagandha provide increased energy and stamina,
                                                improving overall sexual performance.</li>

                                            <li>Boosts Testosterone Levels: Shilajit and Zinc are known to naturally boost testosterone levels, crucial for
                                                sexual health.</li>

                                            <li>Improves Mood and Reduces Stress: Ashwagandha is a powerful adaptogen that helps reduce stress and improve mood,
                                                factors important in sexual health.</li>

                                            <li>Antioxidant Protection: Lycopene and Vitamin D3 offer antioxidant benefits, protecting cells from damage.</li>

                                        </ul>

                                    </div>

                                }





                                {

                                    activeItem == "tab2" &&

                                    <div className='howto-use pb-5 ps-3 pe-3'>

                                        <ul>

                                            <li>Dosage: Take one capsule daily or as directed by your healthcare provider.</li>


                                            <li>Best Time to Take: For optimal results, consume on an empty stomach in the morning or before bedtime.</li>



                                            <li>Course Duration: Consistent use for at least 3 to 6 months is recommended for best results.Precautions.</li>



                                            <li>Consult your healthcare provider before beginning any supplement regimen.</li>


                                            <li>Lygin M is intended for use by men aged 18 and ulder.</li>


                                            <li>Ensure compatibility with other medications if you are currently under treatment for other conditions.</li>

                                        </ul>

                                    </div>

                                }







                                {

                                    activeItem == "tab3" &&

                                    <div className='pb-5 ps-3 pe-3'>


                                        <div className='mb-4 customer-review'>

                                            <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                            <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                            <p>started using Lygin M before moving to stronger medications. Not only did my condition improve,
                                                but I also feel more energetic throughout the day!" - Jason M.</p>

                                        </div>



                                        <div className='mb-4 customer-review'>

                                            <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                            <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                            <p>Great product with natural ingredients. I appreciate the holistic approach to treating ED." - Kevin T.</p>

                                        </div>



                                        <div className='mb-4 customer-review'>

                                            <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                            <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                            <p>Noticed significant improvements in both my sexual health and overall well-being. Highly recommend Lygin M!" - Sam D.</p>

                                        </div>


                                    </div>

                                }




                                {

                                    activeItem == "tab4" &&

                                    <div className='FAQ pb-5 ps-3 pe-3'>

                                        <ul>

                                            <li>Who should use Lygin M?

                                                <p className='mt-2'>- Men looking for a natural and effective approach to enhance erectile function and overall sexual health.</p>

                                            </li>


                                            <li>Can Lygin M be used alongside other ED medications?

                                                <p className='mt-2'>- Yes, Lygin M can be used as an adjunct to other treatments, but please consult your healthcare provider
                                                    for advice tailored to your specific needs.</p>

                                            </li>


                                            <li>Is a prescription required for Lygin M?

                                                <p className='mt-2'>- No, Lygin M does not require a prescription; however, consulting a healthcare provider before starting any
                                                    new supplement is recommended.</p>

                                            </li>



                                        </ul>

                                    </div>

                                }




                            </div>

                        </div>



                        {/* Similar Products */}
                        <div className="col-lg-4">

                            <div className="px-0 rounded-2 shadow">

                                <div className="card">

                                    <div className="card-body bg-white">

                                        <h5 className="card-title text-dark mb-4">Recommended Products</h5>


                                        <div className="d-flex mb-3">

                                            <a href="#" className="me-3">
                                                <img src="/LYGIN_M.jpg" style={{ minWidth: '96px', height: '96px' }} className="img-md" />
                                            </a>


                                            <div className="info">
                                                <a href="#" className="nav-link mb-1">
                                                    Lygin-M 30<br />
                                                    Tables

                                                </a>
                                                <strong className="text-dark"> ₹38.90</strong>
                                            </div>


                                        </div>



                                        <div className='d-flex justify-content-center mb-5 mt-4'>

                                            <i class="fa-solid fa-plus fa-2xl"></i>

                                        </div>


                                        <div className="d-flex mb-3">

                                            <a href="#" className="me-3">
                                                <img src="/LYGIN_M.jpg" style={{ minWidth: '96px', height: '96px' }} className="img-md" />
                                            </a>


                                            <div className="info">
                                                <a href="#" className="nav-link mb-1">
                                                    Lygin-M 30<br />
                                                    Tables
                                                </a>
                                                <strong className="text-dark"> ₹38.90</strong>
                                            </div>


                                        </div>

                                        <button className='btn btn-addcart shadow w-100 mt-4'>Add to Cart</button>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </section>



            {/* Products */}
            <section className='pb-5'>



                <div>

                    <h3 className='text-center mb-0' style={{ fontWeight: '600' }}>Products</h3>

                    <ProductsSlide />

                </div>


            </section>



        </>





    )




}

export default SingleProducts