import { Container, Row, Col } from 'reactstrap'

const Footer = () => {
    return (
        <Container fluid className={'px-0 fixed-bottom'}>
            <Row className="site-footer">
                <Col className="col-md-8 text-left">
                    <h1 className="title">matthew mayer</h1>
                </Col>
                <Col className="col-md-3 mr-auto align-self-center">
                    {<footer>
                        <a href="https://www.instagram.com/mmp_photos/" alt='LinkedIN'>
                        <div className='social-buttons' id="instagram"><i className='fa fa-instagram instagram fa-3x' style={{color: '#c32aa3'}}></i></div>
                        </a>
                        <a href="https://www.facebook.com/matthew.mayer.77/" alt='LinkedIN'>
                        <div className='social-buttons' id="facebook"><i className="fa fa-facebook facebook fa-3x" style={{color: 'white'}}></i></div>
                        </a>
                        <a href="https://github.com/mmp-photos" alt='LinkedIN'>
                        <div className='social-buttons' id="github"><i className='fa fa-github fa-3x' style={{color: '#410093'}}></i></div>
                        </a>
                        <a href="https://www.linkedin.com/in/matthew-s-mayer/" alt='LinkedIN'>
                        <div className='social-buttons' id="linkedin"><i className="fa fa-linkedin fa-3x" style={{color: '#0077b5'}}></i></div>
                        </a>
                    </footer>}
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;

