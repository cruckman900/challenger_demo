import React from "react";
import DefaultPage from '../../../UI/DefaultPage/DefaultPage';
import BodyHeader from "../../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../../UI/LeftLabelInput/LeftLabelInput";
import Label from "../../../UI/Label/Label";
import classes from './userSettings.module.css';
import { Container } from "react-bootstrap";

export default function userSettings(props) {
    return (
        <DefaultPage headerText="User Settings">
            <Container className={classes.body}>
                <BodyHeader>Account Information</BodyHeader>
                <div className={classes.formRow}>
                    <LeftLabelInput labelClassName={classes.labelText} inputClassName={classes.inputStyle} labelText="First Name" inputType="text">{props.firstName}</LeftLabelInput>
                    <LeftLabelInput labelClassName={classes.labelText} inputClassName={classes.inputStyle} labelText="Last Name" inputType="text">{props.lastName}</LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <Label className={classes.label} text="Age Range" />
                    <LeftLabelInput labelClassName={classes.labelTextShort} labelText="Under 18" inputType="radio" name="age" value="under18" checked="checked"></LeftLabelInput>
                    <LeftLabelInput labelClassName={classes.labelTextShort} labelText="18 or Older" inputType="radio" name="age" value="18orOlder"></LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput labelClassName={classes.labelText} inputClassName={classes.inputStyle} labelText="Email (optional)" inputType="email">{props.email}</LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput labelClassName={classes.labelText} inputClassName={classes.inputStyle} labelText="Username" inputType="text">{props.username}</LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput labelClassName={classes.labelText} inputClassName={classes.inputStyle} labelText="Password" inputType="password">{props.password}</LeftLabelInput>
                    <LeftLabelInput labelClassName={classes.labelText} inputClassName={classes.inputStyle} labelText="Confirm Password" inputType="password"></LeftLabelInput>
                </div>

                <BodyHeader>Location Information (optional)</BodyHeader>
                <div className={classes.formRow}>
                    <LeftLabelInput labelClassName={classes.labelText} inputClassName={classes.inputStyle} labelText="City" inputType="text">{props.city}</LeftLabelInput>
                    <LeftLabelInput labelClassName={classes.labelText} inputClassName={classes.inputStyle} labelText="State/Province" inputType="text">{props.state}</LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput labelClassName={classes.labelText} inputClassName={classes.inputStyle} labelText="Country" inputType="text">{props.country}</LeftLabelInput>
                </div>
            </Container>
        </DefaultPage>
    );
}