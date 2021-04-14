import React, { useState } from 'react'
import EmailContext from './Context'

import { eng } from '../translate/eng'
import { esp } from '../translate/esp'

export default function EmailProvider({ children }) {

    const [isNotify, setIsNotify] = useState(false)
    const [bodyMessage, setBodyMessage] = useState('')

    const [language, setLanguage] = useState('es')


    const getLabelsForCurrentLanguage = () => {
        if (language === 'en')
            return eng
        if (language === 'es')
            return esp
    }

    const labels = getLabelsForCurrentLanguage()

    const selectLanguage = (language) => {
        switch (language) {
            case 'en':
                setLanguage(language)
                break;
            case 'es':
                setLanguage(language)
                break;
            default:
                break;
        }
    }

    const sendMessage = async (type, title, footer) => {

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
        labels,
        language,
        setIsNotify,
        sendMessage,
        selectLanguage
    }
    return (
        <EmailContext.Provider value={value}>
            {children}
        </EmailContext.Provider>
    )
}