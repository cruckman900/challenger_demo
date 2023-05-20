import React, { useState } from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import Button from "../../UI/Button/Button";
import Note from "../../UI/Note/Note";
import labeledInputs from '../../builders/LabeledInputs/labeledInputs';
import classes from './userSettings.module.css';

const MovieInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    const [errorMessage, setErrorMessage] = useState("Am I evil?");

    const inputs = [
        {id: "chkAction", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "Action", value: props.chkAction},
        {id: "chkAnimation", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "Comics/Animation", value: props.chkAnimation},
        {id: "chkComedy", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "Comedy", value: props.chkComedy},
        {id: "chkDocumentary", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "Documentary", value: props.chkDocumentary},
        {id: "chkDrama", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "Drama", value: props.chkDrama},
        {id: "chkHistory", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "History", value: props.chkHistory},
        {id: "chkMystery", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "Mystery", value: props.chkMystery},
        {id: "chkNature", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "Nature", value: props.chkNature},
        {id: "chkNews", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "News/World Affairs", value: props.chkNews},
        {id: "chkReligion", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "Religion", value: props.chkReligion},
        {id: "chkRomance", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "Romance", value: props.chkRomance},
        {id: "chkSciFi", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "Sci-Fi", value: props.chkSciFi},
        {id: "chkSports", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "Sports", value: props.chkSports},
        {id: "chkThriller", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "Suspense/Thriller", value: props.chkThriller},
        {id: "chkOther", name: "literaturetypes", className: classes.smallInputStyle, inputType: "checkbox", required: false, labelText: "Other", value: props.chkLitOther},
        {id: "txtFavBook", inputType: "text", required: false, labelText: "Favorite Book", value: props.txtFavBook},
        {id: "txtFavVideo", inputType: "text", required: false, labelText: "Favorite Video", value: props.txtFavVideo},
    ];

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Favorite Movie/TV/Literature Types</BodyHeader>
            {labeledInputs(inputs)}
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
                <Button type="button" name="btnClear" value="Clear" />
            </div>
        </form>
    );
};

export default MovieInfo;