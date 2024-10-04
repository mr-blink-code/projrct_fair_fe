import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Form,
  Modal,
  Button,
  Row,
  Col,
  Stack,
} from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { addProjectApi } from "../services/allApi";
import Multiselect from "multiselect-react-dropdown";
import { addProjectReponseContext } from '../context/ContextShare'

export default function AddProject() {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("");
  const {setAddProjectResponse } = useContext(addProjectReponseContext);

  const [projectDetails, setProjectDetails] = useState({
    title: "",
    language: [],
    github: "",
    website: "",
    overview: "",
    projectImage: "",
  });

  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage]);

  const handleAddProject = async (e) => {
    e.preventDefault();
    const { title, language, github, website, overview, projectImage } =
      projectDetails;
    if (
      !title ||
      !language ||
      !github ||
      !website ||
      !overview ||
      !projectImage
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
      const result = await addProjectApi(projectDetails, reqHeader);
      if (result.status === 200) {
        setAddProjectResponse(result)
        toast.success(`${title} uploaded Sucessfully`);
        setProjectDetails({
          title: "",
          language: [],
          github: "",
          website: "",
          overview: "",
          projectImage: "",
        });
        setShow(false);
      } else if (result.status === 409) {
        toast.error(`${title} already exist`);
      } else {
        toast.error(`${title} Upload failed`);
      }
    }
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md="auto" className="d-flex align-item-center justify-content-center">
              <Form.Group controlId="formFile" className="mb-3">
  <Form.Label style={{ cursor: 'pointer' }}>
    <img
      width="100px"
      src={
        preview
          ? preview
          : "https://cdn-icons-png.freepik.com/256/10254/10254379.png?semt=ais_hybrid"
      }
      alt="Project Preview"
    />
  </Form.Label>
  <Form.Control
    style={{ display: "none" }}
    type="file"
    accept="image/*"
    onChange={(e) => {
      
      const file = e.target.files[0];
      if (file) {
        const fileURL = URL.createObjectURL(file);
        setPreview(fileURL); // Make sure to set preview state
        setProjectDetails({
          ...projectDetails,
          projectImage: file,
        });
      }
    }}
  />
</Form.Group>

              </Col>
              <Col>
                <Stack gap={3}>
                  <Form.Control
                    type="text"
                    placeholder="Project Title"
                    value={projectDetails.title}
                    onChange={(e) =>
                      setProjectDetails({
                        ...projectDetails,
                        title: e.target.value,
                      })
                    }
                  />
                  <Multiselect
                    isObject={false}
                    onKeyPressFn={function noRefCheck() {}}
                    onRemove={handleRemove} // Update for removing{(e) => handleSelect({ target: { value: e } })} // Update for removing
                    onSearch={function noRefCheck() {}}
                    onSelect={handleSelect}
                    options={[
                      "Java",
                      "JS",
                      "React"
                    ]}
                    value={projectDetails.language}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Github Link"
                    value={projectDetails.github}
                    onChange={(e) =>
                      setProjectDetails({
                        ...projectDetails,
                        github: e.target.value,
                      })``
                    }
                  />
                  <Form.Control
                    type="text"
                    placeholder="Website Link"
                    value={projectDetails.website}
                    onChange={(e) =>
                      setProjectDetails({
                        ...projectDetails,
                        website: e.target.value,
                      })
                    }
                  />
                  <Form.Control
                    as="textarea"
                    placeholder="Project Over view"
                    rows={4}
                    value={projectDetails.overview}
                    onChange={(e) =>
                      setProjectDetails({
                        ...projectDetails,
                        overview: e.target.value,
                      })
                    }
                  />
                </Stack>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProject}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}
