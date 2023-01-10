
import React, { useCallback } from 'react';
import { Button, Modal, Form, Col, Row, Container,InputGroup } from 'react-bootstrap';
import {useState} from 'react';

const NewRow = (id,onChangeFn, deleteRow) =>{
        
    return(
        <Form.Group as={Row} className='mb-3'>
            <Col>
                <Form.Select 
                onChange={onChangeFn} 
                id={'fluid_name_'+id}> 
                    <option>Fluid Name</option>
                    <option>Water</option>
                    <option>Oil</option>
                    <option>Gas</option>
                </Form.Select>
            </Col>
            <Col>
                <Form.Control
                onChange={onChangeFn}
                id={'fluid_percentage'+id}
                type='number'
                placeholder='Fluid Percentage'
                />
            </Col>   
            <Col> <Button onClick={deleteRow(id)}> X </Button></Col>
            
                
        </Form.Group>

                
    )
}
const CreateFluidMixture = (onChangeFn,previousData) => {
    const [rowNumbers, setRowNumbers]= useState(1)
    

    const handleNewRowClick = (e) => {
        setRowNumbers(rowNumbers+1)
    }
    const deleteRow = (id) => {
        console.log(id)
    }


    return(
        <Form className='form_input'>
            {[...Array(rowNumbers)].map((e,i) => {return(
                <NewRow id={i} onChangeFn={onChangeFn} key={i}/>
            )})}
            <Button onClick={handleNewRowClick}> New Row </Button>
        </Form>
    )
}

export default CreateFluidMixture