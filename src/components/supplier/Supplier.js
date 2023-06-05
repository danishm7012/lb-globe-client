import React from 'react'
import './Supplier.css'
import 'aos/dist/aos.css'
import { Container, Row, Form, Button, Col, Image } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'
import Title from '../common/title'
import Meta from '../common/Meta'

const schema = yup.object({
  fullName: yup.string().required(),
  Email: yup.string().required(),
  description: yup.string().required(),
  contact: yup.string().required(),
  company: yup.string().required(),
})

export default function Supplier() {
  return (
    <div className='section'>
      <Meta
        title='Become a Supplier - Paradise Group of Companies'
        description='Being a part of the Paradise Group of Companies'
      />
      <Row>
        <Col lg={12}>
          <Title title='Become a Supplier' />
        </Col>
      </Row>
      <div className='body'>
        <Container>
          <Row>
            <Col lg={6} className='text-center'>
              <Image src='/images/supplier.jpg' height='auto' width='70%' />
            </Col>
            <Col lg={6}>
              <div className='text'>
                <p>
                  The Paradise Group of Companies are keen to work with
                  suppliers that can offer our customers excellent quality and
                  innovative products. If you believe your products can meet our
                  exacting standards please submit your details using the form
                  below.
                </p>
              </div>
              <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                  fullName: '',
                  Email: '',
                  contact: '',
                  company: '',
                  description: '',
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  values,
                  touched,
                  isValid,
                  errors,
                }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md='4'
                        controlId='validationFormik01'
                      >
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type='text'
                          name='fullName'
                          value={values.fullName}
                          onChange={handleChange}
                          isInvalid={errors.fullName && touched.fullName}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.fullName}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md='6'
                        controlId='validationFormik02'
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type='text'
                          name='Email'
                          value={values.Email}
                          onChange={handleChange}
                          isInvalid={errors.Email && touched.Email}
                        />

                        <Form.Control.Feedback type='invalid'>
                          {errors.Email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group
                        as={Col}
                        md='4'
                        controlId='validationFormik03'
                      >
                        <Form.Label>Telephone Number</Form.Label>
                        <Form.Control
                          type='text'
                          name='contact'
                          value={values.contact}
                          onChange={handleChange}
                          isInvalid={errors.contact && touched.contact}
                        />

                        <Form.Control.Feedback type='invalid'>
                          {errors.contact}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md='6'
                        controlId='validationFormik04'
                      >
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                          type='text'
                          name='company'
                          value={values.company}
                          onChange={handleChange}
                          isInvalid={errors.company && touched.company}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.company}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId='exampleForm.ControlTextarea1'>
                        <Form.Label>
                          Brief Description Of Products You Supply:{' '}
                        </Form.Label>
                        <Form.Control
                          as='textarea'
                          rows={3}
                          name='description'
                          value={values.description}
                          onChange={handleChange}
                          isInvalid={errors.description && touched.description}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.description}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>

                    <Button className='supplier-btn' type='submit'>
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
