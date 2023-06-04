import React, { Fragment, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Login from "../../Pages/Login/login"
import Button from "../../UI/Button/Button";
import { Container, Row, Col } from "reactstrap";
import { Nav, Navbar } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import { getUserById } from '../../AsyncDataCaller/AsyncDataCaller';
import { updateUserInfo } from "../../DataHandlers/AccountInfoDataHandler";
import classes from './top.module.css';

export default function Top() {
    const authCtx = useContext(AuthContext);

    const [loginIsShown, setLoginIsShown] = useState(false);

    const showLoginHandler = () => {
        setLoginIsShown(true);
    }

    const hideLoginHandler = () => {
        setLoginIsShown(false);
    }

    const location = useLocation();

    const performLogout = () => {
        console.log('top.js performLogout userID', authCtx.userID);
        getUserById(authCtx.userID)
            .then((user) => {
                if(typeof user !== 'undefined' && user.data.length > 0) {
                    const data = user.data[0];
                    data.isLoggedIn = false;
                    console.log('top.js performLogout data', data);
                    updateUserInfo(data)
                        .then((updatedUser) => {
                            console.log('top.js performLogout updatedUser:', updatedUser);
                        });
                    authCtx.onLogout();
                } else {
                    console.log('top.js performLogout', 'Could not retrieve user');
                }
            });
    }

    return (
        <Fragment>
            <div className={classes.top}>
                <Container>
                    <Row>
                        <Col>
                            <span className={`${classes.topText}`}>ChatterboxSM</span>
                            <span className={classes.logo}><img src={logo} alt="logo" /></span>
                        </Col>
                        <Col>
                            <div className={classes.header}>
                                <span className={classes.headerText}>
                                    <a href="https://cruckman.com" alt="cruckman.com" target="_blank" rel="noreferrer">By <i>CRUCKMAN</i></a>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Navbar key="top" className={classes.navbar}>
                    <Nav activeKey={location.pathname}>
                        {!authCtx.isLoggedIn && <Button href="#" className={classes.link} onClick={showLoginHandler} value="Log In" />}
                        {authCtx.isLoggedIn && (
                            <Fragment>
                                <Button href="#" className={classes.link} onClick={performLogout} value="Log Out" />
                                <Nav.Link as={Link} to={"/donations"} eventKey="/donations" href="#donations" className={classes.navLink}>Donate</Nav.Link>
                                <Nav.Link as={Link} to={"/suggestions"} eventKey="/suggestions" href="#suggestions" className={classes.navLink}>Suggest</Nav.Link>
                            </Fragment>
                        )}
                    </Nav>
                </Navbar>
                {loginIsShown && <Login onClose={hideLoginHandler} />}
            </div>
        </Fragment>
    );
}