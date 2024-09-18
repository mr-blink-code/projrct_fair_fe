import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons' 
import { Container, Form, Modal, Button, Row, Col, Stack } from 'react-bootstrap';

export default function EditProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <FontAwesomeIcon onClick={handleShow} icon={faPenToSquare} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md='auto' className='d-flex justify-content-center align-item-center'>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label><img width='100px' src='https://cdn-icons-png.freepik.com/256/10254/10254379.png?semt=ais_hybrid' /></Form.Label>
                                    <Form.Control style={{ display: 'none' }} type="file" />
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
                    <Button variant="primary" onClick={handleClose}>
                        UPDATE
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
