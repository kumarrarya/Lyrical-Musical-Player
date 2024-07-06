import React, {useState} from "react";
import {FaMusic} from 'react-icons/fa';
// import { motion } from 'framer-motion';

import './Navbar.css';

const Navbar = ({libraryStatus, setLibraryStatus}) => {
    // useState
    const [buttonText, setButtonText] = useState(false);
    
    const libraryButtonClickHandler = () => {
        setLibraryStatus(!libraryStatus);
        setButtonText(!buttonText);
    }

    return (
            <div className="app-navbar flex">
                <div className="app-navbar-logo">
                    <h1>Lyrical</h1>
                </div>
                <div>
                    <button className="button" onClick={libraryButtonClickHandler}> { buttonText ? 'Close' : 'Library'} <FaMusic /></button>
                </div>
            </div>
    )
}

export default Navbar;