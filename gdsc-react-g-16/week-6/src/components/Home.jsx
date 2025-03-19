import React, { Children } from 'react';
import { useState } from 'react';
import ThemeContext from './ThemeContext';

function Home({children}) {
    const [theme, setTheme] = useState("light")
    return (
        <>
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
        <button onClick={()=>setTheme("Dark")}>dark mode</button>
        </>
 
    );
}

export default Home;