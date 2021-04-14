import React, { useContext, useState } from 'react'
import { useInputValue } from '../customHooks/useInputValue'

import EmailContext from '../context/Context'

import { expresiones } from '../assets/expresiones/expresiones'

import { Container, Form, Row, Col, Button } from 'react-bootstrap'

export const ContactForm = () => {

    const name = useInputValue('');
    const secondName = useInputValue('')
    const email = useInputValue('');
    const description = useInputValue('');

    const [validName, setValidName] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validDescription, setValidDescription] = useState(false)

    const { setIsNotify, sendMessage, labels } = useContext(EmailContext)

    const inputSimple = {
        md: 12,
        lg: 6
    }

    const inputDouble = {
        md: 6,
        lg: 3
    }

    const nextFocus = (event, objId) => {
        if (event.code === 'Enter') {
            const obj = document.getElementById(objId);
            if (obj)
                obj.focus();
        }
    }

    const InputName = () => {
        return (
            <Row className="mb-3 justify-content-center" >
                <Col className="mb-3" {...inputDouble}>
                    <Form.Label>{labels.firstNameI}</Form.Label>
                    <Form.Control name="name" id="contactName" onBlur={validForm} onKeyUp={validForm} onKeyPress={(event) => nextFocus(event, 'contactSecond')} placeholder={labels.firstNameI} {...name} isValid={validName ? true : false} isInvalid={(!validName && name.value) ? true : false} />
                    <Form.Control.Feedback type="invalid">{labels.firstNameFeedback}</Form.Control.Feedback>
                </Col>
                <Col {...inputDouble}>
                    <Form.Label>{labels.secondNameI}</Form.Label>
                    <Form.Control name="secondName" id="contactSecond" onKeyPress={(event) => nextFocus(event, 'contactEmail')} placeholder={labels.secondNameI} {...secondName} />
                </Col>
            </Row>
        )
    }

    const InputEmail = () => {
        return (
            <Row className="mb-3 justify-content-center" >
                <Col {...inputSimple}>
                    <Form.Label>{labels.email}</Form.Label>
                    <Form.Control name="email" id="contactEmail" onBlur={validForm} onKeyUp={validForm} onKeyPress={(event) => nextFocus(event, 'contactDescription')} placeholder={labels.email} {...email} isValid={validEmail ? true : false} isInvalid={(!validEmail && email.value) ? true : false} />
                    <Form.Control.Feedback type="invalid">{labels.emailFeedback}</Form.Control.Feedback>
                </Col>
            </Row>
        )
    }

    const InputDescription = () => {
        return (
            <Row className="mb-3 justify-content-center" >
                <Col {...inputSimple}>
                    <Form.Label>{labels.description}</Form.Label>
                    <Form.Control name="description" id="contactDescription" onBlur={validForm} onKeyUp={validForm} onKeyPress={(event) => nextFocus(event, 'contactButton')} as="textarea" rows={3} placeholder={labels.reason} {...description} style={{ resize: "none" }} isValid={validDescription ? true : false} isInvalid={(!validDescription && description.value) ? true : false}/>
                    <Form.Control.Feedback type="invalid">{labels.descriptionFeedback}</Form.Control.Feedback>
                </Col>
            </Row>
        )
    }

    const validForm = () => {

        setValidName(expresiones.name.test(name.value))

        setValidEmail(expresiones.email.test(email.value))

        setValidDescription(expresiones.description.test(description.value))
    }

    const clearInputs = () => {
        name.reset()
        secondName.reset()
        email.reset()
        description.reset()
    }

    const handleNotify = () => {

        if (validName && validEmail && validDescription) {
            sendMessage("success",labels.ok,labels.answer)
            clearInputs()
            validForm()
        }else{
            sendMessage("danger",labels.error,"ups")
            validForm()
        }
        setTimeout(() => {
            setIsNotify(false)
        }, 5000)
    }

    return (

        <Container fluid className="mt-5 justify-content-center">
            <Form id="contactForm">
                {InputName()}
                {InputEmail()}
                {InputDescription()}
                <Row className="justify-content-center" >
                    <Col {...inputSimple}>
                        <Button id="contactButton" onClick={handleNotify}>{labels.send}</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
