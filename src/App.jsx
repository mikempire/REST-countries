import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Country from "./pages/Country";
import {createContext, useState} from "react";


export const ThemeContext = createContext({
    theme: '',
    setTheme: (theme) => {},
});

function App() {
    // Detecting the default theme
    const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
    const getDefaultTheme = () => {
        const localStorageTheme = localStorage.getItem('default-theme');
        const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
        return localStorageTheme || browserDefault;
    };
    const [theme, setTheme] = useState(getDefaultTheme());

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className={`theme-${theme}` }>
                <div className="wrapper">
                    <Navbar/>
                    <Routes>
                        <Route
                            element={<Country />}
                            path="country/:name"
                        />
                        <Route element={<Home/>}
                               path="/"/>
                    </Routes>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
