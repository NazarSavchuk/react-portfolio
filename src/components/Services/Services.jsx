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
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </div>

        <div className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </div>

        <div className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
