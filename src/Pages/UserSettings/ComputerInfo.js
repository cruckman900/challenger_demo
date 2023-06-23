/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../store/auth-context'
import { getTechnicalByUserID, inputTechnical, updateTechnical } from '../../DataHandlers/TechnicalAptitudeDataHandler'
import BodyHeader from '../../UI/BodyHeader/BodyHeader'
import Note from '../../UI/Note/Note'
import Button from '../../UI/Button/Button'
import labeledInputs from '../../builders/LabeledInputs/labeledInputs'
import classes from './UserSettings.module.css'

const ComputerInfo = (props) => {
    const authCtx = useContext(AuthContext)

    const [transactionState, setTransactionState] = useState('INSERT')
    const [message, setMessage] = useState('')

    const [techID, setTechID] = useState(null)
    const [chkDigitalMedia, setChkDigitalMedia] = useState(false)
    const [chkGameDev, setChkGameDev] = useState(false)
    const [chkOfficeProf, setChkOfficeProf] = useState(false)
    const [chkSoftwareDev, setChkSoftwareDev] = useState(false)
    const [chkTechWriting, setChkTechWriting] = useState(false)
    const [chkCompOther, setChkCompOther] = useState(false)

    const setUpdateState = () => {
        getTechnicalByUserID(authCtx.userID)
            .then((user) => {
                const thisUserTechnical = user.data.length > 0 ? user.data[0] : null
                setUserTechnical(thisUserTechnical)

                if (thisUserTechnical === null) {
                    setTransactionState('INSERT')
                } else {
                    setTransactionState('UPDATE')
                }
            })
    }

    useEffect(() => {
        if (authCtx.isLoggedIn) setUpdateState()
        if (!authCtx.isLoggedIn) setUserTechnical(null)
    }, [authCtx.isLoggedIn])

    const setUserTechnical = (userTechnical) => {
        setTechID(userTechnical !== null ? userTechnical.id : null)
        setChkDigitalMedia(userTechnical !== null ? userTechnical.digitalart_media : null)
        setChkGameDev(userTechnical !== null ? userTechnical.gamedevelopment : null)
        setChkOfficeProf(userTechnical !== null ? userTechnical.officesoftwareproficiency : null)
        setChkSoftwareDev(userTechnical !== null ? userTechnical.softwaredevelopment : null)
        setChkTechWriting(userTechnical !== null ? userTechnical.technicalwriting : null)
        setChkCompOther(userTechnical !== null ? userTechnical.other : null)

        if (techID !== null) {
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
            id: techID,
            userid: authCtx.userID,
            digitalart_media: chkDigitalMedia,
            gamedevelopment: chkGameDev,
            officesoftwareproficiency: chkOfficeProf,
            softwaredevelopment: chkSoftwareDev,
            technicalwriting: chkTechWriting,
            other: chkCompOther
        }

        if (transactionState === 'INSERT') {
            // Do Insert
            return new Promise(function () {
                inputTechnical(data)
                    .then(result => {
                        setTechID(result.data.insertid)
                        if (result.data.affectedRows > 0) {
                            setSuccessMessage(true)
                        } else {
                            setSuccessMessage(false)
                        }
                    })
                    .then(data.id = techID)
                    .then(() => setTransactionState('UPDATE'))
                    .then(() => setUpdateState())
                    .catch(err => console.log('ComputerInfo.js onSubmitHandler insert err', err))
            })
        } else {
            // Do Update
            return new Promise(function () {
                updateTechnical(data)
                    .then(result => {
                        if (result.data.affectedRows > 0) {
                            setSuccessMessage(true)
                        } else {
                            setSuccessMessage(false)
                        }
                    })
                    .then(() => setUpdateState())
                    .catch(err => console.log('ComputerInfo.js onSubmitHandler update err', err))
            })
        }
    }

    const inputs = [
        { id: 'chkDigitalMedia', name: 'computerinfotypes', inputType: 'checkbox', required: false, labelText: 'Digital Art / Media', checked: chkDigitalMedia, onChange: () => setChkDigitalMedia(!chkDigitalMedia) },
        { id: 'chkGameDev', name: 'computerinfotypes', inputType: 'checkbox', required: false, labelText: 'Game Development', checked: chkGameDev, onChange: () => setChkGameDev(!chkGameDev) },
        { id: 'chkOfficeProf', name: 'computerinfotypes', inputType: 'checkbox', required: false, labelText: 'Office Software Proficiency', checked: chkOfficeProf, onChange: () => setChkOfficeProf(!chkOfficeProf) },
        { id: 'chkSoftwareDev', name: 'computerinfotypes', inputType: 'checkbox', required: false, labelText: 'Software Development', checked: chkSoftwareDev, onChange: () => setChkSoftwareDev(!chkSoftwareDev) },
        { id: 'chkTechWriting', name: 'computerinfotypes', inputType: 'checkbox', required: false, labelText: 'Technical Writing', checked: chkTechWriting, onChange: () => setChkTechWriting(!chkTechWriting) },
        { id: 'chkCompOther', name: 'computerinfotypes', inputType: 'checkbox', required: false, labelText: 'Other', checked: chkCompOther, onChange: () => setChkCompOther(!chkCompOther) }
    ]

    const formInputs = labeledInputs(inputs)

    return (
        <form onSubmit={onSubmitHandler}>
            <BodyHeader>Technical Aptitude</BodyHeader>
            {message && <Note noteType={message.noteType} headerText={message.headerText}>{message.messageText}</Note>}
            {formInputs}
            <BodyHeader>&nbsp;</BodyHeader>
            <div className={classes.formRow}>
                <Button className={classes.primaryBtn} type="submit" name="btnSubmit" value="Submit" />
            </div>
        </form>
    )
}

export default ComputerInfo
