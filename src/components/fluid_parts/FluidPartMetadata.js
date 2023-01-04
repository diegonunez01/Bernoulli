import { FluidPartTypes } from "./FluidPartTypes"
import { FluidPartForms } from "./FluidPartForms"

export const FluidPartMetadata = {
    [FluidPartTypes.PIPE]: {
        name: "Pipe",
        form: FluidPartForms.PIPE,
        form_id: "pipe-form",
        form_title: "Pipe Properties",
        form_description: "Enter the properties of the pipe",
        style: {
            width: 10,
            height: 3,
            // backgroundColor: "gray"
    }},
    [FluidPartTypes.FITTING]: {
        name: "Fitting",
        form: FluidPartForms.FITTING,
        form_id: "fitting-form",
        form_title: "Fitting Properties",
        form_description: "Enter the properties of the fitting",
        style: {
            width: 5,
            height: 5,
            bgolor: "red"
        }
    },
    [FluidPartTypes.PUMP]: {
        name: "Pump",
        form: FluidPartForms.PUMP,
        form_id: "pump-form",
        form_title: "Pump Properties",
        form_description: "Enter the properties of the pump",
        style:{
            width: 5,
            height: 5,
            bgolor: "red"
        }
    },
    [FluidPartTypes.NONE]: {
        name: "None",
        form: FluidPartForms.NONE,
        form_id: "none-form",
        form_title: "",
        form_description: "",
    }
}
