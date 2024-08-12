import React from 'react'
import { useEffect, useState } from 'react'
import '../Components/ProductsSlide.css'
import { useNavigate } from 'react-router-dom';
import { GetAllProducts } from '../Services/AllApi';
import { Skeleton } from '@mui/material';

function AllProducts() {


    // To Store all Products
    const [ProductsData, SetProductsData] = useState([])

    // To set Loading State
    const [Loading, SetLoading] = useState(true)



    useEffect(() => {


        // TO MOUNT ON THE TOP LEVEL 
        window.scrollTo(0, 0);



        const AllProducts = async () => {

            try {

                const Res = await GetAllProducts()

                if (Res.status == 200) {

                    SetProductsData(Res.data)
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

        AllProducts()


    }, []);


    const Navigate = useNavigate()



    return (


        <>

            <section className='container p-5'>


                <div className='row'>


                    {/* All Products */}


                    {

                        Loading ?


                            Array.from({ length: 3 }).map((item) => (


                                <div className='me-5 mt-3 col-md-3'>

                                    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

                                    <Skeleton animation="wave" height={20} style={{ marginBottom: 6, marginTop: '1rem' }} />

                                    <Skeleton animation="wave" height={20} width="80%" />

                                </div>

                            ))


                            :


                            ProductsData.length > 0 ?


                                ProductsData.map((item) => (


                                    <div className='col-md-4'>

                                        <div className="container page-wrapper">

                                            <div className="page-inner">
                                                <div className="row">
                                                    <div className="el-wrapper">


                                                        <div className="box-up" onClick={() => { Navigate(`/pro/${item.id}`) }}>

                                                            <img className="img-fluid img" src={item.image} alt="img" style={{ height: '100%' }} />

                                                            <div className="img-info">

                                                                <div className="info-inner">
                                                                    <span className="p-name"></span>
                                                                    <span className="p-company">{item.name}</span>

                                                                    <div className='p-company'>

                                                                        <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                                        <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                                    </div>

                                                                </div>



                                                                <div className="a-size"> <span style={{ fontWeight: '600', color: 'blue' }}>FOR :</span> <span className="size" style={{ fontSize: '0.8rem' }}>{item.use_for}<br />
                                                                    <span style={{ fontWeight: '600', color: 'blue' }}> WITH :</span>{item.use_with}</span></div>

                                                            </div>

                                                        </div>

                                                        <div className="box-down">

                                                            <div className="h-bg">
                                                                <div className="h-bg-inner"></div>
                                                            </div>

                                                            <a className="cart">
                                                                <span className="price">Just ₹{item.price}</span>

                                                                <span className="add-to-cart" >
                                                                    <span className="txt">Add in cart</span>
                                                                </span>
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                ))


                                :

                                <h3 className='text-center'>No Products</h3>

                    }



                </div>


            </section>



        </>

    )


}

export default AllProducts