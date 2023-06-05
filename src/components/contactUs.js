import React from 'react'
import Title from './common/title'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function contactUs() {
  return (
    <div id='contact' className='section mt-5 pb-4'>
      <Title title='Contact Us' subTitle='Our Office location on the Map' />
      <Row>
        <Col className='p-3'>
          <iframe
            title='lbglobe office'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54445.30769456867!2d74.39008208115588!3d31.47381468437479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909e212c2d985%3A0x37714e39a3ee3b4d!2sDHA%20Phase%206%20Lahore!5e0!3m2!1sen!2s!4v1617956402188!5m2!1sen!2s'
            width='100%'
            height='300'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
          ></iframe>
        </Col>
      </Row>
      <Container>
        <Row className='py-1'>
          <Col className='text-center order-2 order-lg-1'>
            <Form>
              <h2 className='py-1'>GET IN TOUCH WITH US.</h2>
              <Form.Row>
                <Form.Group as={Col} controlId='formGridName'>
                  <Form.Control type='text' placeholder='Your Name' />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Control type='email' placeholder='Your Email' />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId='formGridAddress1'>
                <Form.Control placeholder='Subject' />
              </Form.Group>

              <Form.Group controlId='formTextarea'>
                <Form.Control
                  as='textarea'
                  placeholder='Your Message'
                  rows={6}
                />
              </Form.Group>

              <Button className='contact-btn' type='submit'>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default contactUs
