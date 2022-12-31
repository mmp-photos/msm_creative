// IMPORTS //
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import heroImage from '../assets/images/hero_image.png';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import bg01 from '../assets/images/backgrounds/bg01.jpg';
import bg02 from '../assets/images/backgrounds/bg02.jpg';
import bg03 from '../assets/images/backgrounds/bg03.jpg';
import bg04 from '../assets/images/backgrounds/bg04.jpg';
import matt_homepage from '../assets/images/matt_homepage.jpg';

// SET UP LANDING PAGE FOR MSM CREATIVE WEBSITE //
const HomePage = () => {

    const [ isStopped, setStop ]      = useState(false);
    const [ bgPattern, setBackground] = useState(bg04);

    // setBackground(newImage);
    const changeBackground = useEffect(() => {
        if(!isStopped){
            const intervalId = setInterval(() => {
                const bgImages = [bg01, bg02, bg03, bg04];
                let i = Math.floor(Math.random() * bgImages.length);
                console.log('The current array item is', i);
                let image = bgImages[i];
                setBackground(image);
            }, 1000);
            return () => {
            clearInterval(intervalId);
            };
        }
        else{
            console.log('isStopped is truthy: ', isStopped);
        }
    });
    console.log('The value of isStopped onload is:', isStopped);
    
    //TOGGLE IMAGE BACKGROUND CHANGE//
    let stopStatus = isStopped;

    const stopSwitch = (state) => {
        stopStatus = (state ? false : true);
        return stopStatus;
    }
    
    stopSwitch(stopStatus);
    console.log('Stopped status from line 31 after the stopSwitch function is: ', isStopped);
    

    //SET HEIGHT OF MSM LOGO // 
    var clientWidth = window.innerWidth;
    clientWidth /= 2.14;
    const calcMaxHeight = Math.ceil(clientWidth);

    // RETURN THE CONTENT OF THE PAGE //
    return(
        <>
        <Helmet>
            <title>Matthew S Mayer</title>
        </Helmet>
        <Container>
            <Row>
                <Col lg="7">
                    <Row>
                        <Col>
                            <div id={'home-media'} style={{height: calcMaxHeight + 'px; overflow: hidden', backgroundImage:`url(${bgPattern})`}} onClick = {() => setStop(stopStatus)}>
                                <div style={{height: calcMaxHeight + 'px; overflow: hidden'}}>
                                    <img id="msmImage" src={heroImage} style={{maxWidth: '100%'}} alt='hero artwork' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-center'>
                            <h2 style={{'color': 'white'}}>make your marketing stand out!</h2>
                        </Col>
                    </Row>
                </Col>
                <Col lg="3" className="offset-1">
                    <h1>Hi!</h1>
                    <p className={'landing-page'}>My name is Matt and I am an Indianapolis based freelancer. I'm a full-stack web developer who has a love of publications and marketing.</p>
                    <p className={'landing-page'}>I'm known for creating slick websites and writing witty, punchy copy.  In person I'm recognized by the bold pattern shirts I wear.  But let me ask you this:</p>
                    <img className="avatar" src={matt_homepage} alt='Matthew Mayer' />
                </Col>
            </Row>
        </Container>
        </>
    )
}

// EXPORT HOMEPAGE ELEMENT //
export default HomePage;