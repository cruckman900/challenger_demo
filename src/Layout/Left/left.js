import React, { useContext } from 'react'
import AuthContext from '../../store/auth-context'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHouse, faUserGear, faUsersGear, faPeopleGroup, faPeopleRoof, faNewspaper, faGear, faScrewdriverWrench
} from '@fortawesome/free-solid-svg-icons'
import classes from './left.module.css'

const Left = () => {
    const ctx = useContext(AuthContext)
    const location = useLocation()

    const myIcons = {
        screwdriverWrench: faScrewdriverWrench,
        house: faHouse,
        newspaper: faNewspaper,
        userGear: faUserGear,
        usersGear: faUsersGear,
        peopleGroup: faPeopleGroup,
        peopleRoof: faPeopleRoof,
        gear: faGear
    }

    return (
        <React.Fragment>
            <Navbar key="left" className={`${classes.left} ${classes.scrollable} ${classes.noScrollbars}`}>
                <Nav defaultActiveKey="#" activeKey={location.pathname}>
                    {ctx.isAdmin &&
                        <Nav.Link as={Link} to={'/'} eventKey="/admin" href="#admin">
                            <p className={classes.menuButtonBackground}><div className={classes.svgContainer}><FontAwesomeIcon className={classes.menuButton} icon={myIcons.screwdriverWrench} /></div></p>
                        </Nav.Link>
                    }
                    <Nav.Link as={Link} to={'/'} eventKey="/" href="#" alt="Home">
                        <p className={classes.menuButtonBackground}><div className={classes.svgContainer}><FontAwesomeIcon className={classes.menuButton} icon={myIcons.house} /></div></p>
                    </Nav.Link>
                    <Nav.Link as={Link} to={'/userSettings'} eventKey="/userSettings" href="#userSettings">
                        <p className={classes.menuButtonBackground}><div className={classes.svgContainer}><FontAwesomeIcon className={classes.menuButton} icon={myIcons.userGear} /></div></p>
                    </Nav.Link>
                    {ctx.isLoggedIn &&
                        <>
                            <Nav.Link as={Link} to={'/friendSettings'} eventKey="/friendSettings" href="#friendSettings">
                                <p className={classes.menuButtonBackground}><div className={classes.svgContainer}><FontAwesomeIcon className={classes.menuButton} icon={myIcons.usersGear} /></div></p>
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/groupSettings'} eventKey="/groupSettings" href="#groupSettings">
                                <p className={classes.menuButtonBackground}><div className={classes.svgContainer}><FontAwesomeIcon className={classes.menuButton} icon={myIcons.peopleGroup} /></div></p>
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/communitySettings'} eventKey="/communitySettings" href="#communitySettings">
                                <p className={classes.menuButtonBackground}><div className={classes.svgContainer}><FontAwesomeIcon className={classes.menuButton} icon={myIcons.peopleRoof} /></div></p>
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/systemSettings'} eventKey="/systemSettings" href="#systemSettings">
                                <p className={classes.menuButtonBackground}><div className={classes.svgContainer}><FontAwesomeIcon className={classes.menuButton} icon={myIcons.gear} /></div></p>
                            </Nav.Link>
                        </>
                    }
                    <Nav.Link as={Link} to={'/newFeatures'} eventKey="/newFeatures" href="#newFeatures">
                        <p className={classes.menuButtonBackground}><div className={classes.svgContainer}><FontAwesomeIcon className={classes.menuButton} icon={myIcons.newspaper} /></div></p>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </React.Fragment>
    )
}

export default Left
