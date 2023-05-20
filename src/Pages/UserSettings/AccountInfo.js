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
        props.setAccountID(1);
    };

    const [errorMessage, setErrorMessage] = useState("Am I evil?");

    const inputs = [
        {id: "txtFirstName", inputType: "text", required: true, labelText: "First Name", value: props.firstName},
        {id: "txtLastName", inputType: "text", required: true, labelText: "Last Name", value: props.lastName},
        {id: "txtDisplayName", inputType: "text", required: true, labelText: "Display Name", value: props.displayname},
        {id: "label1", inputType: "label", required: true, className: `${classes.label} ${classes.required}`, text: "Age Range"},
        {id: "age18OrOlder", name: "age", inputType: "radio", className: classes.indentedInput, required: true, labelText: "18 or Older", value: "18orOlder", checked: ageSelected === '18orOlder', onChange: ageCheckChangedHandler},
        {id: "ageUnder18", name: "age", inputType: "radio", className: classes.indentedInput, required: true, labelText: "Under 18", value: "under18", checked: ageSelected === 'under18', onChange: ageCheckChangedHandler},
        {id: "label2", inputType: "label", required: true, className: classes.label, text: "Gender"},
        {id: "genderMale", name: "gender", inputType: "radio", className: classes.indentedInput, required: false, labelText: "Male", value: "male", checked: sexSelected === 'male', onChange: sexCheckChangedHandler},
        {id: "genderFemale", name: "gender", inputType: "radio", className: classes.indentedInput, required: false, labelText: "Female", value: "female", checked: sexSelected === 'female', onChange: sexCheckChangedHandler},
        {id: "txtEmail", inputType: "email", required: true, labelText: "Email", value: props.email},
        {id: "txtUsername", inputType: "text", required: true, labelText: "Username", value: props.username},
        {id: "txtPassword", inputType: "password", required: true, labelText: "Password", value: props.password},
        {id: "txtConfirmPassword", inputType: "password", required: true, labelText: "Confirm Password"},
        {id: "label3", inputType: "label", required: true, className: `${classes.label} ${classes.required}`, text: "Identify me using:"},
        {id: "identRealName", name: "ident", inputType: "radio", className: classes.indentedInput, required: true, labelText: "Real Name", value: "realname", checked: identSelected === 'realname', onChange: identCheckChangedHandler},
        {id: "identDisplayName", name: "ident", inputType: "radio", className: classes.indentedInput, required: true, labelText: "Display Name", value: "displayname", checked: identSelected === 'displayname', onChange: identCheckChangedHandler},
        {id: "identUsername", name: "ident", inputType: "radio", className: classes.indentedInput, required: true, labelText: "Username", value: "username", checked: identSelected === 'username', onChange: identCheckChangedHandler},
        {id: "txtDesc", name: "txtDesc", inputType: "textarea", readOnly: false, disabled: false, labelText: "Describe Yourself", value: props.userDesc},
    ];

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Account Information</BodyHeader>
            {labeledInputs(inputs)}
            <BodyHeader>&nbsp;</BodyHeader>
            {errorMessage && <Note noteType="error" headerText="Validation Error.">{errorMessage}</Note>}
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
                <Button type="button" name="btnClear" value="Clear" />
            </div>
        </form>
    );
};

export default AccountInfo;