import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Card, Row ,Modal,Col} from 'react-bootstrap'
import { useState } from 'react';
import { BASE_URL } from '../services/baseurl';
import { Link } from 'react-router-dom';

export default function ProjectCard({project}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card className="h-100 text-white shadow-lg" onClick={handleShow}>
      <Card.Img className='h-100' src={`${BASE_URL}/uploads/${project.projectImage}`} alt="https://cdn-icons-png.flaticon.com/512/11268/11268870.png" />
      <Card.ImgOverlay className='h-100 mb-auto'>
        <Card.Title className='fs-4 fw-bold'>{project.title}</Card.Title>
        <Card.Text className='fs-5'>{project.overview}</Card.Text>
        <Card.Text className='mt-5'>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    

  <Modal centered show={show} onHide={handleClose} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>{project.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row className='d-flex'>
            <Col md={8}><img className='w-100'src={`${BASE_URL}/uploads/${project.projectImage}`} alt="https://cdn-icons-png.flaticon.com/512/11268/11268870.png" height='200px'/></Col>
            <Col md={4}>
            <Row className='fw-bold fs-5'>Description:</Row>
            <Row>{project.overview}</Row>
            <Row className='fw-bold fs-5'>Technologies:</Row>
            <Row>{project.language}</Row>
            </Col>
        </Row>
        <Row className='d-flex p-3'>
            <Col md='auto' ><Link to={`${project.github}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></Link></Col>
            <Col md='auto' ><Link to={`${project.website}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink}/></Link></Col>
        </Row>
    </Modal.Body>
  </Modal>
  </>
  )
}
