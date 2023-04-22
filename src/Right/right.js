import React, { useState } from "react";
import classes from './right.module.css';
import Card from "../UI/Card/Card";

function Right() {
    return (
        <React.Fragment>
            <div className={`${classes.right} ${classes.scrollable} ${classes.noScrollbars}`}>
                <Card headerText="Communities">
                    If you join one or more communities, the list of communities will be displayed in this block.
                </Card>
                <Card headerText="Groups">
                    You can set up a group of friends for communications amongst each other.
                </Card>
                <Card headerText="People">
                    Here will be your individuals (friends, family members, etc.) that you can talk to 1-on-1.
                </Card>
            </div>
        </React.Fragment>
    );
}

export default Right