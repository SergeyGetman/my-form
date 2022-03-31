

const initialState = {
    cash : 5,
    country: "Ukraine",
    city: "Kiev"
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_COUNTRY" :
            return  {...state, town : state.country}

        case "SET_VALUE" :
            return {...state, cash : state.cash + action.payload}


        default:
            return state;
    }
};

export default reducer;