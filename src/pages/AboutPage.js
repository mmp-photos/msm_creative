// IMPORTS //
import { Container, Row, Col, Modal, ModalHeader, ModalBody, setLoginModalOpen } from 'reactstrap';
import { useState } from 'react';
import dinoPhoto   from  '../assets/images/matt_dino.png';
import tim_curry   from  '../assets/images/tim_curry.jpg';
import libra       from  '../assets/images/libra.svg';
import HufflePuff  from  '../assets/images/hufflepuff.png';

// SET UP ABOUT PAGE FOR MSM CREATIVE WEBSITE //
const AboutPage = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    console.log(loginModalOpen);
    let [content, updateContent] = useState({});

    const TldrModalMBTI = () => {
        setLoginModalOpen(true);
        let text = {
                title: 'Myers Briggs Type Indicator',
                text:'This is the content for the INFJ modal.',
                image: libra};
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    } 

    const TldrModalZodiac = () => {
        setLoginModalOpen(true);
        let text = {
            title: 'Libra',
            text:'This is the content for the Zodiac modal.',
            image: libra};
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    } 

    const TldrModalPuff = () => {
        setLoginModalOpen(true);
        let text = {
            title: 'Hufflepuff House',
            text:'This is the content for the HufflePuff modal.',
            image: HufflePuff};
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    } 

    const TldrModalTim = () => {
        setLoginModalOpen(true);
        let text = {
            title: 'Tim Curry Test',
            text:'This is the content for the Tim Curry modal.',
            image: tim_curry};
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    } 

    return(
        <>
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <div>
                                <img id="dinoPhoto" src={dinoPhoto} style={{maxWidth: '100%'}} alt='matt petting a dinosaur' />
                            </div>
                        </Col>
                    </Row>
                    <Row className='tldr'>
                        <h3 style={{backgroundColor: 'black'}}>TLDR : Quick Reference Guide</h3>
                        <Col className='cs-bg-secondary'>
                            <div  id='infj' onClick={onClick => TldrModalMBTI()}>
                                <img src={libra} width='75px' alt='Libra scales'/><br />
                                MYERS BRIGS TYPE
                            </div>
                        </Col>
                        <Col className='cs-bg-secondary'>
                            <div id='libra' onClick={onClick => TldrModalZodiac()}>
                                <img src={libra} width='75px' alt='Libra scales'/><br />
                                ZODIAC
                            </div>
                        </Col>
                        <Col className='cs-bg-secondary'>
                            <div id='hufflepuff' onClick={onClick => TldrModalPuff()}>
                                <img src={HufflePuff} width='75px' alt='Hufflepuff House Crest'/><br />
                                HOGWARTS HOUSE
                            </div>
                        </Col>
                        <Col className='cs-bg-secondary'>
                            <div id='timCurry' onClick={onClick => TldrModalTim()}>
                                <img src={tim_curry} width='75px' alt='Tim Curry from Clue'/><br />
                                TIM CURRY
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        &nbsp;
                    </Row>
                </Col>
                <Col className={'col-md-4'} style={{marginTop: '80px'}} >
                    <h3>Who, What, Where?</h3>
                    <p>My name is Matthew Mayer.  I've spent my life in publishing and communications.  From my earliest days at the <a href="https://www.idsnews.com">Indiana Daily Student</a> where I worked on the photography, advertising, and editorial staffs to my professional career converting Dummies Guides to eBooks for the earliest versions of the Kindle, I have loved every minute of my time working in communications.</p>

                    <h3>Everything Old...</h3>
                    <p>Don't let my fondness for film cameras and manual typewriters fool you.  I am up-to-date on the current technologies and excel at helping clients implement them.</p>
                </Col>
            </Row>
      </Container>

    <Modal isOpen={loginModalOpen}>
    <ModalHeader toggle={() => setLoginModalOpen(false)} >
        <h2>{content.title}</h2>
    </ModalHeader>

    <ModalBody>
        <img className="img-fluid" src={content.image} alt='modal-image' />
        <p>{content.text}</p>
    </ModalBody>
    </Modal>
    </>
    )
}

// EXPORT HOMEPAGE ELEMENT //
export default AboutPage;