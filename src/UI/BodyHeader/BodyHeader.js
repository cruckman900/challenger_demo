import React from "react";
import classes from './BodyHeader.module.css';

export default function BodyHeader(props) {
    return (
        <div className={`${classes.BodyHeader} ${props.className}`}>{props.children}</div>
    )
}