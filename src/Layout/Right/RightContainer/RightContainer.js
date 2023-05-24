import React, { Fragment } from "react";
import classes from './RightContainer.module.css';

export default function RightContainer(props) {
    return (
        <Fragment>
            <div className={`${classes.body} ${props.className}`}>
                {props.children}
            </div>
        </Fragment>
    );
}