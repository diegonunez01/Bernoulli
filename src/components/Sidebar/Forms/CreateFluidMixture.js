
import React from 'react';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap';

export default function CreateFluidMixture(show) {

    return (
        <Container>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Fluid Mixture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalName">
                            <Form.Label column sm={2}>
                                Name
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalDescription">
                            <Form.Label column sm={2}>
                                Description
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Description" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalDensity">
                            <Form.Label column sm={2}>
                                Density
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Density" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalViscosity">
                            <Form.Label column sm={2}>
                                Viscosity
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Viscosity" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalSpecificHeat">
                            <Form.Label column sm={2}>
                                Specific Heat
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Specific Heat" />
                            </Col>
                        </Form.Group>

                    </Form>
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

        </Container>
    )

}