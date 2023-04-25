import React, { Fragment } from "react";
// import CheckboxGroup from 'react-checkbox-group';
import DefaultPage from '../../../UI/DefaultPage/DefaultPage';
import BodyHeader from "../../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../../UI/LeftLabelInput/LeftLabelInput";
import Label from "../../../UI/Label/Label";
import Button from "../../../UI/Button/Button";
import classes from './userSettings.module.css';
import { Container } from "react-bootstrap";

export default function userSettings(props) {
    return (
        <Fragment>
            <DefaultPage headerText="User Information (required fields are in bold.)">
                <Container className={classes.body}>
                    <BodyHeader>Account Information</BodyHeader>
                    <div className={classes.formRow}>
                        <LeftLabelInput name="txtFirstName" inputType="text" className={classes.leftLabelInput}
                            required={true}
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            labelText="First Name"
                        >
                            {props.firstName}
                        </LeftLabelInput>
                        <LeftLabelInput name="txtLastName" inputType="text" className={classes.LeftLabelInput}
                            required={true}
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            labelText="Last Name"
                        >
                            {props.lastName}
                        </LeftLabelInput>
                    </div>
                    <div className={classes.formRow}>
                        <Label className={classes.label} text="Age Range" />
                        <LeftLabelInput name="age" inputType="radio" className={classes.LeftLabelInput}
                            required={true}
                            labelClassName={classes.labelTextShort}
                            inputClassName={classes.smallInput}
                            labelText="Under 18"
                            value="under18"
                            checked="checked"
                        />
                        <LeftLabelInput name="age" inputType="radio" className={classes.LeftLabelInput}
                            required={true}
                            labelClassName={classes.labelTextShort}
                            inputClassName={classes.smallInput}
                            labelText="18 or Older"
                            value="18orOlder"
                        />
                    </div>
                    <div className={classes.formRow}>
                        <LeftLabelInput name="txtEmail" inputType="email" className={classes.LeftLabelInput}
                            required={false}
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            labelText="Email"
                        >
                            {props.email}
                        </LeftLabelInput>
                    </div>
                    <div className={classes.formRow}>
                        <LeftLabelInput name="txtUsername" inputType="text" className={classes.LeftLabelInput}
                            required={true}
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            labelText="Username"
                        >
                            {props.username}
                        </LeftLabelInput>
                    </div>
                    <div className={classes.formRow}>
                        <LeftLabelInput name="txtPassword" inputType="password" className={classes.LeftLabelInput}
                            required={true}
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            labelText="Password"
                        >
                            {props.password}
                        </LeftLabelInput>
                        <LeftLabelInput name="txtConfirmPassword" inputType="password" className={classes.LeftLabelInput}
                            required={true}
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            labelText="Confirm Password"
                        />
                    </div>

                    <BodyHeader>Location Information (optional)</BodyHeader>
                    <div className={classes.formRow}>
                        <LeftLabelInput name="txtCity" inputType="text"
                            required={false}
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            labelText="City"
                        >
                            {props.city}
                        </LeftLabelInput>
                        <LeftLabelInput name="txtState" inputType="text"
                            required={false}
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            labelText="State/Province"
                        >
                            {props.state}
                        </LeftLabelInput>
                    </div>
                    <div className={classes.formRow}>
                        <LeftLabelInput name="txtCountry" inputType="text"
                            required={false}
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            labelText="Country"
                        >
                            {props.country}
                        </LeftLabelInput>
                    </div>

                    <BodyHeader>&nbsp;</BodyHeader>
                    <div className={classes.formRow}>
                        <Button type="submit" name="btnSubmit" value="Submit" />
                        <Button type="button" name="btnClear" value="Clear" />
                    </div>
                </Container>
            </DefaultPage>

            <DefaultPage headerText="User Interests (Optional &mdash; People and Community Suggestions will be based on these values.)">
                <Container className={classes.body}>
                    <div className={classes.formRow}>
                        <Label className={classes.label} text="Describe Yourself" />
                        <textarea name="txtDesc" className={classes.textarea} readOnly={false} disabled={false}>{props.userDesc}</textarea>
                    </div>
                    <BodyHeader>Favorite Types of Food</BodyHeader>
                        <div className={classes.formRow}>
                        <LeftLabelInput name="chkCuisineType" inputType="checkbox" className={classes.LeftLabelInput}
                            required={false}
                            labelClassName={classes.labelText}
                            inputClassName={classes.smallInput}
                            labelText="American?"
                        >
                            {props.chkAmerican}
                        </LeftLabelInput>
                        <LeftLabelInput name="chkCuisineType" inputType="checkbox" className={classes.LeftLabelInput}
                            required={false}
                            labelClassName={classes.labelText}
                            inputClassName={classes.smallInput}
                            labelText="Latin/Mexican"
                        >
                            {props.chkMexican}
                        </LeftLabelInput>
                        <LeftLabelInput name="chkCuisineType" inputType="checkbox" className={classes.LeftLabelInput}
                            required={false}
                            labelClassName={classes.labelText}
                            inputClassName={classes.smallInput}
                            labelText="Slavic"
                        >
                            {props.chkSlavic}
                        </LeftLabelInput>
                        <LeftLabelInput name="chkCuisineType" inputType="checkbox" className={classes.LeftLabelInput}
                            required={false}
                            labelClassName={classes.labelText}
                            inputClassName={classes.smallInput}
                            labelText="Mediterranian"
                        >
                            {props.chkMediterranian}
                        </LeftLabelInput>
                    </div>
                    <div className={classes.formRow}>
                        <LeftLabelInput name="chkCuisineType" inputType="checkbox" className={classes.LeftLabelInput}
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

                    <BodyHeader>Technical Aptitude</BodyHeader>
                    <div className={classes.formRow}>
                        <LeftLabelInput name="chkTechAptitude" inputType="checkbox"
                            required={false}
                            labelClassName={classes.labelText}
                            inputClassName={classes.smallInput}
                            labelText="Digital Art/Media or 3D Modelling"
                        >
                            {props.chkDigitalMedia}
                        </LeftLabelInput>
                        <LeftLabelInput name="chkTechAptitude" inputType="checkbox"
                            required={false}
                            labelClassName={classes.labelText}
                            inputClassName={classes.smallInput}
                            labelText="Web/Mobile Development"
                        >
                            {props.chkSoftwareDevelopment}
                        </LeftLabelInput>
                        <LeftLabelInput name="chkTechAptitude" inputType="checkbox"
                            required={false}
                            labelClassName={classes.labelText}
                            inputClassName={classes.smallInput}
                            labelText="Game Development"
                        >
                            {props.chkGameDevelopment}
                        </LeftLabelInput>
                        <LeftLabelInput name="chkTechAptitude" inputType="checkbox"
                            required={false}
                            labelClassName={classes.labelText}
                            inputClassName={classes.smallInput}
                            labelText="Office Software Skills"
                        >
                            {props.chkSoftwareSkills}
                        </LeftLabelInput>
                    </div>

                    <BodyHeader>&nbsp;</BodyHeader>
                    <div className={classes.formRow}>
                        <Button type="submit" name="btnSubmit" value="Submit" />
                        <Button type="button" name="btnClear" value="Clear" />
                    </div>
                </Container>
           </DefaultPage>
        </Fragment>
    );
}