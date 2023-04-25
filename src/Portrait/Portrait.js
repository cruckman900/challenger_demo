import React, { Fragment } from "react";
import classes from './Portrait.classes.css'

export default function Portrait() {
    return (
        <Fragment>
            <div className={classes.header}>This site is designed for wide screens</div>
            <div className={classes.body}>Please rotate your device 90 degrees so that this site will be displayed correctly.</div>
        </Fragment>
    );
}