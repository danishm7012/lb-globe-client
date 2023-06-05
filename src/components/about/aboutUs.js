import React from 'react'
import './About.css'

function aboutUs() {
  return (
    <section id='about' class='about'>
      <div class='container'>
        <div class='section-title'>
          <h2>About Us</h2>
          <p>
            We select each sector that strives to be beneficial and valuable to
            the businessmen, young entrepreneurs, and general public, resulting
            in year-on-year revenue and fair wages for our clients.
          </p>
        </div>

        <div class='row content'>
          <div class='col-lg-6'>
            <p>
              Established in 2010 and its head office located in Gulberg-Lahore,
              Punjab, Pakistan. LB Globe is a massive platform of various
              companies & industries. Our companies, ITMove Technologies, and
              eRevolute, operate in the UK, the USA, UAE, and Pakistan. One more
              feather in our cap, DigiPremier, is also well established in
              Pakistan. Our event management company, Event Royals, helps
              simplify your event planning for all your virtual, hybrid, and
              in-person events.
              <br />
              The Company’s operations are running through professional and
              skilled individuals utilizing dynamic business developments. LB
              Globe Group holds a great special rank among its competitors
              globally. The group enjoys a good reputation in the local and
              international market. Through professional initiatives and
              innovative techniques, our journey has become fruitful and
              result-oriented. LB Globe works as the leading force for all its
              industries and provides complete professional support to its
              workforce. The Company provides exemplary services to worldwide
              clientele in every sector covered by Learning and Business Globe.
              Our business and working partners always put their highest level
              of confidence in our quality. We mainly provide eCommerce learning
              institutes, online shipping platform, and event management.
            </p>
            <a href='/' class='btn-learn-more'>
              Learn More
            </a>
          </div>
          <div class='col-lg-6 pt-4 pt-lg-0'>
            <img
              src='/images/about.jpg'
              alt='About Us'
              height='auto'
              width='100%'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default aboutUs
