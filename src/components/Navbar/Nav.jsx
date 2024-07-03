import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Hamburger from 'hamburger-react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5
      }
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-white shadow-md">
        <progress max="100" value="0"></progress>
        <div className="flex items-center justify-between w-[90%] mx-auto h-[100%]">
          <div className="text-2xl font-bold">
            <img src="/images/logo.png" alt="Altuz Logo" />
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="nav-link bg-yellow-300 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Blog
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link bg-yellow-300 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Contacto
            </Link>
          </div>
          <div className="md:hidden" onClick={toggleMenu}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white py-4 text-right">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="nav-link block px-4 py-2 text-black"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link block px-4 py-2 text-black"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
