import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'

export const Navigation = () => {

    return (
        <Router onUpdate={() => window.scrollTo(0, 0)}>
            <div className="col-9">
                <Header />
            </div >
            <div className="col-3">
                <NavBar />
            </div >
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
        </Router>
    )
}
