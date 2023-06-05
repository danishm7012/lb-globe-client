import React from 'react'
import HeaaderTop from './HeaaderTop'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-scroll'

function header() {
  return (
    <>
      <HeaaderTop />
      <Navbar
        className='navbar'
        fixed='top'
        collapseOnSelect
        expand='lg'
        variant='dark'
      >
        <Link to='slider'>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                src='/images/logos/logo.png'
                className='d-inline-block align-top pb-1 '
                alt='Business and Learning HUB'
                height='100'
                width='220'
              />
            </Navbar.Brand>
          </LinkContainer>
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto text-center nav'>
            <Link to='slider'>
              <LinkContainer className='link-container' to='/'>
                <Nav.Link className='navbar-link'>HOME</Nav.Link>
              </LinkContainer>
            </Link>

            <Link to='about'>
              <LinkContainer to='/'>
                <Nav.Link className='navbar-link'>ABOUT US</Nav.Link>
              </LinkContainer>
            </Link>

            <Link to='services'>
              <LinkContainer to='/'>
                <Nav.Link className='navbar-link'>SERVICES</Nav.Link>
              </LinkContainer>
            </Link>
            <Link to='/'>
              <LinkContainer to='/info/blogs'>
                <Nav.Link className='navbar-link' active>
                  BLOGS
                </Nav.Link>
              </LinkContainer>
            </Link>
            <Link to='services'>
              <LinkContainer to='/'>
                <Nav.Link className='navbar-link'>TEAM</Nav.Link>
              </LinkContainer>
            </Link>

            <Link to='/'>
              <LinkContainer to='/info/career'>
                <Nav.Link className='navbar-link' active>
                  Career
                </Nav.Link>
              </LinkContainer>
            </Link>

            <Link to='contact'>
              <LinkContainer to='/'>
                <Nav.Link className='navbar-link'>CONTACT US</Nav.Link>
              </LinkContainer>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default header
