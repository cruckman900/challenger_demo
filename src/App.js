import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Top from './Layout/Top/top'
import Left from './Layout/Left/left'
import Main from './Layout/Main/Main'
import Right from './Layout/Right/right'
import StatusBar from './Layout/StatusBar/StatusBar'
import Footer from './Layout/Footer/footer'
import DefaultPage from './UI/DefaultPage/DefaultPage'
import Note from './UI/Note/Note'
import classes from './App.module.css'
import axios from 'axios'

const App = () => {
    const [displayNormal, setDisplayNormal] = useState(true)

    const api = axios.create({
        baseURL: 'https://api.chatterboxsm.com/',
        headers: { 'Content-Type': 'application/json' }
    })

    async function ping () {
        return new Promise(function (resolve, reject) {
            api.get('/')
                .then(() => setDisplayNormal(true))
                .catch(() => setDisplayNormal(false))
        })
    }

    useEffect(() => {
        setInterval(ping, 5000)
    })

    return (
        <div className={classes.App}>
            <Fragment>
                <Row><Col><Top /></Col></Row>
                <Row className={classes.horizRowContainer}>
                    <Col><Left /></Col>
                    {displayNormal &&
                        <Col><Main /></Col>
                    }
                    {!displayNormal &&
                        <Col>
                            <DefaultPage headerText='Network Error' objectClassName={classes.error}>
                                <Note noteType='error' headerText='Network Temporarily Unavailable'>
                                    Once connectivity has been established, this error will go away and you will be back
                                    to the main program.
                                </Note>
                            </DefaultPage>
                        </Col>
                    }
                    <Col className={classes.floatingHolder}><Right /></Col>
                </Row>
                <Row className={classes.status}><Col><StatusBar /></Col></Row>
                <Row><Col><Footer /></Col></Row>
            </Fragment>
        </div>
    )
}

export default App
