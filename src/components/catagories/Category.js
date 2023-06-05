import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Category = ({ logo, name, category }) => {
  return (
    <>
      <Col lg={6} xl={4} md={6} sm={12} xs={12}>
        <Link to={`services/${category}`} style={{ textDecoration: 'none' }}>
          <div className='catagory-inner-div'>
            <span>
              <i class={logo} style={{ fontSize: 32 }}></i>

              <p>{name}</p>
            </span>
          </div>
        </Link>
      </Col>
    </>
  )
}
export default Category
