
import React, { useCallback } from 'react';
import { Button, Modal, Form, Col, Row, Container,InputGroup } from 'react-bootstrap';
import {useState} from 'react';

const NewRow = ({id,onChangeFn, deleteRow,removedRows}) =>{
    const handleDeleteRow = (e) => {
        deleteRow(id)
    }
    const handleOnChange = (e) => {
        onChangeFn(e,removedRows)
    }
    return(
        <Form.Group as={Row} className='mb-3'>
            <Col>
                <Form.Select 
                onChange={handleOnChange} 
                id={'fluid_name_'+id}> 
                    <option>Fluid Name</option>
                    <option>Water</option>
                    <option>Oil</option>
                    <option>Gas</option>
                </Form.Select>
            </Col>
            <Col>
                <Form.Control
                onChange={handleOnChange}
                id={'fluid_percentage_'+id}
                type='number'
                placeholder='Fluid Percentage'
                />
            </Col>   
            <Col> <Button onClick={handleDeleteRow}> X </Button></Col>
            
                
        </Form.Group>

                
    )
}
const CreateFluidMixture = (onChangeFn,previousData) => {
    const [rowNumbers, setRowNumbers]= useState(1)
    const [removedRows, setRemovedRows]=useState([])  
    var visibleRows = [...Array(rowNumbers).keys()].filter(e => !removedRows.includes(e))
   
    const handleNewRowClick = (e) => {
        setRowNumbers(rowNumbers+1)
    }
    const deleteRow = (id) => {
        setRemovedRows([...removedRows,id])
    }

    // Option 1: Rerender whole form with rows shifted up
    // Option 2: Cross out row but leave visible
    return(
        <Form className='form_input'>
            {visibleRows.map((id) => {return(
                <NewRow id={id} onChangeFn={onChangeFn} key={id} deleteRow={deleteRow} removedRow={removedRows}/>
            )})}
            <Button onClick={handleNewRowClick}> New Fluid </Button>
        </Form>
    )
}

export default CreateFluidMixture