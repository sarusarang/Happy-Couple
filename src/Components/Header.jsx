import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {


  return (


    <>


      <Navbar expand="lg" className="header">

        <Container className='contain'>


          <div className='nav-logo'>


            <a href="/">

              <img src="/NAV-LOGO.png" className='img-fluid' alt="" />

            </a>

          </div>



          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className='nav-col'>


            <Nav className="me-auto navigation">


              <Link to={'/'} >Home</Link>


              <Link to={'/'} >AI Consultant</Link>


              <Link to={'/doctors'} >Talk to Doctor</Link>


              <div className='dropdown'>

                <Nav.Link href="#link">Your Concern <i class="fa-solid fa-caret-down" style={{ color: '#ccc' }}></i></Nav.Link>


                <div className='dropdown-content'>

                  <Link  to={'/performance'}  className='drop-link d-block'>Performance</Link>
                  <Link  to={'/stress'} className='drop-link d-block'>Stress Management</Link>

                </div>


              </div>


              <Link to={'/allproducts'} >Products</Link>



              <div className='dropdown'>

                <Nav.Link href="#link">Pages<i class="fa-solid fa-caret-down" style={{ color: '#ccc' }}></i></Nav.Link>


                <div className='dropdown-content'>

                  <Link to={'/about'} className='drop-link d-block'>About Us</Link>
                  <Link  to={'/contact'} className='drop-link d-block'>Contact Us</Link>

                </div>


              </div>


              <Link to={'/'} ><i class="fa-solid fa-magnifying-glass"></i></Link>

              <Link to={'/cart'} ><i class="fa-solid fa-cart-shopping"></i></Link>

              <Link to={'/auth'} ><i class="fa-solid fa-user"></i></Link>


            </Nav>

          </Navbar.Collapse>


        </Container>


      </Navbar>



    </>

  )



}

export default Header