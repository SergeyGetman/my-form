import React from 'react';
import {globalHistory} from "../history/useHistory";
import cl from './style.module.css'
import {RoutingPage} from "../routing/Routing";

export const Buttonsfor = () => {
    const {buttonOne} = RoutingPage.buttonsTitle
    return (
     <>
     <button className={cl.fourth}
         onClick={() => globalHistory.push(RoutingPage.firstpage)}
     >
         {buttonOne}
     </button>
     </>
)
};

