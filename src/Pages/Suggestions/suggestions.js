/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from 'react'
import DefaultPage from '../../UI/DefaultPage/DefaultPage'

export default function Suggestions () {
    return (
        <Fragment>
            <DefaultPage headerText="Suggestions">
                <div>
                    If you have an idea of what you'd like to see happen on this site, drop a suggestion, or vote on
                    one that has already been posted.  I'll try to work on them in order of the number of votes.
                </div>
            </DefaultPage>
        </Fragment>
    )
}
