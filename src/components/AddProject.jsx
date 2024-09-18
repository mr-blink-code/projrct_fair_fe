import React,{ useState } from 'react';
import { Container, Form, Modal,Button, Row,Col ,Stack} from 'react-bootstrap';



export default function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Project
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md='auto' className='d-flex'>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label><img width='100px' src='https://cdn-icons-png.freepik.com/256/10254/10254379.png?semt=ais_hybrid'/></Form.Label>
                                    <Form.Control style={{display:'none'}} type="file" />
                                </Form.Group>
                            </Col>
                            <Col>
                            <Stack gap={3}>
                            <Form.Control type="text" placeholder="Project Title" />
                            <Form.Control type="text" placeholder="Languages Used" />
                            <Form.Control type="text" placeholder="Github Link" />
                            <Form.Control type="text" placeholder="Website Link" />
                            <Form.Control as="textarea" placeholder='Project Over view' rows={4} />
                            </Stack>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}