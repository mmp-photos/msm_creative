import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectPortfolioByID } from './portfolioSlice';

const item = { id: 1};

const DisplayCard = () => {
    const portfolioItem = useSelector(selectPortfolioByID(item.id));
    const { title, image, description } = portfolioItem;
    console.log('Item number: ', item.id);

    return (
        <Card>
            <CardImg src={ image } alt={ title } />
            <CardBody>
                <CardTitle>
                    { title }
                </CardTitle>
                <CardText>
                    { description }
                </CardText>
            </CardBody>
        </Card>
    )
}

export default DisplayCard;