import React from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import Button from "../../UI/Button/Button";
import labeledInputs from '../../builders/LabeledInputs/labeledInputs';
import classes from './userSettings.module.css';

const MusicInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    const inputs = [
        {id: "chkClassical", name: "musictypes", inputType: "checkbox", required: false, labelText: "Classical", value: props.chkClassical},
        {id: "chkCountry", name: "musictypes", inputType: "checkbox", required: false, labelText: "Country", value: props.chkCountry},
        {id: "chkFlamenco", name: "musictypes", inputType: "checkbox", required: false, labelText: "Flamenco/Mariachi", value: props.chkFlamenco},
        {id: "chkFolk", name: "musictypes", inputType: "checkbox", required: false, labelText: "Folk", value: props.chkFolk},
        {id: "chkJazz", name: "musictypes", inputType: "checkbox", required: false, labelText: "Jazz", value: props.chkJazz},
        {id: "chkKJPop", name: "musictypes", inputType: "checkbox", required: false, labelText: "KPop/JPop", value: props.chkKJPop},
        {id: "chkMetal", name: "musictypes", inputType: "checkbox", required: false, labelText: "Metal", value: props.chkMetal},
        {id: "chkPolka", name: "musictypes", inputType: "checkbox", required: false, labelText: "Polka", value: props.chkPolka},
        {id: "chkPop", name: "musictypes", inputType: "checkbox", required: false, labelText: "Pop", value: props.chkPop},
        {id: "chkRap", name: "musictypes", inputType: "checkbox", required: false, labelText: "Rap/HipHop", value: props.chkRap},
        {id: "chkRegae", name: "musictypes", inputType: "checkbox", required: false, labelText: "Regae", value: props.chkRegae},
        {id: "chkRock", name: "musictypes", inputType: "checkbox", required: false, labelText: "Rock", value: props.chkRock},
        {id: "chkTribal", name: "musictypes", inputType: "checkbox", required: false, labelText: "Tribal", value: props.chkTribal},
        {id: "chkMusicOther", name: "musictypes", inputType: "checkbox", required: false, labelText: "Other", value: props.chkMusicOther},
        {id: "txtFavMusic", inputType: "text", required: false, labelText: "favoriteMusic", value: props.txtFavMusic},
    ];

    const formInputs = labeledInputs(inputs);

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Favorite Music Types</BodyHeader>
            {formInputs}
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
                <Button type="button" name="btnClear" value="Clear" />
            </div>
        </form>
    );
};

export default MusicInfo;