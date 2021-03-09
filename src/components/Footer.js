import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'

import linkedIn from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'
import twitter from '../assets/icons/twitter.svg'

import './Footer.css'

export const Footer = () => {


    const urlLinkedin = "https://www.linkedin.com/in/agustin-isaac-vera-massa-939548201/";
    const urltwitter = "https://twitter.com/AgusMassa14";
    const urlinstagram = "https://www.instagram.com/agus.massa1/";

    return (
        <Container fluid className="fixed-bottom mb-0 border-top justify-content-center bg-dark">
            <footer>
                <Row className="justify-content-center p-1" xs={4}>
                    <Col>
                        <a href={urlLinkedin} target="_blank" rel="noopener">
                            <Image className="img-footer" fluid src={linkedIn} rounded />
                        </a>
                    </Col>
                    <Col>
                    <a href={urltwitter} target="_blank" rel="noopener">
                            <Image className="img-footer" fluid src={twitter} rounded />
                        </a>
                    </Col>
                    <Col>
                    <a href={urlinstagram} target="_blank" rel="noopener">
                            <Image className="img-footer" fluid src={instagram} rounded />
                        </a>
                    </Col>
                </Row>
            </footer>
        </Container>

    )
}
