import PORTFOLIO from "../../assets/data/PORTFOLIO.js";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    portfolioArray: PORTFOLIO
};

const portfolioSlice = createSlice({    
    name: 'portfolio',
    initialState
});

export const portfolioReducer = portfolioSlice.reducer;

export const selectAllPortfolioItems = () => {
    return PORTFOLIO
};

export const selectPortfolioByID = (id) => (state) => {
    let portfolio = PORTFOLIO;
    return  portfolio.find(o => o.id === parseInt(id));
};