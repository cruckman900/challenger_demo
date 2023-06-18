/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../store/auth-context'
import { getUserInfoById } from '../../DataHandlers/AccountInfoDataHandler'
import { inputFoods, updateFoods } from '../../DataHandlers/FoodsDataHandler'
import BodyHeader from '../../UI/BodyHeader/BodyHeader'
import Button from '../../UI/Button/Button'
import labeledInputs from '../../builders/LabeledInputs/labeledInputs'
import classes from './UserSettings.module.css'

const FoodInfo = (props) => {
    const authCtx = useContext(AuthContext)

    const [transactionState, setTransactionState] = useState('INSERT')

    const [fID, setFID] = useState(null)
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

    const setUpdateState = () => {
        getUserInfoById(authCtx.userID)
            .then((user) => {
                const thisUser = user.data[0]
                setUserFoods(thisUser)

                if (!thisUser.FID) {
                    setTransactionState('INSERT')
                } else {
                    setTransactionState('UPDATE')
                }
            })
    }

    useEffect(() => {
        if (authCtx.isLoggedIn) setUpdateState()
        if (!authCtx.isLoggedIn) setUserFoods(null)
    }, [authCtx.isLoggedIn])

    const setUserFoods = (user) => {
        setFID(user !== null ? user.FID : null)
        setChkAmerican(user !== null ? user.american : false)
        setChkAsian(user !== null ? user.asian_indian : false)
        setChkCajun(user !== null ? user.cajun : false)
        setChkFrench(user !== null ? user.french : false)
        setChkHungarian(user !== null ? user.hungarian : false)
        setChkItalian(user !== null ? user.italian : false)
        setChkMediterranean(user !== null ? user.mediterranean : false)
        setChkMexican(user !== null ? user.latin_mexican : false)
        setChkMiddleEastern(user !== null ? user.middleeastern : false)
        setChkRomanian(user !== null ? user.romanian : false)
        setChkRussian(user !== null ? user.russian : false)
        setChkSlavic(user !== null ? user.slavic : false)
        setChkCookies(user !== null ? user.cookies : false)
        setChkFoodsOther(user !== null ? user.foods_other : false)

        if (fID !== null) {
            setTransactionState('UPDATE')
        } else {
            setTransactionState('INSERT')
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const data = {
            id: fID,
            userid: authCtx.userID,
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
            return new Promise(function () {
                inputFoods(data)
                    .then(result => {
                        setFID(result.data.insertId)
                        if (result.data.affectedRows > 0) {
                            console.log('MusicInfo.js', 'Insert Successful!')
                        } else {
                            console.log('MusicInfo.js', 'Insert Failed!')
                        }
                    })
                    .then(data.id = fID)
                    .then(() => setTransactionState('UPDATE'))
                    .then(() => setUpdateState())
                    .catch(err => console.log('FoodInfo.js onSubmitHandler insert err', err))
            })
        } else {
            // Do Update
            return new Promise(function () {
                updateFoods(data)
                    .then(() => setUpdateState())
                    .catch(err => console.log('FoodInfo.js onSubmitHandler update err', err))
            })
        }
    }

    const inputs = [
        { id: 'chkAmerican', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'American?', checked: chkAmerican, onChange: () => setChkAmerican(!chkAmerican) },
        { id: 'chkAsian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Asian / Indian', checked: chkAsian, onChange: () => setChkAsian(!chkAsian) },
        { id: 'chkCajun', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Cajun', checked: chkCajun, onChange: () => setChkCajun(!chkCajun) },
        { id: 'chkFrench', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'French', checked: chkFrench, onChange: () => setChkFrench(!chkFrench) },
        { id: 'chkHungarian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Hungarian', checked: chkHungarian, onChange: () => setChkHungarian(!chkHungarian) },
        { id: 'chkItalian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Italian', checked: chkItalian, onChange: () => setChkItalian(!chkItalian) },
        { id: 'chkMediterranean', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Mediterranean', checked: chkMediterranean, onChange: () => setChkMediterranean(!chkMediterranean) },
        { id: 'chkMiddleEastern', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Middle Eastern', checked: chkMiddleEastern, onChange: () => setChkMiddleEastern(!chkMiddleEastern) },
        { id: 'chkMexican', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Latin / Mexican', checked: chkMexican, onChange: () => setChkMexican(!chkMexican) },
        { id: 'chkRomanian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Romanian', checked: chkRomanian, onChange: () => setChkRomanian(!chkRomanian) },
        { id: 'chkRussian', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Russian', checked: chkRussian, onChange: () => setChkRussian(!chkRussian) },
        { id: 'chkSlavic', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Slavic', checked: chkSlavic, onChange: () => setChkSlavic(!chkSlavic) },
        { id: 'chkCookies', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'I only like cookies', checked: chkCookies, onChange: () => setChkCookies(!chkCookies) },
        { id: 'chkFoodsOther', name: 'cuisinetypes', inputType: 'checkbox', required: false, labelText: 'Other', checked: chkFoodsOther, onChange: () => setChkFoodsOther(!chkFoodsOther) }
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
