import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <>
      <li>
        <NavLink to="/#" onClick={handleScrollToTop}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" onClick={handleScrollToTop}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us" onClick={handleScrollToTop}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" onClick={handleScrollToTop}>
          Contact Us
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;
