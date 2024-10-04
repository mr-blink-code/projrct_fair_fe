import React, { useEffect, useState } from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [isLogin, setIsLogin] = useState(false)
  const [name, setName] = useState()
  const navigate = useNavigate()

  const handleLogout=()=>{
    if(sessionStorage.getItem('token')){
      sessionStorage.removeItem('loggedUser')
      sessionStorage.removeItem('token')
      setIsLogin(false)
      navigate('/')
    }
  }

  const checkLoginStatus = () => {
    const token = sessionStorage.getItem('token');
    const user = JSON.parse(sessionStorage.getItem('loggedUser'));
    if (token && user) {
      setIsLogin(true);
      setName(user.username);
    } else {
      setIsLogin(false);
      setName('');
    }
  };
  useEffect(() =>{ 
  checkLoginStatus();
}, [])



  return (
    <Navbar className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand><Link style={{ textDecoration: 'none', color: 'black', fontWeight: '900', fontSize: '28px' }} to="/" >Project Fair</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isLogin ?
            <Navbar.Text>
              Signed in as: <Link to="/dashboard">{`${name}`}</Link>
              <Button 
               onClick={handleLogout}
              className='ms-3'>Logout
               
                <FontAwesomeIcon className='ms-3' icon={faArrowRightFromBracket} />
              </Button>
            </Navbar.Text>
            :
            <Navbar.Text>
              <Button
                onClick={(e) => navigate('/login')}
                className='ms-3'>Sign In
                <FontAwesomeIcon className='ms-3' icon={faArrowRightFromBracket} />
              </Button>
            </Navbar.Text>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
