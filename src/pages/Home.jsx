import React,{useEffect, useState} from 'react'
import { Container, Row, Col,Button, Stack  } from 'react-bootstrap'
import home_page from '../assets/Home/homepage.webp'
import { Link} from 'react-router-dom'
import { getHomeProjectApi } from '../services/allApi'
import { useNavigate } from 'react-router-dom';
import CardSlider from '../components/CardSlider'

export default function Home() {
  
  const navigate = useNavigate();
 
  const[isLogin,setLogin]=useState(false)
  const[homeProject,setHomeProject] = useState([])

  const getHomeprojectItems =async()=>{
    const result = await getHomeProjectApi();
    console.log(result);
    setHomeProject(result.data)
  }

  useEffect(() => {
  if(sessionStorage.getItem("token")){
    setLogin(true)
  }
  getHomeprojectItems();
}, []);

  return (
    <>
      <section className='d-flex justify-content-center' style={{height:'100vh'}} >
        <Row>
          <Col className='d-flex align-items-center'>
          <Container className='me-5'>
              <h1 className='fs-1 fw-bold text-end'>Project Fair</h1>
              <p className='fs-3 text-end'>One stop destination for any<br /><span className='fw-semibold'>software projects.</span></p>
              {
              isLogin?
              <Link className='d-flex justify-content-end' to='/dashboard'><Button >DASHBOARD</Button></Link>
              :
              <Link className='d-flex justify-content-end' to='/login'><Button >GET STARTED</Button></Link>  
            }
              
          </Container>
          </Col>
          <Col className='d-flex align-items-center justify-content-center' md={6}>
            <img src={home_page} />
          </Col>
        </Row>
      </section>
      <section style={{height:'90vh'}} className='d-flex flex-column'>
        <h2 className='text-center fs-1 p-3 fw-bold'>Explore Our Projects</h2>
        
             <Row className='parent h-50'>
             <CardSlider homeProject={homeProject}/>
             </Row>
            
        
        <Row className='d-block m-auto justify-content-center w-25'>
          <Button className='fw-bold shadow' variant='light' onClick={()=>navigate('/project')}>CLICK HERE TO SEE MORE PROJECTS</Button>
          </Row>
      </section>
    </>
  )
}
