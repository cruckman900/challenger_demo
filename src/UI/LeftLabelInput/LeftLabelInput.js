import React from "react";
import Label from '../Label/Label';
import classes from './LeftLabelInput.module.css';

const LeftLabelInput = React.forwardRef((props, ref) => {
    return (
        <div className={`${classes.container} ${props.className}`}>
            <Label
                className={`${classes.Label} ${props.labelClassName} ${props.required && classes.required}`}
                text={props.labelText}
                htmlFor={props.id}
            />
            {props.inputType !== "textarea" && (
                <input
                    id={props.id}
                    key={props.id}
                    name={props.name}
                    placeholder={props.placeholder}
                    className={`${classes.Input} ${props.inputClassName} ${props.valid && classes.InputValid} ${props.error && classes.InputError}`}
                    type={props.inputType}
                    title={props.title}
                    value={props.value}
                    checked={props.checked}
                    disabled={props.disabled}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                />
            )}
            {props.inputType === "textarea" && (
                <textarea
                    id={props.id}
                    key={props.id}
                    name={props.name}
                    className={props.inputClassName}
                    readOnly={props.readOnly}
                    disabled={props.disabled}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                >
                    {props.value}
                </textarea>
            )}
        </div>
    );
});

export default LeftLabelInput;