import React from "react";
import Label from '../Label/Label';
import classes from './LeftLabelInput.module.css';

export default function LeftLabelInput(props) {
    return (
        <div style={{display: 'inline-block'}} className={props.className}>
            <Label
                className={`${classes.Label} ${props.labelClassName} ${props.required && classes.required}`}
                text={props.labelText}
                htmlFor={props.htmlFor}
            />
            <input
                className={`${classes.Input} ${props.inputClassName} ${props.Valid && classes.InputValid} ${props.Error && classes.InputError}`}
                type={props.inputType}
                name={props.name}
                title={props.title}
                placeholder={props.placeholder}
                value={props.value}
                checked={props.checked}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
}