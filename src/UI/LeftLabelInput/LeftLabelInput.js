import React, { Fragment } from "react";
import Label from '../Label/Label';
import classes from './LeftLabelInput.module.css';

export default function LeftLabelInput(props) {
    return (
        <Fragment>
            <Label className={`${classes.Label} ${props.labelClassName} ${props.required && classes.required}`} text={props.labelText} for={props.name} />
            <input className={`${classes.Input} ${props.inputClassName}`} type={props.inputType} name={props.name} value={props.value} checked={props.checked} />
        </Fragment>
    );
}