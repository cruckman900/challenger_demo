import React from "react";
import classes from './Button.module.css';

export default function Button(props) {
    return (
        <button type={props.type} name={props.name} className={classes.button}>{props.value}</button>
    );
}