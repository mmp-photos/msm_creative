 /* PORTFOLIO DEFINITION START */
   //Items in the portfolio are stored in the PORTFOLIO array//
   //Portfolio items are defined by a class of PORT they will be rendered into the modal on the website//

/* IMPORT PHOTOS FOR THE PORTFOLIO OBJECTS */   
import creatureFeature from '../../assets/images/portfolio/creaturefeature.jpg';
import gatsby from '../../assets/images/portfolio/gatsby_perfume.jpg';

export const PORTFOLIO = [
    {
        id: 0,
        title: 'Gatsby',
        image: gatsby,
        type: 'Copywriting',
        description: 'catalog copy for the Gatsby cologne by Immortal Perfumes',
        content: 'placeholder copy'
    },
    {
        id: 1,
        title: 'Creature Double Feature',
        image: creatureFeature,
        type: 'Social Media',
        description: 'A social media campaign post for the 2021 IndyFringe Festival',
        content: 'placeholder copy'
    },
];

/* EXPORT PORTFOLIO ARRAY */
export default PORTFOLIO;