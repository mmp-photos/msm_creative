// IMPORTS //
import React from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import dinoPhoto   from  '../assets/images/matt_dino.png';
import updateStyle from '../utils/updateButtonStyles';
import homeLinks from '../utils/homeLinks.js';

// SET UP WORK PAGE FOR MSM CREATIVE WEBSITE //
const WorkPage = () => {

    const [ workStyle, setWorkStyle] = useState({});
    const [ aboutStyle, setAboutStyle] = useState({});
    const [ contactStyle, setContactStyle] = useState({});

    return(
        <>
        <Helmet>
            <title>Work | Matthew Mayer</title>
        </Helmet>
        <div className="container">
            <Container fluid>
                <Row>
                    <Col sm={12} md={6} className ="order-sm-1 order-md-2" style={{background: "#f0f1f4", overflow: "scroll"}}>
                        <Row>
                            <Col>
                                <div>
                                    <img id="interior-photo-primary" src={dinoPhoto} alt='matt petting a dinosaur' />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={3} className ="order-sm-2 order-md-1">
                        <h1>TEST</h1>
                        <button id="work-developer" 
                           //onMouseEnter={() => updateStyle("work")}
                            //onMouseLeave={() => setWorkStyle({fontStyle: "normal"})}
                            onClick={() => homeLinks('portfolio/0')}
                            style={workStyle}>
                            Developer
                        </button>
                        <button id="work-marketer"
                            //onMouseEnter={() => updateStyle("about")}
                            //onMouseLeave={() => setAboutStyle({fontStyle: "normal"})}
                            onClick={() => homeLinks('about')}
                            style={aboutStyle}>
                            Marketer
                        </button>
                        <button type="button" id="work-writer"
                            //onMouseEnter={() => updateStyle("contact")}
                            //onMouseLeave={() => setContactStyle({fontStyle: "normal"})}
                            onClick={() => homeLinks('contact')}
                            style={contactStyle}>
                            Writer
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    )
}

// EXPORT HOMEPAGE ELEMENT //
export default WorkPage;