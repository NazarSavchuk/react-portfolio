import React from "react";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";

import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  const [activeNav, setActiveNav] = React.useState("#");

  return (
    <>
      <Header setActiveNav={setActiveNav} />
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
