const initialState = {
    amount: 0,
    denominations: [1, 5, 10, 20, 50, 100],
    result: [],
};

const denominationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AMOUNT":
            return { ...state, amount: action.payload };
        case "CALCULATE_DENOMINATIONS":
            let remaining = state.amount;
            const result = state.denominations
                .slice() // Crée une copie de l'array
                .sort((a, b) => b - a) //Trie décroissant
                .map((denomination) => {
                    const count = Math.floor(remaining / denomination);
                    remaining %= denomination;
                    return { denomination, count };
                })
                .filter((item) => item.count > 0);
            return { ...state, result };
        case "RESET":
            return { ...state, amount: 0, result: [] };
        case "SET_DENOMINATIONS":
            return { ...state, denominations: action.payload };
        default:
            return state;
    }
};

export default denominationReducer;
