import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { NavBar } from '../components/NavBar'

export const Navigation = () => {

    return (
        <Router onUpdate={() => window.scrollTo(0, 0)}>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
        </Router>
    )
}
