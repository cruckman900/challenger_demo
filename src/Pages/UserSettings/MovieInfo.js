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
        setChkAction(user !== null ? user.action : null)
        setChkComedy(user !== null ? user.comedy : null)
        setChkAnimation(user !== null ? user.comics_animation : null)
        setChkDocumentary(user !== null ? user.documentary : null)
        setChkDrama(user !== null ? user.drama : null)
        setChkHistory(user !== null ? user.history : null)
        setChkMystery(user !== null ? user.mystery : null)
        setChkNature(user !== null ? user.nature : null)
        setChkNews(user !== null ? user.news_worldaffairs : null)
        setChkReligion(user !== null ? user.religion : null)
        setChkRomance(user !== null ? user.romance : null)
        setChkSciFi(user !== null ? user.scifi : null)
        setChkSports(user !== null ? user.sports : null)
        setChkThriller(user !== null ? user.suspense_thriller : null)
        setChkMoviesOther(user !== null ? user.western : null)
        setChkWestern(user !== null ? user.other : null)

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
            userID: authCtx.userID,
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
                    .then(result => setMovID(result.data.insertId))
                    .then(data.id = movID)
                    .then(() => setTransactionState('UPDATE'))
                    .then(() => setUpdateState())
                    .catch(err => console.log('MovieInfo.js onSubmitHandler insert err', err))
            })
        } else {
            // Do Update
            return new Promise(function () {
                updateMovies(data)
                    .then(() => setUpdateState())
                    .catch(err => console.log('MovieInfo.js onSubmitHandler update err', err))
            })
        }
    }

    const inputs = [
        { id: 'chkAction', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Action', checked: chkAction },
        { id: 'chkComedy', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Comedy', checked: chkComedy },
        { id: 'chkAnimation', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Comics / Animation', checked: chkAnimation },
        { id: 'chkDocumentary', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Documentary', checked: chkDocumentary },
        { id: 'chkDrama', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Drama', checked: chkDrama },
        { id: 'chkHistory', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'History', checked: chkHistory },
        { id: 'chkMystery', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Mystery', checked: chkMystery },
        { id: 'chkNature', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Nature', checked: chkNature },
        { id: 'chkNews', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'News / World Affairs', checked: chkNews },
        { id: 'chkReligion', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Religion', checked: chkReligion },
        { id: 'chkRomance', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Romance', checked: chkRomance },
        { id: 'chkSciFi', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Sci-Fi', checked: chkSciFi },
        { id: 'chkSports', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Sports', checked: chkSports },
        { id: 'chkThriller', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Suspense / Thriller', checked: chkThriller },
        { id: 'chkWestern', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Western', checked: chkWestern },
        { id: 'chkMoviesOther', name: 'literaturetypes', className: classes.smallInputStyle, inputType: 'checkbox', required: false, labelText: 'Other', checked: chkMoviesOther }
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
