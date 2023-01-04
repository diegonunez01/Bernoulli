import ReactFlow, { MiniMap, Controls, Background} from 'reactflow';

import { nodeTypes } from './node_renderer/Nodes.js';
import 'reactflow/dist/style.css';



function ReactFlowComponent(props) {
    return (
        <div id="react-flow-parent" style={{
            width: "100%",
            height: "400px",
        }}> 
            <ReactFlow
                nodes={props.nodes}
                edges={props.edges}
                onNodesChange={props.onNodesChange}
                onEdgesChange={props.onEdgesChange}
                onConnect={props.onConnect}
                nodeTypes={nodeTypes}
              >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>

    );
}

export default ReactFlowComponent;
