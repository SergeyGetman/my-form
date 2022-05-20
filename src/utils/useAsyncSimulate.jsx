import React from 'react';

const UseAsyncSimulate = (titleName) => {
  return (
    <div>
      {
        <ul>
          {titleName.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      }
    </div>
  );
};

export default UseAsyncSimulate;
