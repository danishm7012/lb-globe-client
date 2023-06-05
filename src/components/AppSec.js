import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'

const AppSec = () => {
  return (
    <div className='app-section text-center py-4'>
      <h1>Download Our Apps</h1>
      <Button className='m-4 app-button' variant='outline-primary'>
        <Row>
          <i className='app-icon fab fa-apple' />

          <Col>
            Download on the
            <br />
            <span className='store-name'>App Store</span>
          </Col>
        </Row>
      </Button>{' '}
      <Button className='m-4 app-button' variant='outline-primary'>
        <Row>
          <i className='app-icon  fab fa-android' />

          <Col>
            Get it on
            <br /> <span className='store-name'>Google Play</span>
          </Col>
        </Row>
      </Button>{' '}
    </div>
  )
}

export default AppSec
