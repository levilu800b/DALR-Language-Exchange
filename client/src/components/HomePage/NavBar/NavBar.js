import "./NavBarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const NavBar = () => {
  const [click,setClick]=useState(false);
  const handleClick=()=> setClick(!click);

  return (
		<div className="nav_cont">
			<div className="nav_header">
				<Link to={"/"}>
					<h1>Languages Exchange.</h1>
				</Link>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li>
						<Link to={"/"}>Home</Link>
					</li>
					<li>
						<Link to={"/about"}>About</Link>
					</li>
					<li>
						<Link to={"/contact"}>Contact</Link>
					</li>
					<li>
						<Link to={"/signin"}>Sign in</Link>
					</li>
					<li>
						<Link to={"/signup"}>Sign up</Link>
					</li>
				</ul>
				<div
					className="hamburger"
					onClick={handleClick}
					onKeyPress={() => {
            handleClick();
          }}
					role="button"
					tabIndex="0"
				>
					{click ? (
						<FaTimes size={20} style={{ color: "fff" }} />
					) : (
						<FaBars size={20} style={{ color: "fff" }} />
					)}
				</div>
			</div>
		</div>
	);
};

export default NavBar;