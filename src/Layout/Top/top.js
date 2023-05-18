import React, { Fragment, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Login from "../../Pages/Login/login"
import Button from "../../UI/Button/Button";
import classes from './top.module.css';
import font from '../../fonts.module.css';
import logo from '../../assets/images/logo.png';
import { Nav, Navbar } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

export default function Top() {
    const ctx = useContext(AuthContext);

    const [loginIsShown, setLoginIsShown] = useState(false);

    const showLoginHandler = () => {
        setLoginIsShown(true);
    }

    const hideLoginHandler = () => {
        setLoginIsShown(false);
    }

    const location = useLocation();

    return (
        <Fragment>
            <div className={classes.top}>
                <span className={`${classes.topText} ${font.Kochire}`}>ChatterboxSM</span>
                <span className={classes.logo}><img src={logo} alt="logo" /></span>
                <Navbar key="top" className={classes.navbar}>
                    <Nav activeKey={location.pathname}>
                        {!ctx.isLoggedIn && <Button href="#" className={classes.link} onClick={showLoginHandler} value="Log In" />}
                        {
                            ctx.isLoggedIn && (
                                <Fragment>
                                    <Button href="#" className={classes.link} onClick={ctx.onLogout} value="Log Out" />
                                    <Nav.Link as={Link} to={"/donations"} eventKey="/donations" href="#donations" className={classes.topNav}>Donate</Nav.Link>
                                    <Nav.Link as={Link} to={"/suggestions"} eventKey="/suggestions" href="#suggestions" className={classes.topNav}>Suggest</Nav.Link>
                                </Fragment>
                            )
                        }
                    </Nav>
                </Navbar>
                {loginIsShown && <Login onClose={hideLoginHandler} />}
            </div>
        </Fragment>
    );
}