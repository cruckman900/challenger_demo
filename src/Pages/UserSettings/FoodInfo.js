/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import { inputFoods, updateFoods } from '../../DataHandlers/FoodsDataHandler'
import BodyHeader from '../../UI/BodyHeader/BodyHeader'
import Button from '../../UI/Button/Button'
import labeledInputs from '../../builders/LabeledInputs/labeledInputs'
import AuthContext from '../../store/auth-context'
import classes from './UserSettings.module.css'

const FoodInfo = (props) => {
    const authCtx = useContext(AuthContext)

    const [fID, setFID] = useState(null)
    const [transactionState, setTransactionState] = useState('INSERT')
    const [userID, setUserID] = useState(null)
    const [chkAmerican, setChkAmerican] = useState(null)
    const [chkAsian, setChkAsian] = useState(null)
    const [chkCajun, setChkCajun] = useState(null)
    const [chkCookies, setChkCookies] = useState(null)
    const [chkFrench, setChkFrench] = useState(null)
    const [chkHungarian, setChkHungarian] = useState(null)
    const [chkItalian, setChkItalian] = useState(null)
    const [chkMediterranean, setChkMediterranean] = useState(null)
    const [chkMexican, setChkMexican] = useState(null)
    const [chkMiddleEastern, setChkMiddleEastern] = useState(null)
    const [chkRomanian, setChkRomanian] = useState(null)
    const [chkRussian, setChkRussian] = useState(null)
    const [chkSlavic, setChkSlavic] = useState(null)
    const [chkFoodsOther, setChkFoodsOther] = useState(null)

    useEffect(() => {
        if (authCtx.isLoggedIn) {
            setFID(authCtx.user.FID)
            setUserID(authCtx.userID)
            setChkAmerican(authCtx.user.american)
            setChkAsian(authCtx.user.asian_indian)
            setChkCajun(authCtx.user.cajun)
            setChkFrench(authCtx.user.french)
            setChkHungarian(authCtx.user.hungarian)
            setChkItalian(authCtx.user.italian)
            setChkMediterranean(authCtx.user.mediterranean)
            setChkMexican(authCtx.user.latin_mexican)
            setChkMiddleEastern(authCtx.user.middleeastern)
            setChkRomanian(authCtx.user.romanian)
            setChkRussian(authCtx.user.russian)
            setChkSlavic(authCtx.user.slavic)
            setChkCookies(authCtx.user.cookies)
            setChkFoodsOther(authCtx.user.foods_other)

            if (fID !== null) {
                setTransactionState('UPDATE')
            } else {
                setTransactionState('INSERT')
            }
        }
    }, [authCtx.isLoggedIn])

    const onSubmitHandler = (event) => {
        const data = {
            id: fID,
            userID: userID,
            american: chkAmerican,
            asian_indian: chkAsian,
            cajun: chkCajun,
            french: chkFrench,
            hungarian: chkHungarian,
            italian: chkItalian,
            mediterranean: chkMediterranean,
            latin_mexican: chkMexican,
            middleeastern: chkMiddleEastern,
            romanian: chkRomanian,
            russian: chkRussian,
            slavic: chkSlavic,
            cookies: chkCookies,
            foods_other: chkFoodsOther
        }

        if (transactionState === 'INSERT') {
            // Do Insert
            inputFoods(data)
        } else {
            // Do Update
            updateFoods(data)
        }
        event.preventDefault()
    }

    const inputs = [
        { id: 'chkAmerican', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'American?', value: chkAmerican, onchange: () => setChkAmerican(!chkAmerican) },
        { id: 'chkAsian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Asian / Indian', value: chkAsian, onchange: () => setChkAsian(!chkAsian) },
        { id: 'chkCajun', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Cajun', value: chkCajun, onchange: () => setChkCajun(!chkCajun) },
        { id: 'chkFrench', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'French', value: chkFrench, onchange: () => setChkFrench(!chkFrench) },
        { id: 'chkHungarian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Hungarian', value: chkHungarian, onchange: () => setChkHungarian(!chkHungarian) },
        { id: 'chkItalian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Italian', value: chkItalian, onchange: () => setChkItalian(!chkItalian) },
        { id: 'chkMediterranean', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Mediterranean', value: chkMediterranean, onchange: () => setChkMediterranean(!chkMediterranean) },
        { id: 'chkMiddleEaster', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Middle Eastern', value: chkMiddleEastern, onchange: () => setChkMiddleEastern(!chkMiddleEastern) },
        { id: 'chkMexican', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Latin / Mexican', value: chkMexican, onchange: () => setChkMexican(!chkMexican) },
        { id: 'chkRomanian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Romanian', value: chkRomanian, onchange: () => setChkRomanian(!chkRomanian) },
        { id: 'chkRussian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Russian', value: chkRussian, onchange: () => setChkRussian(!chkRussian) },
        { id: 'chkSlavic', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Slavic', value: chkSlavic, onchange: () => setChkSlavic(!chkSlavic) },
        { id: 'chkCookies', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'I only like cookies', value: chkCookies, onchange: () => setChkCookies(!chkCookies) },
        { id: 'chkFoodsOther', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Other', value: chkFoodsOther, onchange: () => setChkFoodsOther(!chkFoodsOther) }
    ]

    const formInputs = labeledInputs(inputs)

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Favorite Types of Food</BodyHeader>
            {formInputs}
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
            </div>
        </form>
    )
}

export default FoodInfo
