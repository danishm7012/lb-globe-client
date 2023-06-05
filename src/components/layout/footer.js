import React from 'react'
import { Link } from 'react-scroll'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
  return (
    <>
      <footer id='footer'>
        {
          <div class='footer-top'>
            <div class='container'>
              <div class='row'>
                <div class='col-lg-3 col-md-6'>
                  <div class='footer-info'>
                    <Link to='slider'>
                      <LinkContainer to='/'>
                        <img
                          src='/images/logos/logo.png'
                          className='d-inline-block align-top '
                          alt='Paradise Group of Companies'
                          height='auto'
                          width='200'
                        />
                      </LinkContainer>
                    </Link>
                    Learning and Business Globe.
                    <br />
                    <strong>
                      <i class='far fa-envelope'></i>
                    </strong>
                    {'   '}
                    info@lbglobe.org
                    <br />
                    <br />
                    <br />
                    <div class='social-links mt-3'>
                      <a
                        href='https://www.facebook.com/Learning-Business-Globe-110291561146464'
                        target='blank'
                      >
                        <i className='fab fa-facebook-f'></i>
                      </a>
                      <a
                        href='https://twitter.com/BussinessGlobe'
                        target='blank'
                      >
                        <i className='fab fa-twitter'></i>
                      </a>
                      <a
                        href='https://www.linkedin.com/in/lb-globe-15411a20a/'
                        target='blank'
                      >
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                      <a
                        href='https://www.instagram.com/lbglobe/'
                        target='blank'
                      >
                        <i className='fab fa-instagram'></i>
                      </a>
                      <a href='/'>
                        <i className='fas fa-globe'></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class='col-lg-2 col-md-6 footer-links'>
                  <h4>Useful Links</h4>
                  <ul>
                    <Link to='slider'>
                      <LinkContainer to='/'>
                        <li>
                          <i className='fas fa-chevron-right'></i>{' '}
                          <a href='#slider'>Home</a>
                        </li>
                      </LinkContainer>
                    </Link>{' '}
                    <br />
                    <Link to='about'>
                      <LinkContainer to='/'>
                        <li>
                          <i className='fas fa-chevron-right'></i>{' '}
                          <a href='#about'>About us</a>
                        </li>
                      </LinkContainer>
                    </Link>
                    <LinkContainer className='link-container' to='/info/career'>
                      <li>
                        <i className='fas fa-chevron-right'></i> Career
                      </li>
                    </LinkContainer>
                    <LinkContainer to='/info/blogs' className='link-container'>
                      <li>
                        <i className='fas fa-chevron-right'></i> Blogs
                      </li>
                    </LinkContainer>
                  </ul>
                </div>

                <div className='col-lg-3 col-md-6 footer-links'>
                  <h4>Our Services</h4>
                  <ul>
                    <LinkContainer
                      className='link-container'
                      to='/services/ecommerce-business-learnings'
                    >
                      <li>
                        <i className='fas fa-chevron-right'></i> E-Commerce
                        Business Learnings
                      </li>
                    </LinkContainer>
                    <LinkContainer
                      className='link-container'
                      to='/services/digital-marketing'
                    >
                      <li>
                        <i className='fas fa-chevron-right'></i>
                        Digital Marketing
                      </li>
                    </LinkContainer>

                    <LinkContainer
                      className='link-container'
                      to='/services/digital-marketing'
                    >
                      <li>
                        <i className='fas fa-chevron-right'></i> Education
                        Services
                      </li>
                    </LinkContainer>
                  </ul>
                </div>

                <div class='col-lg-4 col-md-6 footer-newsletter'>
                  <h4>Our Newsletter</h4>
                  <p>
                    Enter your email ID to get the latest news and feature
                    stories on our businesses, community initiatives, heritage
                    and people.
                  </p>
                  <form action='' method='post'>
                    <input type='email' name='email' />
                    <input type='submit' value='Subscribe' />
                  </form>
                  <a href='#slider'>
                    {' '}
                    <i className='fas fa-caret-square-up'></i>{' '}
                  </a>
                </div>
              </div>
              <div className='row'>
                <div class='col-lg-4 col-md-4 col-sm-12'>
                  <p>
                    <br />
                    <span className='office-name'>UAE Office:</span> Office No.
                    704, Damas Tower, Rigga Al Buteen, Deira, Dubai, UAE. P.O.
                    BOX 415253 <br />
                    <br />
                    <strong>
                      <i className='fas fa-phone'></i>
                    </strong>
                    {'   '}
                    +971 58 1439463
                    <br />
                    <strong>
                      <i className='fab fa-whatsapp '></i>
                    </strong>
                    {'   '}
                    +971 54 5277366
                  </p>
                </div>
                <div class='col-lg-4 col-md-4 col-sm-12'>
                  <p>
                    <br />
                    <span className='office-name'>UK Office:</span> London
                    Office: 3rd Floor, 244 Edgware Road, London W2 1DS, UK.{' '}
                    <br />
                    <br />
                    <strong>
                      <i className='fab fa-whatsapp '></i>
                    </strong>
                    {'   '}
                    +44 7391 758 721
                  </p>
                </div>
                <div class='col-lg-4 col-md-4 col-sm-12'>
                  <p>
                    <br />
                    <span className='office-name'>Pakistan Office:</span> 2nd
                    Floor MB-269, DHA phase 6, Lahore, Pakistan.
                    <br />
                    <br />
                    <strong>
                      <i className='fas fa-phone'></i>
                    </strong>
                    {'   '}
                    +92 333 0671555
                  </p>
                </div>
              </div>
            </div>
            <div className='pt-4 text-white text-center'>
              Copyright &copy; {new Date().getFullYear()}
              <strong>
                <span> Learning and Business Globe. </span>
              </strong>
              All Rights Reserved.
            </div>
          </div>
        }
      </footer>
    </>
  )
}

export default Footer
