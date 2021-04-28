import React from 'react'

import { Card } from 'react-bootstrap'
import './CustomCard.scss'

export const CustomCard = ({ title, body, skills, image }) => {
    return (
        <Card className="card-custom">
            <Card.Img src={image} alt={`Icon project ${title} not important`} className="card-custom__image" />
            <Card.ImgOverlay>
                <div className="card-custom__container">
                    <Card.Title className="card-custom__title">{title}</Card.Title>
                    <Card.Text className="card-custom__body">{body}</Card.Text>
                    <button className="button-custom">More</button>
                </div>

            </Card.ImgOverlay>
        </Card>
    )
}
