/* eslint-disable react/prop-types */
import React from 'react'
import classes from './Button.module.css'

export default function Button (props) {
    return (
        <button
            type={props.type}
            name={props.name}
            className={`${classes.button} ${props.className}`}
            style={props.style}
            onSubmit={props.onSubmit}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.value}
        </button>
    )
}
