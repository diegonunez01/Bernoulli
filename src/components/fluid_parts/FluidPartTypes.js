export const FluidPartTypes = {
	PIPE: "PIPE",
    FITTING: "FITTING",
    PUMP: "PUMP",
    NONE: "NONE",
    VALVE: "VALVE",
    TEE: "TEE",
    FORTYFIVE_DEGREE_BEND: "FORTYFIVE_DEGREE_BEND",
    NINETY_DEGREE_BEND: "NINETY_DEGREE_BEND",
}

export const fittingOptions= [
    { value: FluidPartTypes.TEE, label: "Tee", moreInputs:false},
    { value: FluidPartTypes.FORTYFIVE_DEGREE_BEND, label: "45-degree bend", moreInputs:false},
    { value: FluidPartTypes.NINETY_DEGREE_BEND, label: "90-degree bend",moreInputs:false},
    { value: FluidPartTypes.VALVE, label: 'Valve', moreInputs:true}
]

export const fluid_data_types= (currentFormData) =>{ return {
    [FluidPartTypes.PIPE] : {
        data: {
            label:`🍆 ${currentFormData.pipe_diameter}f D / ${currentFormData.pipe_length}f L ${currentFormData.pipe_material} pipe`,
            diameter: currentFormData.pipe_diameter,
            length: currentFormData.pipe_length,
            material: currentFormData.pipe_material
            },
    },
    [FluidPartTypes.FITTING]: {
        data: {
            label: `⚙️ ${currentFormData.fitting_type} fitting`,
            type:   currentFormData.fitting_type
            },
        
    },
    [FluidPartTypes.PUMP]: {
        data: {
            label:`⏰ ${currentFormData.pump_power} kW pump`,
            power: currentFormData.pump_power,
            efficiency: currentFormData.pump_efficiency
        },
    }};}