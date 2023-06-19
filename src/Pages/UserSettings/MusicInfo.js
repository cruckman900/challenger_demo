/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../store/auth-context'
import { getUserInfoById } from '../../DataHandlers/AccountInfoDataHandler'
import { inputMusic, updateMusic } from '../../DataHandlers/MusicDataHandler'
import BodyHeader from '../../UI/BodyHeader/BodyHeader'
import Button from '../../UI/Button/Button'
import labeledInputs from '../../builders/LabeledInputs/labeledInputs'
import classes from './UserSettings.module.css'

const MusicInfo = (props) => {
    const authCtx = useContext(AuthContext)

    const [transactionState, setTransactionState] = useState('INSERT')

    const [musID, setMusID] = useState(null)
    const [chkPop, setChkPop] = useState(false)
    const [chkBlues, setChkBlues] = useState(false)
    const [chkClassical, setChkClassical] = useState(false)
    const [chkCountry, setChkCountry] = useState(false)
    const [chkDisco, setChkDisco] = useState(false)
    const [chkFlamenco, setChkFlamenco] = useState(false)
    const [chkFolk, setChkFolk] = useState(false)
    const [chkJazz, setChkJazz] = useState(false)
    const [chkJKPop, setChkJKPop] = useState(false)
    const [chkMetal, setChkMetal] = useState(false)
    const [chkPolka, setChkPolka] = useState(false)
    const [chkRap, setChkRap] = useState(false)
    const [chkRegae, setChkRegae] = useState(false)
    const [chkRock, setChkRock] = useState(false)
    const [chkTribal, setChkTribal] = useState(false)
    const [chkMusicOther, setChkMusicOther] = useState(false)

    const setUpdateState = () => {
        getUserInfoById(authCtx.userID)
            .then((user) => {
                const thisUser = user.data[0]
                setUserMusic(thisUser)

                if (thisUser.FID !== null) {
                    setTransactionState('INSERT')
                } else {
                    setTransactionState('UPDATE')
                }
            })
    }

    useEffect(() => {
        if (authCtx.isLoggedIn) setUpdateState()
        if (!authCtx.isLoggedIn) setUserMusic(null)
    }, [authCtx.isLoggedIn])

    const setUserMusic = (user) => {
        setMusID(user !== null ? user.MUSID : false)
        setChkPop(user !== null ? user.americanpop : false)
        setChkBlues(user !== null ? user.blues : false)
        setChkClassical(user !== null ? user.classical : false)
        setChkCountry(user !== null ? user.country_bluegrass : false)
        setChkDisco(user !== null ? user.disco : false)
        setChkFlamenco(user !== null ? user.flamenco_mariachi : false)
        setChkFolk(user !== null ? user.folk : false)
        setChkJazz(user !== null ? user.jazz : false)
        setChkJKPop(user !== null ? user.jpop_kpop : false)
        setChkMetal(user !== null ? user.metal : false)
        setChkPolka(user !== null ? user.polka : false)
        setChkRap(user !== null ? user.rap_hiphop : false)
        setChkRegae(user !== null ? user.regae : false)
        setChkRock(user !== null ? user.rock : false)
        setChkTribal(user !== null ? user.tribal : false)
        setChkMusicOther(user !== null ? user.music_other : false)

        if (musID !== null) {
            setTransactionState('UPDATE')
        } else {
            setTransactionState('INSERT')
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const data = {
            id: musID,
            userid: authCtx.userID,
            americanpop: chkPop,
            blues: chkBlues,
            classical: chkClassical,
            country_bluegrass: chkCountry,
            disco: chkDisco,
            flamenco_mariachi: chkFlamenco,
            folk: chkFolk,
            jazz: chkJazz,
            jpop_kpop: chkJKPop,
            metal: chkMetal,
            polka: chkPolka,
            rap_hiphop: chkRap,
            regae: chkRegae,
            rock: chkRock,
            tribal: chkTribal,
            other: chkMusicOther
        }

        if (transactionState === 'INSERT') {
            // Do Insert
            return new Promise(function () {
                inputMusic(data)
                    .then(result => {
                        setMusID(result.data.insertid)
                        if (result.data.affectedRows > 0) {
                            console.log('MusicInfo.js', 'Insert Successful!')
                        } else {
                            console.log('MusicInfo.js', 'Insert Failed!')
                        }
                    })
                    .then(data.id = musID)
                    .then(() => setTransactionState('UPDATE'))
                    .then(() => setUpdateState())
                    .catch(err => console.log('MusicInfo.js onSubmitHandler insert err', err))
            })
        } else {
            // Do Update
            return new Promise(function () {
                updateMusic(data)
                    .then(result => {
                        console.log('MusicInfo.js onSubmitHandler update', result)
                        if (result.affectedRows > 0) {
                            console.log('MusicInfo.js', 'Update Successful!')
                        } else {
                            console.log('MusicInfo.js', 'Update Failed!')
                        }
                    })
                    .then(() => setUpdateState())
                    .catch(err => console.log('MusicInfo.js onSubmitHandler update err', err))
            })
        }
    }

    const inputs = [
        { id: 'chkPop', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'American Pop', checked: chkPop, onChange: () => setChkPop(!chkPop) },
        { id: 'chkBlues', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Blues', checked: chkBlues, onChange: () => setChkBlues(!chkBlues) },
        { id: 'chkClassical', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Classical', checked: chkClassical, onChange: () => setChkClassical(!chkClassical) },
        { id: 'chkCountry', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Country / Bluegrass', checked: chkCountry, onChange: () => setChkCountry(!chkCountry) },
        { id: 'chkDisco', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Disco', checked: chkDisco, onChange: () => setChkDisco(!chkDisco) },
        { id: 'chkFlamenco', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Flamenco / Mariachi', checked: chkFlamenco, onChange: () => setChkFlamenco(!chkFlamenco) },
        { id: 'chkFolk', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Folk', checked: chkFolk, onChange: () => setChkFolk(!chkFolk) },
        { id: 'chkJazz', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Jazz', checked: chkJazz, onChange: () => setChkJazz(!chkJazz) },
        { id: 'chkKJPop', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'J-Pop / K-Pop', checked: chkJKPop, onChange: () => setChkJKPop(!chkJKPop) },
        { id: 'chkMetal', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Metal', checked: chkMetal, onChange: () => setChkMetal(!chkMetal) },
        { id: 'chkPolka', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Polka', checked: chkPolka, onChange: () => setChkPolka(!chkPolka) },
        { id: 'chkRap', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Rap / HipHop', checked: chkRap, onChange: () => setChkRap(!chkRap) },
        { id: 'chkRegae', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Regae', checked: chkRegae, onChange: () => setChkRegae(!chkRegae) },
        { id: 'chkRock', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Rock', checked: chkRock, onChange: () => setChkRock(!chkRock) },
        { id: 'chkTribal', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Tribal', checked: chkTribal, onChange: () => setChkTribal(!chkTribal) },
        { id: 'chkMusicOther', name: 'musictypes', inputType: 'checkbox', required: false, labelText: 'Other', checked: chkMusicOther, onChange: () => setChkMusicOther(!chkMusicOther) }
    ]

    const formInputs = labeledInputs(inputs)

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Favorite Music Types</BodyHeader>
            {formInputs}
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
            </div>
        </form>
    )
}

export default MusicInfo
