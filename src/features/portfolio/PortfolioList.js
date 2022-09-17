import { selectAllPortfolioItems, selectPortfolioByID } from './portfolioSlice';
import { useSelector } from 'react-redux';
import { Row, Col, } from 'reactstrap';

const item = { id: 1};
const DisplayCard = (item) => {
    const portfolioItem = useSelector(selectPortfolioByID(item.id));
    const { title, image, description } = portfolioItem;
    console.log('Item number: ', item.id);
    return (
         'Display card'
    )
}

const PortfolioList = () => {
    const portfolioArray = useSelector(selectAllPortfolioItems);
    const returnArray = [];

    portfolioArray.forEach((item) => {
            returnArray.push('<h1>'+item.title+'<h1>')
            console.log(returnArray);
    });

    return (
        returnArray
    )
}
export default PortfolioList;