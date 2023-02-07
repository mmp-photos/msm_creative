// IMPORTS //
import React from 'react';
import {
    Navbar,
    Container,
    Row,
    Col,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { useLocation } from 'react-router-dom';

// CODE TO CREATE THE HEADER START //
const Header = (props) => {
    const location = useLocation();
    const locationName = location.pathname;

    const setPageTitle = (location)  => {
        let pageTitle = "";
        switch(location){
            case '/about':
                pageTitle = 'About';
                return(
                    pageTitle
                );
            case '/work':
                pageTitle = 'Work';
                return(
                    pageTitle
                );
            case '/contact':
                pageTitle = 'Contact';
                return(
                    pageTitle
                );            
            default:
                pageTitle = "noHeader";
                return(
                    pageTitle
                )
            }
        }
        const defineNav = (title) => {
            let pageTitle = title;
            if(pageTitle === 'noHeader'){
                console.log('No header provided.');
            }
            else {
                return(
                    <Container className="outer-container" style={{position: "fixed", left: "50%", transform: "translateX(-50%)"}}>
                            <Row>
                                <Col>
                                    <h1 className="page-title" style={{display: "block", marginTop: 15, marginLeft: 35}}>{pageTitle}</h1>
                                </Col>
                                <Col id="top-nav">
                                    <Navbar expand="xs" className="ml-auto">
                                        <NavbarToggler/>
                                            <Container>
                                                <Nav className="justify-content-end" style={{paddingRight: 132}} navbar>
                                                    <NavItem>
                                                        <NavLink href="/"><span className="top-nav-text">Home</span></NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/about"><span className="top-nav-text">About</span></NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/work"><span className="top-nav-text">Work</span></NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink href="/contact"><span className="top-nav-text">Contact</span></NavLink>
                                                    </NavItem>
                                                </Nav>
                                            </Container>
                                    </Navbar>
                                </Col>
                            </Row>
                    </Container>
                )
            }
        }
        return (
               <>
                {defineNav(setPageTitle(locationName))}
               </>
        );
    };

// HEADER CODE END //

// EXPORT STATEMENT //
export default Header;