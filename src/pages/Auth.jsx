import React ,{ useState }from 'react'
import { Row, Col, Container, Form, Stack, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../services/allApi'
import { toast } from 'react-toastify'

export default function Auth({ register }) {

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      toast.warning("please fill all vlaues")
    }
    else {
      const result = await registerApi(userData)
      if (result.status === 201) {
        setUserData({
          username: "",
          email: "",
          password: ""
        })
        toast.success("User Registered successfully")
        navigate('/login')
      }
      else {
        toast.error("somthing happened")
      }
    }
  }

  const handleSignin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      toast.warning("please fill all vlaues")
    }
    else {
      const result = await loginApi(userData)
      if (result.status === 200) {
        sessionStorage.setItem("loggedUser", JSON.stringify(result.data.data));
        sessionStorage.setItem("token",result.data.token)
        toast.success("User login successfully")
        setUserData({
          username: "",
          email: "",
          password: ""
        })
        navigate('/')

      }
      else if (result.status === 401) {
        toast.error("Invalid Email or password")
      }
      else {
        toast.error("something went wrong")
      }
    }
  }

  const navigate = useNavigate();

  const registerForm = register ? true : false;


  return (
    <>
      <Container
      style={{height:"100vh"}} 
      className='d-flex align-items-center justify-content-center'
      >
        <Row className='d-flex align-items-center justify-content-center'>
          <Col md={6} >
            <img className="w-100"src="https://nilgiricollege.ac.in/app/app-files/images/userlog.png" alt="" />
          </Col>
          <Col md={6}className='d-flex justify-content-center'>
            <Form>
            <Container>
              {registerForm ?
                <>
                  <h6 className='m-3 fs-4 fw-bold'>Sign Up Your Account</h6>
                  <Stack gap={3}>
                    <Form.Control placeholder='Name' type='text'
                      value={userData.username}
                      onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                    <Form.Control placeholder='Email ID' type='text'
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                    <Form.Control placeholder='Password' type='password'
                      value={userData.password}
                      onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                    <Button onClick={handleRegister} >Register</Button>
                    <p>Already User? Click to <Link to='/login'>Login</Link></p>
                  </Stack>
                </>
                :
                <>
                  <h6 className='m-3 fs-4 fw-bold'>Sign into Your Account</h6>
                  <Stack gap={3}>
                    <Form.Control placeholder='Email ID' type='text'
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                    <Form.Control placeholder='Password' type='password'
                      value={userData.password}
                      onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                    <Button onClick={handleSignin}>Sign In</Button>
                    <p>Not Registered Yet? Click here to <Link to='/register'>Register</Link></p>
                  </Stack>
                </>
              }
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
