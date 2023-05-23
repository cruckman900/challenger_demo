import React, { Fragment, useState, useEffect, useReducer } from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import LeftLabelInput from "../../UI/LeftLabelInput/LeftLabelInput";
import Label from "../../UI/Label/Label";
import Button from "../../UI/Button/Button";
import Note from "../../UI/Note/Note";
import Confirmation from "../Confirmation/Confirmation";
import classes from './userSettings.module.css';

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
        return { value: state.value, isValid: state.value.trim().length > 0}
    }
}

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: isEmail(action.value.trim())};
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: isEmail(state.value.trim())}
    }
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

const AccountInfo = (props) => {
    const [ageSelected, setAgeSelected] = useState('18orOlder');
    const [sexSelected, setSexSelected] = useState('');
    const [identSelected, setIdentSelected] = useState('realname');

    const [screenName, setScreenName] = useState('');
    const [description, setDescription] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(false);
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

    const identCheckChangedHandler = (event) => {
        setIdentSelected(event.target.value);
    }

    const screenNameChangeHandler = (event) => {
        setScreenName(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            if (queryType === 'insert') {
                props.setAccountID(1);
            } else if (queryType === 'update') {
                // do nothing yet
            }
            setFormSubmitted(true);
            setDisabled(true);
            setTimeout(() => {
                setConfirmationIsShown(true);
            }, 500);
            return;
        } else {
            setMessage({
                noteType: 'error',
                headerText: 'Validation Error!',
                messageText: 'You have 1 or more errors preventing you from submitting your form.'});
        }
    };

    const [confirmationIsShown, setConfirmationIsShown] = useState(false);

    const hideConfirmationHandler = (val) => {
        setConfirmationIsShown(false);
        if (val.length > 0) {
            setMessage({noteType: 'success', headerText: 'Form submitted!', messageText: 'Account activated!'});
            props.setAccountID(1);
            setSubmitDisabled(true);
            setQueryType('update');
        } else {
            props.setAccountID(null);
            setMessage({noteType: 'warning', headerText: 'Account not activated!', messageText: 'Whatcha gonna do now, tough guy?'});
        }
    };

    return (
        <Fragment>
            <form onSubmit={onSubmitHandler}>
                <BodyHeader>Account Information</BodyHeader>
                {message && <Note noteType={message.noteType} headerText={message.headerText}>{message.messageText}</Note>}
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="txtFirstName"
                        placeholder="Cannot be blank"
                        inputType="text"
                        required={true}
                        labelText="First Name"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        value={firstNameState.value}
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
                        value={middleName}
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
                        value={lastNameState.value}
                        onChange={lastNameChangeHandler}
                        onBlur={validateLastNameHandler}
                        valid={lastNameIsValid}
                        error={!lastNameIsValid}
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="txtScreenName"
                        inputType="text"
                        labelText="Screen Name"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        value={screenName}
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
                        disabled={disabled}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                        valid={emailIsValid}
                        error={!emailIsValid}
                    />
                </div>
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
                        disabled={disabled}
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
                        disabled={disabled}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                        valid={passwordIsValid}
                        error={!passwordIsValid}
                    />
                </div>
                <div className={classes.formRow}>
                    <Label
                        className={classes.label}
                        text="Identify me using:"
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="radRealName"
                        name="ident"
                        inputType="radio"
                        className={classes.indentedInput}
                        labelClassName={classes.labelText}
                        labelText="Real Name"
                        value="realname"
                        checked={identSelected === 'realname'}
                        onChange={identCheckChangedHandler}
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="radScreenName"
                        name="ident"
                        inputType="radio"
                        className={classes.indentedInput}
                        labelClassName={classes.labelText}
                        labelText="Screen Name"
                        value="screenname"
                        checked={identSelected === 'screenname'}
                        onChange={identCheckChangedHandler}
                    />
                </div>
                <div className={classes.formRow}>
                    <LeftLabelInput
                        id="radUsername"
                        name="ident"
                        inputType="radio"
                        className={classes.indentedInput}
                        labelClassName={classes.labelText}
                        labelText="Username"
                        value="other"
                        checked={identSelected === 'other'}
                        onChange={identCheckChangedHandler}
                    />
                </div>
                <LeftLabelInput
                    id="txtDesc"
                    inputType="textarea"
                    inputClassName={classes.textarea}
                    readOnly={false}
                    disabled={false}
                    labelText="Describe Yourself"
                    onChange={descriptionChangeHandler}
                    value={description}
                />
                <BodyHeader>&nbsp;</BodyHeader>
                <div className={classes.formRow}>
                    <Button
                        className={classes.primaryBtn}
                        type="submit"
                        value="Submit"
                        disabled={submitDisabled}
                    />
                    <Button type="button" value="Clear" />
                </div>
            </form>
            {confirmationIsShown && <Confirmation onClose={hideConfirmationHandler} />}
        </Fragment>
    );
};

export default AccountInfo;