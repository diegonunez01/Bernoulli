import React, { useState } from 'react';
import './styles/index.css';
import { Container, Modal, Button } from 'react-bootstrap';
import { fluid_data_types } from './components/fluid_parts/FluidPartTypes';
import { FluidPartTypes } from './components/fluid_parts/FluidPartTypes';
import { NodeSelectionContext } from '.';
import { FluidPartMetadata } from './components/fluid_parts/FluidPartMetadata';

// Give Error Messages
export function NodeModifications() {
    const {modalShow, modalSetShow, selectedNodeId, setSelectedNodeId, setCurrentForm, currentForm, nodes, setNodes, oldData}=React.useContext(NodeSelectionContext);
    const modalHandleClose = () => modalSetShow(false);
    const modalHandleShow = () => modalSetShow(true);
    const currentlySeletedNode = nodes.find((node) => node.id === selectedNodeId);
    const currentlySeletedNodeData = currentlySeletedNode ? currentlySeletedNode.data : null;

    const modifySelectedNode = () => {
      
        const data_types=fluid_data_types(currentFormData);
        var type
        if (currentForm == FluidPartTypes.FITTING){type= currentFormData.fitting_type} else {type= currentForm}
        const newNodes = nodes.map((node) => {
            if (node.id === selectedNodeId) {
                return {
                    ...node,
                    data: data_types[currentForm].data,
                    type: type
                };
            }
            return node});
        
        setCurrentForm(FluidPartTypes.NONE);
        modalSetShow(false);
        setNodes(newNodes);
        setCurrentFormData({})
        ;
        

        };
    const [validationErrorMessage, setValidationErrorMessage] = useState("");
    const [currentFormData, setCurrentFormData] = useState({});
    // const type=FluidPartTypes[currentForm];
    
    const getCurrentForm= () => {
        if (currentForm === FluidPartTypes.NONE) {
            return <></>;
        }
        return (
        <div>
            <h4> {FluidPartMetadata[currentForm].form_title} </h4>
            <p> {FluidPartMetadata[currentForm].form_description} </p>
            { FluidPartMetadata[currentForm].form(formOnChange,oldData) }
        </div>
    )}
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
    <Container>
      <Modal show={modalShow} onHide={modalHandleClose}>
          <Modal.Header closeButton>
              <Modal.Title>Change X</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {getCurrentForm()}
              {validationErrorMessage && <p style={{ marginTop: '3px', color: 'red' }}>{validationErrorMessage}</p>}
          </Modal.Body>
          <Modal.Footer>
              <Button className="btn btn-secondary" onClick={modalHandleClose}>
                  Close
              </Button>
              {!validationErrorMessage && Object.keys(currentFormData).length > 1 && <Button className="btn btn-primary" onClick={modifySelectedNode}>
                  Save Changes
              </Button>}
          </Modal.Footer>
      </Modal>
    </Container>
    )
}