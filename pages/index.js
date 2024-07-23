import React from 'react'
import Intro from './Components/Home/Intro'
import Services from './Components/Home/Services'
import Tech from './Components/Home/Tech'
import Whyus from './Components/Home/whyus'
import Aboutus from './Components/Home/aboutus'
import ContactUs from './Components/Home/ContactUs'

const Index = () => {
  return (
    <>
      <div className='mb-8' >
          <Intro/>
          <Services/>
          <Whyus/>
          <Tech/>
          <Aboutus/>
          <ContactUs/>

      </div>
    </>
  )
}

export default Index