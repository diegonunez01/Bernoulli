import '../../styles/Fluid.css'
import { Form, Col, Button } from 'react-bootstrap'
import { fluidOptions } from './Options.js'
function OptionSelect(props) {
    return (
        <Form.Select onChange={props.onChange} id={props.select_id} defaultValue= {props.default}>
            <option>* Make a selection *</option>
            {props.options.map(option => (
                <option key={option.value} id={option.value} value={option.value} >{option.label} </option>
            ))}
        </Form.Select>
    )
};

const modifyFluidForm = () => {
    const addNewRow = () => {

    }
    const onChangeFn = () => {
    }

    return (
    <Form className='modify_fluid'>
        {/* Want an input row to chose fluid from a list of saved fluids and proportions, and an add button to add more fluids */}
        <Form.Row>
            <Form.Group as={Col} controlId="fluid_name">
                <Form.Label>Fluid Name</Form.Label>
                <OptionSelect 
                select_id='fluid_name'
                onChange={onChangeFn}
                fluidOptions={fluidOptions}
                />
            </Form.Group>
            <Form.Group as={Col} controlId="fluid_proportion">
                <Form.Label>Fluid Proportion</Form.Label>
                <Form.Control type="number" placeholder="Enter fluid proportion" />
            </Form.Group>
            <Button 
            variant="primary"
             type="submit"
             onClick={addNewRow}>
                Add Fluid
            </Button>
        </Form.Row>
        {/* Want a button to save the fluid */}
        <Button variant="primary" type="submit">
            Save Fluid
        </Button>
    </Form>
)}

const saveFluidForm = () => {
    const onChangeFn = () => {
    }
    return (
    <Form className='save_fluid'>
        <Form.Group controlId="fluid_name">
            <Form.Label>Fluid Name</Form.Label>
            <Form.Control type="text" placeholder="Enter fluid name" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Save Fluid
        </Button>
    </Form>
)}

export const fluidForms={
    MODIFY: modifyFluidForm,
    SAVED: saveFluidForm
}