import React, { Fragment, useEffect } from 'react'

import { MainImage } from '../assets/main.js'
import me from '../assets/images/test1.jpg'

import './MainLoader.scss'





const MainLoader = (props) => {

    useEffect(() => {

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

    }, [])

    return (
        <a href="#learning">
            <div className="container-loader" id="main">
                <div className="main-loader" onClick={props.onClick} >
                    <MainImage />
                </div>
                <pre id="typewriter" className="container-text">
                    <span className="var-highlight">var </span>
                    Person = {"{\n"}
                    {'\n'}    name: <span className="string-highlight">{`'Agustin'`}</span>,
                        {'\n'}    lastName: <span className="string-highlight">{`'Massa'`}</span>,
                        {'\n'}    age: <span className="string-highlight">{`23`}</span>,
                        {'\n'}    like:[{'\n'}<span className="string-highlight">        'Sweet food'</span>,
                                    {'\n'}<span className="string-highlight">        'Mate'</span>,
                                    {'\n'}<span className="string-highlight">        'Cats'{'\n'}    </span>],
                        {'\n'}    avatar:
            </pre>
                <div className="container-img">
                    <img src={me} alt="imagen de Agustin Massa" />
                </div >
            </div >
        </a>
    )
}

export default MainLoader;