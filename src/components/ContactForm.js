import React, { useContext, useState, useEffect } from 'react'
import { useInputValue } from '../customHooks/useInputValue'

import EmailContext from '../context/Context'

import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap'

export const ContactForm = () => {

    const name = useInputValue('');
    const secondName = useInputValue('')
    const email = useInputValue();
    const domain = useInputValue('');
    const description = useInputValue('');

    const [validName, setValidName] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validDomain, setValidDomain] = useState(false)

    let first = true

    const { isSendEmail, toggleSend, sendEmail } = useContext(EmailContext)

    const inputSimple = {
        md: 12,
        lg: 6
    }

    const inputDouble = {
        md: 6,
        lg: 3
    }

    const nextFocus = (event, objId) => {
        if (event.code == 'Enter') {
            console.log("presiono enter")
            const obj = document.getElementById(objId);
            if (obj)
                obj.focus();
        }
    }

    const InputName = () => {
        return (
            <Row className="mb-3 justify-content-center" >
                <Col {...inputDouble}>
                    <Form.Control id="contactName" onKeyPress={(event) => nextFocus(event, 'contactSecond')} placeholder="First name" {...name} isValid={validName ? true : false} isInvalid={(validName || first) ? false : true} />
                    <Form.Control.Feedback type="invalid">name is required</Form.Control.Feedback>
                </Col>
                <Col {...inputDouble}>
                    <Form.Control id="contactSecond" onKeyPress={(event) => nextFocus(event, 'contactEmail')} placeholder="Second name" {...secondName} />
                </Col>
            </Row>
        )
    }

    const InputEmail = () => {
        return (
            <Row className="mb-3 justify-content-center" >
                <Col {...inputDouble}>
                    <Form.Control id="contactEmail" onKeyPress={(event) => nextFocus(event, 'contactDomain')} placeholder="Enter you email" {...email} isValid={validEmail ? true : false} isInvalid={(validEmail || first) ? false : true} />
                    <Form.Control.Feedback type="invalid">mail does not exist</Form.Control.Feedback>
                </Col>
                <Col {...inputDouble}>
                    <InputGroup >
                        <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control id="contactDomain" onKeyPress={(event) => nextFocus(event, 'contactDescription')} type="email" placeholder="any.com" {...domain} isValid={validDomain ? true : false} isInvalid={(!validDomain || first) ? false : true} />
                        <Form.Control.Feedback type="invalid">@{domain.value} not exist</Form.Control.Feedback>
                    </InputGroup>
                </Col>
            </Row>
        )
    }

    const InputDescription = () => {
        return (
            <Row className="mb-3 justify-content-center" >
                <Col {...inputSimple}>
                    <Form.Control id="contactDescription" onKeyPress={(event) => nextFocus(event, 'contactButton')} as="textarea" rows={3} placeholder="Could be any reason" {...description} style={{ resize: "none" }} />
                </Col>
            </Row>
        )
    }

    const handleEmail = async () => {
        const body = {
            name: name.value,
            secondName: secondName.value,
            email: email.value,
            domain: domain.value,
            description: description.value
        }
        if (name.value) setValidName(true); else setValidName(false)
        if (email.value) setValidEmail(true); else setValidEmail(false)
        if (domain.value.includes('com')) setValidDomain(true); else setValidDomain(false)
        first = true
        if (validName && validEmail && validDomain)
            await sendEmail(body)
    }

    return (

        <Container fluid className="mt-5 justify-content-center">
            <Form>
                {InputName()}
                {InputEmail()}
                {InputDescription()}
                <Row className="justify-content-center" >
                    <Col {...inputSimple}>
                        <Button id="contactButton" onClick={handleEmail}>Send</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
