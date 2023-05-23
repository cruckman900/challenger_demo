import React from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import Button from "../../UI/Button/Button";
import labeledInputs from '../../builders/LabeledInputs/labeledInputs';
import classes from './userSettings.module.css';

const LocationInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    const inputs = [
        {id: "txtCity", inputType: "text", required: false, labelText: "City", value: props.txtCity},
        {id: "txtState", inputType: "text", required: false, labelText: "State (Province)", value: props.txtState},
        {id: "txtCountry", inputType: "text", required: false, labelText: "Country", value: props.txtCountry},
    ];

    const formInputs = labeledInputs(inputs);

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Location (Optional)</BodyHeader>
            {formInputs}
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
                <Button type="button" name="btnClear" value="Clear" />
            </div>
        </form>
    );
};

export default LocationInfo;