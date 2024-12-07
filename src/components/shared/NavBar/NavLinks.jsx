import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <li>
        <HashLink to="/#">Home</HashLink>
      </li>
      <li>
        <HashLink to="/services#">Services</HashLink>
      </li>
      {
        // <li>
        //   <NavLink to="/speakers">Speaker</NavLink>
        // </li>
      }
      <li>
        <HashLink to="/about-us#">About Us</HashLink>
      </li>
      <li>
        <HashLink to="/contact-us#">Contact Us</HashLink>
      </li>
    </>
  );
};

export default NavLinks;
