import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 p-3 flex justify-between md:justify-around mg:px-24 items-center transition-all duration-300 z-50 
        ${scrolling ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <h1
          className={`text-2xl lg:text-3xl font-bold cursor-pointer ${
            scrolling ? "text-lime-600" : "text-white"
          }`}
        >
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          Interio
        </Link>
        </h1>
        <ul
          className={`hidden md:flex font-bold md:space-x-18 ${
            scrolling ? "text-lime-600" : "text-white"
          }`}
        >
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          Home
        </Link>
        <Link to="portfolio" smooth={true} duration={500} className="cursor-pointer">
          Portfolio
        </Link>
        <Link to="service" smooth={true} duration={500} className="cursor-pointer">
          Services
        </Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
          Projects
        </Link>
        <Link to="work" smooth={true} duration={500} className="cursor-pointer">
          Work
        </Link>
        <Link to="footer" smooth={true} duration={500} className="cursor-pointer">
          Contact Us
        </Link>
        </ul>

        <div className="md:hidden text-white flex justify-around items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <X className="absolute cursor-pointer right-5 top-5 w-6 h-6 z-30 " />
            ) : (
              <Menu className={`absolute cursor-pointer right-5 top-5 w-6 h-6 ${scrolling ? "text-lime-600" : "text-white"}`} />
            )}
          </button>
        </div>

        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isOpen ? "0%" : "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full bg-black text-white p-5 shadow-lg text-center font-bold"
        >
          
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="block hover:scale-110 transition-all p-2 rounded">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block hover:scale-110 transition-all p-2 rounded">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="block hover:scale-110 transition-all p-2 rounded">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="block hover:scale-110 transition-all p-2 rounded">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
