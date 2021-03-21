import React from 'react'
import { motion } from 'framer-motion'
import { motionEffects } from '../assets/transitions/pageTransition'

import MainLoader from '../components/MainLoader'
import { Learning } from '../components/Learning'
import { SoftSkill } from '../components/SoftSkill'
import { HardSkill } from '../components/HardSkill'
import { Goals } from '../components/Goals'
import { Translate } from '../components/Translate'

export const AboutMe = () => {
    return (
        <motion.div {...motionEffects}>
            <MainLoader />
            <Translate />
            <Learning />
            <SoftSkill />
            <HardSkill />
            <Goals />
        </motion.div>
    )
}
