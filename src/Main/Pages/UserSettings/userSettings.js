import React from "react";
import DefaultPage from '../../../UI/DefaultPage/DefaultPage';
import LeftLabelInput from "../../../UI/LeftLabelInput/LeftLabelInput";
import Label from "../../../UI/Label/Label";
import classes from './userSettings.module.css';
import { Container } from "react-bootstrap";

export default function userSettings(props) {
    return (
        <DefaultPage headerText="User Settings">
            <Container className={classes.body}>
                <div className={classes.formRow}>
                    <LeftLabelInput labelClassName={classes.labelText} labelText="First Name" inputType="text">{props.firstName}</LeftLabelInput>
                    <LeftLabelInput labelText="Last Name" inputType="text">{props.lastName}</LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <Label className={classes.label} text="Age" />
                    <LeftLabelInput labelClassName={classes.labelText} labelText="Under 18" inputType="radio" name="age" value="under18" checked="checked"></LeftLabelInput>
                    <LeftLabelInput labelClassName={classes.labelText} labelText="18 or Older" inputType="radio" name="age" value="18orOlder"></LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput labelClassName={classes.labelText} labelText="Username" inputType="text">{props.username}</LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput labelClassName={classes.labelText} labelText="Password" inputType="password">{props.password}</LeftLabelInput>
                </div>
            </Container>
        </DefaultPage>
    );
}