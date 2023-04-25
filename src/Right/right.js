import React, { useState } from "react";
import classes from './right.module.css';
import RightContainer from "../UI/RightContainer/RightContainer";
import Card from "../UI/Card/Card";

function Right() {
    return (
        <RightContainer>
            <Card headerText="Communities">
                If you join one or more communities, the list of communities will be displayed in this block.
            </Card>
            <Card headerText="Groups">
                You can set up a group of friends for communications amongst each other.
            </Card>
            <Card headerText="People">
                Here will be individuals (friends, family members, etc.) that you can message privately.
            </Card>
        </RightContainer>
    );
}

export default Right