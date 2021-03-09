import React, { useState } from 'react'
import EmailContext from './Context'

export default function EmailProvider({ children }) {

    const [isSendEmail, setIsSendEmail] = useState(false)
    const [bodyEmail, setBodyEmail] = useState('')

    const sendEmail = async (body) => {

        setBodyEmail({
            fullName: `${body.secondName} ${body.name}`,
            email: `${body.email}@${body.domain}`,
            description: body.description
        })
        setIsSendEmail(!isSendEmail)
    }

    const value = {
        isSendEmail,
        bodyEmail,
        toggleSend: () => {
            setIsSendEmail(!isSendEmail)
        },
        sendEmail
    }
    return (
        <EmailContext.Provider value={value}>
            {children}
        </EmailContext.Provider>
    )
}