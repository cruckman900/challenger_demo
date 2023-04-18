import React from "react";
import classes from './top.module.css';
import font from '../fonts.module.css';
import logo from '../assets/images/logo.png';

export default function top() {
    return (
        <React.Fragment>
            <div className={classes.top}>
                <span className={`${classes.topText} ${font.Kochire}`}>Chatterbox SM</span>
                <span className={classes.logo}><img src={logo} /></span>
            </div>
        </React.Fragment>
    );
}