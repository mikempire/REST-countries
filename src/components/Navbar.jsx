import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {BsFillSunFill} from 'react-icons/bs';
import {BsMoon} from 'react-icons/bs';
import {ThemeContext} from "../App";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
    const {theme, setTheme} = useContext(ThemeContext);
    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
    };

    return (
        <div className='navbar'>
            <div className="navbar__container container">
                <Link className="navbar__link" to='/'>
                    Where is the world?
                </Link>
                {
                    <div className="navbar__theme">
                        {theme === 'light' ? <BsFillSunFill/> :  <BsMoon/>}
                        <button className='navbar__btn'
                                onClick={handleThemeChange}
                        >{theme === 'light' ? 'Dark' : 'Light'} Mode</button>
                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;
