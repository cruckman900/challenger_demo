import React from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../UI/LeftLabelInput/LeftLabelInput";
import Button from "../../UI/Button/Button";
import classes from './userSettings.module.css';

const MusicInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Favorite Music Types</BodyHeader>
            <div className={classes.formRow}>
                <LeftLabelInput name="chkMusicType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Country"
                >
                    {props.chkCountry}
                </LeftLabelInput>
                <LeftLabelInput name="chkMusicType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Jazz"
                >
                    {props.chkJazz}
                </LeftLabelInput>
                <LeftLabelInput name="chkMusicType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Pop"
                >
                    {props.chkPop}
                </LeftLabelInput>
                <LeftLabelInput name="chkMusicType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Regae"
                >
                    {props.chkRegae}
                </LeftLabelInput>
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput name="chkMusicType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Rock"
                    >
                    {props.chkRock}
                </LeftLabelInput>
                <LeftLabelInput name="chkMusicType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Metal"
                >
                    {props.chkMetal}
                </LeftLabelInput>
                <LeftLabelInput name="chkMusicType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Folk/Classical"
                >
                    {props.chkClassical}
                </LeftLabelInput>
                <LeftLabelInput name="chkMusicType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Rap"
                >
                    {props.chkRap}
                </LeftLabelInput>
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput name="chkMusicType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Other"
                >
                    {props.chkMusicOther}
                </LeftLabelInput>
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput name="txtFavSong" inputType="text"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.inputStyle}
                    labelText="Favorite Song"
                >
                    {props.txtFavSong}
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

export default MusicInfo;