import { Row, Col, Button, Form, ButtonGroup } from 'react-bootstrap';
// import {FluidPartTypes} from './fluid_parts/FluidPartTypes.js';
import {materialOptions} from './Options.js';
import {fittingOptions} from './FluidPartTypes.js';


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

const PipeForm = (onChangeFn, existingNodeData) => (
    <Form className='form_input'>

    <Form.Group as={Row} className="mb-3">
        <Form.Label> Pipe diameter (ft) </Form.Label>
        <Col sm={10}>
            <Form.Control
                id="pipe_diameter"
                defaultValue={existingNodeData ? existingNodeData.diameter : ''}
                onChange={onChangeFn}
                type="number"
            />
        </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3">
        <Form.Label> Pipe length (ft) </Form.Label>
        <Col sm={10}>
            <Form.Control 
            id="pipe_length" 
            defaultValue={existingNodeData ? existingNodeData.length : ''}
            // placeholder={10} 
            onChange={onChangeFn} 
            type="number" />
        </Col>
    </Form.Group>
    
    <Form.Group as={Row} className="mb-3">
        <Form.Label>Pipe Material</Form.Label>
        <Col sm={10}>
            <OptionSelect 
            select_id="pipe_material" 
            default={existingNodeData ? existingNodeData.material : ''}
            onChange={onChangeFn} 
            options={materialOptions} />
        </Col>
    </Form.Group>

    </Form>
);

const FittingForm = (onChangeFn,existingNodeData) => (
    <Form className='form_input'>
        <Form.Group as={Row} className="mb-3">
        <Form.Label>Fitting type</Form.Label>
        <Col sm={10}>
            <OptionSelect 
            select_id="fitting_type" 
            defaultValue={existingNodeData ? existingNodeData.fitting_type : ''}
            onChange={onChangeFn} 
            options={fittingOptions} />
        </Col>
    </Form.Group>
    </Form>
);

const PumpForm = (onChangeFn,existingNodeData) => (
    <Form className='form_input'>
        <Form.Group as={Row} className="mb-3">
            <Form.Label>Power Input (kW)</Form.Label>
            <Col sm={10}>
                <Form.Control
                    id="pump_power"
                    defaultValue={existingNodeData ? existingNodeData.power : ''}
                    onChange={onChangeFn}
                    type="number"
                />
            </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
            <Form.Label>Power Efficiency at Flowrate (%)</Form.Label>
            <Col sm={10}>
                <Form.Control
                    id="pump_efficiency"
                    defaultValue= {existingNodeData ? existingNodeData.efficiency : ''}
                    placeholder={0.8}
                    onChange={onChangeFn}
                    type="number"
                />
            </Col>
        </Form.Group>
    </Form>
);

export const FluidPartForms = {
    PIPE: PipeForm,
    FITTING: FittingForm,
    PUMP: PumpForm,
    NONE: () => <div></div>,
}
