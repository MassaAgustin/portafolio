import React, { useContext } from 'react'
import { Alert } from 'react-bootstrap'

import EmailContext from '../context/Context'

export const Advert = (props) => {

    const { toggleSend } = useContext(EmailContext)

    const toggleShow = () => {
        toggleSend()
    }

    const { mode, text, text2, textHead, textFoot, ...rest } = props;

    return (
        <Alert variant={mode} onClose={toggleShow} dismissible>
            {textHead && <Alert.Heading>{textHead}</Alert.Heading>}
            <p>
                {text}
            </p>
            <p>
                {text2}
            </p>
            <hr />
            {textFoot &&
                <p className="mb-0">{textFoot}</p>}
        </Alert>
    )
}
