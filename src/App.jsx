import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
  const [filter, setFilter] = useState('all');

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  return (
    <>
      <Navbar />
      <Home />
      <Portfolio filter={filter} onFilterClick={handleFilterClick} />
      <Service/>
      <Projects/>
      <Work/>
      <Footer/>
    </>
  );
}

export default App;
