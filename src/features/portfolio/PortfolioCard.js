import React from 'react';
import { Card, CardHeader, Container, Row, Col } from 'reactstrap';
import { selectPortfolioByID } from './portfolioSlice';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PortfolioDisplay = () => {
    const { portId } = useParams();
    console.log('The value from useParams is:', portId);
    const pItem = useSelector(selectPortfolioByID(portId));
    
    // DEFINE RETURNS FOR PORTFOLIO ITEMS //

    const displayCaption = (portfolioCaption) => {
        let caption = portfolioCaption;
        if(caption){
            return (
                <p className='caption'>{caption}</p>
            )
        }
    }

    return (
        <>
        <Helmet>
            <title>Portfolio | {pItem.title}</title>
        </Helmet>
        <Col md="8">
            <Card>
                <CardHeader className='portfolio-header'>
                    {pItem.title}
                </CardHeader>
                <Container>
                    <Row>
                        <Col>
                            <img src={pItem.image} alt="Jay the god of small pleasures" style = {{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '12px'}}/>
                            {() =>displayCaption(pItem.description)}
                        </Col>
                        <Col>
                            <p>{pItem.content}</p>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </Col>
        </>
    )
}

export default PortfolioDisplay;