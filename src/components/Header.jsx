import React from 'react'
import { Navbar, Container,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Project Fair</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <Link to="/">Mark Otto</Link>
            <Button className='ms-3'>Logout
            <FontAwesomeIcon className='ms-3' icon={faArrowRightFromBracket} />
          </Button>
          </Navbar.Text>
          {/*  */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
