import React from 'react'
import { Container, Card, Col } from 'react-bootstrap'
import companies from '../../companiesData/national'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HomeWrapper } from './style'
import './companySlider.css'
import Title from '../common/title'

export default function CompanySlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,

    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <HomeWrapper>
      <Title
        className='clearfix mt-5 p-5 mb-2'
        title='Our Companies'
        subTitle='STAY UP TO DATE WITH US'
      ></Title>
      <Container>
        <Slider {...settings}>
          {companies.map(function (company) {
            return (
              <React.Fragment>
                <Link
                  to={`/${company._id}`}
                  style={{ textDecorationLine: 'none' }}
                >
                  <Col>
                    <Card className='company-card my-4'>
                      <Card.Img
                        className='company-card-img'
                        variant='top'
                        src={company.logo ? company.logo : company.image}
                      />
                      <Card.Title>{company.name}</Card.Title>
                    </Card>
                  </Col>
                </Link>
              </React.Fragment>
            )
          })}
        </Slider>
      </Container>
    </HomeWrapper>
  )
}
