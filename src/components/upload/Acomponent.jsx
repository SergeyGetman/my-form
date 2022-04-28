import React, {useState} from 'react';
import Components from "./Components";
import {createContext} from "react";


export const MyContext = createContext(0);
export const newContext = createContext({})

const Acomponent = () => {
    const obj = {name : "Sergo", fullname : "Djan"}
    const [state, setState] = useState(0)

    const getNumOnOne = () => {
        setState(state + 1)
    }

    return (
        <newContext.Provider value={obj}>
        <MyContext.Provider value={state}  >
        <div>
           <h2 style={{backgroundColor : 'white'}}>{state} </h2>
            <button onClick={getNumOnOne}>Take Plus One</button>
        </div>
        </MyContext.Provider>
        </newContext.Provider>
    );
};

export default Acomponent;