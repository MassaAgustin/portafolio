import React from 'react'
import { motion } from 'framer-motion'
import { motionEffects } from '../assets/transitions/pageTransition'

import { ContactForm } from '../components/ContactForm'

export const Contact = () => {
    return (
        <motion.div {...motionEffects}>
            <section style={{height:'100vh'}}>
                <ContactForm />
            </section>
        </motion.div>
    )
}
