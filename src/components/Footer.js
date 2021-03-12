import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'

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
        <Container fluid className="fixed-bottom mb-0 border-top justify-content-center bg-dark">
            <footer>
                <Row className="justify-content-center ml-5 p-1" xs={4}>
                    <Col>
                        <a href={urlLinkedin} target="_blank" rel="noreferrer">
                            <Image className="img-footer" fluid src={linkedIn} rounded />
                        </a>
                    </Col>
                    <Col>
                    <a href={urlTwitter} target="_blank" rel="noreferrer">
                            <Image className="img-footer" fluid src={twitter} rounded />
                        </a>
                    </Col>
                    <Col>
                    <a href={urlInstagram} target="_blank" rel="noreferrer">
                            <Image className="img-footer" fluid src={instagram} rounded />
                        </a>
                    </Col>
                    <Col>
                    <a href={urlOutlook} target="_blank" rel="noreferrer">
                            <Image className="img-footer" fluid src={outlook} rounded />
                        </a>
                    </Col>
                </Row>
            </footer>
        </Container>

    )
}
