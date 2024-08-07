import React from "react"
import { Routes, Route } from "react-router-dom"
import Landing from "./Pages/Landing"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Auth from './Pages/Auth'
import AllProducts from "./Pages/AllProducts"

function App() {


  return (

    <>

      <Header />

      <Routes>

        <Route path="/" element={<Landing />}> </Route>

        <Route path="/auth" element={<Auth />}> </Route>

        <Route path="/allproducts" element={<AllProducts />}> </Route>
        
      </Routes>


      <Footer />

    </>




  )
}

export default App
