import React from 'react';
import "./Header.css";
import logo from "../../ASSETS/Logo.png";
import avatar from "../../ASSETS/Avatar.png";


const Header = () => {
    return (
        <div className='nav nav_black'>
            <div className='nav_contents'>
                <img className='nav_logo' src={logo} alt="LOGO" />
                <img className='nav_avatar' src={avatar} alt="AVATAR" />
            </div>
        </div>
    )
}

export default Header