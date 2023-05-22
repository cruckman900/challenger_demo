import React, { Fragment, useState, useEffect, useReducer } from "react";
import BodyHeader from "../../UI/BodyHeader/BodyHeader";
import Button from "../../UI/Button/Button";
import Note from "../../UI/Note/Note";
import labeledInputs from '../../builders/LabeledInputs/labeledInputs';
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
    const [sexSelected, setSexSelected] = useState(null);
    const [identSelected, setIdentSelected] = useState('realname');
    const [disabled, setDisabled] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [queryType, setQueryType] = useState('insert');

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (!formSubmitted) {
            setMessage({noteType: 'info', headerText: 'Form Handling', messageText: 'You must submit this form to unlock the other forms. Bold Items are required fields.'});
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
            setMessage({noteType: 'error', headerText: 'Validation Error!', messageText: 'You have 1 or more errors preventing you from submitting your form.'});
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

    useEffect(() => {
        props.setAgeRange(ageSelected);
    }, [ageSelected, props]);

    const inputs = [
        {id: "txtFirstName", placeholder: "Cannot be blank", inputType: "text", required: true, labelText: "First Name", value: props.firstName, onChange: firstNameChangeHandler, onBlur: validateFirstNameHandler, valid: firstNameIsValid, error: !firstNameIsValid},
        {id: "txtMiddle", inputType: "text", required: false, labelText: "Middle", value: props.middle},
        {id: "txtLastName", placeholder: "Cannot be blank", inputType: "text", required: true, labelText: "Last Name", value: props.lastName, onChange: lastNameChangeHandler, onBlur: validateLastNameHandler, valid: lastNameIsValid, error: !lastNameIsValid},
        {id: "txtScreenName", inputType: "text", required: false, labelText: "Screen Name", value: props.screenname},
        {id: "label1", inputType: "label", required: true, className: `${classes.label} ${classes.required}`, text: "Age Range"},
        {id: "rad18OrOlder", name: "age", inputType: "radio", className: classes.indentedInput, required: true, labelText: "18 or Older", value: "18orOlder", checked: ageSelected === '18orOlder', onChange: ageCheckChangedHandler},
        {id: "radUnder18", name: "age", inputType: "radio", className: classes.indentedInput, required: true, labelText: "Under 18", value: "under18", checked: ageSelected === 'under18', onChange: ageCheckChangedHandler},
        {id: "label2", inputType: "label", required: true, className: classes.label, text: "Gender"},
        {id: "radMale", name: "gender", inputType: "radio", className: classes.indentedInput, required: false, labelText: "Male", value: "male", checked: sexSelected === 'male', onChange: sexCheckChangedHandler},
        {id: "radFemale", name: "gender", inputType: "radio", className: classes.indentedInput, required: false, labelText: "Female", value: "female", checked: sexSelected === 'female', onChange: sexCheckChangedHandler},
        {id: "radOther", name: "gender", inputType: "radio", className: classes.indentedInput, required: false, labelText: "Other/Not Specified", value: "other", checked: sexSelected === 'other', onChange: sexCheckChangedHandler},
        {id: "txtEmail", placeholder: "Enter a valid email", inputType: "email", required: true, labelText: "Email", value: props.email, disabled: disabled, onChange: emailChangeHandler, onBlur: validateEmailHandler, valid: emailIsValid, error: !emailIsValid},
        {id: "txtUsername", placeholder: "8 or more chars", inputType: "text", required: true, labelText: "Username", value: props.username, disabled: disabled, onChange: usernameChangeHandler, onBlur: validateUsernameHandler, valid: usernameIsValid, error: !usernameIsValid},
        {id: "txtPassword", placeholder: "8+ chars and 1+ numbers", inputType: "password", required: true, labelText: "Password", value: props.password, disabled: disabled, onChange: passwordChangeHandler, onBlur: validatePasswordHandler, valid: passwordIsValid, error: !passwordIsValid},
        {id: "label3", inputType: "label", required: true, className: `${classes.label} ${classes.required}`, text: "Identify me using:"},
        {id: "identRealName", name: "ident", inputType: "radio", className: classes.indentedInput, required: true, labelText: "Real Name", value: "realname", checked: identSelected === 'realname', onChange: identCheckChangedHandler},
        {id: "identDisplayName", name: "ident", inputType: "radio", className: classes.indentedInput, required: true, labelText: "Display Name", value: "displayname", checked: identSelected === 'displayname', onChange: identCheckChangedHandler},
        {id: "identUsername", name: "ident", inputType: "radio", className: classes.indentedInput, required: true, labelText: "Username", value: "username", checked: identSelected === 'username', onChange: identCheckChangedHandler},
        {id: "txtDesc", inputType: "textarea", readOnly: false, disabled: false, labelText: "Describe Yourself", value: props.userDesc},
    ];

    return (
        <Fragment>
            <form onSubmit={onSubmitHandler}>
                <BodyHeader>Account Information</BodyHeader>
                {message && <Note noteType={message.noteType} headerText={message.headerText}>{message.messageText}</Note>}
                {labeledInputs(inputs)}
                <BodyHeader>&nbsp;</BodyHeader>
                <div className={classes.formRow}>
                    <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" disabled={submitDisabled} />
                    <Button type="button" name="btnClear" value="Clear" />
                </div>
            </form>
            {confirmationIsShown && <Confirmation onClose={hideConfirmationHandler} />}
        </Fragment>
    );
};

export default AccountInfo;