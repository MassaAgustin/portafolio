import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

import { Contact } from '../pages/Contact'
import { Projects } from '../pages/Projects'
import { AboutMe } from '../pages/AboutMe'
import { Header } from '../components/Header'

export const Navigation = () => {

    return (
        <Router onUpdate={() => window.scrollTo(0, 0)}>
            <Header />
            <AnimatePresence>
                <Switch >
                    <Route exact path="/about" component={AboutMe} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Redirect to="/about" />
                </Switch>
            </AnimatePresence>
        </Router>
    )
}
