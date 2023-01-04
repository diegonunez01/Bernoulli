import { Handle,Position, } from "reactflow";
import "../../styles/Nodes.css";
import "../../styles/Handles.css";
import { FluidPartTypes, fluid_data_types } from "../fluid_parts/FluidPartTypes";

import { NodeSelectionContext } from "../../index";
import React from "react";


const ValveNode = (props) => {
    var { data, id } = props;
    var { modalSetShow, selectedNodeId,setSelectedNodeId, setCurrentForm, currentForm,nodes, setOldData} = React.useContext(NodeSelectionContext);
    
    const selectNodeAndShowModal = () => {
        setSelectedNodeId(id);
        console.log(id)
        const selectedNode = nodes.map((node) => {
            if (node.id === id) {
                return node.data
            }
            return null})

        modalSetShow(true);
        setCurrentForm(FluidPartTypes.FITTING,selectedNode[id-1]); 
        setOldData(selectedNode[id-1])
    }

    return(
        <div className = "valve-node" onDoubleClick={selectNodeAndShowModal}>
            <Handle type="target" position={Position.Left} isConnectable={true} className="valve-node-left"/>
            <Handle type="source" position={Position.Right} isConnectable={true} className="valve-node-right"/>
        {/* Could add an onConnect that snaps node to other node so they are together */}
   </div>
    )
};


const Ninety_degree_bendNode = (props) => {
    var { data, id } = props;
    var { modalSetShow, selectedNodeId,setSelectedNodeId, setCurrentForm, currentForm,nodes, setOldData} = React.useContext(NodeSelectionContext);
    
    const selectNodeAndShowModal = () => {
        setSelectedNodeId(id);
        console.log(id)
        const selectedNode = nodes.map((node) => {
            if (node.id === id) {
                return node.data
            }
            return null})

        modalSetShow(true);
        setCurrentForm(FluidPartTypes.FITTING,selectedNode[id-1]); 
        setOldData(selectedNode[id-1])
    }
    return(
        
        <div className = "ninety_degree_bend-node" onDoubleClick={selectNodeAndShowModal}>
            <Handle type="target" position={Position.Bottom} isConnectable={true} className="ninety_degree_bend-node-bottom"/>
            <Handle type="source" position={Position.Right} isConnectable={true} className="ninety_degree_bend-node-right"/>
            {/* Could add an onConnect that snaps node to other node so they are together */}
       </div>
    )
};

const TeeNode = (props) => {
    var { data, id } = props;
    var { modalSetShow, selectedNodeId,setSelectedNodeId, setCurrentForm, currentForm,nodes, setOldData} = React.useContext(NodeSelectionContext);
    
    const selectNodeAndShowModal = () => {
        setSelectedNodeId(id);
        console.log(id)
        const selectedNode = nodes.map((node) => {
            if (node.id === id) {
                return node.data
            }
            return null})

        modalSetShow(true);
        setCurrentForm(FluidPartTypes.FITTING,selectedNode[id-1]); 
        setOldData(selectedNode[id-1])
    }
    return(
        <div className = "tee-node" onDoubleClick={selectNodeAndShowModal}>
            <Handle type="target" position={Position.Left} isConnectable={true} className='tee-node-left'/>
            <Handle type="source" position={Position.Right} isConnectable={true} className='tee-node-right'/>
            <Handle type="source" position={Position.TOP} isConnectable={true} className='tee-node-top'/>
            {/* Could add an onConnect that snaps node to other node so they are together */}
       </div>
    )
};
                

const PumpNode = (props) => {
    var { data, id } = props;
    var { modalSetShow, selectedNodeId,setSelectedNodeId, setCurrentForm, currentForm,nodes, setOldData} = React.useContext(NodeSelectionContext);
    
    const selectNodeAndShowModal = () => {
        setSelectedNodeId(id);
        console.log(id)
        const selectedNode = nodes.map((node) => {
            if (node.id === id) {
                return node.data
            }
            return null})

        modalSetShow(true);
        setCurrentForm(FluidPartTypes.PUMP,selectedNode[id-1]); 
        setOldData(selectedNode[id-1])
    }
    return(
        <div className = "pump-node" onDoubleClick={selectNodeAndShowModal}>
            <Handle type="target" position={Position.Left} isConnectable={true} className='pump-node-left'/>
            <Handle type="source" position={Position.Right} isConnectable={true} className='pump-node-right'/>
            {/* Could add an onConnect that snaps node to other node so they are together */}
       </div>
    )
};



const PipeNode= (props) => {
    var { data, id } = props;
    var { modalSetShow, selectedNodeId,setSelectedNodeId, setCurrentForm, currentForm,nodes, setOldData} = React.useContext(NodeSelectionContext);
    
    const selectNodeAndShowModal = () => {
        setSelectedNodeId(id);
        // console.log(id)
        console.log(nodes)
        const selectedNode = nodes.map((node) => {
            if (node.id === id) {
                return node.data
            }
            return null})

        modalSetShow(true);
        setCurrentForm(FluidPartTypes.PIPE,selectedNode[id-1]); 
        setOldData(selectedNode[id-1])
    }
    return(
        <div className = "pipe-node" onDoubleClick={selectNodeAndShowModal}>
            <Handle type="target" position={Position.Left} isConnectable={true} className="pipe-node-left"/>
            <Handle type="source" position={Position.Right} isConnectable={true} className="pipe-node-right"/>
            {/* Could add an onConnect that snaps node to other node so they are together */}
       </div>
    )
}

const Fortyfive_degree_bendNode= (props) => {
    var { data, id } = props;
    var { modalSetShow, setSelectedNodeId, setCurrentForm, currentForm} = React.useContext(NodeSelectionContext);


    const selectNodeAndShowModal = () => {
        setSelectedNodeId(id);
        modalSetShow(true);
        setCurrentForm(FluidPartTypes.FITTING); 
    }
    return(
        <>
        <div className = "fortyfive_degree_bend-node" onDoubleClick={selectNodeAndShowModal}>
            <Handle type="target" position={Position.Left} isConnectable={true} />
            <Handle type="source" className="fortyfive_degree_bend-node-top" position={Position.TOP} isConnectable={true} />
      </div>
      </>
    )
}
export const nodeTypes= {
    [FluidPartTypes.PIPE]: PipeNode,
    [FluidPartTypes.VALVE]: ValveNode,
    [FluidPartTypes.FORTYFIVE_DEGREE_BEND]: Fortyfive_degree_bendNode,
    [FluidPartTypes.NINETY_DEGREE_BEND]: Ninety_degree_bendNode,
    [FluidPartTypes.TEE]: TeeNode,
    [FluidPartTypes.PUMP]: PumpNode
};