import React, { useState, useEffect } from "react";
import "./nav.css";
import logo from "./images/Netflix-Logo.svg";
import avatar from "./images/avatar.png";

function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  {
  }
  return (
    <div className={`navBar ${show && "nav__black"}`}>
      <img src={logo} />
      <img src={avatar} />
    </div>
  );
}

export default Nav;
