import React, { Fragment } from "react";
import classes from './Portrait.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from '@fortawesome/free-solid-svg-icons';

export default function Portrait() {
    return (
        <Fragment>
            <div className={classes.headerText}>This site is designed for wider screens.</div>
            <div className={classes.bodyText}>Please try rotating your device 90 degrees so that this site will be displayed correctly.</div>
            <div className={classes.goRotate}><FontAwesomeIcon className={classes.iconRotate} icon={faRotate} /></div>
        </Fragment>
    );
}