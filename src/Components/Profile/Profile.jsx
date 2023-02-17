import React from "react";
import "./Profile.css";
import logo from "../../ASSETS/Logo.png";
import avatar from "../../ASSETS/Avatar.png";
import { NavLink } from "react-router-dom";
// import { useSelector } from 'react-redux';

const Profile = () => {
  // const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <NavLink to="/home">
      <img className='nav_logo' src={logo} alt="LOGO" />
      </NavLink>
      <div className="profileScreen_body">
        <h1 className="profileScreen_head">Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={avatar} alt="avatar" className="profile_avatar" />
          <div className="profileScreen_details">
            <div className="profileHead_div">
              <h2 className="profile_head">Welcome</h2>
            </div>
            <div className="profilePara_div">
              <p className="profile_para">Plans(Current Plans premium)</p>
            </div>
            <div className="profile_content">
              <div className="profile_Plan">
                <div>
                  <h2 className="plan_head">Netflix Standard</h2>
                  <p className="plan_para">@Rs200/month</p>
                </div>
                <button className="plan_btn">Suscribe</button>
              </div>
              <div className="profile_Plan">
                <div>
                  <h2 className="plan_head">Netflix Basic</h2>
                  <p className="plan_para">@Rs400/month</p>
                </div>
                <button className="plan_btn">Suscribe</button>
              </div>
              <div className="profile_Plan">
                <div>
                  <h2 className="plan_head">Netflix Premium</h2>
                  <p className="plan_para">@Rs800/month</p>
                </div>
                <button className="plan_btn suscribe">Suscribe</button>
              </div>
              <NavLink to="/">
              <button className="profile_signout">Sign Out</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
