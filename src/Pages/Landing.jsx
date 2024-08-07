import React from 'react'
import Slider from '../Components/Slider'
import Hero from '../Components/Hero'
import ProductsSlide from '../Components/ProductsSlide'
import HeroSecond from '../Components/HeroSecond'

function Landing() {


  return (



    <>


      <section className='w-100'>


        {/* Slider */}
        <div className='p-4'>

          <Slider />

        </div>



        {/* Hero  */}
        <div className=''>

          <Hero />

        </div>





        {/* Products Slide */}
        <div className=''>

          <ProductsSlide />


        </div>




        {/* Hero 2 */}
        <div className=''>

          <HeroSecond/>

        </div>



      </section>



    </>



  )







}

export default Landing