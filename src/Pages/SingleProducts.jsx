import React from 'react'
import { useState, useEffect } from 'react'
import "mdb-react-ui-kit/dist/css/mdb.min.css"
import { MDBTabs, MDBTabsItem, MDBTabsLink } from "mdb-react-ui-kit"
import ProductsSlide from '../Components/ProductsSlide'
import { GetAllProducts } from '../Services/AllApi'
import { useParams } from 'react-router-dom'
import ProductSkelton from '../Components/ProductSkelton'

function SingleProducts() {




    // To Get the id of the product
    const { id } = useParams()



    // Product data
    const [Product, SetProduct] = useState({})


    // Recommended Products
    const [RecPro,SetRecPro] = useState([])



    // Loading State
    const [Loading, SetLoading] = useState(true)


    // Discription State
    const [DisStatus,SetDisStatus] = useState(false)



    useEffect(() => {


        // TO MOUNT ON THE TOP LEVEL 
        window.scrollTo(0, 0);


        // Get the Product
        const GetProduct = async () => {

            try {

                const res = await GetAllProducts()

                if (res.status == 200) {

                    const result = res.data.find((item) => (item.id == id))

                    const Ligin = res.data.find((item)=>(item.id == 1))

                   
                
                    SetProduct(result)
                    SetRecPro(Ligin)
                    SetLoading(false)

                }
                else {

                    SetLoading(true)

                }


            }
            catch (err) {

                console.log(err);
                SetLoading(true)


            }

        }

        GetProduct()


    }, [id]);



    console.log(Product);
    


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




            {


                Loading ?


                    <ProductSkelton />


                    :

                    <section>



                        <section className="py-5">


                            <div className="container">


                                <div className="row gx-5">


                                    <aside className="col-lg-6">


                                        <div className="border rounded-4 mb-3 d-flex justify-content-center">

                                            <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image">
                                                <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src={Product.image} />
                                            </a>

                                        </div>


                                        <div className="d-flex justify-content-center mb-3">

                                            <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image">
                                                <img width="60" height="60" className="rounded-2" src={Product.image} />
                                            </a>

                                        </div>


                                    </aside>


                                    <main className="col-lg-6">

                                        <div className="ps-lg-3">

                                            {/* Tittle */}
                                            <h3 className="title text-dark">
                                                {Product.name}
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
                                                <span className="h5">₹{Product.price}</span>
                                                <span className="text-muted">/per box</span>
                                            </div>


                                            <p style={{ fontWeight: '600' }}>
                                                For Concerned of : <br />
                                                {Product.consern}
                                            </p>

                                            {/* Incrediants */}
                                            <p className='mb-4'>
                                                {Product.incrediants}
                                            </p>


                                            <button className='bg-transparent fw-bold' onClick={()=>{SetDisStatus(!DisStatus)}}>Discription:</button>

                                            {

                                                DisStatus &&

                                                <div>

                                                    <p style={{textAlign:'justify'}}>{Product.description}</p>

                                                </div>

                                            }





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


                                                <MDBTabsItem>
                                                    <MDBTabsLink onClick={() => handleTabClick('tab5')} active={activeItem === 'tab5'}>
                                                    Precautions
                                                    </MDBTabsLink>
                                                </MDBTabsItem>


                                            </MDBTabs>




                                            {/* Key Benfits */}
                                            {

                                                activeItem == "tab1" &&

                                                <div className='key-benfits pb-5'>

                                                    <ul>

                                                        {

                                                            Product.key_benefits &&

                                                            Product.key_benefits.map((item) => (

                                                                <li>{item}</li>

                                                            ))

                                                        }


                                                    </ul>

                                                </div>

                                            }




                                            {/* How to use */}
                                            {

                                                activeItem == "tab2" &&

                                                <div className='howto-use pb-5 ps-3 pe-3'>

                                                    <ul>

                                                        {

                                                            Product.how_to_use &&

                                                            Product.how_to_use.map((item) => (

                                                                <li>{item}</li>

                                                            ))

                                                        }

                                                    </ul>

                                                </div>

                                            }






                                            {/* Review */}
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



                                            {/* Faq */}
                                            {

                                                activeItem == "tab4" &&

                                                <div className='FAQ pb-5 ps-3 pe-3'>

                                                    <ul>


                                                        {

                                                            Product.faqs &&

                                                            Product.faqs.map((item) => (

                                                                <li>

                                                                    {item.split('?')[0] + '?'}


                                                                    <p className='mt-2'>{item.split('?')[1]}</p>

                                                                </li>

                                                            ))

                                                        }

                                                    </ul>

                                                </div>

                                            }




                                            {/* description*/}
                                            {

                                                activeItem == "tab5" &&

                                                <div className='FAQ pb-5 ps-3 pe-3'>

                                                    <ul>


                                                        {

                                                            Product.precautions &&

                                                            Product.precautions.map((item) => (

                                                                <li>

                                                                    <p className='mt-2'>{item}</p>

                                                                </li>

                                                            ))

                                                        }




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
                                                            <img src={Product.image} style={{ minWidth: '96px', height: '96px' }} className="img-md" />
                                                        </a>


                                                        <div className="info">
                                                            <a href="#" className="nav-link mb-1">
                                                                {Product.name}<br />
                                                                
                                                            </a>
                                                            <strong className="text-dark"> ₹{Product.price}</strong>
                                                        </div>


                                                    </div>



                                                    <div className='d-flex justify-content-center mb-5 mt-4'>

                                                        <i class="fa-solid fa-plus fa-2xl"></i>

                                                    </div>


                                                    <div className="d-flex mb-3">

                                                        <a href="#" className="me-3">
                                                            <img src={RecPro.image} style={{ minWidth: '96px', height: '96px' }} className="img-md" />
                                                        </a>


                                                        <div className="info">

                                                            <a href="#" className="nav-link mb-1">
                                                                {RecPro.name}<br />
                                                               
                                                            </a>

                                                            <strong className="text-dark"> ₹{RecPro.price}</strong>

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

                    </section>



            }







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