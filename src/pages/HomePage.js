// IMPORTS //
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import heroImage from '../assets/images/hero_image.svg';
import mattHomepage from '../assets/images/mattHomepage.png';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import bg01 from '../assets/images/backgrounds/bg01.jpg';
import bg02 from '../assets/images/backgrounds/bg02.jpg';
import bg03 from '../assets/images/backgrounds/bg03.jpg';
import bg04 from '../assets/images/backgrounds/bg04.jpg';
import bg05 from '../assets/images/backgrounds/bg05.jpg';
import bg06 from '../assets/images/backgrounds/bg06.jpg';
import bg07 from '../assets/images/backgrounds/bg07.jpg';
import bg08 from '../assets/images/backgrounds/bg08.jpg';
import bg09 from '../assets/images/backgrounds/bg09.jpg';

// SET UP LANDING PAGE FOR MSM CREATIVE WEBSITE //
const HomePage = () => {

    const [ isStopped, setStop ]      = useState(false);
    const [ bgPattern, setBackground] = useState(bg04);
    const [ aboutStyle, setAboutStyle] = useState({});
    const [ workStyle, setWorkStyle] = useState({});
    const [ contactStyle, setContactStyle] = useState({});

    // setBackground(newImage);
    const changeBackground = useEffect(() => {
        if(!isStopped){
            const intervalId = setInterval(() => {
                const bgImages = [bg01, bg02, bg03, bg04, bg05, bg06, bg07, bg08, bg09];
                let i = Math.floor(Math.random() * bgImages.length);
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
    
    //TOGGLE IMAGE BACKGROUND CHANGE//
    let stopStatus = isStopped;

    const stopSwitch = (state) => {
        stopStatus = (state ? false : true);
        return stopStatus;
    }
    
    stopSwitch(stopStatus);
    // console.log('Stopped status from line 31 after the stopSwitch function is: ', isStopped); –- Commented out after issue was resolved. //
    

    //SET HEIGHT OF MSM LOGO // 
    var clientWidth = window.innerWidth;
    clientWidth /= 2.14;
    const calcMaxHeight = Math.ceil(clientWidth);

    //SET UP LINKS AND STYLE CHANGES OF PRIMARY BUTTONS //
    const updateStyle = (style) => {
        switch(style){
            case "about":
                setAboutStyle({fontStyle: "italic"});
                break;
            case "work":
                setWorkStyle({fontStyle: "italic"});
                break;
            case "contact":
                setContactStyle({fontStyle: "italic"});
                break;
            default:
                console.log(`updateStyle value is default`);
        }
    };
    const homeLinks = (url) => {
        window.open(url, '_self');
    }

    // RETURN THE CONTENT OF THE PAGE //
    return(
        <>
        <Helmet>
            <title>Matthew S Mayer</title>
        </Helmet>
        <Container fluid style={{marginTop: 55}}>
            <Row>
                <Col sm={12} md={6} className ="order-sm-1 order-md-2">
                    <div id={'home-media'} style={{height: calcMaxHeight + 'px; overflow: hidden', backgroundImage:`url(${bgPattern})`}} onClick = {() => setStop(stopStatus)}>
                        <div style={{height: calcMaxHeight + 'px; overflow: hidden'}}>
                            <img id="msmImage" src={heroImage} style={{maxWidth: '100%', cursor: "pointer"}} alt='hero artwork' />
                        </div>
                    </div>
                    <div>
                        <img id={mattHomepage} src={mattHomepage} className="profile-photo" alt="Matthew Mayer" />
                        <h1 className="sans" style={{paddingTop: "2rem"}}>Matthew Mayer</h1>
                        <h3 className="sans">Coder, Marketer</h3>
                        <h3 className="sans">Humorist &amp; Hoosier</h3>
                        <p className="plain-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </Col>        
                <Col sm={12} md={3} className ="order-sm-2 order-md-1 offset-md-2">
                    <button id="home-work" 
                        onMouseEnter={() => updateStyle("work")}
                        onMouseLeave={() => setWorkStyle({fontStyle: "normal"})}
                        onClick={() => homeLinks('work')}
                        style={workStyle}>
                        Work.
                    </button>
                    <button id="home-about"
                        onMouseEnter={() => updateStyle("about")}
                        onMouseLeave={() => setAboutStyle({fontStyle: "normal"})}
                        onClick={() => homeLinks('about')}
                        style={aboutStyle}>
                        About.
                    </button>
                    <button type="button" id="home-contact"
                        onMouseEnter={() => updateStyle("contact")}
                        onMouseLeave={() => setContactStyle({fontStyle: "normal"})}
                        onClick={() => homeLinks('contact')}
                        style={contactStyle}>
                        Contact.
                    </button>
                </Col>
            </Row>
        </Container>
        </>
    )
}

// EXPORT HOMEPAGE ELEMENT //
export default HomePage;