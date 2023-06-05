import React from 'react'
import Company from './Company.js'
import './companies.css'
import Title from '../common/title'
import Meta from '../common/Meta'
import { Link } from 'react-router-dom'
import { Col, Container, Row, Button } from 'react-bootstrap'
import companies from '../../companiesData/national'

const CompanyList = ({ match }) => {
  const catagory = match.params.catagory
  return (
    <>
      <Meta
        title={`${catagory} - Learning & Business Group`}
        description='Being a part of the Learning & Business Group'
      />
      <Container className='companies'>
        <Row>
          <Col lg={12}>
            <Title title={`${catagory}`} subTitle='Companies' />
          </Col>
          <Link to={`/`}>
            <Button
              variant='outline-dark'
              size='sm'
              className='mb-3 ml-1'
              style={{ fontSize: 16, float: 'left' }}
            >
              <i class='fas fa-caret-left'></i> Back
            </Button>
          </Link>
        </Row>

        <Row>
          {companies.map(
            (c) =>
              c.category === catagory && (
                <Company key={c.id} _id={c._id} name={c.name} logo={c.logo} />
              )
          )}
        </Row>
      </Container>
    </>
  )
}

export default CompanyList
