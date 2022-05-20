import React from 'react';
import useAsyncSimulate from '../utils/useAsyncSimulate';
import cl from './style.module.css';
import UseAsyncSimulate from '../utils/useAsyncSimulate';

const payload = {
  titles: ['Gladiator', 'John Wick', 'Judge Dredd', 'Fight Club'],
  releases_years: ['2000', '2014', '2012', '2000'],
  budget: ['103000000', '30000000', '53000000', '27000000'],
  box_office: ['460500000', '86000000', '18000000', '50000000']
};

const TaskForMovies = () => {
  const {} = useAsyncSimulate(payload.titles);

  return (
    <div className={cl.page__movies}>
      <h1>This is taskForm Movies</h1>
      <h2> Titles </h2>
      <div className={cl.block__movies}>
        {payload.titles.map((e, i) => (
          <div key={i}>{e}</div>
        ))}
      </div>
      <div>
        <h2>releases_years</h2>
        <div className={cl.block__movies}>
          {payload.releases_years.map((e, i) => (
            <div key={i}>{` ${e + ' '} `}</div>
          ))}
        </div>
        <h2>budget</h2>
        <div className={cl.block__movies}>
          {payload.budget.map((e, i) => (
            <div key={i}>{` ${e} `}</div>
          ))}
        </div>
        <h2>box_office</h2>
        <div className={cl.block__movies}>
          {payload.box_office.map((e, i) => (
            <div key={i}>{` ${e} `}</div>
          ))}
        </div>
      </div>
      <button className={cl.fourth}>Load Movies</button>
    </div>
  );
};

export default TaskForMovies;
