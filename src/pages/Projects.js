
import React from 'react'
import { motion } from 'framer-motion'
import { motionEffects } from '../assets/transitions/pageTransition'

export const Projects = () => {
    return (
        <motion.div {...motionEffects} style={{height: '100vh'}}>
            <label htmlFor="homeList" className="form-label">Skill's Search</label>
            <input className="form-control" list="skillListOption" id="homeList" placeholder="Type to search skill..." />
            <datalist id="skillListOption">
                <option value="React" />
                <option value="Redux" />
                <option value="Bootstrap 5" />
                <option value="Node" />
                <option value="SASS" />
            </datalist>
        </motion.div>
    )
}
