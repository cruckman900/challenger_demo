import React, { useState, useEffect } from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import Button from "../../UI/Button/Button";
import labeledInputs from '../../builders/LabeledInputs/labeledInputs';
import classes from './userSettings.module.css';

const ComputerInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    const inputs = [
        {id: "chkDigitalMedia", name: "musictypes", inputType: "checkbox", required: false, labelText: "Digital Art/Media", value: props.chkDigitalMedia},
        {id: "chkGameDev", name: "musictypes", inputType: "checkbox", required: false, labelText: "Game Development", value: props.chkGameDev},
        {id: "chkOfficeProf", name: "musictypes", inputType: "checkbox", required: false, labelText: "Office Software Proficiency", value: props.chkOfficeProf},
        {id: "chkSoftwareDev", name: "musictypes", inputType: "checkbox", required: false, labelText: "Software Development", value: props.chkSoftwareDev},
        {id: "chkTechWriting", name: "musictypes", inputType: "checkbox", required: false, labelText: "Technical Writing", value: props.chkTechWriting},
        {id: "chkCompOther", name: "musictypes", inputType: "checkbox", required: false, labelText: "Other", value: props.chkCompOther},
    ];

    const [formInputs, setFormInputs] = useState(null);

    useEffect(() => {
        setFormInputs(labeledInputs(inputs));
    }, []);

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Technical Aptitude</BodyHeader>
            {formInputs}
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
                <Button type="button" name="btnClear" value="Clear" />
            </div>
        </form>
    );
};

export default ComputerInfo;