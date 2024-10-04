import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Form ,Container,Row,Col} from 'react-bootstrap'
import { getAllProjectApi } from '../services/allApi'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {

  const[isLogin,setIsLogin]=useState(false)
  const[searchKey,setSearchKey]=useState("")
  const[allProject,setAllProject] = useState([])

  const getAllProject=async()=>{
    console.log("Searchkey : ",searchKey)
    if(sessionStorage.getItem("token")){
      const token= sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type" : 'application/json',
        "Authorization": `Bearer ${token}`
      }
      const result = await getAllProjectApi(reqHeader,searchKey);
      console.log("userProjec",result)
      setAllProject(result.data)
    }
  }
  
  useEffect(()=>{
    getAllProject();
    if(sessionStorage.getItem('token')){
      setIsLogin(true)
    }
  },[searchKey])

  return (
    <>
    <Container className='mt-5 pt-5'>
      <Row>
        <h1>All Projects</h1>
      </Row>
      {
        isLogin?
        <>
        <Row lg={4} xs={4} className='d-flex justify-content-center my-3'>
              <Form.Control placeholder="Search by tecnology"
                onChange={(e) => setSearchKey(e.target.value)}
                className='w-100' />
                <Col className='position-absolute' style={{marginLeft:'100%'}}>
              <FontAwesomeIcon
                className='position-absolute'
                style={{ margin: '10px' }} icon={faMagnifyingGlass} />
                </Col>
            </Row>
            <Row>
                {allProject?.length > 0 ?
                  allProject.map((item) => (
                    <Col lg={4} md={6} sm={6}xs={12} className='p-5'>
                      <ProjectCard project={item} />
                    </Col>
                  )) : <p>No projects Found</p>}
              </Row></>
        :
      <Row>
        <p>Plaease login to see projects</p>
      </Row>
      }
    </Container>
    </>
  )
}
