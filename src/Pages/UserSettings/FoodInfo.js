import React from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../UI/LeftLabelInput/LeftLabelInput";
import Button from "../../UI/Button/Button";
import classes from './userSettings.module.css';

const FoodInfo = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Favorite Types of Food</BodyHeader>
            <div className={classes.formRow}>
            <LeftLabelInput name="chkCuisineType" inputType="checkbox"
                required={false}
                labelClassName={classes.labelText}
                inputClassName={classes.smallInput}
                labelText="American?"
            >
                {props.chkAmerican}
            </LeftLabelInput>
            <LeftLabelInput name="chkCuisineType" inputType="checkbox"
                required={false}
                labelClassName={classes.labelText}
                inputClassName={classes.smallInput}
                labelText="Latin/Mexican"
            >
                {props.chkMexican}
            </LeftLabelInput>
            <LeftLabelInput name="chkCuisineType" inputType="checkbox"
                required={false}
                labelClassName={classes.labelText}
                inputClassName={classes.smallInput}
                labelText="Slavic"
            >
                {props.chkSlavic}
            </LeftLabelInput>
            <LeftLabelInput name="chkCuisineType" inputType="checkbox"
                required={false}
                labelClassName={classes.labelText}
                inputClassName={classes.smallInput}
                labelText="Mediterranian"
            >
                {props.chkMediterranian}
            </LeftLabelInput>
        </div>
        <div className={classes.formRow}>
            <LeftLabelInput name="chkCuisineType" inputType="checkbox"
                required={false}
                labelClassName={classes.labelText}
                inputClassName={classes.smallInput}
                labelText="Italian"
            >
                {props.chkItalian}
            </LeftLabelInput>
            <LeftLabelInput name="chkCuisineType" inputType="checkbox"
                required={false}
                labelClassName={classes.labelText}
                inputClassName={classes.smallInput}
                labelText="French"
            >
                {props.chkFrench}
            </LeftLabelInput>
            <LeftLabelInput name="chkCuisineType" inputType="checkbox"
                required={false}
                labelClassName={classes.labelText}
                inputClassName={classes.smallInput}
                labelText="Russian"
            >
                {props.chkSlavic}
            </LeftLabelInput>
            <LeftLabelInput name="chkCuisineType" inputType="checkbox"
                required={false}
                labelClassName={classes.labelText}
                inputClassName={classes.smallInput}
                labelText="Cajun"
            >
                {props.chkCajun}
            </LeftLabelInput>
        </div>
        <div className={classes.formRow}>
            <LeftLabelInput name="chkCuisineType" inputType="checkbox"
                required={false}
                labelClassName={classes.labelText}
                inputClassName={classes.smallInput}
                labelText="Asian"
            >
                {props.chkAsian}
            </LeftLabelInput>
            <LeftLabelInput name="chkCuisineType" inputType="checkbox"
                required={false}
                labelClassName={classes.labelText}
                inputClassName={classes.smallInput}
                labelText="I only like cookies"
            >
                {props.chkCookies}
            </LeftLabelInput>
            <LeftLabelInput name="chkCuisineType" inputType="checkbox"
                required={false}
                labelClassName={classes.labelText}
                inputClassName={classes.smallInput}
                labelText="Other"
            >
                {props.chkFoodOther}
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

export default FoodInfo;