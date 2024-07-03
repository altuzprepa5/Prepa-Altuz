import React, { useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#contact") {
      scroller.scrollTo("contact", {
        smooth: true,
        duration: 500,
      });
    } else if (location.pathname === "/" && location.hash === "#about") {
      scroller.scrollTo("about", {
        smooth: true,
        duration: 500,
      });
    } else if (location.pathname === "/" && location.hash === "#home") {
      scroller.scrollTo("home", {
        smooth: true,
        duration: 500,
      });
    }
  }, [location]);

  return (
    // se le agrega un footer con la clase bg-[#08162c] text-white pt-16 pb-5 w-full fixed bottom-3 left-0
    // lo cual es un footer con un color de fondo azul oscuro y el texto en blanco
    // con un padding top de 16 y un padding bottom de 5 y un ancho del 100% y fijo en la parte inferior
    <footer className=" bg-slate-800 text-white pt-16 pb-5 w-full bottom-3 left-0">
      <div className="container mx-auto px-6">
        <section className="border-b border-white/20 pb-5">
          <NavLink
            to="/#home"
            smooth={true}
            duration={500}
            className="nav-link h-12 mx-auto mb-12"
          >
            <img
              src="images/logo.png"
              alt="Logo"
            />
          </NavLink>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-9">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-lg font-medium mb-2">Preparatoria</h2>
              <NavLink
                to="/#about"
                smooth={true}
                duration={500}
                className="hover:text-gray-300"
              >
                Sobre Nosotros
              </NavLink>

              <NavLink
                to="/#contact"
                smooth={true}
                duration={500}
                className="hover:text-gray-300"
              >
                Contacto
              </NavLink>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-lg font-medium mb-2">Recursos</h2>
              <a href="https://prepaaltuz.mx/" className="hover:text-gray-300">
                Prepa Altuz
              </a>
              <a href="mailto:controlescolar@prepaaltuz.mx" className="hover:text-gray-300">
                Soporte
              </a>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-lg font-medium mb-2">Redes Sociales</h2>
              <p>Síganos en las redes sociales para mayor información.</p>
              <div className="flex justify-center md:justify-start gap-4 mt-2">
                <a
                  href="https://www.instagram.com/prepaaltuzsinaloa?igsh=dzU2cXpoMTVqczM2"
                  className="text-blue-500 hover:text-blue-400"
                >
                  <FaInstagram className="h-9 w-9" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61559572438929&mibextid=kFxxJD"
                  className="text-blue-500 hover:text-blue-400"
                >
                  <FaFacebook className="h-9 w-9" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-between items-center text-xs mt-5">
          <p>© 2024 All rights reserved</p>
          <div className="flex gap-4">
            <a href="https://wa.me/526674032204" className="hover:text-gray-300">Contact</a>
            <a className="hover:text-gray-300">Terms</a>
            <a className="hover:text-gray-300">Privacy</a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
