import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { Row, Col, Button, Form, ButtonGroup } from 'react-bootstrap';
import {data_types, FluidPartTypes} from './fluid_parts/FluidPartTypes.js';
import {FluidPartMetadata} from './fluid_parts/FluidPartMetadata.js';
import { fluid_data_types } from './fluid_parts/FluidPartTypes.js';
import { handleNewNodeCreation } from './node_renderer/HandleNodeCreation';
function Sidebar(props) {
    const [currentForm, setCurrentForm] = useState(FluidPartTypes.NONE);
    const [currentFormData, setCurrentFormData] = useState({});
    const [validationErrorMessage, setValidationErrorMessage] = useState("");
    
    const dataLength={
        PIPE: 3+1,
        FITTING: 1+1,
        PUMP: 2+1,
    }
    console.log(dataLength[currentForm])
    console.log(Object.keys(currentFormData).length)
    const setTab = (type) => {
        
        setCurrentForm(type);
        setCurrentFormData({'type': type});
        return;
    }
    const closeForm = () => {
        setCurrentForm(FluidPartTypes.NONE);
        setCurrentFormData({}); 
    }
    console.log(currentForm)
    console.log(currentFormData)
    const checkFormValidation = {
        PIPE:  (
            Object.keys(currentFormData).length === dataLength[currentForm] && 
            Object.values(currentFormData).every((value) => value !== undefined) && 
            currentFormData['pipe_diameter'] > 0 && currentFormData['pipe_length']> 0 && currentFormData['pipe_material']!=="* Make a selection *"),
        PUMP: (
            Object.keys(currentFormData).length === dataLength[currentForm] &&
            Object.values(currentFormData).every((value) => value !== undefined) &&
                currentFormData['pump_power'] > 0 && currentFormData['pump_efficiency'] > 0 && currentFormData['pump_efficiency'] < 100
            ),
        FITTING: (
            Object.keys(currentFormData).length === dataLength[currentForm] &&
            Object.values(currentFormData).every((value) => value !== undefined) &&
            currentFormData['fitting_type'] !== "* Make a selection *"
        )
        }
    
    const formOnChange = (e) => {
        e.preventDefault();

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
    }

    const handleNewNodeCreation = (e) => {   
        e.preventDefault();
        var type = currentFormData.type;
        const data_types=fluid_data_types(currentFormData)
        if (currentFormData.type == FluidPartTypes.FITTING){type= currentFormData.fitting_type} else {type= currentFormData.type}

        const newNode= {
            id: `${props.nodes.length + 1}`,
            position: {x: 66, y: 66},
            data: data_types[currentFormData.type].data,
            type: type
        }
        console.log(newNode)
        // Add node to the existing node set        
        props.setNodes([...props.nodes, newNode]);


        // Clear the form
        setCurrentForm(FluidPartTypes.NONE);
        setCurrentFormData({});
        
    }

    const getCurrentForm = () => {
        if (currentForm === FluidPartTypes.NONE) {
            return <></>;
        }

        return (
            <div>
                <h4> {FluidPartMetadata[currentForm].form_title} </h4>
                <p> {FluidPartMetadata[currentForm].form_description} </p>
                { FluidPartMetadata[currentForm].form(formOnChange) }
            </div>
        )
    }
            
    return (
        <div>
            <p ><b className="add_text">Add</b></p>
            <ButtonGroup style={{marginBottom: "10px"}}>
                <Button
                    variant="outline-primary"
                    size="sm"
                    className={`addNewButton ${currentForm === FluidPartTypes.PIPE ? 'active' : '' }`}
                    onClick={() => setTab(FluidPartTypes.PIPE)}
                >
                    {FluidPartMetadata[FluidPartTypes.PIPE].name}
                </Button>
                <Button
                    variant="outline-primary"
                    size="sm"
                    className={`addNewButton ${currentForm === FluidPartTypes.FITTING ? 'active' : '' }`}
                    onClick={() => setTab(FluidPartTypes.FITTING) }
                >
                        {FluidPartMetadata[FluidPartTypes.FITTING].name}
                </Button >
                <Button
                    variant="outline-primary"
                    size="sm"
                    className={`addNewButton ${currentForm === FluidPartTypes.PUMP ? 'active' : '' }`}
                    onClick={() => setTab(FluidPartTypes.PUMP)}
                >
                        {FluidPartMetadata[FluidPartTypes.PUMP].name}
                </Button>
            </ButtonGroup>

            <br/>

            <div className="form_container">
                {getCurrentForm()}
                {validationErrorMessage && <p style={{ marginTop: '3px', color: 'red' }}>{validationErrorMessage}</p>}
                
                {!validationErrorMessage && checkFormValidation[currentForm] && <Button
                    variant="outline-success"
                    className="addNewElement"
                    onClick={handleNewNodeCreation}
                    style={{ marginTop: '10px' }}
                >
                    Add New Element
                </Button>}
                {currentForm!==FluidPartTypes.NONE && <Button onClick={closeForm}
                style={{ marginTop: '10px' }}
                variant="outline-secondary"> Close </Button>}
            </div>
            
        </div>
    )
 };

export default Sidebar;