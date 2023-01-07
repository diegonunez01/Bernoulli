import '../../styles/Fluid.css'
import { Form, Col, Button, Row } from 'react-bootstrap'
import { fluidOptions } from './Options.js'
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
};

const ModifyFluidForm = (setCurrentForm) => {
    const onChangeFn = () => {
        console.log('change')
    }
    const addNewRow = () => {
        setCurrentRows(currentRows+1)
        setCurrentForm(
            <Form className='modify_fluid'>
                {Array(currentRows).fill(newRow)}
            </Form>
        )}
    const deleteRow = () => {
        if (currentRows>1){
            setCurrentRows(currentRows-1)
        }
        return (
            // Return currentRow number of newRow
            <Form className='modify_fluid'>
                {Array(currentRows).fill(newRow)}
            </Form>
        )}
    const newRow =(
            <Row>
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
                <Button 
                variant="primary"
                type="submit"
                onClick={deleteRow}>
                    Delete Fluid
                </Button>
            </Row>
    )

  

    
        
         
    
    return (
    <Form className='modify_fluid'>
        <currentForm/>
        <Button variant="primary" type="submit">
            Save Fluid
        </Button>
    </Form>
)}

const SaveFluidForm = () => {
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
    MODIFY: ModifyFluidForm,
    SAVED: SaveFluidForm
}