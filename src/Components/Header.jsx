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


              <Nav.Link href="#home">Home</Nav.Link>

              <Nav.Link href="#link">AI Consultant</Nav.Link>

              <Nav.Link href="#link">Talk to Doctor</Nav.Link>


              <div className='dropdown'>

                <Nav.Link href="#link">Your Concern <i class="fa-solid fa-caret-down" style={{ color: '#ccc' }}></i></Nav.Link>


                <div className='dropdown-content'>

                  <Link className='drop-link'>Performance</Link>
                  <Link className='drop-link'>Stress Management</Link>

                </div>


              </div>


              <Nav.Link href="#link">Products</Nav.Link>


              <div className='dropdown'>

                <Nav.Link href="#link">Pages<i class="fa-solid fa-caret-down" style={{ color: '#ccc' }}></i></Nav.Link>


                <div className='dropdown-content'>

                  <Link className='drop-link'>About Us</Link>
                  <Link className='drop-link'>Contact Us</Link>

                </div>


              </div>



              <Nav.Link href="#link"><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>


              <Nav.Link href="#link"><i class="fa-solid fa-cart-shopping"></i></Nav.Link>

              <Nav.Link href="#link"><i class="fa-solid fa-user"></i></Nav.Link>




            </Nav>

          </Navbar.Collapse>


        </Container>


      </Navbar>



    </>

  )



}

export default Header