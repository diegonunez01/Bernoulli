// // export const handleNewNodeCreation = (e) => {   
// //     e.preventDefault();
// //     var type = currentFormData.type;
// //     const data_types=fluid_data_types(currentFormData)
// //     if (currentFormData.type == FluidPartTypes.FITTING){type= currentFormData.fitting_type} else {type= currentFormData.type}

// //     const newNode= {
// //         id: `${props.nodes.length + 1}`,
// //         position: {x: 66, y: 66},
// //         data: data_types[currentFormData.type].data,
// //         type: type

// //     }
// //     console.log(newNode)
// //     // Add node to the existing node set        
// //     props.setNodes([...props.nodes, newNode]);


// //     // Clear the form
// //     setCurrentForm(FluidPartTypes.NONE);
// //     setCurrentFormData({});
    
// // }

// export const handleNewNodeCreation = (newNode) => {   
//     e.preventDefault();
//     var type = currentFormData.type;
//     const data_types=fluid_data_types(currentFormData)
//     if (currentFormData.type == FluidPartTypes.FITTING){type= currentFormData.fitting_type} else {type= currentFormData.type}

//     const newNode= {
//         id: `${props.nodes.length + 1}`,
//         position: {x: 66, y: 66},
//         data: data_types[currentFormData.type].data,
//         type: type

//     }
//     console.log(newNode)
//     // Add node to the existing node set        
//     props.setNodes([...props.nodes, newNode]);


//     // Clear the form
//     setCurrentForm(FluidPartTypes.NONE);
//     setCurrentFormData({});
    
// }