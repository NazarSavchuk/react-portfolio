import React from "react";
import "./Footer.scss";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        NAZAR
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contacts">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/nazar.savchuk.liED/">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/_nazar_savchuk_/">
          <BsInstagram />
        </a>
        <a href="https://github.com/NazarSavchuk">
          <BsGithub />
        </a>
      </div>
      <div className="footer__copyrights">
        <small>&copy; NAZAR. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
