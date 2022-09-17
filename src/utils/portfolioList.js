// IMPORT PORTFIOL ITEMS //
import React from "react";
import PORTFOLIO from "../assets/data/PORTFOLIO";
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';

// LIST CODE START //
const PortfolioList = () => {
    const portfolio = useSelector(selectAllCampsites);
    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};
// LIST CODE END //

// EXPORT STATEMENT //
export default CampsiteList;