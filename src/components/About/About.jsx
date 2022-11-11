import React from "react";
import "./About.scss";
import ME from "../../assets/img/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4 years learning FrontEnd</small>
            </article>
            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>12+ Completed</small>
            </article>
          </div>
          <p>
            I am a hardworking and ambitious individual with a great passion for
            the Web Development. I am currently in my fourth year of studying
            Computer Science and Econometrics. I have excellent communication
            skills, enabling me to effectively communicate with a wide range of
            people. I am seeing a part-time position in the industry in which I
            can put into practice my knowledge and experience, ultimately
            benefiting the operations of the organisation that I work for.
          </p>

          <a href="#contacts" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
