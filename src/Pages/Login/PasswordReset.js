import React, { useState, useEffect, useReducer } from 'react'
import DefaultPage from '../../UI/DefaultPage/DefaultPage'
import Note from '../../UI/Note/Note'
import LeftLabelInput from '../../UI/LeftLabelInput/LeftLabelInput'
import Button from '../../UI/Button/Button'
import { getUserInfoByEmailAndUsername, updateUserPassword } from '../../DataHandlers/AccountInfoDataHandler'
import classes from './login.module.css'

const hasNumber = (val) => {
    return /\d/.test(val)
}

const isEmail = (val) => {
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(val)
}

const usernameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 7 }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 7 }
    }
}

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 7 && hasNumber(action.value) }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 7 && hasNumber(state.value) }
    }
}

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 7 && isEmail(action.value) }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 7 && isEmail(state.value) }
    }
}

const PasswordReset = () => {
    const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
        value: '',
        isValid: null
    })

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    })

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    })

    const { isValid: usernameIsValid } = usernameState
    const { isValid: passwordIsValid } = passwordState
    const { isValid: emailIsValid } = emailState

    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                usernameIsValid && passwordIsValid
            )
        }, 500)

        return () => {
            clearTimeout(identifier)
        }
    }, [usernameIsValid, passwordIsValid])

    const usernameChangeHandler = (event) => {
        dispatchUsername({ type: 'USER_INPUT', value: event.target.value })
    }

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', value: event.target.value })
    }

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', value: event.target.value })
    }

    const validateUsernameHandler = () => {
        dispatchUsername({ type: 'INPUT_BLUR' })
    }

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' })
    }

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' })
    }

    const [message, setMessage] = useState(null)

    const onSubmitHandler = (event) => {
        event.preventDefault()
        getUserInfoByEmailAndUsername(emailState.value, usernameState.value)
            .then(result => {
                if (result.data.length > 0) {
                    const data = {
                        email: emailState.value,
                        username: usernameState.value,
                        password: passwordState.value
                    }
                    updateUserPassword(data)
                        .then(result => {
                            if (result.rowsAffected > 0) {
                                setMessage({
                                    noteType: 'success',
                                    headerText: 'Password Updated!',
                                    messageText: 'Close this window or log in.'
                                })
                            } else {
                                setMessage({
                                    noteType: 'error',
                                    headerText: 'Update Failed!',
                                    messageText: 'Check your input values.'
                                })
                            }
                        })
                        .catch(
                            setMessage({
                                noteType: 'error',
                                headerText: 'Error',
                                messageText: 'An unexpected error has occurred.'
                            })
                        )
                } else {
                    setMessage({
                        noteType: 'error',
                        headerText: 'Validation Error',
                        messageText: 'Invalid email or username.'
                    })
                }
            })
    }

    return (
        <DefaultPage headerText="Password Reset">
            <form onSubmit={onSubmitHandler}>
                {message &&
                    <Note
                        noteType={message.noteType}
                        headerText={message.headerText}
                        className={classes.note}
                    >
                        {message.messageText}
                    </Note>
                }
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
                    <LeftLabelInput
                        id="txtPassword"
                        placeholder="8+ chars with numbers"
                        inputType="password"
                        required={true}
                        labelText="Pass"
                        labelClassName={classes.labelText}
                        inputClassName={classes.inputStyle}
                        maxLength="45"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                        valid={passwordIsValid}
                        error={!passwordIsValid}
                    />
                </div>
                <div className={classes.formRow}>
                    <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" disabled={!formIsValid} />
                </div>
            </form>
        </DefaultPage>
    )
}

export default PasswordReset
