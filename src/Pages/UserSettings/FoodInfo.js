import React from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import Button from "../../UI/Button/Button";
import labeledInputs from '../../builders/LabeledInputs/labeledInputs';
import classes from './userSettings.module.css';

const FoodInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    const inputs = [
        {id: "chkAmerican", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "American?", value: props.chkAmerican},
        {id: "chkAsian", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Asian", value: props.chkAsian},
        {id: "chkCajun", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Cajun", value: props.chkCajun},
        {id: "chkFrench", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "French", value: props.chkFrench},
        {id: "chkItalian", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Italian", value: props.chkItalian},
        {id: "chkMexican", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Latin/Mexican", value: props.chkMexican},
        {id: "chkSlavic", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Slavic", value: props.chkSlavic},
        {id: "chkMediterranian", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Mediterranian", value: props.chkMediterranian},
        {id: "chkRussian", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Russian", value: props.chkRussian},
        {id: "chkCookies", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "I only like cookies", value: props.chkCookies},
        {id: "chkFoodOther", name: "cuisinetypes", inputType: "checkbox", required: false, labelText: "Other", value: props.chkFoodOther},
        {id: "txtFavFood", inputType: "text", required: false, labelText: "favoriteFood", value: props.txtFavFood},
    ];

    const formInputs = labeledInputs(inputs);

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Favorite Types of Food</BodyHeader>
            {formInputs}
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
                <Button type="button" name="btnClear" value="Clear" />
            </div>
        </form>
    );
};

export default FoodInfo;