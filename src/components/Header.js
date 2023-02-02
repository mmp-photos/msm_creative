// IMPORTS //
import React from 'react';
import { useState } from 'react';
import {
    Navbar,
    Container,
    Row,
    Col,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { useLocation } from 'react-router-dom';


// CODE TO CREATE THE HEADER START //
const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const locationName = location.pathname;

    const toggle = (setMenuOpen) => {
        setMenuOpen(!menuOpen)
    }

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
                console.log(location);
                pageTitle = "noHeader";
                return(
                    pageTitle
                )
            }
        }
        const defineNav = (title) => {
            let pageTitle = title;
            if(pageTitle == 'noHeader'){
                console.log('No header provided.');
            }
            else {
                return(
                    <>
                    <Container style={{position: "fixed"}} className="interior-top">
                            <Row>
                                <Col>
                                    <h1 className="page-title" style={{display: "block", marginTop: 15, marginLeft: 35}}>{pageTitle}</h1>
                                </Col>
                                <Col id="top-nav">
                                    <Navbar expand="xs">
                                        <NavbarToggler onclick={toggle}/>
                                        <Collapse isOpen={menuOpen} navbar>
                                            <Container>
                                                <Nav className="mr-auto" navbar>
                                                    <NavItem>
                                                        <NavLink href="/"><span className="top-nav-text">Home</span><div style={{display: "inline-block", lineHeight: ".02rem", borderBottom: 1, borderColor: "black", borderStyle: "solid", width: 20}}> </div></NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                    <NavLink href="work"><span className="top-nav-text">Work</span><div style={{display: "inline-block", lineHeight: ".02rem", borderBottom: 1, borderColor: "black", borderStyle: "solid", width: 20}}> </div></NavLink>
                                                    </NavItem>
                                                </Nav>
                                            </Container>
                                        </Collapse>
                                    </Navbar>
                                </Col>
                            </Row>
                    </Container>
                    </>
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