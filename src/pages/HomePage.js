// IMPORTS //
import { Container, Row, Col } from 'reactstrap';
import heroImage from '../assets/images/hero_image.png';
import { useEffect, useState } from 'react';
import bg01 from '../assets/images/backgrounds/bg01.jpg';
import bg02 from '../assets/images/backgrounds/bg02.jpg';
import bg03 from '../assets/images/backgrounds/bg03.jpg';
import bg04 from '../assets/images/backgrounds/bg04.jpg';

// SET UP LANDING PAGE FOR MSM CREATIVE WEBSITE //
const HomePage = () => {

    //GET STATE OF HERO IMAGE 
    const { stopChanging, setStopChanging } = useState(true);

    const toggleStop = (isStopped) => {
        if(isStopped) {
            setStopChanging(false) }
        else{

             setStopChanging(true);
        }
    }

    //SET HEIGHT OF MSM LOGO // 
    var clientWidth = window.innerWidth;
    clientWidth /= 2.14;
    const calcMaxHeight = Math.ceil(clientWidth);
    
    setInterval(() => {
      }, 5000);

    const changeBG = () => {
        if(!stopChanging){
            console.log('changing background')
            const bgImages = ["bg01.jpg", "bg02.jpg", "bg03.jpg", "bg04.jpg"];
            let i = Math.floor(Math.random() * bgImages.length)
            if(i == 0){ 
                i += 1;
                return i;
            }
            let bgImage = document.getElementById("home-media").style.backgroundImage=`url(images/backgrounds/bg0${i}.jpg`;
            return bgImage;
        }
    } 

    // RETURN THE CONTENT OF THE PAGE //
    return(
        <Container>
            <Row>
                <Col className={'col-md-8 ml-auto px-0'}>
                    <Row>
                        <Col>
                            <div id={'home-media'} className={''} style={{height: calcMaxHeight + 'px; overflow: hidden; border:1'}}>
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
                <Col className={'col-md-3'} style={{marginTop: '80px'}} >
                    <p className={'landing-page'}>My name is Matt and I am an Indianapolis based freelancer. I'm a full-stack web developer who has a love of publications and marketing.</p>
                    <p className={'landing-page'}>I'm known for creating slick websites and writing witty, punchy copy.  In person I'm recognized by the bold pattern shirts I wear.  But let me ask you this:</p>
                </Col>
            </Row>
        </Container>
    )
}

// EXPORT HOMEPAGE ELEMENT //
export default HomePage;