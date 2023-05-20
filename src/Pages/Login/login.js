import React, { Fragment, useState, useEffect, useReducer, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Modal from "../../UI/Modal/Modal";
import Card from "../../UI/Card/Card";
import LeftLabelInput from "../../UI/LeftLabelInput/LeftLabelInput";
import Button from "../../UI/Button/Button";
import classes from './login.module.css';

const hasNumber = (val) => {
    return /\d/.test(val);
}

const usernameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 11 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 11}
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

    const { isValid: usernameIsValid } = usernameState;
    const { isValid: passwordIsValid } = passwordState;

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

    const validateUsernameHandler = () => {
        dispatchUsername({type: 'INPUT_BLUR'});
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: 'INPUT_BLUR'});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        authCtx.onLogin(usernameState.value, passwordState.value);
    }

    return (
        <Modal onClose={props.onClose}>
            <Card headerText="Login" isOpened={true}>
                {!authCtx.isLoggedIn &&
                    <form onSubmit={submitHandler}>
                        <div>
                            <LeftLabelInput
                                name="txtUsername"
                                title="Username"
                                placeholder="12 or more chars"
                                inputType="text"
                                className={classes.LeftLabelInput}
                                required={true}
                                labelClassName={classes.labelText}
                                inputClassName={classes.inputStyle}
                                labelText="Username"
                                value={usernameState.value}
                                onChange={usernameChangeHandler}
                                onBlur={validateUsernameHandler}
                                Error={!usernameState.isValid}
                                Valid={usernameState.isValid}
                            ></LeftLabelInput>
                        </div>
                        <div>
                            <LeftLabelInput
                                name="txtPassword"
                                title="Password"
                                placeholder="8+ chars / 1+ numbers"
                                inputType="password"
                                className={classes.LeftLabelInput}
                                required={true}
                                labelClassName={classes.labelText}
                                inputClassName={classes.inputStyle}
                                labelText="Password"
                                value={passwordState.value}
                                onChange={passwordChangeHandler}
                                onBlur={validatePasswordHandler}
                                Error={!passwordState.isValid}
                                Valid={passwordState.isValid}
                            ></LeftLabelInput>
                        </div>
                        <div className={classes.formRow}>
                            <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Log In" disabled={!formIsValid} />
                            <Button type="button" name="btnCancel" value="Cancel" onClick={props.onClose} />
                        </div>
                    </form>
                }
                {authCtx.isLoggedIn && 
                    <>
                        <p className={classes.welcome}>Welcome <span className={classes.name}>{usernameState.value}</span>!</p>
                        <div className={classes.formRow}>
                            <Button className={classes.primaryBtn} type="button" name="btnLogout" value="Log Out" onClick={authCtx.onLogout} />
                            <Button type="button" name="btnClose" value="Close" onClick={props.onClose} />
                        </div>
                    </>
                }
            </Card>
        </Modal>
    );
}