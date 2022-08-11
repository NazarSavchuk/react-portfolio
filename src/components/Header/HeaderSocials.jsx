import React from "react";
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/nazar.savchuk.liED/" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://www.instagram.com/_nazar_savchuk_/" target="_blank">
        <BsInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/nazar-savchuk-66b3ba1bb/"
        target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/NazarSavchuk" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
