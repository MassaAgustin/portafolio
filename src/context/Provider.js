import React, { useState } from 'react'
import EmailContext from './Context'

export default function EmailProvider({ children }) {

    const [isNotify, setIsNotify] = useState(false)
    const [bodyMessage, setBodyMessage] = useState('')

    const sendMessage = async (type,title,footer) => {

        setBodyMessage({
            type: type,
            title: title,
            textFoot: footer
        })
        setIsNotify(true)
    }

    const value = {
        isNotify,
        bodyMessage,
        setIsNotify,
        sendMessage
    }
    return (
        <EmailContext.Provider value={value}>
            {children}
        </EmailContext.Provider>
    )
}