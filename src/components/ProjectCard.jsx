import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Card, Row ,Modal,Col} from 'react-bootstrap'
import { useState } from 'react';

export default function ProjectCard() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card className="bg-dark text-white" onClick={handleShow}>
      <Card.Img src='https://cdn-icons-png.flaticon.com/512/11268/11268870.png' alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Project Name</Card.Title>
        <Card.Text>
         Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam commodi,
           sit ducimus quas consectetur molestias 
           quidem quaerat cumque similique unde!
         </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    

  <Modal centered show={show} onHide={handleClose} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>Project name</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row className='d-flex'>
            <Col md={6}><img src="https://cdn-icons-png.flaticon.com/512/11268/11268870.png" height='200px'alt="image" /></Col>
            <Col md={6}>
            <Row className='fw-bold fs-3'>Description:</Row>
            <Row>Lorem ipsum dolor sit amet conse</Row>
            <Row className='fw-bold fs-3'>Technologies:</Row>
            <Row>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, veritatis?</Row>
            </Col>
        </Row>
        <Row className='d-flex ms-3'>
            <Col md='auto' ><FontAwesomeIcon icon={faGithub}/></Col>
            <Col md='auto' ><FontAwesomeIcon icon={faLink}/></Col>
        </Row>
    </Modal.Body>
  </Modal>
  </>
  )
}
