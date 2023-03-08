import "./NavBarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [click,setClick]=useState(false);
  const handleClick=()=> setClick(!click);


  return (
    <div className="header">
<Link to={"/"}>
    <h1>Languages Exchange.</h1>
</Link>
<ul className={click?"nav-menu active":"nav-menu"}>
  <li>
    <Link to={"/home"}>Home</Link>
  </li>
  <li>
    <Link to={"/createprofile"}>Create Profile</Link>
  </li>
  <li>
    <Link to={"/signin"}>Sign in</Link>
  </li>
  <li>
    <Link to={"/contact"}>Contact</Link>
  </li>
  <li>
    <Link to={"/invitefriends"}>Invite friends</Link>
  </li>
</ul>
<div className="hamburger" onClick={handleClick}>
  {click?(<FaTimes size={20} style={{ color:"fff" }} />):(<FaBars size={20} style={{ color:"fff" }} />)}
</div>
    </div>
  );
};

export default NavBar;