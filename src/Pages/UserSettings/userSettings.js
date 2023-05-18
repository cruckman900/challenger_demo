import React, { Fragment, useState } from "react";
import DefaultPage from '../../UI/DefaultPage/DefaultPage';
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../UI/LeftLabelInput/LeftLabelInput";
import Label from "../../UI/Label/Label";
import Button from "../../UI/Button/Button";
import classes from './userSettings.module.css';
import { Container } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faUserPlus, faLocationDot, faUtensils, faTelevision, faRadio, faFootball, faComputer
} from '@fortawesome/free-solid-svg-icons';

export default function UserSettings(props) {
    const [ageSelected, setAgeSelected] = useState('under18');
    const [sexSelected, setSexSelected] = useState(null);
    
    const ageCheckChangedHandler = (event) => {
        setAgeSelected(event.target.value);
    }

    const sexCheckChangedHandler = (event) => {
        setSexSelected(event.target.value);
    }

    const myIcons = {
        userPlus: faUserPlus,
        locationDot: faLocationDot,
        utensils: faUtensils,
        television: faTelevision,
        radio: faRadio,
        football: faFootball,
        computer: faComputer,
    }

    return (
        <Fragment>
            <DefaultPage headerText="User Information">
                <Tabs selectedTabClassName={classes.selectedTab}>
                    <TabList className={classes.tabList}>
                        <Tab><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['userPlus']} /></Tab>
                        {
                            ageSelected !== 'under18' && (
                                <Tab><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['locationDot']} /></Tab>
                            )
                        }
                        <Tab><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['utensils']} /></Tab>
                        <Tab><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['television']} /></Tab>
                        <Tab><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['radio']} /></Tab>
                        <Tab><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['football']} /></Tab>
                        <Tab><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['computer']} /></Tab>
                    </TabList>

                    <TabPanel>
                        <BodyHeader>Account Information</BodyHeader>
                        <div className={classes.formRow}>
                            <LeftLabelInput name="txtFirstName" inputType="text"
                                required={true}
                                labelClassName={classes.labelText}
                                inputClassName={classes.inputStyle}
                                labelText="First Name"
                            >
                                {props.firstName}
                            </LeftLabelInput>
                            <LeftLabelInput name="txtLastName" inputType="text"
                                required={true}
                                labelClassName={classes.labelText}
                                inputClassName={classes.inputStyle}
                                labelText="Last Name"
                            >
                                {props.lastName}
                            </LeftLabelInput>
                        </div>
                        <div className={classes.formRow}>
                            <Label className={`${classes.label} ${classes.required}`} text="Age Range" />
                            <LeftLabelInput name="age" inputType="radio" className={classes.indentedInput}
                                required={true}
                                labelClassName={classes.labelTextShort}
                                inputClassName={classes.smallInput}
                                labelText="Under 18"
                                value="under18"
                                checked={ageSelected === 'under18'}
                                onChange={ageCheckChangedHandler}
                            />
                            <LeftLabelInput name="age" inputType="radio" className={classes.indentedInput}
                                required={true}
                                labelClassName={classes.labelTextShort}
                                inputClassName={classes.smallInput}
                                labelText="18 or Older"
                                value="18orOlder"
                                checked={ageSelected === '18orOlder'}
                                onChange={ageCheckChangedHandler}
                            />
                        </div>
                        <div className={classes.formRow}>
                            <Label className={classes.label} text="Sex" />
                            <LeftLabelInput name="sex" inputType="radio" className={classes.indentedInput}
                                required={false}
                                labelClassName={classes.labelTextShort}
                                inputClassName={classes.smallInput}
                                labelText="Male"
                                value="male"
                                checked={sexSelected === 'male'}
                                onChange={sexCheckChangedHandler}
                            />
                            <LeftLabelInput name="sex" inputType="radio" className={classes.indentedInput}
                                required={false}
                                labelClassName={classes.labelTextShort}
                                inputClassName={classes.smallInput}
                                labelText="Female"
                                value="female"
                                checked={sexSelected === 'female'}
                                onChange={sexCheckChangedHandler}
                            />
                        </div>
                        <div className={classes.formRow}>
                            <LeftLabelInput name="txtEmail" inputType="email"
                                required={true}
                                labelClassName={classes.labelText}
                                inputClassName={classes.inputStyle}
                                labelText="Email"
                            >
                                {props.email}
                            </LeftLabelInput>
                        </div>
                        <div className={classes.formRow}>
                            <LeftLabelInput name="txtUsername" inputType="text"
                                required={true}
                                labelClassName={classes.labelText}
                                inputClassName={classes.inputStyle}
                                labelText="Username"
                            >
                                {props.username}
                            </LeftLabelInput>
                        </div>
                        <div className={classes.formRow}>
                            <LeftLabelInput name="txtPassword" inputType="password"
                                required={true}
                                labelClassName={classes.labelText}
                                inputClassName={classes.inputStyle}
                                labelText="Password"
                            >
                                {props.password}
                            </LeftLabelInput>
                            <LeftLabelInput name="txtConfirmPassword" inputType="password"
                                required={true}
                                labelClassName={classes.labelText}
                                inputClassName={classes.inputStyle}
                                labelText="Confirm Password"
                            />
                        </div>
                        <div className={classes.formRow}>
                            <Label className={classes.label} text="Describe Yourself" />
                            <textarea name="txtDesc" className={classes.textarea} readOnly={false} disabled={false}>{props.userDesc}</textarea>
                        </div>
                    </TabPanel>
                    {
                        ageSelected !== 'under18' && (
                            <TabPanel>
                                <BodyHeader>Location (Optional)</BodyHeader>
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
                            </TabPanel>
                        )
                    }
                    <TabPanel>
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
                    </TabPanel>
                    <TabPanel>
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
                    </TabPanel>
                    <TabPanel>
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
                    </TabPanel>
                    <TabPanel>
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
                    </TabPanel>
                    <TabPanel>
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
                    </TabPanel>
                </Tabs>
                <BodyHeader>&nbsp;</BodyHeader>

                <Container className={classes.body}>
                    <form>
                        <div className={classes.formRow}>
                            <Button type="submit" name="btnSubmit" value="Submit" />
                            <Button type="button" name="btnClear" value="Clear" />
                        </div>
                    </form>
                </Container>
            </DefaultPage>
        </Fragment>
    );
}