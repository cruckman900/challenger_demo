import React from "react";
import { Nav, Overlay, OverlayTrigger, PopoverBody, PopoverHeader } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHouse, faUserGear, faUsersGear, faPeopleRoof,
} from '@fortawesome/free-solid-svg-icons';
import classes from './left.module.css';

const Left = () => {
    const location = useLocation();

    const myIcons = {
        house: faHouse,
        userGear: faUserGear,
        usersGear: faUsersGear,
        peopleRoof: faPeopleRoof,
    }
    
    return (
        <React.Fragment>
            <Nav className={classes.left} defaultActiveKey="#" activeKey={location.pathname} justify>
                <Nav.Link as={Link} to={"/"} eventKey="/" href="#" className={classes.menuButtonBox}>
                    <FontAwesomeIcon className={classes.menuButton} icon={myIcons['house']}></FontAwesomeIcon>
                </Nav.Link>
                <Nav.Link as={Link} to={"/userSettings"} eventKey="/userSettings" href="/UserSettings" className={classes.menuButtonBox}>
                    <FontAwesomeIcon className={classes.menuButton} icon={myIcons['userGear']}></FontAwesomeIcon>
                </Nav.Link>
                <Nav.Link as={Link} to={"/friendSettings"} eventKey="/friendSettings" href="/FriendSettings" className={classes.menuButtonBox}>
                    <FontAwesomeIcon className={classes.menuButton} icon={myIcons['usersGear']}></FontAwesomeIcon>
                </Nav.Link>
                <Nav.Link as={Link} to={"/groupSettings"} eventKey="/groupSettings" href="/GroupSettings" className={classes.menuButtonBox}>
                    <FontAwesomeIcon className={classes.menuButton} icon={myIcons['peopleRoof']}></FontAwesomeIcon>
                </Nav.Link>
            </Nav>
        </React.Fragment>
    );
}

export default Left;