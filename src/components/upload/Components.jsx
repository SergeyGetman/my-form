import React, {useContext} from 'react';
import Fcomponent from "./Fcomponent";
import {MyContext} from "./Acomponent";



const Components = (props) => {
    console.log('this is props inside Components', props)

    return (
        <div>
            <Fcomponent value={props}/>
        </div>
    );
};

export default Components;