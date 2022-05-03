import React, { useState } from 'react';
import cl from './style.module.css';
import { ThemeContext, themes } from '../context/theme-context';
import PageWrapper from './PageWrapper';

const Thirdpage = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.Light);

  const changeTheme = () => {
    setCurrentTheme((prevCurrenTheme) =>
      prevCurrenTheme === themes.Light ? themes.Dark : themes.Light
    );
  };

  return (
    <div className={cl.body__third}>
      <h1>this is Thirdpage</h1>
      {
        <ThemeContext.Provider value={currentTheme}>
          <PageWrapper />
        </ThemeContext.Provider>
      }
      <button className={cl.fourth} type="button" onClick={changeTheme}>
        toggle theme
      </button>
    </div>
  );
};

export default Thirdpage;
