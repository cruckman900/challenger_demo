import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHouse, faUserGear, faUsersGear, faPeopleRoof,
} from '@fortawesome/free-solid-svg-icons';
import classes from './left.module.css';

const Left = () => {
    const location = useLocation();
    console.log(location);

    const myIcons = {
        house: faHouse,
        userGear: faUserGear,
        usersGear: faUsersGear,
        peopleRoof: faPeopleRoof,
    }
    
    return (
        <React.Fragment>
            <Nav className={classes.left} defaultActiveKey="#" activeKey={location.pathname} justify>
                <Nav.Link as={Link} to={"/"} eventKey="/" href="#">
                    <FontAwesomeIcon className={classes.menuButton} icon={myIcons['house']}></FontAwesomeIcon>
                </Nav.Link>
                <Nav.Link as={Link} to={"/UserSettings/userSettings"} eventKey="/UserSettings/userSettings" href="#userSettings">
                    <FontAwesomeIcon className={classes.menuButton} icon={myIcons['userGear']}></FontAwesomeIcon>
                </Nav.Link>
                <Nav.Link as={Link} to={"/FriendSettings/friendSettings"} eventKey="/FriendSettings/friendSettings" href="#friendSettings">
                    <FontAwesomeIcon className={classes.menuButton} icon={myIcons['usersGear']}></FontAwesomeIcon>
                </Nav.Link>
                <Nav.Link as={Link} to={"/GroupSettings/groupSettings"} eventKey="/GroupSettings/groupSettings" href="#groupSettings">
                    <FontAwesomeIcon className={classes.menuButton} icon={myIcons['peopleRoof']}></FontAwesomeIcon>
                </Nav.Link>
            </Nav>
        </React.Fragment>
    );
}

export default Left;