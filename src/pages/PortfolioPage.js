//import { Image, Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from "reactstrap";
import PortfolioList from "../features/portfolio/PortfolioList";
import DisplayCard from "../features/portfolio/PortfolioCard";
import creatureFeature from  '../assets/images/portfolio/creaturefeature.jpg';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, CardImg, CardBody, Row, Col, Container } from 'reactstrap';

const PortfolioPage = () => {
    return (
        <>
        <Container style={{marginBottom: '90px'}}>
            <Row>
                <Col md="8">
                    <Card>
                        <CardTitle><h2>&nbsp;Creature Double Feature</h2></CardTitle>
                        <img src={creatureFeature} alt="Jay the god of small pleasures" style = {{width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '12px'}}/>
                        <CardBody>
                            <p>The image of 2 horned characters was created to promote 2 shows that were part of the 2021 IndyFringe Festival.  The plays 'Small Gods Big Problems' (left) and 'Copyright/Safe' were wrritten and developed independently by two Indianapolis playwrights.  Both happened to feature fanastical characters that had horns.</p>

                            <p>Indianapolis is a small town and the writers and casts for both shows had great working relationships.  Among the audience of the Fringe Festival there was a lot of crossover appeal.  The shows often played back-to-back in the Basille Theatre, but it was beyond perfect when they had the last 2 timeslots on a Friday night.  It was even better that Copyright/Safe the more comic book and pop culture influenced show followed the more light-hearted rom-com Small Gods.</p>

                            <p>Both productions embraced the combined marketing.  The theater and the festival picked up the theme and shared the image on their social platforms.  The image generated a lot of engagement.</p>
                        </CardBody>
                    </Card>
                </Col>

                <Col className='lg-2'>
                    <div style={{backgroundColor: "white"}}>
                        <Nav tabs>
                            <NavItem>
                                <NavLink className="active">
                                    marketing
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    writing
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent style={{backgroundColor: "white"}}>
                            <TabPane className="active">
                                <h4>Tab 1 Contents</h4>
                            </TabPane>
                        </TabContent>
                    </div>
                </Col>
            </Row>
        </Container>
        <p>&nbsp;</p>
        </>
    )
};

export default PortfolioPage;