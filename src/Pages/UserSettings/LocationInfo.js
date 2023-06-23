/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../store/auth-context'
import { getLocationByUserID, inputLocations, updateLocations } from '../../DataHandlers/LocationsDataHandler'
import BodyHeader from '../../UI/BodyHeader/BodyHeader'
import Note from '../../UI/Note/Note'
import LeftLabelInput from '../../UI/LeftLabelInput/LeftLabelInput'
import Button from '../../UI/Button/Button'
import classes from './UserSettings.module.css'

const LocationInfo = (props) => {
    const authCtx = useContext(AuthContext)

    const [transactionState, setTransactionState] = useState('INSERT')
    const [message, setMessage] = useState('')

    const [locationID, setLocationID] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [country, setCountry] = useState(null)

    const cityChangeHandler = (event) => {
        setCity(event.target.value)
    }

    const stateChangeHandler = (event) => {
        setState(event.target.value)
    }

    const countryChangeHandler = (event) => {
        setCountry(event.target.value)
    }

    const setUpdateState = () => {
        getLocationByUserID(authCtx.userID)
            .then((user) => {
                const thisUserLocation = user.data.length > 0 ? user.data[0] : null
                setUserLocation(thisUserLocation)

                if (thisUserLocation === null) {
                    setTransactionState('INSERT')
                } else {
                    setTransactionState('UPDATE')
                }
            })
    }

    useEffect(() => {
        if (authCtx.isLoggedIn) setUpdateState()
        if (!authCtx.isLoggedIn) setUserLocation(null)
    }, [authCtx.isLoggedIn])

    const setUserLocation = (userLocation) => {
        setLocationID(userLocation !== null ? userLocation.id : null)
        setCity(userLocation !== null ? userLocation.city : null)
        setState(userLocation !== null ? userLocation.state : null)
        setCountry(userLocation !== null ? userLocation.country : null)

        if (locationID !== null) {
            setTransactionState('UPDATE')
        } else {
            setTransactionState('INSERT')
        }
    }

    const setSuccessMessage = (valid) => {
        if (valid) {
            setMessage({
                noteType: 'success',
                headerText: 'Form submitted',
                messageText: 'Account information saved!'
            })
        } else {
            setMessage({
                noteType: 'success',
                headerText: 'Error',
                messageText: 'Form values were not saved!'
            })
        }
        window.scrollTo(0, -50)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const data = {
            id: locationID,
            userid: authCtx.userID,
            city: city,
            state: state,
            country: country
        }

        if (transactionState === 'INSERT') {
            // Do Insert
            return new Promise(function () {
                inputLocations(data)
                    .then(result => {
                        console.log(result)
                        setLocationID(result.data.insertid)
                        if (result.data.affectedRows > 0) {
                            setSuccessMessage(true)
                        } else {
                            setSuccessMessage(false)
                        }
                    })
                    .then(data.id = locationID)
                    .then(() => setTransactionState('UPDATE'))
                    .then(() => setUpdateState())
                    .catch(err => console.log('LocationInfo.js onSubmitHandler insert err', err))
            })
        } else {
            // Do Update
            return new Promise(function () {
                updateLocations(data)
                    .then(result => {
                        console.log(result)
                        if (result.data.affectedRows > 0) {
                            console.log('LocationInfo.js', 'Update Successful!')
                        } else {
                            console.log('LocationInfo.js', 'Update Failed!')
                        }
                    })
                    .then(() => setUpdateState())
                    .catch(err => console.log('LocationInfo.js onSubmitHandler update err', err))
            })
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Location (Optional)</BodyHeader>
            {message && <Note noteType={message.noteType} headerText={message.headerText}>{message.messageText}</Note>}
            <div className={classes.formRow}>
                <LeftLabelInput
                    id="txtCity"
                    inputType="text"
                    labelText="City"
                    labelClassName={classes.labelText}
                    inputClassName={classes.inputStyle}
                    value={city}
                    onChange={cityChangeHandler}
                />
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput
                    id="txtState"
                    inputType="text"
                    labelText="State / Province"
                    labelClassName={classes.labelText}
                    inputClassName={classes.inputStyle}
                    value={state}
                    onChange={stateChangeHandler}
                />
            </div>
            <div className={classes.formRow}>
                <LeftLabelInput
                    id="txtCountry"
                    inputType="text"
                    labelText="Country"
                    labelClassName={classes.labelText}
                    inputClassName={classes.inputStyle}
                    value={country}
                    onChange={countryChangeHandler}
                />
            </div>

            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
            </div>
        </form>
    )
}

export default LocationInfo
