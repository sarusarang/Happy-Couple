import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {



  return (


    <>

      <footer className="text-center text-lg-start text-white py-1 px-5">

        <section className="p-5 pt-0" style={{ borderBottom: '1px solid #414141' }}>

          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">


              {/* Navigation */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Navigation
                </h6>

                <p>

                  <Link className='text-reset foot-link'>Home</Link>

                </p>

                <p>

                  <Link className='text-reset foot-link'>AI Consultant</Link>

                </p>


                <p>

                  <Link className='text-reset foot-link'>Talk to Doctor</Link>

                </p>

                <p>

                  <Link className='text-reset foot-link'>Your Concern</Link>

                </p>

                <p>

                  <Link className='text-reset foot-link'>Your Products</Link>


                </p>

              </div>



              {/* About */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


                <div className='foot-logo'>

                  <img src="/Foot-Logo.png" className='img-fluid' alt="" />

                </div>


                <p style={{ textAlign: 'justify' }}><i className="fas fa-home me-3"></i>RKP,3/569G,Parammal Road,Ramanatukara,Kozhikode  <br />- 673 634</p>


                <a href='' className='foot-link'>

                  <i className="fas fa-envelope me-3 mb-4"></i>
                  info@happycouplesolution.in.com

                </a>


                <a href="" className='foot-link'> <i className="fas fa-phone me-3"></i>+91 9020200100 </a>


              </div>


              {/* Pages */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Pages
                </h6>


                <p>

                  <Link className='text-reset foot-link'>About Us</Link>

                </p>


                <p>

                  <Link className='text-reset foot-link'>Contact Us</Link>

                </p>

              </div>

            </div>

          </div>

        </section>


        <div class="text-center p-4 pb-0" style={{ color: '#ccc' }}>

          <p> Copyright © 2024 happycouplesolution. All Rights Reserved. </p>

          <p>Powered by <a href="" className='foot-link'>exmedia.in</a></p>

          <p><a href="" className='foot-link'>Privacy & Policy, Terms & Conditions</a></p>

        </div>


        {/* Socail Media Links */}
        <section class="d-flex justify-content-center pb-3">

          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-facebook-f text-white"></i
          ></a>


          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
          ><i class="fa-brands fa-x-twitter text-white"></i></a>

          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-instagram text-white"></i
          ></a>


          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-linkedin-in text-white"></i
          ></a>


          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
          ><i class="fa-brands fa-youtube text-white"></i></a>

          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
          ><i class="fa-brands fa-pinterest text-white"></i></a>




        </section>

      </footer>


    </>


  )


}

export default Footer