
import React from 'react'
import { motion } from 'framer-motion'
import { motionEffects } from '../assets/transitions/pageTransition'

import { SelectCustom } from '../components/SelectCustom'

export const Projects = () => {
    return (
        <motion.div {...motionEffects} style={{height: '100vh'}}>
            <SelectCustom />
        </motion.div>
    )
}
