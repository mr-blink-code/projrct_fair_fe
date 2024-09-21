import React from 'react'
import { Container, Row, Col,Button, Stack  } from 'react-bootstrap'
import home_page from '../assets/Home/homepage.webp'
import ProjectCard from '../components/ProjectCard'
import { Link} from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={} className='d-flex align-items-center bg-info'>
          <Container>
              <h1 className='fs-1 fw-bold text-end'>Project Fair</h1>
              <p className='fs-3 text-end'>One stop destination for any<br /><span className='fw-semibold'>software projects.</span></p>
              <Link to='/login'><Button >GET STARTED</Button></Link>
          </Container>
          </Col>
          <Col className='bg-success' md={6}>
            <img src={home_page} />
          </Col>
        </Row>
      </Container>
      <Container fluid >
        <h2 className='text-center my-5'>Explore Our Projects</h2>
        <marquee scrollamount={20}>
        <Row>
          <Col md={4}><ProjectCard/></Col>
          <Col md={4}><ProjectCard/></Col>
          <Col md={4}><ProjectCard/></Col>
        </Row>
        </marquee>
        <Row className='text-center'><Link to='/project'>See More Projects</Link></Row>
      </Container>
    </>
  )
}
