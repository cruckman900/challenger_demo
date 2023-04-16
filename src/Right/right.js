import React from "react";
import classes from './right.module.css';

export default function right() {
    return (
        <React.Fragment>
            <div className={`${classes.right} ${classes.scrollable} ${classes.noScrollbars}`}></div>
        </React.Fragment>
    );
}