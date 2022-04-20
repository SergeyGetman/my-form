import React from 'react';
import cl from './style.module.css'
import {Link} from "react-router-dom";
import {Buttonsfor} from "./Buttonsfor";
import {RoutingPage} from "../routing/Routing";

const Homepage = () => {
    return (
        <>
        <div className={cl.page_title}>
            <div className={cl.text_shadow}>
              <Link to={RoutingPage.home}>{RoutingPage.textTitle.homePage}</Link>
                <br/>
               <Link to={RoutingPage.firstpage}>{RoutingPage.textTitle.firstPage}</Link>
                <br/>
                <Link to={RoutingPage.secondpage}>{RoutingPage.textTitle.secondPage}</Link>
            </div>
            <Buttonsfor />
        </div>
        </>
    );
};

export default Homepage;