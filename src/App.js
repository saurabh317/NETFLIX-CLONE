import React from "react";
import "./App.css";
import Home from "./Pages/HOME/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Auth/Login";
// import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
       
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          {/* <Route path="/" element={<Login/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
