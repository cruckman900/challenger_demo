import React from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../UI/LeftLabelInput/LeftLabelInput";
import Button from "../../UI/Button/Button";
import classes from './userSettings.module.css';

const LocationInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Location (Optional)</BodyHeader>
            <div className={classes.formRow}>
                <LeftLabelInput name="txtCity" inputType="text"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.inputStyle}
                    labelText="City"
                >
                    {props.city}
                </LeftLabelInput>
                <LeftLabelInput name="txtState" inputType="text"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.inputStyle}
                    labelText="State/Province"
                >
                    {props.state}
                </LeftLabelInput>
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput name="txtCountry" inputType="text"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.inputStyle}
                    labelText="Country"
                >
                    {props.country}
                </LeftLabelInput>
            </div>
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
                <Button type="button" name="btnClear" value="Clear" />
            </div>
        </form>
    );
};

export default LocationInfo;