import React, { Fragment } from 'react'
import MainLoader from '../components/MainLoader'
import { Learning } from '../components/Learning'
import { SoftSkill } from '../components/SoftSkill'
import { HardSkill } from '../components/HardSkill'
import { Goals } from '../components/Goals'
import { Translate } from '../components/Translate'

export const AboutMe = () => {
    return (
        <Fragment>
            <MainLoader />
            <Translate />
            <Learning />
            <SoftSkill />
            <HardSkill />
            <Goals />
        </Fragment>
    )
}
