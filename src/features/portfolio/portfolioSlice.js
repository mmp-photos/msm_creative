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
    return state.portfolio.portfolioArray.find(
        (itemID) => state.portfolio.id === parseInt(id));
};
