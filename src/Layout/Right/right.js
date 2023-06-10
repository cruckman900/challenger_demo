import React, { useState, useContext, Fragment } from 'react'
import RightContainer from './RightContainer/RightContainer'
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button'
import classes from './right.module.css'
import wClasses from '../../builders/widget.module.css'
import AuthContext from '../../store/auth-context'
import NavContext from '../../store/nav-context'
import NavLocations from '../../builders/NavLocations/NavLocations'
import { communities, communityMembers, groups, peopleGroups, people, myPeople } from '../../assets/mockdata'

const Right = (props) => {
    const authCtx = useContext(AuthContext)
    const navCtx = useContext(NavContext)

    const [selectedID, setSelectedID] = useState(null)

    const onClickHandler = (type, id, title, name) => {
        navCtx.onJoin(type, id, title, name)
        setSelectedID(id)
    }

    const myCommunitiesArray = []
    const myGroupsArray = []
    const myPeopleArray = []

    communities.map((community) => {
        communityMembers.map((communityMember) => {
            if (community.id === communityMember.communityID && communityMember.peopleID === 1) {
                myCommunitiesArray.push(community)
            }
            return communityMember
        })
        return community
    })

    peopleGroups.map((peopleGroup) => {
        groups.map((group) => {
            if (peopleGroup.peopleID === 1 && group.id === peopleGroup.groupID) {
                myGroupsArray.push(group)
            }
            return group
        })
        return peopleGroup
    })

    myPeople.map((peoples) => {
        people.map((person) => {
            if (peoples.peopleID === person.id) {
                myPeopleArray.push(person)
            }
            return person
        })
        return peoples
    })

    const [toggle, setToggle] = useState('collapse')
    const [chevron, setChevron] = useState('>')

    const onToggleClickHandler = () => {
        if (toggle === 'collapsed') {
            setToggle('expanded')
            setChevron('>')
            return
        }
        setToggle('collapsed')
        setChevron('<')
    }

    return (
        <Fragment>
            <div><Button className={classes.toggle} value={chevron} onClick={() => onToggleClickHandler()} /></div>
            <RightContainer className={`${classes.showFull} ${chevron === '>' && classes.hide} ${chevron === '<' && classes.show}`} onClick={onClickHandler}>
                <Card headerText="Communities" className={classes.card}>
                    {!authCtx.isLoggedIn && <div style={{ margin: '.25rem' }}>If you join one or more communities, the list of communities will be displayed in this block.</div>}
                    {authCtx.isLoggedIn && (
                        NavLocations(myCommunitiesArray, 'community', onClickHandler, selectedID)
                    )}
                </Card>
                <hr className={wClasses.br} />
                <Card headerText="Groups" className={classes.card}>
                    {!authCtx.isLoggedIn && <div style={{ margin: '.25rem' }}>You can set up a group of friends for communications amongst each other.</div>}
                    {authCtx.isLoggedIn && (
                        NavLocations(myGroupsArray, 'group', onClickHandler, selectedID)
                    )}
                </Card>
                <hr className={wClasses.br} />
                <Card headerText="People" className={classes.card}>
                    {!authCtx.isLoggedIn && <div style={{ margin: '.25rem' }}>Here will be individuals (friends, family members, etc.) that you can message privately.</div>}
                    {authCtx.isLoggedIn && (
                        NavLocations(myPeopleArray, 'people', onClickHandler, selectedID)
                    )}
                </Card>
            </RightContainer>
        </Fragment>
    )
}

export default Right
