import { ButtonGroup, Button } from "react-bootstrap"
import { useState } from "react"
import { FluidPartTypes } from "./fluid_parts/FluidPartTypes"
import { fluidForms } from "./FluidForms"

function Fluid() {
    const [currentFormType, setCurrentFormType] = useState(FluidPartTypes.NONE);
    const [currentFormData, setCurrentFormData] = useState({});
    const [validationErrorMessage, setValidationErrorMessage] = useState("");
    

    const addNewRow = () => {
        console.log("add new row")
    }
    const deleteRow = () => {
        console.log("delete row")
    }
    const forms={MODIFY: 'modifyFluid', SAVED: 'savedFluids', NONE: 'NONE'}
    const fluidMetadata={
        modifyFluid: {
            form_title: 'Modify Fluid',
            form_description: 'This tab allows you to modify the fluid properties',
            form: fluidForms.MODIFY
            },
        savedFluids: {
            form_title: 'Saved Fluids',
            form_description: 'Saved Fluids',
            form: fluidForms.SAVED
            }
    }

    const closeForm = () => {
        setCurrentFormType(forms.NONE);
        setCurrentFormData({}); 
        
    }
    const getCurrentForm = () => {
        console.log(currentFormType)
        if (currentFormType === forms.NONE) {
            return <></>;}
        return( 
            <div>
            <h4> {fluidMetadata[currentFormType].form_title} </h4>
            <p> {fluidMetadata[currentFormType].form_description} </p>
            { fluidMetadata[currentFormType].form(formOnChange) }
        </div>

            )
        }
    

    const handleNewFluidCreation = (e) => {
        e.preventDefault();
        

    }
    const setTab = (type) => {
        
        setCurrentFormType(type);
        setCurrentFormData({'type': type});
        return;
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
    }
    

    return(
        <div>
            <ButtonGroup aria-label="Fluid Options">
                <Button 
                variant="secondary"
                onClick={() => setTab(forms.MODIFY)}>Modify Fluid</Button>
                <Button 
                variant="secondary"
                onClick={() => setTab(forms.SAVED)}>Saved Fluids</Button>
            </ButtonGroup>
        
         <br/>

        <div className="form_container">
            {getCurrentForm()}
            {validationErrorMessage && <p style={{ marginTop: '3px', color: 'red' }}>{validationErrorMessage}</p>}
            
            {!validationErrorMessage && checkFormValidation[currentFormType] && <Button
                variant="outline-success"
                className="addNewElement"
                onClick={handleNewFluidCreation}
                style={{ marginTop: '10px' }}
            >
                Add New Element
            </Button>}
            {currentFormType!==FluidPartTypes.NONE && <Button onClick={closeForm}
            style={{ marginTop: '10px' }}
            variant="outline-secondary"> Close </Button>}
        </div>
        </div>
        )} 

export default Fluid