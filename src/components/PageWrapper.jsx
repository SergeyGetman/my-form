import React, { useContext } from 'react';
import Page from './Page';
import cn from "classnames";
import { ThemeContextDark } from '../context/theme-context';
import cl from './style.module.css'

const PageWrapper = () => {
  const theme = useContext(ThemeContextDark);
  console.log('this is theme', theme);
  return (
    <div>
      <h2 style={{ background: theme.background, color: theme.textColor }}>PageWrapper</h2>
      <Page />

      <div className={cn(cl.style_two, cl.style_one)}>
      <h2>hello Artur</h2>  
      </div>
    </div>
  );
};

export default PageWrapper;
