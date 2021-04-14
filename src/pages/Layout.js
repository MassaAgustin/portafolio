import React, { Fragment } from 'react'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SelectLanguage } from '../components/SelectLanguage'

export const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <SelectLanguage />
            {children}
            <Footer />
        </Fragment>
    )
}
