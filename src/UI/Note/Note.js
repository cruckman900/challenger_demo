import React, { useState, useEffect } from "react";
import classes from './Note.module.css';

export default function Note(props) {
    const [headerStyle, setHeaderStyle] = useState('note');
    const [bodyStyle, setBodyStyle] = useState('note');

    useEffect(() => {
        setHeaderStyle(props.noteType + "type-header");
        setBodyStyle(props.noteType + "type-body");
    }, [props.noteType]);

    return (
        <div className={classes.note}>
            <div className={`${classes.noteHeader} ${classes[headerStyle]}`}>{props.headerText}</div>
            <div className={`${classes.noteBody} ${classes[bodyStyle]}`} style={{bodyStyle}}>{props.children}</div>
        </div>
    );
}