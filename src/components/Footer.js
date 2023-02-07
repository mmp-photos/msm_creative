import { Container, Row, Col } from 'reactstrap'
import React from 'react';

const Footer = () => {
    return (
        <Container fluid className={'px-0 fixed-bottom site-footer'}>
            <div className="container">
                <Row>
                    <Col className=" d-sm-4 d-md-block col-md-8 d-flex align-items-center justify-content-center">
                    <a className='nav-link' href='/'><h1 className="title">matthew mayer</h1></a>
                    </Col>
                    <Col className="col-xs-12 col-md-3 mr-auto align-self-center">
                        <footer>
                            <a href="https://www.instagram.com/mmp_photos/" alt='LinkedIN'>
                            <div className='social-buttons' id="instagram"><i className='fa fa-instagram instagram' style={{color: '#c32aa3'}}></i></div>
                            </a>
                            <a href="https://www.facebook.com/matthew.mayer.77/" alt='LinkedIN'>
                            <div className='social-buttons' id="facebook"><i className="fa fa-facebook facebook" style={{color: 'white'}}></i></div>
                            </a>
                            <a href="https://github.com/mmp-photos" alt='LinkedIN'>
                            <div className='social-buttons' id="github"><i className='fa fa-github' style={{color: '#410093'}}></i></div>
                            </a>
                            <a href="https://www.linkedin.com/in/matthew-s-mayer/" alt='LinkedIN'>
                            <div className='social-buttons' id="linkedin"><i className="fa fa-linkedin" style={{color: '#0077b5'}}></i></div>
                            </a>
                        </footer>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Footer;

