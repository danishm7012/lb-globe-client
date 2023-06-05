import React, { useState, useEffect } from 'react'
import companies from '../../companiesData/national'
import { useHistory } from 'react-router-dom'
import Meta from '../common/Meta'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Aos from 'aos'
import './Banner.css'

const CompanyDetail = ({ match }) => {
  //get brower history
  let history = useHistory()
  const companyId = match.params._id
  const [Company, setCompany] = useState({})
  Aos.init({ duration: 2000, offset: 300 })

  useEffect(() => {
    setCompany(companies.find((c) => c._id === companyId))
  }, [companyId])

  return (
    <>
      <div
        className='bg-image'
        style={{
          backgroundImage: `url(${Company.image})`,
        }}
      ></div>

      <div className='company-title'>
        <h1>{Company.name}</h1>
        <Meta
          title={`${Company.name}- Learning & Business Group`}
          description='Being a part of the Learning & Business Group'
        />
        <p>
          <span>
            <i class='fas fa-map-marker-alt'></i>
          </span>{' '}
          {Company.address}
        </p>
        <p>
          <span>
            <i class='fas fa-mobile-alt'></i>
          </span>{' '}
          {Company.phoneNo}
        </p>
        <p>
          Visit Website:{' '}
          <a target='blank' href={Company.website}>
            {Company.website}
          </a>
        </p>
        <div class='logos'>
          <a target='blank' href={Company.facebook}>
            <i
              Style='background-color: #3b5998'
              className='fab fa-facebook-f'
            ></i>
          </a>

          <a target='blank' href={Company.twitter}>
            <i className='fab fa-twitter' Style='background-color: #00acee'></i>
          </a>
          <a target='blank' href={Company.linkedin}>
            <i
              className='fab fa-linkedin-in'
              Style='background-color: #0e76a8'
            ></i>
          </a>
          <a target='blank' href={Company.instagram}>
            <i
              className='fab fa-instagram'
              Style='background-color: #3f729b'
            ></i>
          </a>
        </div>
      </div>
      <div className='overview container'>
        <Button
          variant='outline-dark'
          size='sm'
          className='my-2'
          onClick={() => history.goBack()}
          style={{ fontSize: 16, float: 'left' }}
        >
          <i class='fas fa-caret-left'></i> Back
        </Button>

        <h4> Overview</h4>
        <p>{Company.description}</p>
      </div>

      <Container className='mission-vision' fluid='true'>
        <Row>
          {Company.vision && (
            <Col
              data-aos='fade-right'
              data-aos-offset='150'
              data-aos-duration='500'
              xl={5}
              lg={5}
              md={5}
              className='mission-vision-inner-div'
            >
              <h4>Vision</h4>
              <p>{Company.vision}</p>
            </Col>
          )}
          {Company.mission && (
            <Col
              data-aos='fade-left'
              data-aos-offset='150'
              data-aos-duration='500'
              xl={5}
              lg={5}
              md={5}
              className='mission-vision-inner-div'
            >
              <h4>Mission</h4>
              <p>{Company.mission}</p>
            </Col>
          )}
        </Row>
      </Container>
    </>
  )
}

export default CompanyDetail
