import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Form ,Container,Row,Col} from 'react-bootstrap'

export default function Projects() {
  return (
    <>
    <Container>
      <Row>
        <h1>All Projects</h1>
      </Row>
      <Row lg= {4} xs={4} className='d-flex flex-coloumn'>
        <Form.Control placeholder="Search by tecnology"
        
        />
        <FontAwesomeIcon style={{margin:'10px'}} icon={faMagnifyingGlass}/>
      </Row>
    </Container>
    </>
  )
}
