import React from 'react'
import './categories.css'

import { Link } from 'react-router-dom'
import Title from '../common/title'
const CategoryList = () => {
  return (
    <div id='services' className='section'>
      <Title
        title='Our Services'
        subTitle='LB Globe offers e-commerce businesses classified based on the goods and services sold by e-commerce companies and based on the companies involved in e-commerce sales and the policies used to conduct e-commerce sales transactions.'
      />

      <section id='services' class='services'>
        <div class='container' data-aos='fade-up'>
          <div class='row gy-4'>
            <div
              class='col-lg-4 col-md-6'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <div class='service-box blue'>
                <i class='fas fa-chalkboard-teacher icon'></i>
                <h3>E-commerce Business Learnings</h3>
                <p>
                  eRevolute, operating in UK, USA, UAE and PAKISTAN, is a
                  comprehensive e-Commerce educational system, providing our
                  students all the skills needed from a beginner’s level, all
                  the way up to being a professional in their chosen field.
                  eRevolute covers Amazon, eBay, Shopify, Ali Express, Alibaba,
                  B2B Business Generation, Adobe (All Courses) & Digital
                  Marketing.
                </p>
                <Link
                  to='/services/ecommerce-business-learnings'
                  class='read-more'
                >
                  <span>Read More</span> <i class='bi bi-arrow-right'></i>
                </Link>
              </div>
            </div>

            <div
              class='col-lg-4 col-md-6'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div class='service-box orange'>
                <i class='fas fa-laptop-code icon'></i>
                <h3>IT Services</h3>
                <p>
                  IT Move software house, well established in the UK, UAE, US,
                  and PAKISTAN provides a wide range of services, including
                  website development, web designing, mobile apps development,
                  search engine optimization (SEO), digital marketing, including
                  social media marketing (SMM) and much more. DIGI PREMIER deals
                  in business marketing solutions. We know how to create sale
                  funnels, and we are an authority in targeted audience and
                  end-users through our business intelligence strategies.
                </p>
                <Link to='/services/information-technology' class='read-more'>
                  <span>Read More</span> <i class='bi bi-arrow-right'></i>
                </Link>
              </div>
            </div>

            <div
              class='col-lg-4 col-md-6'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              <div class='service-box green'>
                <i class='fas fa-bullhorn icon'></i>
                <h3>Digital Marketing</h3>
                <p>
                  Eshelves has all the products lined up for our online
                  customers. We offer a fast, easy, money-saving, and exciting
                  shopping experience creating many advantages like 24 hours
                  shopping, shopping from Home, rich product availability and
                  specifications, etc. We offer some great deals every day or
                  week. Our website is user-friendly, fast, easy to access, and
                  finds a more extensive range of products than our competitors.
                  In addition, we have a very competent customer care service
                  for any of our customers’ concerns.
                </p>
                <Link to='/services/digital-marketing' class='read-more'>
                  <span>Read More</span> <i class='bi bi-arrow-right'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#5fcf80',
            color: 'white',
            marginTop: '10px',
          }}
        >
          <div className='container'>
            <div className='row pt-4'>
              <div className='col'>
                <p style={{ fontSize: 16 }}>
                  Presently let's get familiarized with the e-commerce business
                  based on the e-commerce platforms. LB Globe promotes your
                  business products and services on Facebook and Instagram, and
                  other social networks, a fast-growing segment of the
                  e-commerce business world. The main benefit of e-commerce
                  business consultancy is its capability to reach the global
                  market without fundamentally indicating a large-scale
                  financial investment. Furthermore, this type of trade boundary
                  is not geographically determined, allowing customers to make
                  an international choice, get the required information, and
                  compare business product and service offers from all potential
                  suppliers, despite their place.
                  <br /> E-commerce business is a profitable trend in the
                  business world. Suppose you are an old member of the business
                  world or just beginning to work on your business-promoting
                  idea. Don't neglect to spend the proper time estimating how to
                  get your eCommerce business online and reach a more
                  large-scale audience.
                  <br />
                  LB Globe is such a professional eCommerce business promoting
                  platform that will help you to increase your business revenue
                  as soon as you want. If you are looking for your brand or
                  services promotion online and are worried about a payment
                  transfer method, you can contact LB Globe anytime. LB Globe
                  professional experts can manage your eCommerce business
                  campaigns to increase your sales and leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CategoryList
