
import React, { useCallback } from 'react';
import { Button, Modal, Form, Col, Row, Container } from 'react-bootstrap';
import {useState} from 'react';


const fluidNameControl = (id, formOnChange) => {
    
    return (
        <Form.Control 
        type="text" 
        placeholder="Enter Fluid Name" 
        onChange={formOnChange} 
        key={'fluid_name'}
        id={'fluid_name_'+id}
/>


    )
}

const fluidPercentageControl = (id, formOnChange) => {

    return(
    <Form.Control 
    type="number" 
    placeholder="Enter Fluid Percentage"
     onChange={formOnChange}
    id={'fluid_percentage_'+id}
    key={'fluid_percentage'}
/>

    )}



export default  function CreateFluidMixture({ saveModalShow, setSaveModalShow }) {

    const [currentFormData, setCurrentFormData] = useState({})
    const [validationErrorMessage, setValidationErrorMessage] = useState("")
    const [fluidNumber, setFluidNumber] = useState(1)
   
    const FormBody = (fluidNumber, formOnChange) => {

    

        const FluidBody = ({child_id}) => {
            const id= child_id
           
            
            return(
                <div>
                <Row>
                    
                    <Form.Group as={Row} className="mb-3">
                        <Col>
                            {id===0 && <Form.Label>Fluid Name</Form.Label>}
                            {fluidNameControl(id, formOnChange)}
                        </Col>
                        
                        <Col>
                            {id===0 && <Form.Label>Fluid Percentage</Form.Label>}
                            {fluidPercentageControl(id, formOnChange)}
                        </Col>
                    </Form.Group>
                </Row>
                <Row>
                    {/* <p color='red'>{validationErrorMessage}</p> */}
                </Row>
            </div>
            )
        }
        return (
            <div>
                {/* This is giving the error
                        - Just rendering one does not fix it */}
                {[...Array(fluidNumber).keys()].map((fluid) => {
                    return(
    
                        <FluidBody fluid={fluid} key={'fluid_row'+String(fluid)} id={'fluid_row'+String(fluid)} child_id={fluid}/>
    )})}
    
    
               
            </div>
        )}
    
    const formOnChange =  (e) => {
        e.preventDefault()
        // console.log(e.target.value)
        // Validate Input
        if (e.target.getAttribute('type') === "number") {
            // Enforce e.target.value is parsable number
            if (isNaN(Number(e.target.value))) {
                setValidationErrorMessage("Please enter a number");
                return;
            }
    
            if (Number(e.target.value) < 0) {
                setValidationErrorMessage("Please enter a positive number");
                return;
            }
    
            setCurrentFormData({ ...currentFormData, [e.target.id]: Number(e.target.value) });
        } else {
            if (e.target.value == "") {
                setValidationErrorMessage("Can not be an empty string");
                return;
            }
            
            setCurrentFormData({ ...currentFormData, [e.target.id]: e.target.value });
        }
        setValidationErrorMessage("");
        console.log(currentFormData)
    
    }

    const FluidNumberSelector = () => {
        const changeRows = (e) => {
            setFluidNumber(Number(e.target.value))

        }
        return (
            <Form.Group>
                <Form.Label>Number of Fluids</Form.Label>
                <Form.Control as="select" onChange={changeRows} id={'fluid_number'} value={fluidNumber} className="mb-3">
                    <option key={1} id={1}>1</option>
                    <option key={2} id={2}>2</option>
                    <option key={3} id={3}>3</option>
                    <option key={4} id={4}>4</option>
                    <option key={5} id={5}>5</option>
                </Form.Control>
            </Form.Group>
        )
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
                    <Form className='form_input'>
                        {FormBody(fluidNumber, formOnChange)}

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