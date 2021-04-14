import React from 'react'

import { Image } from 'react-bootstrap'

import linkedIn from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'
import twitter from '../assets/icons/twitter.svg'
import outlook from '../assets/icons/outlook.svg'

import './Footer.css'

export const Footer = () => {


    const urlLinkedin = "https://www.linkedin.com/in/agustin-isaac-vera-massa-939548201/";
    const urlTwitter = "https://twitter.com/AgusMassa14";
    const urlInstagram = "https://www.instagram.com/agus.massa1/";
    const urlOutlook = "mailto:agus.massa@hotmail.com?subject=interview&body=Hello Agustin Massa,";

    return (
        <div className="d-flex justify-content-between bg-color">
            <div className="p-2 ml-5 col-example text-left">
                <a href={urlLinkedin} target="_blank" rel="noreferrer">
                    <Image className="img-footer" fluid src={linkedIn} rounded />
                </a>
            </div>
            <div className="p-2 col-example text-left">
                <a href={urlTwitter} target="_blank" rel="noreferrer">
                    <Image className="img-footer" fluid src={twitter} rounded />
                </a>
            </div>
            <div className="p-2 col-example text-left">
                <a href={urlInstagram} target="_blank" rel="noreferrer">
                    <Image className="img-footer" fluid src={instagram} rounded />
                </a>
            </div>
            <div className="p-2 mr-5 col-example text-left">
                <a href={urlOutlook} target="_blank" rel="noreferrer">
                    <Image className="img-footer" fluid src={outlook} rounded />
                </a>
            </div>
        </div>

    )
}
