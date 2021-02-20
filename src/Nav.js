import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handelShow] = useState(false);

  const transitionsNavbar = () => {
    if (window.scrollY > 100) {
      handelShow(true);
    } else {
      handelShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionsNavbar);
    return () => window.removeEventListener("scroll", transitionsNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contens  ">
        <img
          className="nav_logo"
          src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
          alt="Netflix Logo"
        />
        <img
          className="nav_avatar"
          src="https://pbs.twimg.com/media/CW2i0pJW4AEYFI3.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
