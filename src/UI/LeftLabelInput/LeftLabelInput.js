import React from "react";
import Label from '../Label/Label';
import classes from './LeftLabelInput.module.css';

export default function LeftLabelInput(props) {
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
                    className={`${classes.Input} ${props.inputClassName} ${props.Valid && classes.InputValid} ${props.Error && classes.InputError}`}
                    type={props.inputType}
                    title={props.title}
                    placeholder={props.placeholder}
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
                >
                    {props.value}
                </textarea>
            )}
        </div>
    );
}