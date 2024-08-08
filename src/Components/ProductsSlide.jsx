import React from 'react'
import './ProductsSlide.css'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useNavigate } from 'react-router-dom'

function ProductsSlide() {


    const Navigate = useNavigate()

    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }


    return (


        <>

            <section className='product-slide'>


                <div className='container p-5 pt-0'>


                    <Carousel responsive={responsive}>


                        <div>

                            <div className="container page-wrapper">

                                <div className="page-inner">
                                    <div className="row">
                                        <div className="el-wrapper">


                                            <div className="box-up" onClick={()=>{Navigate('/pro')}} >

                                                <img className="img-fluid img" src="/LYGIN_M.jpg" alt="img" style={{ height: '100%' }} />

                                                <div className="img-info">

                                                    <div className="info-inner">

                                                        <span className="p-name"></span>
                                                        <span className="p-company">LYGIN M</span>

                                                        <div className='p-company'>

                                                            <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                        </div>

                                                    </div>



                                                </div>

                                            </div>

                                            <div className="box-down">

                                                <div className="h-bg">
                                                    <div className="h-bg-inner"></div>
                                                </div>

                                                <a className="cart">
                                                    <span className="price">Just ₹500</span>

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



                        <div>

                            <div className="container page-wrapper">

                                <div className="page-inner">
                                    <div className="row">
                                        <div className="el-wrapper">


                                            <div className="box-up" onClick={()=>{Navigate('/pro')}}>

                                                <img className="img-fluid img" src="/LYGIN_M.jpg" alt="img" style={{ height: '100%' }} />

                                                <div className="img-info">

                                                    <div className="info-inner">

                                                        <span className="p-name"></span>
                                                        <span className="p-company">LYGIN M</span>


                                                        <div className='p-company'>

                                                            <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                        </div>


                                                    </div>



                                                </div>

                                            </div>

                                            <div className="box-down">

                                                <div className="h-bg">
                                                    <div className="h-bg-inner"></div>
                                                </div>

                                                <a className="cart">
                                                    <span className="price">Just ₹500</span>

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




                        <div>

                            <div className="container page-wrapper">

                                <div className="page-inner">
                                    <div className="row">
                                        <div className="el-wrapper">


                                            <div className="box-up" onClick={()=>{Navigate('/pro')}}>

                                                <img className="img-fluid img" src="/LYGIN_M.jpg" alt="img" style={{ height: '100%' }} />

                                                <div className="img-info">

                                                    <div className="info-inner">

                                                        <span className="p-name"></span>
                                                        <span className="p-company">LYGIN M</span>


                                                        <div className='p-company'>

                                                            <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                        </div>


                                                    </div>


                                                </div>

                                            </div>

                                            <div className="box-down">

                                                <div className="h-bg">
                                                    <div className="h-bg-inner"></div>
                                                </div>

                                                <a className="cart">
                                                    <span className="price">Just ₹500</span>

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




                        <div>

                            <div className="container page-wrapper">

                                <div className="page-inner">
                                    <div className="row">
                                        <div className="el-wrapper">


                                            <div className="box-up" onClick={()=>{Navigate('/pro')}}>

                                                <img className="img-fluid img" src="/LYGIN_M.jpg" alt="img" style={{ height: '100%' }} />

                                                <div className="img-info">

                                                    <div className="info-inner">


                                                        <span className="p-name"></span>
                                                        <span className="p-company">LYGIN M</span>

                                                        <div className='p-company'>

                                                            <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                        </div>


                                                    </div>


                                                </div>

                                            </div>

                                            <div className="box-down">

                                                <div className="h-bg">
                                                    <div className="h-bg-inner"></div>
                                                </div>

                                                <a className="cart">
                                                    <span className="price">Just ₹500</span>

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



                        <div>

                            <div className="container page-wrapper">

                                <div className="page-inner">
                                    <div className="row">
                                        <div className="el-wrapper">


                                            <div className="box-up" onClick={()=>{Navigate('/pro')}}>

                                                <img className="img-fluid img" src="/LYGIN_M.jpg" alt="img" style={{ height: '100%' }} />

                                                <div className="img-info">

                                                    <div className="info-inner">

                                                        <span className="p-name"></span>
                                                        <span className="p-company">LYGIN M</span>


                                                        <div className='p-company'>

                                                            <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                            <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                        </div>


                                                    </div>


                                                </div>

                                            </div>

                                            <div className="box-down">

                                                <div className="h-bg">
                                                    <div className="h-bg-inner"></div>
                                                </div>

                                                <a className="cart">
                                                    <span className="price">Just ₹500</span>

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



                    </Carousel>

                </div>


            </section>


        </>


    )


}

export default ProductsSlide