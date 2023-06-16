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
    const [chkAmerican, setChkAmerican] = useState(false)
    const [chkAsian, setChkAsian] = useState(false)
    const [chkCajun, setChkCajun] = useState(false)
    const [chkCookies, setChkCookies] = useState(false)
    const [chkFrench, setChkFrench] = useState(false)
    const [chkHungarian, setChkHungarian] = useState(false)
    const [chkItalian, setChkItalian] = useState(false)
    const [chkMediterranean, setChkMediterranean] = useState(false)
    const [chkMexican, setChkMexican] = useState(false)
    const [chkMiddleEastern, setChkMiddleEastern] = useState(false)
    const [chkRomanian, setChkRomanian] = useState(false)
    const [chkRussian, setChkRussian] = useState(false)
    const [chkSlavic, setChkSlavic] = useState(false)
    const [chkFoodsOther, setChkFoodsOther] = useState(false)

    useEffect(() => {
        if (authCtx.isLoggedIn) {
            setUserID(authCtx.userID)
            setFID(authCtx.user.FID || null)
            setChkAmerican(authCtx.user.american || null)
            setChkAsian(authCtx.user.asian_indian || null)
            setChkCajun(authCtx.user.cajun || null)
            setChkFrench(authCtx.user.french || null)
            setChkHungarian(authCtx.user.hungarian || null)
            setChkItalian(authCtx.user.italian || null)
            setChkMediterranean(authCtx.user.mediterranean || null)
            setChkMexican(authCtx.user.latin_mexican || null)
            setChkMiddleEastern(authCtx.user.middleeastern || null)
            setChkRomanian(authCtx.user.romanian || null)
            setChkRussian(authCtx.user.russian || null)
            setChkSlavic(authCtx.user.slavic || null)
            setChkCookies(authCtx.user.cookies || null)
            setChkFoodsOther(authCtx.user.foods_other || null)

            if (fID !== null) {
                setTransactionState('UPDATE')
            } else {
                setTransactionState('INSERT')
            }
        }
    }, [authCtx.isLoggedIn])

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log('FoodInfo onSubmitHandler', event)
        const data = {
            id: fID,
            userid: userID,
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
            other: chkFoodsOther
        }

        if (transactionState === 'INSERT') {
            // Do Insert
            console.log('FoodInfo.js onSubmitHandler data', data)
            return new Promise(function () {
                inputFoods(data)
                    .then(result => console.log('FoodInfo.js onSubmitHandler insert result', result))
                    .catch(err => console.log('FoodInfo.js onSubmitHandler insert err', err))
            })
        } else {
            // Do Update
            console.log('FoodInfo.js onSubmitHandler data', data)
            return new Promise(function () {
                updateFoods(data)
                    .then(result => console.log('FoodInfo.js onSubmitHandler update result', result))
                    .catch(err => console.log('FoodInfo.js onSubmitHandler update err', err))
            })
        }
    }

    const inputs = [
        { id: 'chkAmerican', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'American?', value: chkAmerican, onChange: () => setChkAmerican(!chkAmerican) },
        { id: 'chkAsian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Asian / Indian', value: chkAsian, onChange: () => setChkAsian(!chkAsian) },
        { id: 'chkCajun', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Cajun', value: chkCajun, onChange: () => setChkCajun(!chkCajun) },
        { id: 'chkFrench', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'French', value: chkFrench, onChange: () => setChkFrench(!chkFrench) },
        { id: 'chkHungarian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Hungarian', value: chkHungarian, onChange: () => setChkHungarian(!chkHungarian) },
        { id: 'chkItalian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Italian', value: chkItalian, onChange: () => setChkItalian(!chkItalian) },
        { id: 'chkMediterranean', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Mediterranean', value: chkMediterranean, onChange: () => setChkMediterranean(!chkMediterranean) },
        { id: 'chkMiddleEastern', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Middle Eastern', value: chkMiddleEastern, onChange: () => setChkMiddleEastern(!chkMiddleEastern) },
        { id: 'chkMexican', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Latin / Mexican', value: chkMexican, onChange: () => setChkMexican(!chkMexican) },
        { id: 'chkRomanian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Romanian', value: chkRomanian, onChange: () => setChkRomanian(!chkRomanian) },
        { id: 'chkRussian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Russian', value: chkRussian, onChange: () => setChkRussian(!chkRussian) },
        { id: 'chkSlavic', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Slavic', value: chkSlavic, onChange: () => setChkSlavic(!chkSlavic) },
        { id: 'chkCookies', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'I only like cookies', value: chkCookies, onChange: () => setChkCookies(!chkCookies) },
        { id: 'chkFoodsOther', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Other', value: chkFoodsOther, onChange: () => setChkFoodsOther(!chkFoodsOther) }
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
