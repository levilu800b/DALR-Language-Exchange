// import "./NavBarStyles.css";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

// const NavBar = () => {
// 	const [click, setClick] = useState(false);
// 	// const handleClick = () => setClick(!click);

// 	function handleClick() {
// 		setClick(!click);
// 	}

// 	return (
// 		<div className="header">
// 			<Link to={"/"}>
// 				<h1>Languages Exchange.</h1>
// 			</Link>
// 			<ul className={click ? "nav-menu active" : "nav-menu"}>
// 				<li>
// 					<Link to={"/"}>Home</Link>
// 				</li>
// 				<li>
// 					<Link to={"/about"}>About</Link>
// 				</li>
// 				<li>
// 					<Link to={"/contact"}>Contact</Link>
// 				</li>
// 				<li>
// 					<Link to={"/signin"}>Sign in</Link>
// 				</li>
// 				<li>
// 					<Link to={"/signup"}>Sign up</Link>
// 				</li>
// 			</ul>
// 			<div className="hamburger" onClick={handleClick}>
// 				{click ? (
// 					<FaTimes size={20} style={{ color: "fff" }} />
// 				) : (
// 					<FaBars size={20} style={{ color: "fff" }} />
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default NavBar;
//💫
import "./NavBarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
	const [click, setClick] = useState(false);

	function handleClick() {
		setClick(!click);
	}

	function handleKeyPress(event) {
		if (event.key === "Enter") {
			handleClick();
		}
	}

	return (
		<div className="header">
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
				onKeyPress={handleKeyPress}
				tabIndex="0"
				role="button"
				aria-label="Toggle Menu"
			>
				{click ? (
					<FaTimes size={20} style={{ color: "fff" }} />
				) : (
					<FaBars size={20} style={{ color: "fff" }} />
				)}
			</div>
		</div>
	);
};

export default NavBar;
