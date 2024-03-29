import React from "react";
import "./Portfolio.scss";
import IMG from "../../assets/img/demo.png";
import mernIMG from "../../assets/img/mern-blog.JPG";
import cakesIMG from "../../assets/img/react-cakes.JPG";
import sneakersIMG from "../../assets/img/react-sneakers.JPG";
import calculatorIMG from "../../assets/img/reducer-calculator.JPG";
import colorsListIMG from "../../assets/img/ColorsList.JPG";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={mernIMG} alt="project demo" />
          </div>
          <h3>MERN Stack Blog</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NazarSavchuk/Blog-Front"
              className="btn btn-primary"
              target="_blank">
              GitHub
            </a>
            <a
              href="https://blog-mern-beta.vercel.app/"
              className="btn btn-primary"
              target="_blank">
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={cakesIMG} alt="project demo" />
          </div>
          <h3>Nazar's React Cakes</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NazarSavchuk/react-pizza"
              className="btn"
              target="_blank">
              GitHub
            </a>
            <a
              href="https://react-pizza-kappa.vercel.app/"
              className="btn btn-primary"
              target="_blank">
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={sneakersIMG} alt="project demo" />
          </div>
          <h3>React Sneakers</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NazarSavchuk/React--sneakers"
              className="btn btn-primary"
              target="_blank">
              GitHub
            </a>
            <a
              href="https://react-sneakers-e5o2ni7p5-nazarsavchuk.vercel.app/"
              className="btn btn-primary"
              target="_blank">
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
              alt="project demo"
            />
          </div>
          <h3>NodeJS File Manager CLI</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NazarSavchuk/node-nodejs-basics/tree/file-manager"
              className="btn btn-primary"
              target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={calculatorIMG} alt="project demo" />
          </div>
          <h3>useReducer calculator</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NazarSavchuk/react-calculator-git"
              className="btn btn-primary"
              target="_blank">
              GitHub
            </a>
            <a
              href="https://react-calculator-2lr23h62b-nazarsavchuk.vercel.app/"
              className="btn btn-primary"
              target="_blank">
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={colorsListIMG} alt="project demo" />
          </div>
          <h3>Colors-List Job Task</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NazarSavchuk/colors-list"
              className="btn btn-primary"
              target="_blank">
              GitHub
            </a>
            <a
              href="https://colors-list.vercel.app/?page=1"
              className="btn btn-primary"
              target="_blank">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
