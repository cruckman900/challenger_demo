import React, { useState, useContext } from "react";
import RightContainer from "./RightContainer/RightContainer";
import Card from "../../UI/Card/Card";
import wClasses from "../../builders/widget.module.css";
import AuthContext from "../../store/auth-context";
import NavContext from "../../store/nav-context";
import NavLocations from "../../builders/NavLocations/NavLocations";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

const Right = (props) => {
    const authCtx = useContext(AuthContext);
    const navCtx = useContext(NavContext);

    const communities = [
        {id: 0, title: "Anime Extravaganza", ownerID: 3, dateCreated: '01/29/1989'},
        {id: 1, title: "The Cajun Cook", ownerID: 5, dateCreated: '06/02/2021'},
        {id: 2, title: "Talking the Walk", ownerID: 52, dateCreated: '12/01/2020'},
    ];

    const communityMembers = [
        {id: 0, communityID: 0, peopleID: 3, isLeader: true},
        {id: 1, communityID: 1, peopleID: 3},
        {id: 1, communityID: 1, peopleID: 1},
        {id: 2, communityID: 1, peopleID: 7, isLeader: true},
        {id: 3, communityID: 2, peopleID: 52, isLeader: true},
        {id: 4, communityID: 2, peopleID: 42},
        {id: 4, communityID: 2, peopleID: 1},
    ];

    const groups = [
        {id: 0, title: "Just Us Three", dateCreated: '01/02/2023'},
    ];

    const peopleGroups = [
        {id: 0, groupID: 0, peopleID: 3},
        {id: 1, groupID: 0, peopleID: 8},
        {id: 2, groupID: 0, peopleID: 1},
    ]

    const people = [
        {id: 1, firstName: "This", lastName: "Is You", username: "thisisyou", displayName: "This Is You", dateCreated: '05/20/2023', isOnline: true},
        {id: 2, firstName: "Bee", lastName: "Sharp", username: "majorminorseventh", displayName: "Guitar God 827", dateCreated: '01/31/1999', isOnline: false},
        {id: 8, firstName: "Jill", lastName: "Valentine", username: "space-race-lace", displayName: "HyperGirlGalaxy", dateCreated: '04/20/2020', isOnline: false},
        {id: 31, firstName: "Jake", lastName: "Sully", username: "imbluedabadee", displayName: "Taruk Mak'teu", dateCreated: '12/16/2009', isOnline: false},
        {id: 52, firstName: "Spongebob", lastName: "Squarepants", username: "underthesea", displayName: "hooUcallinYella", dateCreated: '08/01/2016', isOnline: false},
        {id: 42, firstName: "Mike", lastName: "Merale", username: "mistermike", displayName: "Mister Mike", dateCreated: '01/02/2023', isOnline: false},
        {id: 3, firstName: "Chris", lastName: "Ruckman", username: "LinearDescent", displayName: "LinearDescent", dateCreated: '04/17/2023', isOnline: true},
        {id: 5, firstName: "Dave", lastName: "Shapperelli", username: "wootybooyaboy", displayName: "CrazyCritter22", dateCreated: '01/01/2021', isOnline: false},
        {id: 7, firstName: "Kitty", lastName: "Van Dyne", username: "kitty22116", displayName: "Hello Kitty Cute", dateCreated: '06/06/1999', isOnline: false},
    ];

    const myPeople = [
        {id: 0, peopleID: 3},
        {id: 1, peopleID: 42},
        {id: 2, peopleID: 8},
        {id: 3, peopleID: 7},
    ];

    const myCommunitiesArray = Array();
    const myGroupsArray = Array();
    const myPeopleArray = Array();

    communities.map((community) => {
        communityMembers.map((communityMember) => {
            if (community.id === communityMember.communityID && communityMember.peopleID === 1) {
                myCommunitiesArray.push(community);
            }
        });
    });

    peopleGroups.map((peopleGroup) => {
        groups.map((group) => {
            if (peopleGroup.peopleID === 1 && group.id === peopleGroup.groupID) {
                myGroupsArray.push(group);
            }
        });
    });

    myPeople.map((peoples) => {
        people.map((person) => {
            if (peoples.peopleID === person.id) {
                myPeopleArray.push(person);
            }
        })
    });

    const onClickHandler = (type, id, title, name) => {
        navCtx.onJoin(type, id, title, name);
    };

    return (
        <RightContainer>
            <Card headerText="Communities">
                {!authCtx.isLoggedIn && <span>If you join one or more communities, the list of communities will be displayed in this block.</span>}
                {authCtx.isLoggedIn && (
                    NavLocations(myCommunitiesArray, 'community', onClickHandler)
                )}
            </Card>
            <hr className={wClasses.br} />
            <Card headerText="Groups">
                {!authCtx.isLoggedIn && <span>You can set up a group of friends for communications amongst each other.</span>}
                {authCtx.isLoggedIn && (
                    NavLocations(myGroupsArray, 'group', onClickHandler)
                )}
            </Card>
            <hr className={wClasses.br} />
            <Card headerText="People">
                {!authCtx.isLoggedIn && <span>Here will be individuals (friends, family members, etc.) that you can message privately.</span>}   
                {authCtx.isLoggedIn && (
                    NavLocations(myPeopleArray, 'people', onClickHandler)
                )}
            </Card>
        </RightContainer>
    );
}

export default Right