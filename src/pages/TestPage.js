import React from 'react';
import { useState, useRef, useEffect } from 'react';

const TestPage = () => {
    const [ SimpsonsQuote, SetSimpsonsQuote ] = useState();
    const dataFetchedRef = useRef(false);

    const simpsonsQuoteApi = () => { 
        fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then((response) => response.json())
        .then((data) => {
            data.forEach(simpsons => {
                console.log(simpsons.quote);
                SetSimpsonsQuote(simpsons);
            })
        })
        .catch(error => {
            console.log(error);
        });
    
    }

    useEffect(() => {
        if(dataFetchedRef.current) return;
            dataFetchedRef.current = true;
            simpsonsQuoteApi();
    }, []);
    
    return(
        <h1>Test: {SimpsonsQuote}</h1>
    )
};

export default TestPage;