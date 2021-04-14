import React, { useContext } from 'react'

import EmailContext from '../context/Context'

export const SoftSkill = () => {

    const { labels } = useContext(EmailContext)

    return (
        <div className="cardAbout" id="softSkill">
            <div className="cardAbout__container">
                <h1>{labels.soft}</h1>
            </div>
        </div>
    )
}
