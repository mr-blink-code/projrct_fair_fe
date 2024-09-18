import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MyProfile from '../components/MyProfile'
import MyProject from '../components/MyProject'

export default function Dashbord() {
  return (
    <>
      <Container fluid>
        <h4>Welcome<span className='m-4 fw-bold'>Agile</span></h4>
        <Row>
          <Col md={8}>
          <MyProject/>
          </Col>
          <Col md={4}>
          <MyProfile/>
          </Col>
        </Row>
      </Container>
    </>
  )
}
