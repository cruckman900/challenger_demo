import React, { Fragment, useState } from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../UI/LeftLabelInput/LeftLabelInput";
import Button from "../../UI/Button/Button";
import classes from './userSettings.module.css';

const ActivityInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Favorite Activities</BodyHeader>
            <div className={classes.formRow}>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Classic Sports"
                >
                    {props.chkClsSports}
                </LeftLabelInput>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Boating/Camping"
                >
                    {props.chkBoatCamp}
                </LeftLabelInput>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Hiking/Climbing"
                >
                    {props.chkHikeClimb}
                </LeftLabelInput>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Music Instruments"
                >
                    {props.chkMusicalInst}
                </LeftLabelInput>
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Video Games"
                >
                    {props.chkVideoGames}
                </LeftLabelInput>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Billiards or Darts"
                >
                    {props.chkBarGames}
                </LeftLabelInput>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Swimming"
                >
                    {props.chkSwimming}
                </LeftLabelInput>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Walking/Jogging"
                >
                    {props.chkWalkJog}
                </LeftLabelInput>
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Fishing/Hunting"
                >
                    {props.chkFishHunt}
                </LeftLabelInput>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Archery/Guns"
                >
                    {props.chkArcheryGuns}
                </LeftLabelInput>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Reading/Writing"
                >
                    {props.chkReadingWriting}
                </LeftLabelInput>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Bars/Clubs"
                >
                    {props.chkBarsClubs}
                </LeftLabelInput>
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Singing/Dancing"
                >
                    {props.chkSingDance}
                </LeftLabelInput>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Martial Arts"
                >
                    {props.chkMartialArts}
                </LeftLabelInput>
                <LeftLabelInput name="chkActivities" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Other"
                >
                    {props.chkActivityOther}
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

export default ActivityInfo;