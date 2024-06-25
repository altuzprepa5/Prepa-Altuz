import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Si usas `loadSlim`, instala el paquete "tsparticles-slim"

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // Puedes inicializar la instancia de tsParticles (engine) aquí, agregando formas o presets personalizados
    // Esto carga el paquete de tsparticles, es el método más fácil para tener todo listo
    // await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          // Puedes establecer un color de fondo si lo deseas
          // color: {
          //   value: "#0d47a1",
          // },
        },
        fpsLimit: 120,
        interactivity: {
          detect_on: "canvas",
          events: {
            onClick: {
              enable: false,
              mode: "repulse",
            },
            onHover: {
              enable: false,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#7f7f7f", // establecer un color específico
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particle;