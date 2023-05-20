import React, { Fragment, useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faUserPlus, faLocationDot, faUtensils, faTelevision, faRadio, faFootball, faComputer
} from '@fortawesome/free-solid-svg-icons';

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

import DefaultPage from '../../UI/DefaultPage/DefaultPage';
import Note from "../../UI/Note/Note";

import AccountInfo from "./AccountInfo";
import LocationInfo from "./LocationInfo";
import FoodInfo from "./FoodInfo";
import MovieInfo from "./MovieInfo";
import ComputerInfo from "./ComputerInfo";
import MusicInfo from "./MusicInfo";
import ActivityInfo from "./ActivityInfo";

import classes from './userSettings.module.css';

export default function UserSettings(props) {
    const myIcons = {
        userPlus: faUserPlus,
        locationDot: faLocationDot,
        utensils: faUtensils,
        television: faTelevision,
        radio: faRadio,
        football: faFootball,
        computer: faComputer,
    };

    const [ageSelected, setAgeSelected] = useState(null);

    const setAgeRange = (value) => {
        setAgeSelected(value);
    };

    const [accountID, setAccountID] = useState(null);

    const setID = (value) => {
        setAccountID(value);
    }

    const [showLocation, setShowLocation] = useState(false);

    useEffect(() => {
        if(ageSelected === 'under18' || ageSelected === null || accountID === null) {
            console.log('Age Selected:', ageSelected);
            setShowLocation(false);
            return;
        }
        setShowLocation(true);
    }, [ageSelected, accountID]);

    return (
        <Fragment>
            <DefaultPage headerText="User Information">
                <Tabs selectedTabClassName={classes.selectedTab}>
                    <TabList className={classes.tabList}>
                        <Tab><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['userPlus']} /></Tab>
                        <Tab disabled={!showLocation && true}><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['locationDot']} /></Tab>
                        <Tab disabled={!accountID && true}><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['utensils']} /></Tab>
                        <Tab disabled={!accountID && true}><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['television']} /></Tab>
                        <Tab disabled={!accountID && true}><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['radio']} /></Tab>
                        <Tab disabled={!accountID && true}><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['football']} /></Tab>
                        <Tab disabled={!accountID && true}><FontAwesomeIcon className={classes.tabIcon} icon={myIcons['computer']} /></Tab>
                    </TabList>

                    <TabPanel><AccountInfo setAgeRange={setAgeRange} setAccountID={setID} /></TabPanel>
                    <TabPanel><LocationInfo acctID={accountID} /></TabPanel>
                    <TabPanel><FoodInfo acctID={accountID} /></TabPanel>
                    <TabPanel><MovieInfo acctID={accountID} /></TabPanel>
                    <TabPanel><MusicInfo acctID={accountID} /></TabPanel>
                    <TabPanel><ActivityInfo acctID={accountID} /></TabPanel>
                    <TabPanel><ComputerInfo acctID={accountID} /></TabPanel>
                </Tabs>
            </DefaultPage>
        </Fragment>
    );
}