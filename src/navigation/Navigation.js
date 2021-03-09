import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { AboutMe } from '../pages/AboutMe'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Navigation = () => {

    return (
        <Fragment>
            <Router onUpdate={() => window.scrollTo(0, 0)}>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/contact" component={Contact} />
            </Router>
            <Footer />
        </Fragment>

    )
}
