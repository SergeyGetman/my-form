import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

const Page = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ background: theme.background, color: theme.textColor }}>
      <h2>Page</h2>
    </div>
  );
};

export default Page;
