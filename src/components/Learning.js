import React, { useContext } from 'react'

import EmailContext from '../context/Context'

export const Learning = () => {

    const { labels } = useContext(EmailContext)

    return (
        <div className="cardAbout" id="learning">
            <div className="cardAbout__container">
                <h1>{labels.learning}</h1>
                <div className="cardAbout__body">
                    <strong>{labels.subTitleLearningOne}</strong>
                    <p>{labels.learningParagraphOne}</p>
                    <strong>{labels.subTitleLearningTwo}</strong>
                    <p>{labels.learningParagraphTwo}</p>
                </div>
            </div>
        </div>
    )
}
