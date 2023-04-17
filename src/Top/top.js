import React from "react";
import classes from './top.module.css';
import font from '../fonts.module.css';

export default function top() {
    return (
        <React.Fragment>
            <div className={classes.top}><span className={`${classes.topText} ${font.Kochire}`}>Chatterbox SM</span></div>
        </React.Fragment>
    );
}