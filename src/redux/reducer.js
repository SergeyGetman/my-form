

const initialState = {
    country: "",
    num : 0,
    pay : 0,
    town : "",
    number: "",
    name : "",
    age : "",

}

const reducer = ( state = initialState,  action) => {
    console.log("this is action", action)
    switch (action.type) {
        case 'SET_COUNTRY' : {
            return {...state, country : action.country}
        }
        case "GET_NUMBER" : {
            return  {...state, num : state.num + action.num + action.payload}
        }
        case "MIN_NUMBER" : {
            return {...state, num : state.num - action.num - action.pay}
        }
        case "ADD_COUNTRY" : {
            return  {...state, town : action.town}
        }
        case "ADD_ABOUT" : {
            return  {...state, number : action.number, name : action.name, age : action.age }
        }

        default:
            return state;
    }
};

export default reducer;