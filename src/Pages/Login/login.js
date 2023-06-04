import React, { Fragment, useState, useEffect, useReducer, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Modal from "../../UI/Modal/Modal";
import Card from "../../UI/Card/Card";
import LeftLabelInput from "../../UI/LeftLabelInput/LeftLabelInput";
import Button from "../../UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from '@fortawesome/free-solid-svg-icons';

import { getUserByUserAndPass } from '../../AsyncDataCaller/AsyncDataCaller';
import { updateUserInfo } from "../../DataHandlers/AccountInfoDataHandler";
import classes from './login.module.css';

const hasNumber = (val) => {
    return /\d/.test(val);
}

const isEmail = (val) => {
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(val);
}

const usernameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 7 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 7}
    }
}

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 7 && hasNumber(action.value)};
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 7 && hasNumber(state.value)};
    }
}

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 7 && isEmail(action.value)};
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 7 && isEmail(state.value)};
    }
}

export default function Login(props) {
    const authCtx = useContext(AuthContext);

    const [formIsValid, setFormIsValid] = useState(false);

    const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
        value: '',
        isValid: null
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    });

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    });

    const { isValid: usernameIsValid } = usernameState;
    const { isValid: passwordIsValid } = passwordState;
    const { isValid: emailIsValid} = emailState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                usernameIsValid && passwordIsValid
            );
        }, 500);

        return () => {
            clearTimeout(identifier);
        }
    }, [usernameIsValid, passwordIsValid]);

    const usernameChangeHandler = (event) => {
        dispatchUsername({type: 'USER_INPUT', value: event.target.value});
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', value: event.target.value});
    };

    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'USER_INPUT', value: event.target.value});
    };

    const validateUsernameHandler = () => {
        dispatchUsername({type: 'INPUT_BLUR'});
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: 'INPUT_BLUR'});
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR'});
    };

    const [showLoginErrorMessage, setShowLoginErrorMessage] = useState(false);
    const [showForgotScreen, setShowForgotScreen] = useState(false);

    async function submitHandler(event) {
        event.preventDefault();
        getUserByUserAndPass(usernameState.value, passwordState.value)
            .then((user) => {
                if(typeof user !== 'undefined' && user.data.length > 0) {
                    const data = user.data[0];
                    data.isLoggedIn = true
                    console.log('login.js submitHandler data', data);
                    updateUserInfo(data)
                        .then((updatedUser) => {
                            console.log('login.js submitHandler updatedUser:', updatedUser)
                        });
                    authCtx.onLogin(data.USERID, data);
                } else {
                    setShowLoginErrorMessage(true);
                }
            })
            .catch((err) => {
                console.log('login.js submitHandler err', err);
            });
    };

    const forgotUserPassHandler = (event) => {
        setShowForgotScreen(true);
    }

    const emailSubmitHandler = (event) => {
        event.preventDefault();
        props.onClose();
    };

    const logoutAndClose = () => {
        const data = authCtx.user;
        data.isLoggedIn = false;
        updateUserInfo(data);
        authCtx.onLogout();
        props.onClose();
    }

    return (
        <Modal onClose={props.onClose}>
            <Card headerText="Login" isOpened={true}>
                {!authCtx.isLoggedIn && 
                    <Fragment>
                        {!showForgotScreen && 
                            <form onSubmit={submitHandler}>
                                <div className={classes.formRow}>
                                    <LeftLabelInput
                                        id="txtUsername"
                                        placeholder="8+ characters"
                                        inputType="text"
                                        required={true}
                                        labelText="Username"
                                        labelClassName={classes.labelText}
                                        inputClassName={classes.inputStyle}
                                        value={usernameState.value}
                                        onChange={usernameChangeHandler}
                                        onBlur={validateUsernameHandler}
                                        valid={usernameIsValid}
                                        error={!usernameIsValid}
                                    />
                                </div>
                                <div className={classes.formRow}>
                                    <LeftLabelInput
                                        id="txtPassword"
                                        placeholder="8+ chars with numbers"
                                        inputType="password"
                                        required={true}
                                        labelText="Password"
                                        labelClassName={classes.labelText}
                                        inputClassName={classes.inputStyle}
                                        value={passwordState.value}
                                        onChange={passwordChangeHandler}
                                        onBlur={validatePasswordHandler}
                                        valid={passwordIsValid}
                                        error={!passwordIsValid}
                                    />
                                </div>
                                {showLoginErrorMessage && (
                                    <div className={classes.formRow}>
                                        <div className={classes.errorMessage}>
                                            <FontAwesomeIcon className={classes.tabIcon} icon={faHand} />&nbsp;
                                            <span>Invalid Username or Password.</span>
                                        </div>
                                    </div>
                                )}
                                <div className={classes.formRow}>
                                    <Button type="button" className={classes.link} href="#" onClick={forgotUserPassHandler} value="Forgot User/Pass" />
                                </div>
                                <br />
                                <div className={classes.formRow}>
                                    <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Log In" disabled={!formIsValid} />
                                    <Button type="button" name="btnCancel" value="Cancel" onClick={props.onClose} />
                                </div>
                            </form>
                        }
                    </Fragment>
                }
                {!authCtx.isLoggedIn && 
                    <Fragment>
                        {showForgotScreen &&
                            <form onSubmit={emailSubmitHandler}>
                                <div className={classes.formRow}>
                                    <LeftLabelInput
                                        id="txtEmail"
                                        placeholder="Must be valid"
                                        inputType="email"
                                        required={true}
                                        labelText="Email"
                                        labelClassName={classes.labelText}
                                        inputClassName={classes.inputStyle}
                                        value={emailState.value}
                                        onChange={emailChangeHandler}
                                        onBlur={validateEmailHandler}
                                        valid={emailIsValid}  
                                        error={!emailIsValid}
                                    />
                                        <br />
                                    <div className={classes.formRow}>
                                        <Button className={classes.primaryBtn} type="submit" name="btnSubmitEmail" value="Submit" disabled={!emailIsValid} />
                                        <Button type="button" name="btnCancel" value="Cancel" onClick={props.onClose} />
                                    </div>
                                </div>
                            </form>
                        }
                    </Fragment>
                }
                {authCtx.isLoggedIn && 
                    <Fragment>
                        <div className={classes.formRow}>
                            <p className={classes.welcome}>Welcome <span className={classes.name}>{authCtx.user.firstname}</span>!</p>
                        </div>
                        <div className={classes.formRow}>
                            <Button className={classes.primaryBtn} type="button" name="btnLogout" value="Log Out" onClick={logoutAndClose} />
                            <Button type="button" name="btnClose" value="Close" onClick={props.onClose} />
                        </div>
                    </Fragment>
                }
            </Card>
        </Modal>
    );
}