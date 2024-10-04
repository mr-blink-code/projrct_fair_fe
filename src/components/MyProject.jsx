import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddProject from './AddProject';
import EditProject from './EditProject';
import { getUserProjectApi, deleteProjectApi } from '../services/allApi';
import { toast } from 'react-toastify';
import { addProjectReponseContext } from '../context/ContextShare';

export default function MyProject() {
  const [userProject, setUserProject] = useState([]);
  const { addProjectReponse } = useContext(addProjectReponseContext);

  const getUserProject = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      };
      const result = await getUserProjectApi(reqHeader);
      //console.log("userProject", result);
      setUserProject(result.data);
    }
  };

  const deleteProject = async (projectId) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await deleteProjectApi(projectId, reqHeader);
        if (response.status === 200) {
          setUserProject(userProject.filter(project => project._id !== projectId));
          toast.success("Project deleted successfully!");
        }
      } catch (error) {
        console.error("Error deleting project:", error);
        toast.error("Failed to delete the project.");
      }
    }
  };

  useEffect(() => {
    getUserProject();
  }, [addProjectReponse]);

  return (
    <>
      <Container>
        <Row className='d-flex fw-bold pt-2 w-100'>
          <Col><h3>My Projects</h3></Col>
          <Col className='d-flex align-items-center justify-content-end'><AddProject /></Col>
        </Row>
        
        <Stack className='my-3' gap={3}>
          {userProject?.length > 0 ? userProject.map((item) => (
            <Row key={item._id} className='bg-light rounded d-flex align-items-center justify-content-between p-3 w-100 flex-wrap'>
              <Col xs='12' md='8' className='mb-2'>{item.title}</Col>
              <Col xs='auto' className='mb-2'>
                <EditProject project={item} />
              </Col>
              <Col xs='auto'>
                <Link to={item.website} target='_blank'>
                  <FontAwesomeIcon className="text-dark" icon={faLink} />
                </Link>
              </Col>
              <Col xs='auto'>
                <Link to={item.github} target='_blank'>
                  <FontAwesomeIcon className="text-dark" icon={faGithub} />
                </Link>
              </Col>
              <Col xs='auto'>
                <Link onClick={() => deleteProject(item._id)}>
                  <FontAwesomeIcon className="text-danger" icon={faTrash} />
                </Link>
              </Col>
            </Row>
          )) : <p>No projects have been uploaded yet.</p>}
        </Stack>
      </Container>
    </>
  );
}
