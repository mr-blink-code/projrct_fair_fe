import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Row, Col, Collapse, Stack, Form,Container, Button } from 'react-bootstrap'
/* import profileicon from './assets/profileicon.svg' */


export default function MyProfile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Row>
        <Col>Profile</Col>
        <Col><FontAwesomeIcon
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          
          icon={faAngleUp}
        /></Col>
      </Row>
      <Collapse in={open}>
        <Container>
          <Stack gap={3}>
            <Form.Group className="mb-3">
              <Form.Label><img width='100px' src='https://cdn-icons-png.freepik.com/256/10254/10254379.png?semt=ais_hybrid' /></Form.Label>
              <Form.Control style={{ display: 'none' }} type="file" />
            </Form.Group>
            <Form.Control type="text" placeholder="Github Link" />
            <Form.Control type="text" placeholder="Linkdin Link" />
            <Button>UPDATE</Button>
          </Stack>
        </Container>
      </Collapse>
    </>
  )
}
