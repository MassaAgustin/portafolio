import React, { Fragment } from 'react'

import { ContactForm } from '../components/ContactForm'

export const Contact = () => {
    return (
        <Fragment>
            <header>
                <h1>Contactame!</h1>
            </header>
            <section>
                <ContactForm />
            </section>
            <footer>
                <h3>Sigueme en mis redes sociales!</h3>
            </footer>
        </Fragment>
    )
}
