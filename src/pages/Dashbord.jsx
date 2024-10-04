import React,{useState,useEffect}from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MyProfile from '../components/MyProfile'
import MyProject from '../components/MyProject'

export default function Dashbord() {

  const [isLogin, setIsLogin] = useState(false)
  const [name, setName] = useState()

  const checkLoginStatus = () => {
    const user = JSON.parse(sessionStorage.getItem('loggedUser'));
    if (user) {
      setName(user.username);
    } else {
      setName('');
    }
  };

  useEffect(() =>{ 
  checkLoginStatus();
}, [])

  return (
    <>
      <Container fluid className=' position-relative pt-4 mt-5'>
        <h3>Welcome  <span className='text-secondary fw-bold'>{name}</span></h3>
        <Row>
          <Col className='shadow mx-4 rounded' md={7}>
          <MyProject/>
          </Col>
          <Col className='shadow mx-4 rounded' md={4}>
          <MyProfile/>
          </Col>
        </Row>
      </Container>
    </>
  )
}
