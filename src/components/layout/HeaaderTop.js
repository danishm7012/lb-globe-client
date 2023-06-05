import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import SamplePage from '../translatorApi/TestedApi'
import '../translatorApi/TranslateAPI.css'

function HeaaderTop() {
  return (
    <div className='nav1'>
      <Navbar expand='md' style={{ backgroundColor: 'black' }}>
        <Nav className='ml-auto textcolors'>
          <Nav.Item className='textcolorsTopNav'>
            <Nav.Link href='mailto:info@lbglobe.org'>
              <strong className='fas fa-envelope faHeader'></strong>
              <span>info@lbglobe.org</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='textcolorsTopNav'>
            <Nav.Link href='tel:+923330671555'>
              <strong className='fas fa-phone-alt faHeader'></strong>
              <span>+92 333 0671555</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='textcolorsTopNav'>
            <Nav.Link href='https://api.whatsapp.com/send?phone=44 7379 331419'>
              <strong className='fab fa-whatsapp faHeaderwhatsapp'></strong>
              <span>+44 7379 331419</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className='translateApi'>
            <SamplePage />
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  )
}

export default HeaaderTop
