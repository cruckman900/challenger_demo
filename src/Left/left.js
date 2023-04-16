import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHouse, faUserGear, faUsersGear, faPeopleRoof,
} from '@fortawesome/free-solid-svg-icons';
import classes from './left.module.css';


export default function left() {

    const myIcons = {
        house: faHouse,
        userGear: faUserGear,
        usersGear: faUsersGear,
        peopleRoof: faPeopleRoof,
    }
    
    return (
        <React.Fragment>
            <div className={classes.left}>
                <Link to={"/"} eventkey="/" href="#" className={classes.menuButtonBox}>
                    <FontAwesomeIcon className={classes.menuButton} icon={myIcons['house']}></FontAwesomeIcon>
                </Link>
                <Link to={"/userSettings"} href="/UserSettings" className={classes.menuButtonBox}>
                    <FontAwesomeIcon className={classes.menuButton} icon={myIcons['userGear']}></FontAwesomeIcon>
                </Link>
                <Link to={"/friendSettings"} href="/FriendSettings" className={classes.menuButtonBox}>
                    <FontAwesomeIcon className={classes.menuButton} icon={myIcons['usersGear']}></FontAwesomeIcon>
                </Link>
                <Link to={"/groupSettings"} href="/GroupSettings" className={classes.menuButtonBox}>
                    <FontAwesomeIcon className={classes.menuButton} icon={myIcons['peopleRoof']}></FontAwesomeIcon>
                </Link>
            </div>
        </React.Fragment>
    );
}