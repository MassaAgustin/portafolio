import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { motionEffects } from '../assets/transitions/pageTransition'

import MainLoader from '../components/MainLoader'
import { Learning } from '../components/Learning'
import { SoftSkill } from '../components/SoftSkill'
import { HardSkill } from '../components/HardSkill'
import { Goals } from '../components/Goals'
import { Translate } from '../components/Translate'

export const AboutMe = () => {

    const animationAbout = () => {
        function setupTypewriter(t) {
            var HTML = t.innerHTML;

            t.innerHTML = "";

            var cursorPosition = 0,
                tag = "",
                writingTag = false,
                tagOpen = false,
                typeSpeed = 100,
                tempTypeSpeed = 0;

            var type = function () {

                if (writingTag === true) {
                    tag += HTML[cursorPosition];
                }

                if (HTML[cursorPosition] === "<") {
                    tempTypeSpeed = 0;
                    if (tagOpen) {
                        tagOpen = false;
                        writingTag = true;
                    } else {
                        tag = "";
                        tagOpen = true;
                        writingTag = true;
                        tag += HTML[cursorPosition];
                    }
                }
                if (!writingTag && tagOpen) {
                    tag.innerHTML += HTML[cursorPosition];
                }
                if (!writingTag && !tagOpen) {
                    if (HTML[cursorPosition] === " ") {
                        tempTypeSpeed = 0;
                    }
                    else {
                        tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                    }
                    t.innerHTML += HTML[cursorPosition];
                }
                if (writingTag === true && HTML[cursorPosition] === ">") {
                    tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                    writingTag = false;
                    if (tagOpen) {
                        var newSpan = document.createElement("span");
                        t.appendChild(newSpan);
                        newSpan.innerHTML = tag;
                        tag = newSpan.firstChild;
                    }
                }

                cursorPosition += 1;
                if (cursorPosition < HTML.length - 1) {
                    setTimeout(type, tempTypeSpeed);
                }

            };

            return {
                type: type
            };

        }

        var typer = document.getElementById('typewriter');

        const typewriter = setupTypewriter(typer);

        typewriter.type();

        typer.classList.add("textappear")
    }

    useEffect(() => {

        animationAbout()
    }, [])

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
