import React, { useContext } from 'react'

import EmailContext from '../context/Context'

export const Translate = () => {

    const { labels } = useContext(EmailContext)

    return (
        <div className="translate">
            <a href="#navbar">{labels.main}</a>
            <a href="#learning">{labels.learning}</a>
            <a href="#softSkill">{labels.soft}</a>
            <a href="#hardSkill">{labels.hard}</a>
            <a href="#goals">{labels.goals}</a>
        </div>
    )
}
