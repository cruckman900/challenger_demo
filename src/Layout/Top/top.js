import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from './top.module.css';
import font from '../fonts.module.css';
import logo from '../assets/images/logo.png';
import { Nav, Navbar } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

export default function Top() {
    const ctx = useContext(AuthContext);

    const location = useLocation();

    return (
        <React.Fragment>
            <div className={classes.top}>
                <span className={`${classes.topText} ${font.Kochire}`}>ChatterboxSM</span>
                <span className={classes.logo}><img src={logo} alt="logo" /></span>
                <Navbar key="top" className={classes.navbar}>
                    <Nav activeKey={location.pathname}>
                        {!ctx.isLoggedIn && <Nav.Link as={Link} to={"/login"} eventKey="/login" href="#login" className={classes.topNav}>Login</Nav.Link> }
                        {ctx.isLoggedIn && <Nav.Link as={Link} to={"/login"} eventKey="/login" href="#login" className={classes.topNav} onClick={ctx.onLogout}>Log Out</Nav.Link>}
                        <Nav.Link as={Link} to={"/donations"} eventKey="/donations" href="#donations" className={classes.topNav}>Donate</Nav.Link>
                        <Nav.Link as={Link} to={"/suggestions"} eventKey="/suggestions" href="#suggestions" className={classes.topNav}>Suggest</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </React.Fragment>
    );
}