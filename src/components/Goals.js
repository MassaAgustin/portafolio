import React, { useContext } from 'react'

import EmailContext from '../context/Context'
export const Goals = () => {

    const { labels } = useContext(EmailContext)

    return (
        <div className="cardAbout" id="goals">
            <div className="cardAbout__container">
                <h1>{labels.goals}</h1>
                <div className="cardAbout__body">
                    <strong>{labels.subTitleGoalOne}</strong>
                    <p>{labels.goalParagraphOne}</p>
                    <strong>{labels.subTitleGoalTwo}</strong>
                    <p>{labels.goalParagraphTwo}</p>
                </div>
            </div>
        </div>
    )
}
