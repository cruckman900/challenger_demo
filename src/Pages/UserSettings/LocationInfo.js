import React, { useState } from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../UI/LeftLabelInput/LeftLabelInput";
import Button from "../../UI/Button/Button";
import classes from './UserSettings.module.css';

const LocationInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    const cityChangeHandler = (event) => {
        setCity(event.target.value);
    }

    const stateChangeHandler = (event) => {
        setState(event.target.value);
    }

    const countryChangeHandler = (event) => {
        setCountry(event.target.value);
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Location (Optional)</BodyHeader>
            <div className={classes.formRow}>
                <LeftLabelInput
                    id="txtCity"
                    inputType="text"
                    labelText="City"
                    labelClassName={classes.labelText}
                    inputClassName={classes.inputStyle}
                    value={city.value}
                    onChange={cityChangeHandler}
                />
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput
                    id="txtState"
                    inputType="text"
                    labelText="State / Province"
                    labelClassName={classes.labelText}
                    inputClassName={classes.inputStyle}
                    value={state.value}
                    onChange={stateChangeHandler}
                />
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput
                    id="txtCountry"
                    inputType="text"
                    labelText="Country"
                    labelClassName={classes.labelText}
                    inputClassName={classes.inputStyle}
                    value={country.value}
                    onChange={countryChangeHandler}
                />
            </div>

            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
            </div>
        </form>
    );
};

export default LocationInfo;