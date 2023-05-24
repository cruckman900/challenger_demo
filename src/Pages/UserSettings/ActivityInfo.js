import React from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import Button from "../../UI/Button/Button";
import labeledInputs from '../../builders/LabeledInputs/labeledInputs';
import classes from './UserSettings.module.css';

const ActivityInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    const inputs = [
        {id: "chkArcheryGuns", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Archery / Fire Arms", value: props.chkArcheryGuns},
        {id: "chkArtsCrafts", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Arts and Crafts", value: props.chkArtsCrafts},
        {id: "chkBarsClubs", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Bars / Clubs", value: props.chkBarsClubs},
        {id: "chkBoxingWrestling", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Boxing / Wrestling", value: props.chkBoxingWrestling},
        {id: "chkBilliardsDarts", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Billiards / Darts", value: props.chkBilliardsDarts},
        {id: "chkBoatingCamping", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Boating / Camping", value: props.chkBoatingCamping},
        {id: "chkClassicSports", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Classic Sports", value: props.chkClassicSports},
        {id: "chkCycling", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Cycling", value: props.chkCycling},
        {id: "chkFishingHunting", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Fishing / Hunting", value: props.chkFishingHunting},
        {id: "chkHikingClimbing", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Hiking / Climbing", value: props.chkHikingClimbing},
        {id: "chkMachinesElectronics", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Machines / Electronics", value: props.chkWatchingTV},
        {id: "chkMartialArts", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Martial Arts", value: props.chkArcheryGuns},
        {id: "chkMusicInstr", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Musical Instruments", value: props.chkMusicInstr},
        {id: "chkPuzzlesGames", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Puzzles / Games", value: props.chkPuzzlesGames},
        {id: "chkReadingWriting", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Reading / Writing", value: props.chkReadingWriting},
        {id: "chkSingingDancing", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Singing / Dancing", value: props.chkSingingDancing},
        {id: "chkSwimming", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Swimming", value: props.chkSwimming},
        {id: "chkVideoGames", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Video Games", value: props.chkVideoGames},
        {id: "chkWalkingRunning", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Walking / Running", value: props.chkWalkingRunning},
        {id: "chkWatchingTV", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Watching TV", value: props.chkWatchingTV},
        {id: "chkActivityOther", name: "activitytypes", inputType: "checkbox", required: false, labelText: "Other", value: props.chkActivityOther},
    ];

    const formInputs = labeledInputs(inputs);

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Favorite Activities</BodyHeader>
            {formInputs}
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
                <Button type="button" name="btnClear" value="Clear" />
            </div>
        </form>
    );
};

export default ActivityInfo;