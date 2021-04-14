import React, { useContext } from 'react'

import EmailContext from '../context/Context'

export const HardSkill = () => {

    const { labels } = useContext(EmailContext)
    return (
        <div className="cardAbout" id="hardSkill">
            <div className="cardAbout__container">
                <h1>Hard Skills</h1>
                <div className="cardAbout__body">
                    <strong>{labels.subTitleHardOne}</strong>
                    <p>{labels.hardParagraphOne}</p>
                    <strong>{labels.subTitleHardTwo}</strong>
                    <p>{labels.hardParagraphTwo}</p>
                </div>
            </div>
        </div>
    )
}
