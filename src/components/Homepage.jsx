import React from 'react';
import cl from './style.module.css';
import { Link } from 'react-router-dom';
import { Buttonsfor } from './Buttonsfor';
import { RoutingPage } from '../routing/Routing';

const Homepage = () => {
  return (
    <>
      <div className={cl.page_home}>
        <div className={cl.text_shadow}>
          <h1>This is home page</h1>
        </div>

        <Buttonsfor />
      </div>
    </>
  );
};

export default Homepage;
