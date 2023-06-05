import React from 'react'
import Carousel from '../components/carousel'
import Meta from '../components/common/Meta'
import AboutUs from '../components/about/aboutUs'
import Services from '../components/catagories/CategoryList'

import ContactUs from '../components/contactUs'
import CompanySlider from '../components/CompaniesSlider/CompanySlider'
import Ceo from '../components/ceo'
import Values from '../components/values/values'
/* import Team from '../components/team/team' */

const home = () => {
  return (
    <div id='mainHome'>
      <Meta />
      <Carousel />
      <AboutUs />
      <Values />
      <CompanySlider />

      <Services />
      <Ceo />
      {/*  <Team /> */}

      <ContactUs />
    </div>
  )
}

export default home
