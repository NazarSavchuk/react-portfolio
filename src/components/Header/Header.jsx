import React from "react";
import "./Header.scss";
import CTA from "./CTA";
import ME from "../../assets/img/me.jpg";
import HeaderSocials from "./HeaderSocials";

function Header({ setActiveNav }) {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nazar Savchuk</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a
          href="#contacts"
          className="scroll__down"
          onClick={() => setActiveNav("#contacts")}>
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
