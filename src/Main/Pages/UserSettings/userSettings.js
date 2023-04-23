import React from "react";
import DefaultPage from '../../../UI/DefaultPage/DefaultPage';
import BodyHeader from "../../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../../UI/LeftLabelInput/LeftLabelInput";
import Label from "../../../UI/Label/Label";
import Button from "../../../UI/Button/Button";
import classes from './userSettings.module.css';
import { Container } from "react-bootstrap";

export default function userSettings(props) {
    return (
        <DefaultPage headerText="User Settings">
            <Container className={classes.body}>
                <BodyHeader>Account Information</BodyHeader>
                <div className={classes.formRow}>
                    <LeftLabelInput name="txtFirstName" inputType="text"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="First Name"
                    >
                        {props.firstName}
                    </LeftLabelInput>
                    <LeftLabelInput name="txtLastName" inputType="text"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Last Name"
                    >
                        {props.lastName}
                    </LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <Label className={classes.label} text="Age Range" />
                    <LeftLabelInput name="age" inputType="radio"
                        labelClassName={classes.labelTextShort}
                        labelText="Under 18"
                        value="under18"
                        checked="checked"
                    />
                    <LeftLabelInput name="age" inputType="radio"
                        labelClassName={classes.labelTextShort}
                        labelText="18 or Older"
                        value="18orOlder"
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput name="txtEmail" inputType="email"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Email (optional)"
                    >
                        {props.email}
                    </LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput name="txtUsername" inputType="text"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Username"
                    >
                        {props.username}
                    </LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput name="txtPassword" inputType="password"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Password"
                    >
                        {props.password}
                    </LeftLabelInput>
                    <LeftLabelInput name="txtConfirmPassword" inputType="password"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Confirm Password"
                    />
                </div>

                <BodyHeader>Location Information (optional)</BodyHeader>
                <div className={classes.formRow}>
                    <LeftLabelInput name="txtCity" inputType="text"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="City"
                    >
                        {props.city}
                    </LeftLabelInput>
                    <LeftLabelInput name="txtState" inputType="text"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="State/Province"
                    >
                        {props.state}
                    </LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput name="txtCountry" inputType="text"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Country"
                    >
                        {props.country}
                    </LeftLabelInput>
                </div>

                <BodyHeader>&nbsp;</BodyHeader>
                <div className={classes.formRow}>
                    <Button type="submit" name="btnSubmit" value="Submit" />
                    <Button type="button" name="btnClear" value="Clear" />
                </div>
            </Container>
        </DefaultPage>
    );
}