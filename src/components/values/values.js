import React from 'react'
import './values.css'

const values = () => {
  return (
    <section id='values' class='values'>
      <div class='container' data-aos='fade-up'>
        <header class='section-title'>
          <h2>Our Values</h2>
          <p>BETTER TOMORROW</p>
        </header>

        <div class='row'>
          <div class='col-lg-4'>
            <div class='box' data-aos='fade-up' data-aos-delay='200'>
              <img src='/images/values/values-1.png' class='img-fluid' alt='' />
              <h3>e-Commerce</h3>
              <p>
                LB GLOBE believes in 'Better Tomorrow' and regards these two
                simple words as the main Values of our group. All our Companies,
                performing under our flagship, one way or another, promote
                eCommerce.LB GLOBE is considered a pioneer in this highly
                connected and convenient customer field.
              </p>
            </div>
          </div>

          <div class='col-lg-4 mt-4 mt-lg-0'>
            <div class='box' data-aos='fade-up' data-aos-delay='400'>
              <img src='/images/values/values-2.png' class='img-fluid' alt='' />
              <h3>e-Education</h3>
              <p>
                We are continuously extending our eCommerce services to our
                customers through different market channels. LB GLOBE always
                considers education the backbone of every society, and we are
                bringing international and best-level education services in
                group educational institutes.
              </p>
            </div>
          </div>

          <div class='col-lg-4 mt-4 mt-lg-0'>
            <div class='box' data-aos='fade-up' data-aos-delay='600'>
              <img src='/images/values/values-3.png' class='img-fluid' alt='' />
              <h3>Online Shopping</h3>
              <p>
                We are a leading brand, canvassing all under one group. We leave
                no stone unturned in providing a new generation of e-Commerce,
                one-stop online shopping, and event management experiences to
                international students and end-users from all around the world.
                We are committed to bringing you the premium e-Commerce study
                options in UK, UAE, USA, Pakistan, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default values
