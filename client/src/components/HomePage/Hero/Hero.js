import React from "react";
import "../Hero/HeroStyle.css";
import bg1 from "../../../assets/bg1.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
<div className="mask">
<img className="into-img" src={bg1} alt="backgroungImg" />
</div>
<div className="content">
    <p>Hi ! , Welcome To Our Website</p>
    <h1>Languages Exchange.</h1>
    <div>
        <Link to="/signup" className="btn">Get Started</Link>
    </div>
</div>
    </div>
  );
};

export default Hero;