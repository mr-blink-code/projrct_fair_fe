import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Button,Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddProject from './AddProject'
import EditProject from './EditProject'

export default function MyProject() {
  return (
    <>
      <Container>
        <Row>
        <Col><h1>My projects</h1></Col>
        <Col><AddProject/></Col>
        </Row>
        
        <Stack className='my-3' gap={3}>
        <Row className='bg-light rounded d-flex align-items-center p-3 '>
          <Col>Media Player</Col>
          <Col md='auto'>
            <EditProject/>
            </Col>
            <Col md='auto'>
            <Link>
              <FontAwesomeIcon icon={faLink} />
            </Link>
            </Col >
            <Col md='auto'>
            <Link>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </Col>
          <Col md='auto'>
          <Link>
          <FontAwesomeIcon icon={faTrash}/>
          </Link></Col>
        </Row>
        </Stack>
      </Container>
    </>
  )
}
