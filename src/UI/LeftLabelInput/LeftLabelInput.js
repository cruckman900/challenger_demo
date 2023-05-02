import React from "react";
import Label from '../Label/Label';
import classes from './LeftLabelInput.module.css';

export default function LeftLabelInput(props) {
    return (
        <div style={{display: 'inline-block'}}>
            <Label
                className={`${classes.Label} ${props.labelClassName} ${props.required && classes.required}`}
                text={props.labelText}
                for={props.for}
            />
            <input
                className={`${classes.Input} ${props.inputClassName} ${props.Valid && classes.InputValid} ${props.Error && classes.InputError}`}
                type={props.inputType}
                name={props.name}
                value={props.value}
                checked={props.checked}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onFocusOut={props.onFocusOut}
            />
        </div>
    );
}