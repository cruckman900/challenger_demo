import React from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import Button from "../../UI/Button/Button";
import labeledInputs from '../../builders/LabeledInputs/labeledInputs';
import classes from './UserSettings.module.css';

const FoodInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    const inputs = [
        {id: "chkAmerican", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "American?", value: props.chkAmerican},
        {id: "chkAsian", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Asian / Indian", value: props.chkAsian},
        {id: "chkCajun", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Cajun", value: props.chkCajun},
        {id: "chkFrench", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "French", value: props.chkFrench},
        {id: "chkHungarian", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Hungarian", value: props.chkHungarian},
        {id: "chkItalian", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Italian", value: props.chkItalian},
        {id: "chkMediterranean", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Mediterranean", value: props.chkMediterranian},
        {id: "chkMexican", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Latin / Mexican", value: props.chkMexican},
        {id: "chkRomanian", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Romanian", value: props.chkRomanian},
        {id: "chkRussian", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Russian", value: props.chkRussian},
        {id: "chkSlavic", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Slavic", value: props.chkSlavic},
        {id: "chkCookies", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "I only like cookies", value: props.chkCookies},
        {id: "chkFoodOther", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Other", value: props.chkFoodOther},
    ];

    const formInputs = labeledInputs(inputs);

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Favorite Types of Food</BodyHeader>
            {formInputs}
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
            </div>
        </form>
    );
};

export default FoodInfo;