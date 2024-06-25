import { useLayoutEffect, useState, useEffect } from "react";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer  from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function App() {
  // aNIMATION aos SETUP
  useEffect(() => {
    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
    AOS.refresh();
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);

  // este es el preloader
  // su funcion es que cuando la pagina cargue se quite el preloader
  // obtiene el body y el preloader
  // para que se quite el preloader se remueve el preloader del body
  const handleTransitionEnd = () => {
    const root = document.getElementById("body");
    const loader = document.getElementById("preloader");
    root.removeChild(loader);
    setIsLoaded(true); // Actualiza el estado para mostrar el contenido
  };

  //   el useLayoutEffect es un hook que se ejecuta despues de que se renderiza la pagina
  //  se le agrega un evento de transicion para que cuando termine la transicion se quite el preloader
  //   esto es para el preloader
  // su funcion es que cuando la pagina cargue se quite el preloader
  // se le agrega un evento de transicion para que cuando termine la transicion se quite el preloader
  // se le agrega un setTimeout para que despues de 2 segundos se quite el preloader
  // se le agrega un return para que cuando se quite el preloader se quite el evento de transicion
  // se le agrega un useEffect para que se ejecute la funcion cuando se cargue la pagina
  // se le agrega un div con la clase overflow-x-hidden para que no se vea el scroll horizontal
  useLayoutEffect(() => {
    const preloader = document.getElementById("preloader");
    preloader.addEventListener("transitionend", handleTransitionEnd);
    setTimeout(() => {
      preloader.classList.remove("loading");
    }, 1000);
    return () => {
      preloader.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  return (
    // se le agrega un div con la clase overflow-x-hidden para que no se vea el scroll horizontal}
    // isLoaded es un estado que se le agrega a la pagina para que cuando se cargue se muestre el contenido
    <div className="overflow-x-hidden">
      {isLoaded && (
        <div>
          <Nav />
          {/* Home section */}
          <div id="home">
            <Home />
          </div>
          <div className="relative z-[30]">
            {/*About */}
            <div id="about">
              <About />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <div id="footer">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
