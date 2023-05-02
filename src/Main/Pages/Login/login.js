import React, { Fragment, useState, useEffect, useReducer, useContext } from "react";
import AuthContext from "../../../store/auth-context";
import DefaultPage from "../../../UI/DefaultPage/DefaultPage";
import LeftLabelInput from "../../../UI/LeftLabelInput/LeftLabelInput";
import Button from "../../../UI/Button/Button";
import classes from './login.module.css';

const usernameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 11 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 11}
    }
    if (action.type === 'CLEAR') {
        return { value: '', isValid: null}
    }
}

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 7 && hasNumber(action.value)};
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 7 && hasNumber(state.value)};
    }
    if (action.type === 'CLEAR') {
        console.log('clear');
        return { value: '', isValid: null}
    }
}

const hasNumber = (val) => {
    return /\d/.test(val);
}

export default function Login() {
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

    const clearFields = () => {
        console.log('hello?');
        dispatchUsername({type: 'CLEAR'});
        dispatchPassword({type: 'CLEAR'});
    }

    return (
        <Fragment>
            <DefaultPage headerText="Login">
                {!authCtx.isLoggedIn &&
                    <form onSubmit={submitHandler}>
                        <div>
                            <LeftLabelInput
                                name="txtUsername"
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
                            <Button type="submit" name="btnSubmit" value="Login" disabled={!formIsValid} />
                            <Button type="button" name="btnClear" value="Clear" onClick={clearFields} />
                        </div>
                    </form>
                }
                {authCtx.isLoggedIn && 
                    <>
                        <div>
                            Welcome {usernameState.value}!
                        </div>
                        <div className={classes.formRow}>
                            <Button type="button" name="btnLogout" value="Log Out" onClick={authCtx.onLogout} />
                        </div>
                    </>
                }
            </DefaultPage>
        </Fragment>
    );
}