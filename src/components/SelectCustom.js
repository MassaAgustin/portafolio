import React, { useState, useEffect, useContext } from 'react'

import { Container, Row, Col, Alert, OverlayTrigger, Popover, Card } from 'react-bootstrap'

import EmailContext from '../context/Context'

export const SelectCustom = () => {

    const { labels } = useContext(EmailContext)

    const [select, setSelect] = useState('')

    const skills = [
        { name: 'Bootstrap', level: 'warning' },
        { name: 'CSS', level: 'secondary' },
        { name: 'HTML', level: 'secondary' },
        { name: 'Java', level: 'secondary' },
        { name: 'JavaScript', level: 'primary' },
        { name: 'Node', level: 'secondary' },
        { name: 'MongoDB', level: 'secondary' },
        { name: 'PostgreSQL', level: 'secondary' },
        { name: 'React', level: 'primary' },
        { name: 'Redux', level: 'warning' },
        { name: 'Context', level: 'secondary' },
        { name: 'React Native', level: 'secondary' },
        { name: 'Responsive design', level: 'secondary' },
        { name: 'SASS', level: 'secondary' },
        { name: 'Express', level: 'secondary' },
    ]

    const projects = [
        {
            name: 'Poseidon v2',
            skills: ['React', 'MongoDB', 'Express', 'Node', 'JavaScript'],
            about: `Poseidon es un sistema para la gestion de alquileres de sombrillas y estacionamientos, 
            junto a analisis de datos para una mejor distribucion del dinero. Con los datos en la nube`
        },
        {
            name: 'Doi',
            skills: ['React', 'Express', 'Redux', 'MongoDB', 'Node', 'SASS', 'JavaScript'],
            about: `Doi es un sistema para la gestion de compra y venta de software, la intencion es que sirva como mediador
            entre estos, y proveer informacion al respecto junto a una interfaz didactica y facil para el que no este acostumbrado`
        },
        {
            name: 'Resto',
            skills: ['Redux', 'React Native', 'Json-server', 'JavaScript'],
            about: `Resto es un sistema para la gestion de reservaciones de un restaurante, acompañado los menus, 
            comentarios y lista de platos favoritos! Y informacion sobre el restaurante!`
        },
        {
            name: 'My Pantry',
            skills: ['React Native', 'JavaScript', 'Redux'],
            about: `My Pantry es un sistema para la gestion de alimentos en nuestra despensa, su objetivo es mantener un orden
            a la hora de reabastecer los productos del usuario, con un facil acceso y guardar sus recetas favoritas!`
        },
        {
            name: 'Poseidon v1',
            skills: ['PostgreSQL', 'Java'],
            about: `Poseidon es un sistema para la gestion de alquileres de sombrillas y estacionamientos, 
            junto a analisis de datos para una mejor distribucion del dinero. Con los datos locales`
        }
    ]

    const handleChangeSelect = ({ target }) => {
        setSelect(target.value)
    }

    const popoverHigh = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Cuanto conocimiento es {labels.high}</Popover.Title>
            <Popover.Content>
                <ul className='custom-marker'>
                    <li>Motivado con la tecnologia.</li>
                    <li>Investigar sobre su comportamiento interno.</li>
                    <li>Actualizado en sus herramientas</li>
                    <li>Flexible en el entorno</li>
                </ul>
            </Popover.Content>
        </Popover>
    );

    const popoverMedium = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Cuanto cononiciemto es {labels.medium}</Popover.Title>
            <Popover.Content>
                <ul className='custom-marker'>
                    <li>Motivado con la tecnologia.</li>
                    <li>Investigar lo que ofrece.</li>
                    <li>Realizando proyectos en tiempos libres</li>
                    <li>Reducidas vías de resolución</li>
                </ul>
            </Popover.Content>
        </Popover>
    );

    const popoverLow = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Cuanto cononiciemto es {labels.low}</Popover.Title>
            <Popover.Content>
                <ul className='custom-marker'>
                    <li>Proxima motivacion.</li>
                    <li>Investigar todo sobre la tecnologia.</li>
                    <li>Montado basico de la misma</li>
                    <li>Unica o escasas vías de resolucion</li>
                </ul>
            </Popover.Content>
        </Popover>
    );

    let levelSelected;

    if (select) {
        const skill = skills.filter(skill => skill.name === select)[0]
        if (skill) {
            levelSelected = skill.level
        }
    }

    useEffect(() => {

        const floatButton = document.getElementById('float-button');

        floatButton.classList.add('toLeft')

        return () => floatButton.classList.remove('toLeft')
    }, [])

    return (
        <Container fluid className="mt-3 justify-content-center 80vw">
            <Row>
                <Col md={2}>
                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverHigh} >
                        <Alert variant='primary' style={{ cursor: 'pointer' }}>{labels.high}</Alert>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverMedium}>
                        <Alert variant='secondary' style={{ cursor: 'pointer' }}>{labels.medium}</Alert>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="hover" placement="right" overlay={popoverLow}>
                        <Alert variant='warning' style={{ cursor: 'pointer' }}>{labels.low}</Alert>
                    </OverlayTrigger>
                </Col>
                <Col md={{ span: 6, offset: 1 }}>
                    <label htmlFor="homeList" className="form-label">{labels.skillSearch}</label>
                    <input value={select} onChange={handleChangeSelect} className="form-control" list="skillListOption" id="homeList" placeholder={labels.searchSkill} />
                    <datalist id="skillListOption" >
                        {skills.map((skill, index) => {
                            return <option key={`${skill}-${index}`} value={skill.name} />
                        })}
                    </datalist>
                    {select && <Alert variant={levelSelected}>{select}</Alert>}
                </Col>
            </Row>

            {projects.map(project => {

                if (project.skills.includes(select))
                    return (
                        <Row className="justify-content-center align-items-center">
                            <Col md={6}>
                                <Card>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Subtitle>{project.about}</Card.Subtitle>
                                    <Card.Footer>Usamos: {project.skills.map(skill => `${skill}; `)}</Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    )
            })}


        </Container>
    )
}
