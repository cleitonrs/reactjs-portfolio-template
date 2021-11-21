import React, { useState } from "react";
import "./Home.css";
import logo from "../../img/logo.png";

const Home = () => {
  // Fixed Header
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });


  // Toggle Menu
  const [show, setShow] = useState(false);
  
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toggle Menu */}
          <div className="toggle__menu toggle" 
          onClick={() => {
            setShow(!show)
            let iconMenu = document.querySelector(".toggle")
            iconMenu.classList.toggle("active")       
          }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#about">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#services">Services</a>
                </li>
                <li className="sideNavbar">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="sideNavbar">
                  <a href="#blog">Blog</a>
                </li>
                <li className="sideNavbar">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null }
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I'm Jone Doe</h2>
              <h3 className="home__text pz__10 sweet">JS Developer</h3>
              <h4 className="home__text pz__10">based in USA</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
