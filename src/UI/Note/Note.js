import React from "react";
import classes from './Note.module.css';

export default function Note(props) {
    return (
        <div className={classes.note}>
            <div className={classes.noteHeader}>{props.headerText}</div>
            <div className={classes.noteBody}>{props.children}</div>
        </div>
    );
}