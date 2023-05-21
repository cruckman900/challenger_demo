import React from "react";
import classes from './DefaultPage.module.css';

export default function DefaultPage(props) {
    return (
        <div className={classes.defaultPage}>
            <div className={classes.header}>
                <div className={`${classes.headerText} ${classes.noSelect}`}>
                    {props.headerText}
                </div>
            </div>
            <div className={`${classes.body} ${classes.noSelect} ${props.className}`}>
                {props.children}
            </div>
        </div>
    );
}