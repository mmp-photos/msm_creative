//import { Image, Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from "reactstrap";
import React from 'react';
import DisplayCard from "../features/portfolio/PortfolioList";
import PortfolioDisplay from '../features/portfolio/PortfolioCard'
import { Row, Container } from 'reactstrap';


const PortfolioPage = () => {

    return (
        <>
        <Container style={{marginBottom: '90px'}}>
            <Row>
                <PortfolioDisplay />
                <DisplayCard />
            </Row>
        </Container>
        <p>&nbsp;</p>
        </>
    )
};

export default PortfolioPage;