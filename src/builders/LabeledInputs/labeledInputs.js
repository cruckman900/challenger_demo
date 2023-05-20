import Label from '../../UI/Label/Label';
import LeftLabelInput from '../../UI/LeftLabelInput/LeftLabelInput';
import classes from './labeledInputs.module.css';

const labeledInputs = (inputs) => {
    const retVal = inputs.map((input) => {
        if (input.inputType === "label") {
            return (
                <div className={classes.formRow}>
                    <Label
                        key={input.id}
                        htmlFor={input.id}
                        required={input.required}
                        className={input.className}
                        text={input.text}
                    />
                </div>
            );
        }
    
        if (input.inputType === "radio") {
            return (
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id={input.id}
                        key={input.id}
                        name={input.name}
                        inputType={input.inputType}
                        className={input.className}
                        required={input.required}
                        labelClassName={classes.labelText}
                        labelText={input.labelText}
                        value={input.value}
                        checked={input.checked}
                        onChange={input.onChange}
                        disabled={input.disabled}
                    />
                </div>
            );
        }
    
        if (
            input.inputType === "text" || 
            input.inputType === "email" || 
            input.inputType === "password" ||
            input.inputType === "checkbox")
        {
            return (
                <LeftLabelInput
                    id={input.id}
                    key={input.id}
                    name={input.id}
                    inputType={input.inputType}
                    required={input.required}
                    labelClassName={classes.labelText}
                    inputClassName={`${classes.inputStyle} ${input.className}`}
                    labelText={input.labelText}
                    disabled={input.disabled}
                    >
                    {input.value}
                </LeftLabelInput>
            );
        }
    
        if (input.inputType === "textarea") {
            return (
                <LeftLabelInput
                    id={input.id}
                    key={input.id}
                    name={input.id}
                    inputType={input.inputType}
                    inputClassName={classes.textarea}
                    readOnly={input.readOnly}
                    labelText={input.labelText}
                    disabled={input.disabled}
                >
                    {input.value}
                </LeftLabelInput>
            );
        }
    
        return null;
    });

    return retVal;
};

export default labeledInputs;