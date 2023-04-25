import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHouse, faUserGear, faUsersGear, faPeopleGroup, faPeopleRoof, faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import classes from './left.module.css';

const Left = () => {
    const location = useLocation();
    console.log(location);

    const myIcons = {
        house: faHouse,
        newspaper: faNewspaper,
        userGear: faUserGear,
        usersGear: faUsersGear,
        peopleGroup: faPeopleGroup,
        peopleRoof: faPeopleRoof,
    }
    
    return (
        <React.Fragment>
            <Navbar key="left" className={`${classes.left} ${classes.scrollable} ${classes.noScrollbars}`}>
                <Nav defaultActiveKey="#" activeKey={location.pathname}>
                    <Nav.Link as={Link} to={"/"} eventKey="/" href="#">
                        <p className={classes.menuButtonBackground}><FontAwesomeIcon className={classes.menuButton} icon={myIcons['house']} /></p>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/newFeatures"} eventKey="/newFeatures" href="#newFeatures">
                        <p className={classes.menuButtonBackground}><FontAwesomeIcon className={classes.menuButton} icon={myIcons['newspaper']} /></p>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/userSettings"} eventKey="/userSettings" href="#userSettings">
                        <p className={classes.menuButtonBackground}><FontAwesomeIcon className={classes.menuButton} icon={myIcons['userGear']} /></p>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/friendSettings"} eventKey="/friendSettings" href="#friendSettings">
                        <p className={classes.menuButtonBackground}><FontAwesomeIcon className={classes.menuButton} icon={myIcons['usersGear']} /></p>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/groupSettings"} eventKey="/groupSettings" href="#groupSettings">
                        <p className={classes.menuButtonBackground}><FontAwesomeIcon className={classes.menuButton} icon={myIcons['peopleGroup']} /></p>
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/communitySettings"} eventKey="/communitySettings" href="#communitySettings">
                        <p className={classes.menuButtonBackground}><FontAwesomeIcon className={classes.menuButton} icon={myIcons['peopleRoof']} /></p>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </React.Fragment>
    );
}

export default Left;