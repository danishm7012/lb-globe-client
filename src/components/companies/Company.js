import React from 'react'
import './companies.css'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

const Company = ({ _id, name, logo }) => {
  return (
    <Col lg={5} xl={4}>
      <Link to={`/${_id}`} style={{ textDecoration: 'none' }}>
        <div className='company-inner-div'>
          <img
            src={logo}
            alt='logo'
            height='150'
            width='150'
            className='rounded'
            style={{ backgroundColor: '#fff' }}
          />
          <br />

          <p>{name}</p>
        </div>
      </Link>
    </Col>
  )
}
export default Company
