import React, { Fragment, useState } from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../UI/LeftLabelInput/LeftLabelInput";
import Label from "../../UI/Label/Label";
import Button from "../../UI/Button/Button";
import classes from './userSettings.module.css';

const AccountInfo = (props) => {
    const [ageSelected, setAgeSelected] = useState(null);
    const [sexSelected, setSexSelected] = useState(null);
    
    const ageCheckChangedHandler = (event) => {
        const val = event.target.value;
        setAgeSelected(val);
        props.setAgeRange(val);
    };

    const sexCheckChangedHandler = (event) => {
        setSexSelected(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.setAccountID(1);
    };

    return (
        <form onSubmit={onSubmitHandler}>
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
                <Label className={`${classes.label} ${classes.required}`} text="Age Range" />
                <div className={classes.formRow}>
                    <LeftLabelInput name="age" inputType="radio" className={classes.indentedInput}
                        required={true}
                        labelClassName={classes.labelTextShort}
                        inputClassName={classes.smallInput}
                        labelText="Under 18"
                        value="under18"
                        checked={ageSelected === 'under18'}
                        onChange={ageCheckChangedHandler}
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput name="age" inputType="radio" className={classes.indentedInput}
                        required={true}
                        labelClassName={classes.labelTextShort}
                        inputClassName={classes.smallInput}
                        labelText="18 or Older"
                        value="18orOlder"
                        checked={ageSelected === '18orOlder'}
                        onChange={ageCheckChangedHandler}
                    />
                </div>
            </div>
            <div className={classes.formRow}>
                <Label className={classes.label} text="Sex" />
                <div className={classes.formRow}>
                    <LeftLabelInput name="sex" inputType="radio" className={classes.indentedInput}
                        required={false}
                        labelClassName={classes.labelTextShort}
                        inputClassName={classes.smallInput}
                        labelText="Male"
                        value="male"
                        checked={sexSelected === 'male'}
                        onChange={sexCheckChangedHandler}
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput name="sex" inputType="radio" className={classes.indentedInput}
                        required={false}
                        labelClassName={classes.labelTextShort}
                        inputClassName={classes.smallInput}
                        labelText="Female"
                        value="female"
                        checked={sexSelected === 'female'}
                        onChange={sexCheckChangedHandler}
                    />
                </div>
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput name="txtEmail" inputType="email"
                    required={true}
                    labelClassName={classes.labelText}
                    inputClassName={classes.inputStyle}
                    labelText="Email"
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
            <div className={classes.formRow}>
                <Label className={classes.label} text="Describe Yourself" />
                <textarea name="txtDesc" className={classes.textarea} readOnly={false} disabled={false}>{props.userDesc}</textarea>
            </div>
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
                <Button type="button" name="btnClear" value="Clear" />
            </div>
        </form>
    );
};

export default AccountInfo;