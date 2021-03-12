import React, { Fragment, useContext } from 'react'

import { Advert } from './Advert'
import { NavBar } from './NavBar'

import EmailContext from '../context/Context'

export const Header = (props) => {

    const { isNotify, bodyMessage } = useContext(EmailContext);

    return (
        <Fragment>
            <NavBar />
            { isNotify &&
                <Advert
                    mode={bodyMessage.type}
                    textHead={bodyMessage.title}
                    textFoot={bodyMessage.textFoot}
                />}
        </Fragment>
    )
}
