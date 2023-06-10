import React from 'react'
import LeftLabelInput from '../../UI/LeftLabelInput/LeftLabelInput'
import classes from './LabeledInputs.module.css'

const labeledInputs = (inputs) => {
    const retVal = inputs.map((input) => {
        return (
            <LeftLabelInput
                id={input.id}
                key={input.id}
                name={input.name}
                labelClassName={classes.labelText}
                inputType={input.inputType}
                labelText={input.labelText}
                required={input.required}
                value={input.value}
                onChange={input.onChange}
            />
        )
    })

    return retVal
}

export default labeledInputs
