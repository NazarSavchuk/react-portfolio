import React from "react";
import "./Services.scss";
import { BsCheck } from "react-icons/bs";

function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <div className="services">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Figma</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Adobe Photoshop</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Adobe Illustrator</p>
            </li>
          </ul>
        </div>

        <div className="services">
          <div className="service__head">
            <h3>Computer Skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Computer literacy</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Strong creative ability</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Attention to detail</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>A keen interest in technology</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Excellent problem-solving skills</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>A logical approach to work</p>
            </li>
          </ul>
        </div>

        <div className="services">
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Critical thinking</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Stress management</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Adaptability</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Conflict management</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Openness to criticism</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
