import React from 'react'

import { Container, Row, Col, Card, Image } from 'react-bootstrap'

const ceo = () => {
  return (
    <div id='ceo' className='section'>
      <Container className='m-3'>
        <Row>
          <Col className='text-center m-2' sm={12} lg={5}>
            <Image id='ceo-image' src='/images/ceo.jpeg' roundedCircle />
          </Col>
          <Col className='text-center mr-4' sm={12} lg={6}>
            <Card className='ceo-card'>
              <Card.Body>
                <h2>
                  <i class='fas fa-spa'></i> Message From Chairman
                </h2>

                <Card.Text>
                  In response to our Nation’s Vision and enhanced economic
                  growth, Learning and Business Globe has consistently been
                  involved in developing different sectors, renouncing our gain
                  in Pakistan and around the globe. Our widespread local and
                  international network is open proof of our strength in this
                  global village. Our companies, ITMove Technologies, and
                  eRevolute are operating in the UK, the USA, UAE, and Pakistan.
                  One more feather in our cap, DigiPremier, is also well
                  established in Pakistan. Furthermore, Event Royals, our Events
                  management company, covers formal as well as informal events
                  comprehensively. We have always proved ourselves true
                  professionals regarding the provision of relevant
                  perspectives.
                  <br />
                  <br />
                  <h6>
                    <b>MALIK MUHAMMAD ASHAQ</b>
                  </h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ceo
