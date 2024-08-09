import React from "react"
import { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Landing from "./Pages/Landing"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Auth from './Pages/Auth'
import AllProducts from "./Pages/AllProducts"
import Doctors from "./Pages/Doctors"
import Cart from "./Pages/Cart"
import SingleProducts from "./Pages/SingleProducts"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import Stress from "./Pages/Stress"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import Terms from './Pages/Terms'
import Refund from "./Pages/Refund"

function App() {


  const location = useLocation()

  const [Hide, sethide] = useState(false)




  useEffect(() => {


    const hidecheck = () => {

      if (location.pathname == '/auth' || location.pathname == '/ai' || location.pathname == '/terms' || location.pathname == '/refund' || location.pathname == '/pirvacy') {


        sethide(true)


      }
      else {

        sethide(false)
      }

    }

    hidecheck()

  }, [location])




  return (

    <>

      <div className="position-sticky sticky-top  z-5 w-100">

        {!Hide && <Header />}


      </div>

      <Routes>

        <Route path="/" element={<Landing />}> </Route>

        <Route path="/auth" element={<Auth />}> </Route>

        <Route path="/allproducts" element={<AllProducts />}> </Route>

        <Route path="/doctors" element={<Doctors />}> </Route>

        <Route path="/ai" element={<Doctors />}> </Route>

        <Route path="/cart" element={<Cart />}> </Route>

        <Route path="/pro" element={<SingleProducts />}> </Route>

        <Route path="/about" element={<AboutUs />}> </Route>

        <Route path="/contact" element={<ContactUs />}> </Route>

        <Route path="/stress" element={<Stress />}> </Route>

        <Route path="/performance" element={<Stress />}> </Route>

        <Route path="/pirvacy" element={<PrivacyPolicy />}> </Route>

        <Route path="/terms" element={<Terms />}> </Route>

        <Route path="/refund" element={<Refund />}> </Route>


      </Routes>


      {!Hide && <Footer />}

    </>




  )
}

export default App
