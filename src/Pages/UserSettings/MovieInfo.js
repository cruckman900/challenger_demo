/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../store/auth-context'
import { getUserInfoById } from '../../DataHandlers/AccountInfoDataHandler'
import { inputMovies, updateMovies } from '../../DataHandlers/MoviesDataHandler'
import BodyHeader from '../../UI/BodyHeader/BodyHeader'
import Button from '../../UI/Button/Button'
import labeledInputs from '../../builders/LabeledInputs/labeledInputs'
import classes from './UserSettings.module.css'

const MovieInfo = (props) => {
    const authCtx = useContext(AuthContext)

    const [transactionState, setTransactionState] = useState('INSERT')

    const [movID, setMovID] = useState(null)
    const [chkAction, setChkAction] = useState(false)
    const [chkComedy, setChkComedy] = useState(false)
    const [chkAnimation, setChkAnimation] = useState(false)
    const [chkDocumentary, setChkDocumentary] = useState(false)
    const [chkDrama, setChkDrama] = useState(false)
    const [chkHistory, setChkHistory] = useState(false)
    const [chkMystery, setChkMystery] = useState(false)
    const [chkNature, setChkNature] = useState(false)
    const [chkNews, setChkNews] = useState(false)
    const [chkReligion, setChkReligion] = useState(false)
    const [chkRomance, setChkRomance] = useState(false)
    const [chkSciFi, setChkSciFi] = useState(false)
    const [chkSports, setChkSports] = useState(false)
    const [chkThriller, setChkThriller] = useState(false)
    const [chkWestern, setChkWestern] = useState(false)
    const [chkMoviesOther, setChkMoviesOther] = useState(false)

    const setUpdateState = () => {
        getUserInfoById(authCtx.userID)
            .then((user) => {
                const thisUser = user.data[0]
                setUserMovies(thisUser)

                if (!thisUser.MOVID) {
                    setTransactionState('INSERT')
                } else {
                    setTransactionState('UPDATE')
                }
            })
    }

    useEffect(() => {
        if (authCtx.isLoggedIn) setUpdateState()
        if (!authCtx.isLoggedIn) setUserMovies(null)
    }, [authCtx.isLoggedIn])

    const setUserMovies = (user) => {
        setMovID(user !== null ? user.MOVID : null)
        setChkAction(user !== null ? user.action : false)
        setChkComedy(user !== null ? user.comedy : false)
        setChkAnimation(user !== null ? user.comics_animation : false)
        setChkDocumentary(user !== null ? user.documentary : false)
        setChkDrama(user !== null ? user.drama : false)
        setChkHistory(user !== null ? user.history : false)
        setChkMystery(user !== null ? user.mystery : false)
        setChkNature(user !== null ? user.nature : false)
        setChkNews(user !== null ? user.news_worldaffairs : false)
        setChkReligion(user !== null ? user.religion : false)
        setChkRomance(user !== null ? user.romance : false)
        setChkSciFi(user !== null ? user.scifi : false)
        setChkSports(user !== null ? user.sports : false)
        setChkThriller(user !== null ? user.suspense_thriller : false)
        setChkWestern(user !== null ? user.western : false)
        setChkMoviesOther(user !== null ? user.movies_other : false)

        if (movID !== null) {
            setTransactionState('UPDATE')
        } else {
            setTransactionState('INSERT')
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const data = {
            id: movID,
            userid: authCtx.userID,
            action: chkAction,
            comedy: chkComedy,
            comics_animation: chkAnimation,
            documentary: chkDocumentary,
            drama: chkDrama,
            history: chkHistory,
            mystery: chkMystery,
            nature: chkNature,
            news_worldaffairs: chkNews,
            religion: chkReligion,
            romance: chkRomance,
            scifi: chkSciFi,
            sports: chkSports,
            suspense_thriller: chkThriller,
            western: chkWestern,
            other: chkMoviesOther
        }

        if (transactionState === 'INSERT') {
            // Do Insert
            return new Promise(function () {
                inputMovies(data)
                    .then(result => {
                        console.log('MovieInfo.js onSubmitHandler insert data', data)
                        console.log('MovieInfo.js onSubmitHandler insert result', result)
                        setMovID(result.data.insertId)
                        if (result.affectedRows > 0) {
                            console.log('MovieInfo.js', 'Insert Successful!')
                        } else {
                            console.log('MovieInfo.js', 'Insert Failed!')
                        }
                    })
                    .then(data.id = movID)
                    .then(() => setTransactionState('UPDATE'))
                    .then(() => setUpdateState())
                    .catch(err => console.log('MovieInfo.js onSubmitHandler insert err', err))
            })
        } else {
            // Do Update
            return new Promise(function () {
                updateMovies(data)
                    .then(result => {
                        console.log('MovieInfo.js onSubmitHandler update data', data)
                        console.log('MovieInfo.js onSubmitHandler update result', result)
                        if (result.affectedRows > 0) {
                            console.log('MovieInfo.js', 'Update Successful!')
                        } else {
                            console.log('MovieInfo.js', 'Update Failed!')
                        }
                    })
                    .then(() => setUpdateState())
                    .catch(err => console.log('MovieInfo.js onSubmitHandler update err', err))
            })
        }
    }

    const inputs = [
        { id: 'chkAction', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Action', checked: chkAction, onChange: () => setChkAction(!chkAction) },
        { id: 'chkComedy', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Comedy', checked: chkComedy, onChange: () => setChkComedy(!chkComedy) },
        { id: 'chkAnimation', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Comics / Animation', checked: chkAnimation, onChange: () => setChkAnimation(!chkAnimation) },
        { id: 'chkDocumentary', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Documentary', checked: chkDocumentary, onChange: () => setChkDocumentary(!chkDocumentary) },
        { id: 'chkDrama', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Drama', checked: chkDrama, onChange: () => setChkDrama(!chkDrama) },
        { id: 'chkHistory', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'History', checked: chkHistory, onChange: () => setChkHistory(!chkHistory) },
        { id: 'chkMystery', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Mystery', checked: chkMystery, onChange: () => setChkMystery(!chkMystery) },
        { id: 'chkNature', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Nature', checked: chkNature, onChange: () => setChkNature(!chkNature) },
        { id: 'chkNews', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'News / World Affairs', checked: chkNews, onChange: () => setChkNews(!chkNews) },
        { id: 'chkReligion', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Religion', checked: chkReligion, onChange: () => setChkReligion(!chkReligion) },
        { id: 'chkRomance', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Romance', checked: chkRomance, onChange: () => setChkRomance(!chkRomance) },
        { id: 'chkSciFi', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Sci-Fi', checked: chkSciFi, onChange: () => setChkSciFi(!chkSciFi) },
        { id: 'chkSports', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Sports', checked: chkSports, onChange: () => setChkSports(!chkSports) },
        { id: 'chkThriller', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Suspense / Thriller', checked: chkThriller, onChange: () => setChkThriller(!chkThriller) },
        { id: 'chkWestern', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Western', checked: chkWestern, onChange: () => setChkWestern(!chkWestern) },
        { id: 'chkMoviesOther', name: 'literaturetypes', inputType: 'checkbox', required: false, labelText: 'Other', checked: chkMoviesOther, onChange: () => setChkMoviesOther(!chkMoviesOther) }
    ]

    const formInputs = labeledInputs(inputs)

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Favorite Movie/TV/Literature Types</BodyHeader>
            {formInputs}
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
            </div>
        </form>
    )
}

export default MovieInfo
