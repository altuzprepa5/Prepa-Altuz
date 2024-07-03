import React, { useState, useEffect } from "react";
import { Link as ScrollLink, scroller  } from "react-scroll";
import { Link as RouterLink, NavLink, useLocation  } from "react-router-dom";
import Hamburger from "hamburger-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#contact') {
      scroller.scrollTo('contact', {
        smooth: true,
        duration: 500,
      });
    }
  }, [location]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-white shadow-md">
        <progress max="100" value="0"></progress>
        <div className="flex items-center justify-between w-[90%] mx-auto h-[100%]">
          <div className="text-2xl font-bold">
            <RouterLink
              to="/"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              <img src="/images/logo.png" alt="Altuz Logo" />
            </RouterLink>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/blog"
              smooth={true}
              duration={500}
              className="nav-link bg-yellow-300 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Blog
            </NavLink>
            <NavLink
              to="/#contact"
              smooth={true}
              duration={500}
              className="nav-link bg-yellow-300 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Contacto
            </NavLink>
          </div>
          <div className="md:hidden" onClick={toggleMenu}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white py-4 text-right">
            <NavLink
              to="/blog"
              smooth={true}
              duration={500}
              className="nav-link block px-4 py-2 text-black"
              onClick={toggleMenu}
            >
              Blog
            </NavLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link block px-4 py-2 text-black"
              onClick={toggleMenu}
            >
              Contacto
            </ScrollLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
