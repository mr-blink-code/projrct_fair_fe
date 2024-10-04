import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "../services/baseurl";
import Multiselect from "multiselect-react-dropdown";
import { toast } from 'react-toastify';
import {
  Container,
  Form,
  Modal,
  Button,
  Row,
  Col,
  Stack,
} from "react-bootstrap";
import { editUserProjectApi } from "../services/allApi";
import { addProjectReponseContext } from "../context/ContextShare";

export default function EditProject({ project }) {
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState(null);
  const { setAddProjectResponse } = useContext(addProjectReponseContext);
  const [token,setToken]=useState()
  const [projectDetails, setProjectDetails] = useState({
    id: project._id,
    title: project.title,
    language: project.language,
    github: project.github,
    website: project.website,
    overview: project.overview,
    projectImage: project.projectImage,
  });

  const handleClose = () => {
    setShow(false);
    setPreview(null);
    setProjectDetails({
      id: project._id,
      title: project.title,
      language: project.language,
      github: project.github,
      website: project.website,
      overview: project.overview,
      projectImage: project.projectImage,
    });
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails({
      ...projectDetails,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProjectDetails({
        ...projectDetails,
        projectImage: file,
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { title, language, github, website, overview, projectImage, id } =
      projectDetails;
    if (
      !title ||
      !language ||
      !github ||
      !website ||
      !overview ||
      !projectImage ||
      !id
    ) {
      toast.error("Please Fill the form");
    } else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("language", JSON.stringify(language));
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("overview", overview);
      reqBody.append("projectImage", projectImage);
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      const result = await editUserProjectApi(id, projectDetails, reqHeader);
      if (result.status === 200) {
        setAddProjectResponse(result);
        toast.success(`${title} uploaded Sucessfully`);
      } else {
        toast.error(`${title} Upload failed`);
      }
    }

    handleClose();
  };

  const handleSelect = (selectedList) => {
    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      language: selectedList,
    }));
  };

  const handleRemove = (removeItem) => {
    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      language: prevDetails.language.filter((lang) => lang !== removeItem),
    }));
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);

  return (
    <>
      <FontAwesomeIcon onClick={handleShow} icon={faPenToSquare} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md="auto" className="d-flex">
                <Form.Group
                  controlId="formFile"
                  className="justify-content-center align-item-centermb-3"
                >
                  <Form.Label>
                    <img
                      width="100px"
                      src={
                        preview || `${BASE_URL}/uploads/${project.projectImage}`
                      }
                      alt="Project Preview"
                    />
                  </Form.Label>
                  <Form.Control
                    style={{ display: "none" }}
                    type="file"
                    onChange={handleFileChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Stack gap={3}>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Project Title"
                    value={projectDetails.title}
                    onChange={handleChange}
                  />
                  <Multiselect
                    isObject={false}
                    onKeyPressFn={function noRefCheck() {}}
                    onRemove={handleRemove} // Update for removing{(e) => handleSelect({ target: { value: e } })} // Update for removing
                    onSearch={function noRefCheck() {}}
                    onSelect={handleSelect}
                    selectedValues={projectDetails.language}
                    options={["Java", "JS", "React"]}
                  />
                  <Form.Control
                    type="text"
                    name="github"
                    placeholder="Github Link"
                    value={projectDetails.github}
                    onChange={handleChange}
                  />
                  <Form.Control
                    type="text"
                    name="website"
                    placeholder="Website Link"
                    value={projectDetails.website}
                    onChange={handleChange}
                  />
                  <Form.Control
                    as="textarea"
                    name="overview"
                    placeholder="Project Overview"
                    rows={4}
                    value={projectDetails.overview}
                    onChange={handleChange}
                  />
                </Stack>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdate}>
            UPDATE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
