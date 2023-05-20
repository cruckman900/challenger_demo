import React from "react";
import RightContainer from "./RightContainer/RightContainer";
import Card from "../../UI/Card/Card";
import wClasses from "../../assets/widget.module.css";

function Right() {
    return (
        <RightContainer>
            <Card headerText="Communities">
                If you join one or more communities, the list of communities will be displayed in this block.
            </Card>
            <hr className={wClasses.br} />
            <Card headerText="Groups">
                You can set up a group of friends for communications amongst each other.
            </Card>
            <hr className={wClasses.br} />
            <Card headerText="People">
                Here will be individuals (friends, family members, etc.) that you can message privately.
            </Card>
        </RightContainer>
    );
}

export default Right