import React, { Fragment, useState, useEffect, useReducer, useContext, useRef, useLayoutEffect } from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../UI/LeftLabelInput/LeftLabelInput";
import Label from "../../UI/Label/Label";
import Note from "../../UI/Note/Note";
import Button from "../../UI/Button/Button";
import Confirmation from "../Login/Confirmation";
import PrivacyPolicy from "../Agreements/PrivacyPolicy";
import TermsOfUse from "../Agreements/TermsOfUse";

import { getUserById, getUserByUserAndPass } from "../../AsyncDataCaller/AsyncDataCaller";
import { getRandomInt, inputUserInfo, updateUserInfo, sendVerifyMail } from "../../DataHandlers/AccountInfoDataHandler";

import AuthContext from "../../store/auth-context";
import classes from './UserSettings.module.css';

const hasNumber = (val) => {
    return /\d/.test(val);
}

const isEmail = (val) => {
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(val);
}

const nameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 0 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 0 };
    }
}

const emailReducer = (state, action, val) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: isEmail(action.value.trim()) };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: isEmail(state.value.trim()) };
    }
 }

const usernameReducer = (state, action, val) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 7 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 7 };
    }
}

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 7 && hasNumber(action.value) };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 7 && hasNumber(state.value) };
    }
}

const AccountInfo = (props) => {
    const authCtx = useContext(AuthContext);

    const [ageSelected, setAgeSelected] = useState('under18');
    const [sexSelected, setSexSelected] = useState('other');
    const [agreeSelected, setAgreeSelected] = useState(false);

    const [screenName, setScreenName] = useState('');
    const [description, setDescription] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [queryType, setQueryType] = useState('insert');

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [message, setMessage] = useState('');

    useEffect(() => {
        if (!formSubmitted) {
            setMessage({
                noteType: 'info',
                headerText: 'Form Handling',
                messageText: 'You must submit this form to unlock the other forms. Bold Items are required fields.'});
        }
    }, [formSubmitted]);

    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    });

    const [firstNameState, dispatchFirstName] = useReducer(nameReducer, {
        value: '',
        isValid: null
    });

    const [lastNameState, dispatchLastName] = useReducer(nameReducer, {
        value: '',
        isValid: null
    });

    const [middleName, setMiddleName] = useState('');

    const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
        value: '',
        isValid: null
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    });

    const { isValid: firstNameIsValid } = firstNameState;
    const { isValid: lastNameIsValid } = lastNameState;
    const { isValid: emailIsValid } = emailState;
    const { isValid: usernameIsValid } = usernameState;
    const { isValid: passwordIsValid } = passwordState;
 
    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                firstNameIsValid &&
                lastNameIsValid &&
                emailIsValid &&
                usernameIsValid &&
                passwordIsValid
            );
        }, 500);

        return () => {
            clearTimeout(identifier);
        }
    }, [firstNameIsValid, lastNameIsValid, emailIsValid, usernameIsValid, passwordIsValid]);

    const firstNameChangeHandler = (event) => {
        dispatchFirstName({type: 'USER_INPUT', value: event.target.value});
    };

    const middleNameChangeHandler = (event) => {
        setMiddleName(event.target.value);
    }

    const lastNameChangeHandler = (event) => {
        dispatchLastName({type: 'USER_INPUT', value: event.target.value});
    };

    const usernameChangeHandler = (event) => {
        dispatchUsername({type: 'USER_INPUT', value: event.target.value});
    };

    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'USER_INPUT', value: event.target.value});
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', value: event.target.value});
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR'});
    };

    const validateFirstNameHandler = () => {
        dispatchUsername({type: 'INPUT_BLUR'});
    };

    const validateLastNameHandler = () => {
        dispatchUsername({type: 'INPUT_BLUR'});
    };

    const validateUsernameHandler = () => {
        dispatchUsername({type: 'INPUT_BLUR'});
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: 'INPUT_BLUR'});
    };

    const ageCheckChangedHandler = (event) => {
        const val = event.target.value;
        setAgeSelected(val);
        props.setAgeRange(val);

    };

    const sexCheckChangedHandler = (event) => {
        setSexSelected(event.target.value);
    };

    const screenNameChangeHandler = (event) => {
        setScreenName(event.target.value);
    };
    
    const [descWordCount, setDescWordCount] = useState(0);
    const [descDisabled, setDescDisabled] = useState(false);

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
        setDescWordCount(event.target.value.length);
    };

    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (+descWordCount > 7999) {
            setDescDisabled(true);
        }
    }, [descWordCount]);

    const [confirmationIsShown, setConfirmationIsShown] = useState(false);

    const [privacyIsShown, setPrivacyIsShown] = useState(false);
    const [termsIsShown, setTermsIsShown] = useState(false);


    const showPrivacyHandler = () => {
        setPrivacyIsShown(true);
    }

    const hidePrivacyHandler = () => {
        setPrivacyIsShown(false);
    }

    const showTermsHandler = () => {
        setTermsIsShown(true);
    }

    const hideTermsHandler = () => {
        setTermsIsShown(false);
    }

    const [verificationcode, setVerificationCode] = useState(null);

    const agreeCheckChangedHandler = () => {
        setAgreeSelected(!agreeSelected);
    };

    useEffect(() => {
        setSubmitDisabled(!agreeSelected);
    }, [agreeSelected]);

    useEffect(() => {
        setVerificationCode(getRandomInt(10000, 99999))
    }, []);

    const [showVerifyLink, setShowVerifyLink] = useState(false);

    const [user, setUser] = useState(null);

    const [fname, setFName] = useState(null);
    const [mname, setMName] = useState(null);
    const [lname, setLName] = useState(null);
    const [sname, setSName] = useState(null);
    const [email, setEmail] = useState(null);
    const [uname, setUName] = useState(null);
    const [password, setPassword] = useState(null);
    const [desc, setDesc] = useState(null);


    useEffect(() => {
        resetForm();
        if (authCtx.isLoggedIn) {
            /* GET user */
            console.log('AccountInfo.js useEffect authCtx.isLoggedIn', authCtx.isLoggedIn);
            getUserById(authCtx.userID)
                .then((user) => {
                    console.log('AccountInfo useEffect user:', user);
                    const thisUser = user.data[0];
                    if (thisUser.USERID) {
                        setUser(thisUser);
                        setDisabled(true);

                        setFName(thisUser.firstname);
                        dispatchFirstName({type: 'USER_INPUT', value: thisUser.firstname});
                        setMName(thisUser.middlename);
                        setLName(thisUser.lastname);
                        dispatchLastName({type: 'USER_INPUT', value: thisUser.lastname});
                        setSName(thisUser.screenname);
                        setEmail(thisUser.email);
                        dispatchEmail({type: 'USER_INPUT', value: thisUser.email});
                        setUName(thisUser.username);
                        dispatchUsername({type: 'USER_INPUT', value: thisUser.username});
                        setPassword(thisUser.password);
                        dispatchPassword({type: 'USER_INPUT', value: thisUser.password});
                        setDesc(thisUser.description);
                        setAgeSelected(thisUser.agerange);
                        setSexSelected(thisUser.gender);

                        props.setAccountID(thisUser.USERID);
                        props.setAgeRange(thisUser.ageSelected);
                    }
                })
                .catch((err) => console.log('AccountInfo.js useEffect err:', err));
        } else {
            setUser(null);
            setDisabled(false);

            resetForm();

            props.setAccountID(null);
            props.setAgeRange(null);
        }
    }, [authCtx.isLoggedIn]);

    const resetForm = () => {
        setFName(null);
        dispatchFirstName({type: 'USER_INPUT', value: ''})
        setMName(null);
        setLName(null);
        dispatchLastName({type: 'USER_INPUT', value: ''})
        setSName(null);
        setEmail(null);
        dispatchEmail({type: 'USER_INPUT', value: ''});
        setUName(null);
        dispatchUsername({type: 'USER_INPUT', value: ''});
        setPassword(null);
        dispatchPassword({type: 'USER_INPUT', value: ''});
        setDesc(null);
        setAgeSelected('under18');
        setSexSelected('other');

        setDisabled(false);
}

    async function hideConfirmationHandler(val) {
        if (+val === verificationcode) {
            user.validated = true;
            await updateUserInfo(user)
                .then(() => {
                    setUser(user);
                    props.setAccountID(user.USERID);
                    props.setAgeRange(user.agerange);
        
                    setMessage({noteType: 'success', headerText: 'Form submitted!', 
                        messageText: 'Account activated!'});
        
                    setValidated(true);
                    setQueryType('update');
                    setShowVerifyLink(false);
                })
                .catch((err) => console.log('AccountInfo.js onSubmitHander insert err:', err));
        } else {
            setMessage({noteType: 'error', headerText: 'Account Not Verified', 
                messageText: 'Click link below to enter your verification code!'
            });
            setShowVerifyLink(true);
        }
        setConfirmationIsShown(false);
    };

    async function onSubmitHandler(event) {
        event.preventDefault();
        if (formIsValid) {
            /* package the data */
            const data = {
                firstname: firstNameState.value,
                middlename: middleName,
                lastname: lastNameState.value,
                screenname: screenName,
                email: emailState.value,
                agerange: ageSelected,
                gender: sexSelected,
                username: usernameState.value,
                password: passwordState.value,
                description: description,
                verificationcode: verificationcode,
                validated: validated
            }

            if (queryType === 'insert') {
                /* POST user */
                await inputUserInfo(data)
                    .then(() => {
                        setTimeout(() => {
                            setConfirmationIsShown(true);
                        }, 500);
                    })
                    .catch((err) => console.log('AccountInfo.js onSubmitHander insert err:', err));
            } else if (queryType === 'update') {
                /* PUT user */
                data.id = authCtx.userID || 0;
                data.verificationcode = verificationcode;
                await updateUserInfo(data)
                    .then((response) => {
                        setFormSubmitted(true);
                    })
                    .catch((err) => console.log('AccountInfo.js onSubmitHander update err:', err));

            }
            
            /* GET user */
            getUserByUserAndPass(usernameState.value, data.password)
                .then((user) => {
                    if (user.USERID !== null) {
                        setUser(user);
                        setDisabled(true);
                        props.setAccountID(user.USERID);
                        props.setAgeRange(user.agerange);
                    } else {
                        setMessage({noteType: 'error', headerText: 'Something went wrong', 
                            messageText: 'Account information has not been saved! Try again, or come back later'
                        });
                    }
                })
                .catch((err) => console.log('AccountInfo.js onSubmitHandler updateHandler err:', err));           
        } else {
            setMessage({
                noteType: 'error',
                headerText: 'Validation Error!',
                messageText: 'You have 1 or more errors preventing you from submitting your form.'
            });
        }
    };

    return (
        <Fragment>
            <form onSubmit={onSubmitHandler}>
                <BodyHeader>Account Information</BodyHeader>
                {message && <Note noteType={message.noteType} headerText={message.headerText}>{message.messageText}</Note>}
                {showVerifyLink && 
                    <Fragment>
                        <Button
                            type="button"
                            onClick={() => setConfirmationIsShown(true)}
                            className={classes.primaryBtn}
                            style={{width: '8rem', padding: '.25rem'}}
                            value="Verify Acount"
                        />
                        <Button
                            type="button"
                            onClick={() => sendVerifyMail(user.email, user.username, verificationcode)}
                            style={{width: '8rem', padding: '.25rem'}}
                            value="Resend Code"
                        />
                    </Fragment>
                }
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="txtFirstName"
                        placeholder="Cannot be blank"
                        inputType="text"
                        required={true}
                        labelText="First Name"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        maxLength="45"
                        value={fname || firstNameState.value}
                        onChange={firstNameChangeHandler}
                        onBlur={validateFirstNameHandler}
                        valid={firstNameIsValid}
                        error={!firstNameIsValid}
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="txtMiddleName"
                        inputType="text"
                        labelText="Middle"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        maxLength="45"
                        value={mname || middleName}
                        onChange={middleNameChangeHandler}
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="txtLastName"
                        placeholder="Cannot be blank"
                        inputType="text"
                        required={true}
                        labelText="Last Name"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        maxLength="45"
                        value={lname || lastNameState.value}
                        onChange={lastNameChangeHandler}
                        onBlur={validateLastNameHandler}
                        valid={lastNameIsValid}
                        error={!lastNameIsValid}
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="txtScreenName"
                        placeholder="If different from name"
                        inputType="text"
                        labelText="Screen Name"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        maxLength="45"
                        value={sname || screenName}
                        onChange={screenNameChangeHandler}
                    />
                </div>
                <div className={classes.formRow}>
                    <Label
                        required={true}
                        className={`${classes.label} ${classes.required}`}
                        text="Age Range"
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="radUnder18"
                        name="age"
                        inputType="radio"
                        className={classes.indentedInput}
                        required={true}
                        labelClassName={classes.labelText}
                        labelText="Under 18"
                        value="under18"
                        checked={ageSelected === 'under18'}
                        onChange={ageCheckChangedHandler}
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="rad18OrOlder"
                        name="age"
                        inputType="radio"
                        className={classes.indentedInput}
                        required={true}
                        labelClassName={classes.labelText}
                        labelText="18 or Older"
                        value="18orOlder"
                        checked={ageSelected === '18orOlder'}
                        onChange={ageCheckChangedHandler}
                    />
                </div>
                <div className={classes.formRow}>
                    <Label
                        className={classes.label}
                        text="Gender"
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="radMale"
                        name="gender"
                        inputType="radio"
                        className={classes.indentedInput}
                        labelClassName={classes.labelText}
                        labelText="Male"
                        value="male"
                        checked={sexSelected === 'male'}
                        onChange={sexCheckChangedHandler}
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="radFemale"
                        name="gender"
                        inputType="radio"
                        className={classes.indentedInput}
                        labelClassName={classes.labelText}
                        labelText="Female"
                        value="female"
                        checked={sexSelected === 'female'}
                        onChange={sexCheckChangedHandler}
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="radGenderOther"
                        name="gender"
                        inputType="radio"
                        className={classes.indentedInput}
                        labelClassName={classes.labelText}
                        labelText="Other (Unspecified)"
                        value="other"
                        checked={sexSelected === 'other'}
                        onChange={sexCheckChangedHandler}
                    />
                </div>
                {!disabled && ( 
                    <div className={classes.formRow}>
                        <LeftLabelInput
                            id="txtEmail"
                            placeholder="Must be valid"
                            inputType="email"
                            required={true}
                            labelText="Email"
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            maxLength="150"
                            value={email || emailState.value}
                            disabled={disabled}
                            onChange={emailChangeHandler}
                            onBlur={validateEmailHandler}
                            valid={emailIsValid}
                            error={!emailIsValid}
                        />
                    </div>
                )}
                {!disabled && (
                    <div className={classes.formRow}>
                        <LeftLabelInput
                            id="txtUsername"
                            placeholder="8+ characters"
                            inputType="text"
                            required={true}
                            labelText="User"
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            maxLength="45"
                            value={uname || usernameState.value}
                            disabled={disabled}
                            onChange={usernameChangeHandler}
                            onBlur={validateUsernameHandler}
                            valid={usernameIsValid}
                            error={!usernameIsValid}
                        />
                    </div>
                )}
                {!disabled && (
                    <div className={classes.formRow}>
                        <LeftLabelInput
                            id="txtPassword"
                            placeholder="8+ chars with numbers"
                            inputType="password"
                            required={true}
                            labelText="Pass"
                            labelClassName={classes.labelText}
                            inputClassName={classes.inputStyle}
                            maxLength="45"
                            value={password || passwordState.value}
                            disabled={disabled}
                            onChange={passwordChangeHandler}
                            onBlur={validatePasswordHandler}
                            valid={passwordIsValid}
                            error={!passwordIsValid}
                        />
                    </div>
                )}
                {disabled && 
                    <Fragment>
                        <Button
                            type="button"
                            onClick={() => setDisabled(false)}
                            className={classes.primaryBtn}
                            style={{width: '8rem', padding: '.25rem'}}
                            value="Modify Credentials"
                        />
                    </Fragment>
                }
                <LeftLabelInput
                    id="txtDescCounter"
                    placeholder={descWordCount}
                    inputType="text"
                    labelClassName={classes.labelText}
                    inputClassName={classes.tinyInput}
                    readOnly={true}
                    disabled={true}
                    labelText="Character Count"
                />
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="txtDesc"
                        placeholder="Up to 8000 characters"
                        inputType="textarea"
                        labelText="Describe Yourself"
                        labelClassName={classes.labelText}
                        inputClassName={classes.textarea}
                        readOnly={false}
                        disabled={descDisabled}
                        onChange={descriptionChangeHandler}
                        value={desc || description}
                    />
                </div>
                <br />
                <div className={classes.formRow} style={{paddingLeft: '.5rem'}}>
                    <Button type="button" className={classes.link} href="#" onClick={showPrivacyHandler} value="PRIVACY POLICY" />
                    <span>&nbsp;and&nbsp;</span>
                    <Button type="button" className={classes.link} href="#" onClick={showTermsHandler} value="TERMS OF USE" />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="chkAgree"
                        inputType="checkbox"
                        className={classes.indentedInput}
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        labelText="Agree to Terms"
                        required={true}
                        value={agreeSelected}
                        onChange={agreeCheckChangedHandler}
                    />
                </div>

                <BodyHeader>&nbsp;</BodyHeader>
                <div className={classes.formRow}>
                    <Button
                        className={classes.primaryBtn}
                        type="submit"
                        value="Submit"
                        inputClassName={classes.textarea}
                        disabled={submitDisabled}
                    />
                    <Button type="button" value="Clear" onClick={() => resetForm()} />
                </div>
            </form>
            {confirmationIsShown && <Confirmation code={verificationcode} onClose={hideConfirmationHandler} />}
            {privacyIsShown && <PrivacyPolicy onClose={hidePrivacyHandler} />}
            {termsIsShown && <TermsOfUse onClose={hideTermsHandler} />}
        </Fragment>
    );
};

export default AccountInfo;