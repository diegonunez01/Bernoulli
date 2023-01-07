import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import ReactFlowComponent from './components/ReactFlowComponent';
import Sidebar from './components/Sidebar/Sidebar.js';
import SidebarFluid  from './components/SidebarFluid';
import { useCallback } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { nodeTypes } from './components/node_renderer/Nodes.js';
import { FluidPartForms } from './components/fluid_parts/FluidPartForms';
import { fluid_data_types } from './components/fluid_parts/FluidPartTypes';
import { FluidPartTypes } from './components/fluid_parts/FluidPartTypes';
import { NodeModifications } from './NodeModifications';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import ReactFlow, { 
  useNodesState,
  useEdgesState,
  addEdge,
  useStore
} from 'reactflow';


// We use this context to expose the modalSetShow function and the setSelectedNodeId function to any child component
const NodeSelectionContext = React.createContext();

function MainComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange]   = useEdgesState([]);
  const [modalShow, modalSetShow] = useState(false);  
  const [oldData, setOldData]=useState({});

  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const [currentForm, setCurrentForm] = useState(FluidPartTypes.NONE);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);  
 
  

  return (
    <Container>
      <NodeSelectionContext.Provider value={{modalShow,modalSetShow, selectedNodeId, setSelectedNodeId, setCurrentForm, currentForm, nodes, setNodes, setOldData,oldData}}>
        <NodeModifications/>
      </NodeSelectionContext.Provider>
      <NodeSelectionContext.Provider value={{modalSetShow, setSelectedNodeId, setCurrentForm, currentForm, nodes, setNodes, setOldData, oldData}}>
        <h1><b> Bernoulli Calculator </b></h1>
        <Row>
          <Col sm={9}>
            <ReactFlowComponent
              nodes={nodes}
              edges={edges}
              setNodes={setNodes}
              setEdges={setEdges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
            />
          </Col>
{/*     
          <Col sm={3}>
            <Row>
              <Sidebar
                nodes={nodes}
                setNodes={setNodes}
              />
            </Row>
            <Row>
              <SidebarFluid
              />
            </Row>
          </Col> */}

          <Col sm={3}>
            <Tabs>
              <TabList>
                <Tab>Parts</Tab>
                <Tab>Fluids</Tab>
              </TabList>
              <TabPanel>
                <Sidebar
                  nodes={nodes}
                  setNodes={setNodes}
                />
              </TabPanel>
              <TabPanel>
                <SidebarFluid
                />
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </NodeSelectionContext.Provider>
    </Container>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);

export { NodeSelectionContext };