import React from "react";
import classes from './top.module.css';

export default function top() {
    return (
        <React.Fragment>
            <div className={classes.top}><span className={classes.topText}>Chatterbox SM</span></div>
        </React.Fragment>
    );
}