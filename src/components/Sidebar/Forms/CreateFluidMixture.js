
import React from 'react';
import { Button, Modal, Form, Col, Row, Container } from 'react-bootstrap';
import {useState} from 'react';

export default function CreateFluidMixture({ saveModalShow, setSaveModalShow }) {

    const [currentFormData, setCurrentFormData] = useState({})
    const [fluidNumber, setFluidNumber] = useState(1)
    
    
    const FormBody = () => {
        
        const fluidNameControl = (id) => {
            return (
                <Form.Control type="text" placeholder="Enter Fluid Name" onChange={formOnChange} id={'fluid_name_'+id}/>

            )
        }

        const fluidPercentageControl = (id) => {

            return(
            <Form.Control type="number" placeholder="Enter Fluid Percentage" onChange={formOnChange} id={'fluid_percentage_'+id} />
            )
        }
        return (
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Fluid Name</Form.Label>
                        {[...Array(fluidNumber).keys()].map((id) => fluidNameControl(id))}
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Fluid Percentage</Form.Label>
                        {[...Array(fluidNumber).keys()].map((id) => fluidPercentageControl(id))}
                    </Form.Group>
                </Col>
            </Row>
        )
    }
    const FluidNumberSelector = () => {
        const changeRows = (e) => {
            setFluidNumber(Number(e.target.value))

        }
        return (
            <Form.Group>
                <Form.Label>Number of Fluids</Form.Label>
                <Form.Control as="select" onChange={changeRows} id={'fluid_number'} value={fluidNumber}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
        )
    }
    const formOnChange = (e) => {
        e.preventDefault()
        // Validate Input
        setCurrentFormData({ ...currentFormData, [e.target.id]: e.target.value });
        console.log(currentFormData)

    }
    function handleClose() {
        setSaveModalShow(false)
    }

    function handleSave() {
        
        setSaveModalShow(false)
    }
    

    return (
        <Container>
            <Modal show={saveModalShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Fluid Mixture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FluidNumberSelector/>
                    <Form>
                        <FormBody/>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )

}