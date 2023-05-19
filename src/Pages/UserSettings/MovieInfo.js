import React from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../UI/LeftLabelInput/LeftLabelInput";
import Button from "../../UI/Button/Button";
import classes from './userSettings.module.css';

const MovieInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Favorite Movie/TV/Literature Types</BodyHeader>
            <div className={classes.formRow}>
                <LeftLabelInput name="chkLiteratureType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="History"
                >
                    {props.chkHistory}
                </LeftLabelInput>
                <LeftLabelInput name="chkLiteratureType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Religion"
                >
                    {props.chkReligion}
                </LeftLabelInput>
                <LeftLabelInput name="chkLiteratureType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Drama"
                >
                    {props.chkDrama}
                </LeftLabelInput>
                <LeftLabelInput name="chkLiteratureType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Mystery"
                >
                    {props.chkMystery}
                </LeftLabelInput>
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput name="chkLiteratureType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Sci-Fi"
                    >
                    {props.chkSciFi}
                </LeftLabelInput>
                <LeftLabelInput name="chkLiteratureType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Suspense/Thriller"
                >
                    {props.chkThriller}
                </LeftLabelInput>
                <LeftLabelInput name="chkLiteratureType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Comedy"
                >
                    {props.chkComedy}
                </LeftLabelInput>
                <LeftLabelInput name="chkLiteratureType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Romance"
                >
                    {props.chkRomance}
                </LeftLabelInput>
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput name="chkLiteratureType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Action"
                >
                    {props.chkAction}
                </LeftLabelInput>
                <LeftLabelInput name="chkLiteratureType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Nature"
                >
                    {props.chkNature}
                </LeftLabelInput>
                <LeftLabelInput name="chkLiteratureType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Sports"
                >
                    {props.chkLitSports}
                </LeftLabelInput>
                <LeftLabelInput name="chkLiteratureType" inputType="checkbox"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.smallInput}
                    labelText="Other"
                >
                    {props.chkLitOther}
                </LeftLabelInput>
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput name="txtFavBook" inputType="text"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.inputStyle}
                    labelText="Favorite Book"
                >
                    {props.txtFavBook}
                </LeftLabelInput>
                <LeftLabelInput name="txtFavMovieTV" inputType="text"
                    required={false}
                    labelClassName={classes.labelText}
                    inputClassName={classes.inputStyle}
                    labelText="Favorite Video"
                >
                    {props.txtFavMovieTV}
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

export default MovieInfo;