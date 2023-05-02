import React from "react";
import classes from './Button.module.css';

export default function Button(props) {
    return (
        <button
            type={props.type}
            name={props.name}
            className={classes.button}
            onSubmit={props.onSubmit}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.value}
        </button>
    );
}