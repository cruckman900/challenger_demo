import React, { useState, useEffect, useReducer } from 'react'
import DefaultPage from '../../UI/DefaultPage/DefaultPage'
import LeftLabelInput from '../../UI/LeftLabelInput/LeftLabelInput'
import Button from '../../UI/Button/Button'
import classes from './login.module.css'

const hasNumber = (val) => {
    return /\d/.test(val)
}

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 7 && hasNumber(action.value) }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 7 && hasNumber(state.value) }
    }
}

const PasswordReset = () => {
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    })

    const { isValid: passwordIsValid } = passwordState

    const [formIsValid, setFormIsValid] = useState(false)

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', value: event.target.value })
    }

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' })
    }

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                passwordIsValid
            )
        }, 500)

        return () => {
            clearTimeout(identifier)
        }
    }, [passwordIsValid])

    const onSubmitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <DefaultPage headerText="Password Reset">
            <form onSubmit={onSubmitHandler}>
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
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                        valid={passwordIsValid}
                        error={!passwordIsValid}
                    />
                </div>
                <div className={classes.formRow}>
                    <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Log In" disabled={!formIsValid} />
                </div>
            </form>
        </DefaultPage>
    )
}

export default PasswordReset
