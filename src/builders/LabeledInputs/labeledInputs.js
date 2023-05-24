import LeftLabelInput from '../../UI/LeftLabelInput/LeftLabelInput';

const labeledInputs = (inputs) => {
    const retVal = inputs.map((input) => {
        return (
            <LeftLabelInput
                id={input.id}
                name={input.name}
                inputType={input.inputType}
                labelText={input.labelText}
                required={input.required}
                value={input.value}
                onChange={input.onChange}
            />
        );
    });

    return retVal;
};

export default labeledInputs;