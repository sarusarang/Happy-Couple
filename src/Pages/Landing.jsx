import React from 'react'
import { useEffect } from 'react'
import Slider from '../Components/Slider'
import Hero from '../Components/Hero'
import ProductsSlide from '../Components/ProductsSlide'
import HeroSecond from '../Components/HeroSecond'
import WhatsApp from '../Components/WhatsApp'

function Landing() {



  useEffect(() => {

    // TO MOUNT ON THE TOP LEVEL 
    window.scrollTo(0, 0);


  }, []);




  return (



    <>


      <section className='w-100 Landing'>


        {/* Slider */}
        <div className='p-4 pt-0'>

          <Slider />

        </div>



        {/* Hero  */}
        <div className=''>

          <Hero />

        </div>





        {/* Products Slide */}
        <div className=''>

          <h3 className='text-center mb-0 mt-5' style={{ fontWeight: '600' }}>Products</h3>

          <ProductsSlide />


        </div>




        {/* Hero 2 */}
        <div className=''>

          <HeroSecond />

        </div>


        {/* WhatsApp Logo */}
        <div className='Whats-app'>

          <WhatsApp />

        </div>



      </section>



    </>



  )







}

export default Landing