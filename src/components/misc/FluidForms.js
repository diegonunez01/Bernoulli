import '../../styles/Fluid.css'
import { Form, Col, Button, Row} from 'react-bootstrap'
import { fluidOptions } from '../fluid_parts/Options.js'
import { useState } from 'react'


function OptionSelect(props) {
    return (
        <Form.Select onChange={props.onChange} id={props.select_id} defaultValue= {props.default}>
            <option>* Make a selection *</option>
            {props.options.map(option => (
                <option key={option.value} id={option.value} value={option.value} >{option.label} </option>
            ))}
        </Form.Select>
    )
}
const NewRow = (onChangeFn, addNewRowFn, deleteRowFn) => (
    <Row>
        <Form.Group as={Col} controlId="fluid_name">
            <Form.Label>Fluid Name</Form.Label>
            <OptionSelect 
            select_id='fluid_name'
            onChange={onChangeFn}
            options={fluidOptions}
            />
        </Form.Group>
        <Form.Group as={Col} controlId="fluid_proportion">

            <Form.Label>Fluid Proportion</Form.Label>
            <label for='rangeSlider'>0</label>
            <Form.Control type="range" min='0' max='1' step='0.05'
            placeholder="Enter fluid proportion"
            id='rangeSlider' />
        </Form.Group>
        <Button 
        variant="primary"
        type="submit"
        onClick={addNewRowFn}>
            Add Fluid
        </Button>
        <Button 
        variant="primary"
        type="submit"
        onClick={deleteRowFn}>
            Delete Fluid
        </Button>
    </Row>
)
const ModifyFluidForm = (formOnChange, addNewRow, deleteRow) => (
    <Form className='modify_fluid'>
        <NewRow onChangeFn={formOnChange} addNewRowFn={addNewRow} deleteRowFn={deleteRow}/>
        <NewRow onChangeFn={formOnChange} addNewRowFn={addNewRow} deleteRowFn={deleteRow}/>
        <Button variant="primary" type="submit">
            Save Fluid
        </Button>
    </Form>
)

const SaveFluidForm = (formOnChange) => (
    <Form className='save_fluid'>
        <Form.Group controlId="fluid_name">
            <Form.Label>Fluid Name</Form.Label>
            <Form.Control type="text" placeholder="Enter fluid name" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Save Fluid
        </Button>
    </Form>
)

export const fluidForms={
    MODIFY: ModifyFluidForm,
    SAVED: SaveFluidForm
}