import { SET_AMOUNT, CALCULATE_DENOMINATIONS, RESET } from "../constants/actionTypes";
import {SET_DENOMINATIONS} from "../constants/actionTypes.js"

export const setAmount = (amount) => ({
    type: SET_AMOUNT,
    payload: amount,
});

export const calculateDenominations = () => ({
    type: CALCULATE_DENOMINATIONS,
});

export const reset = () => ({
    type: RESET,
});

export const setDenominations = (denominations) => ({
    type: SET_DENOMINATIONS,
    payload: denominations,
});
