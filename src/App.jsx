import React from "react"
import { Routes, Route } from "react-router-dom"
import Landing from "./Pages/Landing"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {


  return (

    <>

      <Header />

      <Routes>


        <Route path="/" element={<Landing />}> </Route>


      </Routes>


      <Footer />

    </>




  )
}

export default App
