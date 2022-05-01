import React, {useContext } from 'react';
import Page from "./Page";
import {ThemeContextDark} from "../context/theme-context";

const PageWrapper = () => {
    const theme = useContext(ThemeContextDark)
    return (
        <div>
            <h2 style={{background : theme.background, color : theme.textColor }}>PageWrapper</h2>
            <Page />
        </div>
    );
};

export default PageWrapper;