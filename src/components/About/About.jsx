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
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-about jpg" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years working experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            eaque vel neque reprehenderit temporibus natus vero, maiores optio
            velit quam minima possimus sapiente corrupti rerum aperiam
            perferendis dicta itaque, voluptatum libero iste odio voluptates
            eum. Quidem exercitationem sapiente voluptate soluta nisi dicta
            distinctio illo vero, maxime dolorum reiciendis hic asperiores
            magnam quisquam. Ad temporibus beatae perferendis a officiis, omnis
            quibusdam ducimus sit sapiente assumenda aliquid quia autem
            inventore? Minus ratione quidem assumenda libero vel harum? Ullam
            blanditiis sequi animi quisquam!
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
