import React, { Fragment, useContext } from 'react'

import EmailContext from '../context/Context'

import './SelectLanguage.scss'

export const SelectLanguage = () => {

    const { language, selectLanguage } = useContext(EmailContext)

    return (
        <Fragment>
            <div className='toggleButton'>
                {(language === 'en') && <button id='btn-es' onClick={() => selectLanguage('es')}>Español</button>}
                {(language === 'es') && <button id='btn-en' onClick={() => selectLanguage('en')}>English</button>}
            </div>
        </Fragment>

    )
}
