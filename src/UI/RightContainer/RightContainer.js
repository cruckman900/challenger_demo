import React from "react";
import classes from './RightContainer.module.css';

export default function RightContainer(props) {
    return (
        <div className={`${classes.body} ${props.className}`}>
            {props.children}
        </div>
    );
}