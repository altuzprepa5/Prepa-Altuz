import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

// export const Home = () => {
//   const contacts = [
//     { region: "Sinaloa", phone: "667 403 2204" },
//     { region: "Edo. de México", phone: "565 922 2787" },
//     { region: "Jalisco", phone: "331 767 0340" },
//     { region: "Nuevo León", phone: "811 300 9864" },
//     { region: "CDMX", phone: "554 280 7354" },
//     { region: "Morelos", phone: "558 564 2259" },
//   ];

//   return (
//     <>
//       <div className="relative h-[88vh] mt-[10vh] bg-cover bg-center">
//         <div className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center"></div>
//         <Particle />
//         <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
//           <div className="container mx-auto px-4 py-8 text-center lg:text-left lg:flex lg:items-center">
//             <div className="lg:w-1/2">
//               <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
//                 Educación en linea de calidad <TextEffect />
//               </h1>
//               <h2 className="text-2xl md:text-3xl text-white mt-4">
//                 Somos la Prepa en Línea de Sinaloa, llevando educación de
//                 calidad a cada rincón dentro y fuera del estado.
//               </h2>
//               <div className="mt-8">
//                 <div className="flex flex-col md:flex-row md:space-x-4">
//                   <a
//                     href="https://wa.me/525539973069"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="button-cta is-bold white-btn is-rounded py-3 px-6 text-lg bg-white text-gray-800 hover:bg-gray-200 transition"
//                   >
//                     WhatsApp
//                   </a>
//                   <a
//                     href="tel:+526674032204"
//                     className="button-cta is-bold primary-btn is-rounded py-3 px-6 text-lg bg-blue-600 text-white hover:bg-blue-700 transition mt-4 md:mt-0"
//                   >
//                     Llamar
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:w-60 mt-8 lg:mt-0">
//               <figure className="image">
//                 <img
//                   className="animated preFadeInUp fadeInUp"
//                   src="/images/student.png"
//                   alt="Hero mockup"
//                 />
//               </figure>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white py-6">
//         <div className="container mx-auto px-4 container-slide">
//           <div className="flex overflow-hidden space-x-4 animate-marquee">
//             {contacts.map((contact, index) => (
//               <p
//                 key={index}
//                 className="whitespace-nowrap text-gray-800 text-lg font-semibold"
//               >
//                 {contact.region} - {contact.phone}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

const Home = () => {
  return (
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <Particle />
      <div className="relative container mx-auto items-center flex flex-wrap"
      data-aos="fade-up"
      data-aos-duration="1000">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-gray-600">
              Educación en linea de calidad <TextEffect />
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Somos la Prepa en Línea de Sinaloa. Llevando educación de calidad
              a cada rincón dentro y fuera del {" "}
              <a
                href="https://prepaaltuz.mx/"
                className="text-gray-900"
                rel="noopener noreferrer"
              >
                estado
              </a>
              .
            </p>
            <div className="mt-12">
              <a
                href="https://wa.me/526674032204"
                className="flex items-center justify-center text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-green-400 active:bg-blue-200 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                <FaWhatsapp className="mr-2 text-xl" />{" "}
                {/* Ajusta el tamaño del icono si es necesario */}
                WhatsApp
              </a>
              <a
                href="tel:+526674032204"
                className="flex items-center justify-center ml-1 text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-200 active:bg-blue-200 uppercase text-sm shadow hover:shadow-lg"
              >
                <FaPhone className="mr-2 text-xl" />{" "}
                {/* Ajusta el tamaño del icono si es necesario */}
                Llamar
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
        src="/images/student.png"
        alt="estudiante"
        data-aos="fade-left"
        data-aos-duration="1000"
      />
    </section>
  );
};

export default Home;
