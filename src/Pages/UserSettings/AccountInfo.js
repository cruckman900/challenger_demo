import React, { useState } from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import Button from "../../UI/Button/Button";
import Note from "../../UI/Note/Note";
import labeledInputs from '../../builders/LabeledInputs/labeledInputs';
import classes from './userSettings.module.css';

const AccountInfo = (props) => {
    const [ageSelected, setAgeSelected] = useState('18orOlder');
    const [sexSelected, setSexSelected] = useState(null);
    const [identSelected, setIdentSelected] = useState('realname');
    const [disabled, setDisabled] = useState(false);
    
    const ageCheckChangedHandler = (event) => {
        const val = event.target.value;
        setAgeSelected(val);
        props.setAgeRange(val);
    };

    const sexCheckChangedHandler = (event) => {
        setSexSelected(event.target.value);
    };

    const identCheckChangedHandler = (event) => {
        setIdentSelected(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setDisabled(true);
        props.setAccountID(1);
    };

    const [errorMessage, setErrorMessage] = useState("Am I evil?");

    const inputs = [
        {id: "txtFirstName", inputType: "text", required: true, labelText: "First Name", value: props.firstName},
        {id: "txtMiddle", inputType: "text", required: false, labelText: "Middle", value: props.middle},
        {id: "txtLastName", inputType: "text", required: true, labelText: "Last Name", value: props.lastName},
        {id: "txtDisplayName", inputType: "text", required: false, labelText: "Display Name", value: props.displayname},
        {id: "label1", inputType: "label", required: true, className: `${classes.label} ${classes.required}`, text: "Age Range"},
        {id: "rad18OrOlder", name: "age", inputType: "radio", className: classes.indentedInput, required: true, labelText: "18 or Older", value: "18orOlder", checked: ageSelected === '18orOlder', onChange: ageCheckChangedHandler},
        {id: "radUnder18", name: "age", inputType: "radio", className: classes.indentedInput, required: true, labelText: "Under 18", value: "under18", checked: ageSelected === 'under18', onChange: ageCheckChangedHandler},
        {id: "label2", inputType: "label", required: true, className: classes.label, text: "Gender"},
        {id: "radMale", name: "gender", inputType: "radio", className: classes.indentedInput, required: false, labelText: "Male", value: "male", checked: sexSelected === 'male', onChange: sexCheckChangedHandler},
        {id: "radFemale", name: "gender", inputType: "radio", className: classes.indentedInput, required: false, labelText: "Female", value: "female", checked: sexSelected === 'female', onChange: sexCheckChangedHandler},
        {id: "txtEmail", inputType: "email", required: true, labelText: "Email", value: props.email, disabled: disabled},
        {id: "txtUsername", inputType: "text", required: true, labelText: "Username", value: props.username, disabled: disabled},
        {id: "txtPassword", inputType: "password", required: true, labelText: "Password", value: props.password, disabled: disabled},
        {id: "txtConfirmPassword", inputType: "password", required: true, labelText: "Confirm Password", value: props.confirmpassword, disabled: disabled},
        {id: "label3", inputType: "label", required: true, className: `${classes.label} ${classes.required}`, text: "Identify me using:"},
        {id: "identRealName", name: "ident", inputType: "radio", className: classes.indentedInput, required: true, labelText: "Real Name", value: "realname", checked: identSelected === 'realname', onChange: identCheckChangedHandler},
        {id: "identDisplayName", name: "ident", inputType: "radio", className: classes.indentedInput, required: true, labelText: "Display Name", value: "displayname", checked: identSelected === 'displayname', onChange: identCheckChangedHandler},
        {id: "identUsername", name: "ident", inputType: "radio", className: classes.indentedInput, required: true, labelText: "Username", value: "username", checked: identSelected === 'username', onChange: identCheckChangedHandler},
        {id: "txtDesc", name: "txtDesc", inputType: "textarea", readOnly: false, disabled: false, labelText: "Describe Yourself", value: props.userDesc},
    ];

    return (
        <form onSubmit={onSubmitHandler}>
            <Note noteType="info" headerText="Form Handling">You must submit a completed Account Information form to unlock  the optional forms.</Note>
            <BodyHeader>Account Information</BodyHeader>
            {errorMessage && <Note noteType="error" headerText="Validation Error.">{errorMessage}</Note>}
            {labeledInputs(inputs)}
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
                <Button type="button" name="btnClear" value="Clear" />
            </div>
        </form>
    );
};

export default AccountInfo;