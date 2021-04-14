import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

import { Contact } from '../pages/Contact'
import { Projects } from '../pages/Projects'
import { AboutMe } from '../pages/AboutMe'
import { Layout } from '../pages/Layout'
import { NotFound } from '../pages/NotFound'

export const Navigation = () => {

    return (
        <Router onUpdate={() => window.scrollTo(0, 0)}>
            <Layout>
                <AnimatePresence>
                    <Switch>
                        <Route exact path="/about" component={AboutMe} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/contact" component={Contact} />
                        <Route path="/" component={NotFound} />
                    </Switch>
                </AnimatePresence>
            </Layout>
        </Router>
    )
}
