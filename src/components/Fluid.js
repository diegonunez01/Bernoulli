import { ButtonGroup, Button } from "react-bootstrap"
import { useState } from "react"
import { FluidPartTypes } from "./fluid_parts/FluidPartTypes"
import { fluidForms } from "./fluid_parts/fluidForms"

function Fluid() {
    const [currentForm, setCurrentForm] = useState(FluidPartTypes.NONE);
    const [currentFormData, setCurrentFormData] = useState({});
    const [validationErrorMessage, setValidationErrorMessage] = useState("");

    const forms={MODIFY: 'modifyFluid', SAVED: 'savedFluids', NONE: 'None'}
    const fluidMetadata={
        modifyFluid: {
            form_title: 'Modify Fluid',
            form_description: 'Modify Fluid',
            form: fluidForms.MODIFY
            },
        savedFluids: {
            form_title: 'Saved Fluids',
            form_description: 'Saved Fluids',
            form: fluidForms.SAVED
            }
    }

    const closeForm = () => {
        setCurrentForm(forms.NONE);
        setCurrentFormData({}); 
    }
    const getCurrentForm = () => {
        if (currentForm === forms.NONE) {
            return <></>;}
        return(
            <div>
            <h4> {fluidMetadata[currentForm].form_title} </h4>
            <p> {fluidMetadata[currentForm].form_description} </p>
            { fluidMetadata[currentForm].form(formOnChange) }
        </div>
            )
        }
    
    const modifyFluid = () => {
        setCurrentForm(forms.MODIFY)
    }
    const savedFluids = () => {
        setCurrentForm(forms.SAVED)
    }
    const handleNewFluidCreation = () => {
    }

    const checkFormValidation = {
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
        console.log(currentFormData)
    }
    

    return(
        <div>
            <ButtonGroup aria-label="Fluid Options">
                <Button 
                variant="secondary"
                onClick={modifyFluid}>Modify Fluid</Button>
                <Button 
                variant="secondary"
                onClick={savedFluids}>Saved Fluids</Button>
            </ButtonGroup>
         <br/>

        <div className="form_container">
            {getCurrentForm()}
            {validationErrorMessage && <p style={{ marginTop: '3px', color: 'red' }}>{validationErrorMessage}</p>}
            
            {!validationErrorMessage && checkFormValidation[currentForm] && <Button
                variant="outline-success"
                className="addNewElement"
                onClick={handleNewFluidCreation}
                style={{ marginTop: '10px' }}
            >
                Add New Element
            </Button>}
            {currentForm!==FluidPartTypes.NONE && <Button onClick={closeForm}
            style={{ marginTop: '10px' }}
            variant="outline-secondary"> Close </Button>}
        </div>
        </div>
        )} 

export default Fluid