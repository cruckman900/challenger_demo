import React, { Fragment } from "react";
// import CheckboxGroup from 'react-checkbox-group';
import DefaultPage from '../../../UI/DefaultPage/DefaultPage';
import BodyHeader from "../../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../../UI/LeftLabelInput/LeftLabelInput";
import Label from "../../../UI/Label/Label";
import Button from "../../../UI/Button/Button";
import classes from './userSettings.module.css';
import { Container } from "react-bootstrap";

export default function userSettings(props) {
    return (
        <Fragment>
            <DefaultPage headerText="User Information (required fields are in bold text.)">
                <Container className={classes.body}>
                    <BodyHeader>Account Information</BodyHeader>
                    <div className={classes.formRow}>
                        <LeftLabelInput name="txtFirstName" inputType="text"
                            required={true}
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            labelText="First Name"
                        >
                            {props.firstName}
                        </LeftLabelInput>
                        <LeftLabelInput name="txtLastName" inputType="text"
                            required={true}
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
                            required={true}
                            labelClassName={classes.labelTextShort}
                            labelText="Under 18"
                            value="under18"
                            checked="checked"
                        />
                        <LeftLabelInput name="age" inputType="radio"
                            required={true}
                            labelClassName={classes.labelTextShort}
                            labelText="18 or Older"
                            value="18orOlder"
                        />
                    </div>
                    <div className={classes.formRow}>
                        <LeftLabelInput name="txtEmail" inputType="email"
                            required={true}
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            labelText="Email (optional)"
                        >
                            {props.email}
                        </LeftLabelInput>
                    </div>
                    <div className={classes.formRow}>
                        <LeftLabelInput name="txtUsername" inputType="text"
                            required={true}
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            labelText="Username"
                        >
                            {props.username}
                        </LeftLabelInput>
                    </div>
                    <div className={classes.formRow}>
                        <LeftLabelInput name="txtPassword" inputType="password"
                            required={true}
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            labelText="Password"
                        >
                            {props.password}
                        </LeftLabelInput>
                        <LeftLabelInput name="txtConfirmPassword" inputType="password"
                            required={true}
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

            <DefaultPage headerText="User Interests (Optional &mdash; Friend Suggestions will be based on these values.)">
                <BodyHeader>Favorite Music Types</BodyHeader>
                <div className={classes.formRow}>
                    <LeftLabelInput name="chkMusicType" inputType="checkbox"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Country"
                    >
                        {props.chkCountry}
                    </LeftLabelInput>
                    <LeftLabelInput name="chkMusicType" inputType="checkbox"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Jazz"
                    >
                        {props.chkJazz}
                    </LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput name="chkMusicType" inputType="checkbox"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Pop"
                    >
                        {props.chkPop}
                    </LeftLabelInput>
                    <LeftLabelInput name="chkMusicType" inputType="checkbox"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Regae"
                    >
                        {props.chkRegae}
                    </LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput name="chkMusicType" inputType="checkbox"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Rock"
                    >
                        {props.chkRock}
                    </LeftLabelInput>
                    <LeftLabelInput name="chkMusicType" inputType="checkbox"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Metal"
                    >
                        {props.chkMetal}
                    </LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput name="chkMusicType" inputType="checkbox"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Folk/Classical"
                    >
                        {props.chkClassical}
                    </LeftLabelInput>
                    <LeftLabelInput name="chkMusicType" inputType="checkbox"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Rap"
                    >
                        {props.chkRap}
                    </LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput name="chkMusicType" inputType="checkbox"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Other"
                    >
                        {props.chkMusicOther}
                    </LeftLabelInput>
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput name="txtFavSong" inputType="text"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Favorite Song"
                    >
                        {props.txtFavSong}
                    </LeftLabelInput>
                </div>

                <BodyHeader>Favorite Literature Types</BodyHeader>
                <div className={classes.formRow}>
                    <LeftLabelInput name="chkLiteratureType" inputType="checkbox"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Favorite Song"
                    >
                        {props.txtFavSong}
                    </LeftLabelInput>
                </div>
           </DefaultPage>
        </Fragment>
    );
}