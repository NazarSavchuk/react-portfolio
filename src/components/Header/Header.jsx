import React from "react";
import "./Header.scss";
import CTA from "./CTA";
import ME from "../../assets/img/me.jpg";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";

function Header({ setActiveNav }) {
  return (
    <header>
      <div className="container header__container">
        <h2>Hi! I'm</h2>
        <Typewriter
          options={{
            strings: ["Nazar Savchuk", "Front-End Developer", "Ukrainian"],
            autoStart: true,
            loop: true,
          }}
        />
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
