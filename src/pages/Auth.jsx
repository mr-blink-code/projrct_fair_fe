import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Row, Col, Container, Form, Stack,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Auth({register}) {

  const registerForm = register? true:false;
  return (
    <>
      <Container style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: "center", alignItems: 'center' }}>
        <Row className='d-flex justify-contents-center align-items-center'>
          <Link  to='/' className='link-underline-none'>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            <h3 >BACK TO HOME</h3>
          </Link>
        </Row>
        <Row>
          <Col md={6}>
            <img src="data:image/jpeg;base64,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" alt="" />
          </Col>
          <Col md={6}>
           <Form>
            {registerForm?
            <>
            <h6 className='m-5 fs-4 fw-bold'>Sign Up to Your Account</h6>
            <Stack gap={3}>
            <Form.Control placeholder='Name' type='text'/>
            <Form.Control placeholder='Email ID' type='text'/>
            <Form.Control placeholder='Password' type='password'/>
            <Button >Register</Button>
            <p>Already User? Click to <Link to='/login'>Login</Link></p>
            </Stack>
            </>
            :
            <>
            <h6 className='m-5 fs-4 fw-bold'>Sign in to Your Account</h6> 
            <Stack gap={3}>
            <Form.Control placeholder='Email ID' type='text'/>
            <Form.Control placeholder='Password' type='password'/> 
            <Button>Sign In</Button>
            <p>Not Registered Yet? Click here to <Link to='/register'>Register</Link></p>
            </Stack>
            </>
          }

           </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
