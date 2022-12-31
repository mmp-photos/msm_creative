// IMPORTS //
import React from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import parse from 'html-react-parser';
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
            text:'<p>The seventh sign of the zodiac Libra is represented by a set of scales.  Life for Libras is all about balance. </p> <p>My first boss once described me with a gesture, his hand sweeping in a smooth, straight line.  "The keel of the ship" is what he called me.  Smooth sailing, tranquil and balanced.</p>',
            image: libra};
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    } 

    const TldrModalPuff = () => {
        setLoginModalOpen(true);
        let text = {
            title: 'Hufflepuff House',
            text:"<p>It's a popluar belief that Hufflepuffs have somehow failed to show courage, cleverness, or cunning. Hufflepuffs know better!</p><p> The Sorting Hat doesn't look for a lack of traits.  Puffs are as daring, ambitious, and bright as their classmates.  But their DEFINING trait is fundamental fairness.  It's hard work and a commitment to treat everyone equally that mark badgers.  Hufflepuff is also the most inclusive of the Hogwarts Houses.  They won't turn away anyone who shares their inherent decency.</p>",
            image: HufflePuff};
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    } 

    const TldrModalTim = () => {
        setLoginModalOpen(true);
        let text = {
            title: 'Tim Curry Test',
            text:'<p>Knowing what movie someone recognizes Tim Curry from tells you a lot about them.  I will relieve the antici...</p> <p>...</p> <p>... pation and tell you that I will always think of Tim Curry as the butler from Clue. If I am being honest I probably first saw him as the devil in Legend.  But the character design really removed the opportunity to recognize him in other roles.</p> <p>I <span class="text-italics">wish</span> I was cool enough to say that it was Rocky Horror Picture Show where I discovered him.  However Frank-n-Furter was well into my future when I helped my classmates at Collins Living Learning Center put on a production in our dining hall.</p>',
            image: tim_curry};
        updateContent(text);
        console.log(content);
        console.log('The modal should be open');
    } 

    return(
        <>
        <Helmet>
            <title>Aboout Me | Matthew Mayer</title>
        </Helmet>
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
                    <Row>
                        &nbsp;
                    </Row>
                </Col>
                <Col className={'col-md-6'} style={{marginTop: 40, paddingLeft: 95, paddingRight: 75}} >
                    <h3>Who, What, Where?</h3>
                    <p>My name is Matthew Mayer.  I've spent my life in publishing and communications.  From my earliest days at the <a href="https://www.idsnews.com">Indiana Daily Student</a> where I worked on the photography, advertising, and editorial staffs to my professional career converting Dummies Guides to eBooks for the earliest versions of the Kindle, I have loved every minute of my time working in communications.</p>
                    <Row className='tldr'>
                        <h3 style={{backgroundColor: 'black', textAlign: 'center'}}>TLDR : Quick Reference Guide</h3>
                        <Col className='cs-bg-secondary'>
                            <div  id='infj' onClick={onClick => TldrModalMBTI()}>
                                <img src={libra} width='75px' className='tldr-image' alt='Libra scales'/><br />
                            </div>
                        </Col>
                        <Col className='cs-bg-secondary'>
                            <div id='libra' onClick={onClick => TldrModalZodiac()}>
                                <img src={libra} width='75px' className='tldr-image' alt='Libra scales'/><br />
                            </div>
                        </Col>
                        <Col className='cs-bg-secondary'>
                            <div id='hufflepuff' onClick={onClick => TldrModalPuff()}>
                                <img src={HufflePuff} width='75px' className='tldr-image' alt='Hufflepuff House Crest'/><br />
                            </div>
                        </Col>
                        <Col className='cs-bg-secondary'>
                            <div id='timCurry' onClick={onClick => TldrModalTim()}>
                                <img src={tim_curry} width='75px' className='tldr-image' alt='Tim Curry from Clue'/><br />
                            </div>
                        </Col>
                    </Row>

                    <h3>Everything Old...</h3>
                    <p>Don't let my fondness for film cameras and manual typewriters fool you.  I am up-to-date on the current technologies and excel at helping clients implement them.</p>
                </Col>
            </Row>
      </Container>

    <Modal className="about-modal" isOpen={loginModalOpen}>
    <ModalHeader className="about-modal-header" toggle={() => setLoginModalOpen(false)} >
        <span className="h2-modal">{content.title}</span>
    </ModalHeader>

    <ModalBody>
        <img className="modal-image" src={content.image} alt='from the modal' />
        {parse('<div>' + content.text + '</div>')}
    </ModalBody>
    </Modal>
    </>
    )
}

// EXPORT HOMEPAGE ELEMENT //
export default AboutPage;