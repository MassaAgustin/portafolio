import React, { Fragment, useContext } from 'react'

import { Advert } from './Advert'
import { NavBar } from './NavBar'

import EmailContext from '../context/Context'

import config from '../config.json'

export const Header = (props) => {

    const { isSendEmail, bodyEmail } = useContext(EmailContext);

    return (
        <Fragment>
            <NavBar />
            { isSendEmail &&
                <Advert
                    mode={"success"}
                    text={`Full Name: ${bodyEmail.fullName} | from: ${bodyEmail.email} | to: ${config.email}`}
                    text2={`Message: ${bodyEmail.description}`}
                    textHead={"Email sent successfully"}
                    textFoot={"I will answer soon"}
                />}
        </Fragment>
    )
}
