// IMPORTS //
import { useState } from 'react';


//SET UP LINKS AND STYLE CHANGES OF PRIMARY BUTTONS //

const updateStyle = (style) => {
    const [ workStyle, setWorkStyle] = useState({});
    const [ aboutStyle, setAboutStyle] = useState({});
    const [ contactStyle, setContactStyle] = useState({});

    switch(style){
        case "about":
            setAboutStyle({fontStyle: "italic"});
            break;
        case "work":
            setWorkStyle({fontStyle: "italic"});
            break;
        case "contact":
            setContactStyle({fontStyle: "italic"});
            break;
        default:
            console.log(`updateStyle value is default`);
    }
};


export default updateStyle;