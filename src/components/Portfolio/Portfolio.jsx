import React from "react";
import "./Portfolio.scss";
import IMG from "../../assets/img/demo.png";
import cakesIMG from "../../assets/img/react-cakes.JPG";
import sneakersIMG from "../../assets/img/react-sneakers.JPG";
import calculatorIMG from "../../assets/img/reducer-calculator.JPG";
import reduxToDo from "../../assets/img/redux-todo.JPG";
import finsweet from "../../assets/img/finsweet.JPG";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={cakesIMG} alt="project demo" />
          </div>
          <h3>Nazar's React Pizza</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NazarSavchuk/react-pizza"
              className="btn"
              target="_blank">
              GitHub
            </a>
            <a
              href="https://react-pizza-2y5zdlxap-nazarsavchuk.vercel.app/"
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
              className="btn"
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
            <img src={calculatorIMG} alt="project demo" />
          </div>
          <h3>useReducer calculator</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NazarSavchuk/react-calculator-git"
              className="btn"
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
            <img src={reduxToDo} alt="project demo" />
          </div>
          <h3>Redux Todo List</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NazarSavchuk/redux-todo-list"
              className="btn"
              target="_blank">
              GitHub
            </a>
            <a
              href="https://redux-todo-list-fzzc0j3k0-nazarsavchuk.vercel.app/"
              className="btn btn-primary"
              target="_blank">
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={finsweet} alt="project demo" />
          </div>
          <h3>Finsweet landing (desktop only)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NazarSavchuk/finsweet"
              className="btn"
              target="_blank">
              GitHub
            </a>
            <a
              href="https://nazarsavchuk.github.io/finsweet/"
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
