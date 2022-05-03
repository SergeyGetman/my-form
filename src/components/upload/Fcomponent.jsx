import React, { useContext, useState } from 'react';
import { MyContext, newContext } from './Acomponent';

const Fcomponent = (props) => {
  const newValue = useContext(MyContext);
  const oneMotimeValue = useContext(newContext);

  console.log('this is newValue', newValue);

  return (
    <div>
      <div>
        <h2>this is newContect{oneMotimeValue.name}</h2>
        <h2>this is context text {newValue}</h2>
      </div>
      <h1>Hy piss </h1>
    </div>
  );
};

export default Fcomponent;
