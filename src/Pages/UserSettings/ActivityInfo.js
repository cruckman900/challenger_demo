/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../store/auth-context'
import { getActivitiesByUserID, inputActivities, updateActivities } from '../../DataHandlers/ActivitiesDataHandler'
import BodyHeader from '../../UI/BodyHeader/BodyHeader'
import Button from '../../UI/Button/Button'
import labeledInputs from '../../builders/LabeledInputs/labeledInputs'
import classes from './UserSettings.module.css'

const ActivityInfo = (props) => {
    const authCtx = useContext(AuthContext)

    const [transactionState, setTransactionState] = useState('INSERT')

    const [actID, setActID] = useState(null)
    const [chkArcheryGuns, setChkArcheryGuns] = useState(false)
    const [chkArtsCrafts, setChkArtsCrafts] = useState(false)
    const [chkBarsClubs, setChkBarsClubs] = useState(false)
    const [chkBilliardsDarts, setChkBilliardsDarts] = useState(false)
    const [chkBoatingCamping, setChkBoatingCamping] = useState(false)
    const [chkBoxingWrestling, setChkBoxingWrestling] = useState(false)
    const [chkClassicSports, setChkClassicSports] = useState(false)
    const [chkCycling, setChkCycling] = useState(false)
    const [chkFishingHunting, setChkFishingHunting] = useState(false)
    const [chkHikingClimbing, setChkHikingClimbing] = useState(false)
    const [chkMachinesElectronics, setChkMachinesElectronics] = useState(false)
    const [chkMartialArts, setChkMartialArts] = useState(false)
    const [chkMusicInstr, setChkMusicInstr] = useState(false)
    const [chkPuzzlesGames, setChkPuzzlesGames] = useState(false)
    const [chkReadingWriting, setChkReadingWriting] = useState(false)
    const [chkSingingDancing, setChkSingingDancing] = useState(false)
    const [chkSwimming, setChkSwimming] = useState(false)
    const [chkVideoGames, setChkVideoGames] = useState(false)
    const [chkWalkingRunning, setChkWalkingRunning] = useState(false)
    const [chkWatchingTV, setChkWatchingTv] = useState(false)
    const [chkActivityOther, setChkActivityOther] = useState(false)

    const setUpdateState = () => {
        getActivitiesByUserID(authCtx.userID)
            .then((user) => {
                const thisUser = user.data[0]
                setUserActivites(thisUser)

                if (thisUser.id !== null) {
                    setTransactionState('INSERT')
                } else {
                    setTransactionState('UPDATE')
                }
            })
    }

    useEffect(() => {
        if (authCtx.isLoggedIn) setUpdateState()
        if (!authCtx.isLoggedIn) setUserActivites(null)
    }, authCtx.isLoggedIn)

    const setUserActivites = (user) => {
        setActID(user !== null ? user.id : false)
        setChkArcheryGuns(user !== null ? user.archery_guns : false)
        setChkArtsCrafts(user !== null ? user.arts_crafts : false)
        setChkBarsClubs(user !== null ? user.bars_clubs : false)
        setChkBilliardsDarts(user !== null ? user.billiards_darts : false)
        setChkBoatingCamping(user !== null ? user.boating_camping : false)
        setChkBoxingWrestling(user !== null ? user.boxing_wrestling : false)
        setChkClassicSports(user !== null ? user.classicsports : false)
        setChkCycling(user !== null ? user.cycling : false)
        setChkFishingHunting(user !== null ? user.fishing_hunting : false)
        setChkHikingClimbing(user !== null ? user.hiking_climbing : false)
        setChkMachinesElectronics(user !== null ? user.machines_electronics : false)
        setChkMartialArts(user !== null ? user.martialarts : false)
        setChkMusicInstr(user !== null ? user.musicalinstruments : false)
        setChkPuzzlesGames(user !== null ? user.puzzles_games : false)
        setChkReadingWriting(user !== null ? user.reading_writing : false)
        setChkSingingDancing(user !== null ? user.singing_dancing : false)
        setChkSwimming(user !== null ? user.swimming : false)
        setChkVideoGames(user !== null ? user.videogames : false)
        setChkWalkingRunning(user !== null ? user.walking_running : false)
        setChkWatchingTv(user !== null ? user.watchingtv : false)
        setChkActivityOther(user !== null ? user.other : false)

        if (actID !== null) {
            setTransactionState('UPDATE')
        } else {
            setTransactionState('INSERT')
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const data = {
            id: actID,
            userid: authCtx.userID,
            archery_guns: chkArcheryGuns,
            arts_crafts: chkArtsCrafts,
            bars_clubs: chkBarsClubs,
            billiards_darts: chkBilliardsDarts,
            boating_camping: chkBoatingCamping,
            boxing_wrestling: chkBoxingWrestling,
            classicsports: chkClassicSports,
            cycling: chkCycling,
            fishing_hunting: chkFishingHunting,
            hiking_climbing: chkHikingClimbing,
            machines_electronics: chkMachinesElectronics,
            martialarts: chkMartialArts,
            musicalinstruments: chkMusicInstr,
            puzzles_games: chkPuzzlesGames,
            reading_writing: chkReadingWriting,
            singing_dancing: chkSingingDancing,
            swimming: chkSwimming,
            videogames: chkVideoGames,
            walking_running: chkWalkingRunning,
            watchingtv: chkWatchingTV,
            other: chkActivityOther
        }

        if (transactionState === 'INSERT') {
            // Do Insert
            return new Promise(function () {
                inputActivities(data)
                    .then(result => {
                        console.log('ActivityInfo.js onSubmitHandler', 'data', data, 'result', result)
                        setActID(result.data.insertid)
                        if (result.data.affectedRows > 0) {
                            console.log('ActivityInfo.js', 'Insert Successful!')
                        } else {
                            console.log('ActivityInfo.js', 'Insert Failed!')
                        }
                    })
                    .then(data.id = actID)
                    .then(() => setTransactionState('UPDATE'))
                    .then(() => setUpdateState())
                    .catch(err => console.log('ActivityInfo.js onSubmitHandler insert err', err))
            })
        } else {
            // Do Update
            return new Promise(function () {
                updateActivities(data)
                    .then(result => {
                        console.log('ActivityInfo.js onSubmitHandler update', result)
                        if (result.affectedRows > 0) {
                            console.log('ActivityInfo.js', 'Update Successful!')
                        } else {
                            console.log('ActivityInfo.js', 'Update Failed')
                        }
                    })
                    .then(() => setUpdateState())
                    .catch(err => console.log('ActivityInfo.js onSubmitHandler update err', err))
            })
        }
    }

    const inputs = [
        { id: 'chkArcheryGuns', name: 'activitytypes', inputType: 'checkbox', labelClassName: classes.labelText, required: false, labelText: 'Archery / Fire Arms', checked: chkArcheryGuns, onChange: () => setChkArcheryGuns(!chkArcheryGuns) },
        { id: 'chkArtsCrafts', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Arts and Crafts', checked: chkArtsCrafts, onChange: () => setChkArtsCrafts(!chkArtsCrafts) },
        { id: 'chkBarsClubs', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Bars / Clubs', checked: chkBarsClubs, onChange: () => setChkBarsClubs(!chkBarsClubs) },
        { id: 'chkBilliardsDarts', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Billiards / Darts', checked: chkBilliardsDarts, onChange: () => setChkBilliardsDarts(!chkBilliardsDarts) },
        { id: 'chkBoatingCamping', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Boating / Camping', checked: chkBoatingCamping, onChange: () => setChkBoatingCamping(!chkBoatingCamping) },
        { id: 'chkBoxingWrestling', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Boxing / Wrestling', checked: chkBoxingWrestling, onChange: () => setChkBoxingWrestling(!chkBoxingWrestling) },
        { id: 'chkClassicSports', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Classic Sports', checked: chkClassicSports, onChange: () => setChkClassicSports(!chkClassicSports) },
        { id: 'chkCycling', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Cycling', checked: chkCycling, onChange: () => setChkCycling(!chkCycling) },
        { id: 'chkFishingHunting', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Fishing / Hunting', checked: chkFishingHunting, onChange: () => setChkFishingHunting(!chkFishingHunting) },
        { id: 'chkHikingClimbing', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Hiking / Climbing', checked: chkHikingClimbing, onChange: () => setChkHikingClimbing(!chkHikingClimbing) },
        { id: 'chkMachinesElectronics', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Machines / Electronics', checked: chkMachinesElectronics, onChange: () => setChkMachinesElectronics(!chkMachinesElectronics) },
        { id: 'chkMartialArts', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Martial Arts', checked: chkMartialArts, onChange: () => setChkMartialArts(!chkMartialArts) },
        { id: 'chkMusicInstr', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Musical Instruments', checked: chkMusicInstr, onChange: () => setChkMusicInstr(!chkMusicInstr) },
        { id: 'chkPuzzlesGames', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Puzzles / Games', checked: chkPuzzlesGames, onChange: () => setChkPuzzlesGames(!chkPuzzlesGames) },
        { id: 'chkReadingWriting', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Reading / Writing', checked: chkReadingWriting, onChange: () => setChkReadingWriting(!chkReadingWriting) },
        { id: 'chkSingingDancing', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Singing / Dancing', checked: chkSingingDancing, onChange: () => setChkSingingDancing(!chkSingingDancing) },
        { id: 'chkSwimming', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Swimming', checked: chkSwimming, onChange: () => setChkSwimming(!chkSwimming) },
        { id: 'chkVideoGames', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Video Games', checked: chkVideoGames, onChange: () => setChkVideoGames(!chkVideoGames) },
        { id: 'chkWalkingRunning', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Walking / Running', checked: chkWalkingRunning, onChange: () => setChkWalkingRunning(!chkWalkingRunning) },
        { id: 'chkWatchingTV', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Watching TV', checked: chkWatchingTV, onChange: () => setChkWatchingTv(!chkWatchingTV) },
        { id: 'chkActivityOther', name: 'activitytypes', inputType: 'checkbox', required: false, labelText: 'Other', checked: chkActivityOther, onChange: () => setChkActivityOther(!chkActivityOther) }
    ]

    const formInputs = labeledInputs(inputs)

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Favorite Activities</BodyHeader>
            {formInputs}
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
            </div>
        </form>
    )
}

export default ActivityInfo
