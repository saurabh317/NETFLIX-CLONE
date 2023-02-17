import React, { useEffect, useState } from 'react';
import "./Header.css";
import logo from "../../ASSETS/Logo.png";
import avatar from "../../ASSETS/Avatar.png";
import { NavLink } from 'react-router-dom';



const Header = () => {
    const [show, handleShow] = useState(false);

    const transitionNavBar = ()=>{
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar); 
    }
    ,[])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className='nav_contents'>
                <img className='nav_logo' src={logo} alt="LOGO" />
                <NavLink to="./Profile">
                <img className='nav_avatar' src={avatar} alt="AVATAR" />
                </NavLink>
            </div>
        </div>
    )
}

export default Header