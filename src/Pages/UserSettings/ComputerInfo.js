import React from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../UI/LeftLabelInput/LeftLabelInput";
import Button from "../../UI/Button/Button";
import classes from './userSettings.module.css';

const ComputerInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Technical Aptitude</BodyHeader>
            <div className={classes.formRow}>
                <LeftLabelInput name="chkTechAptitude" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Digital Art/Media"
                >
                    {props.chkDigitalMedia}
                </LeftLabelInput>
                <LeftLabelInput name="chkTechAptitude" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Software Development"
                >
                    {props.chkSoftwareDevelopment}
                </LeftLabelInput>
                <LeftLabelInput name="chkTechAptitude" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Game Development"
                >
                    {props.chkGameDevelopment}
                </LeftLabelInput>
                <LeftLabelInput name="chkTechAptitude" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Office Software Skills"
                >
                    {props.chkSoftwareSkills}
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

export default ComputerInfo;