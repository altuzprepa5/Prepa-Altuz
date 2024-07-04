import React from "react";
import {
  FaWhatsapp,
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
{/* <Particle /> */}

// export default Home;

const Home = () => {
  return (
    <section className="header relative pt-16 items-center flex min-h-screen">
      <div className="relative container mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-5/12 lg:w-6/12 px-4">
          <img
            className="w-full object-cover rounded-lg shadow-lg"
            src="/images/student.png" // Replace with your actual image path
            alt="Estudiante de ALTUZ Prepa en línea"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        <div className="w-full md:w-7/12 lg:w-6/12 xl:w-6/12 px-4" data-aos="fade-up" data-aos-duration="1000">
          <div className="pt-32 sm:pt-0">
            <h1 className="text-4xl font-bold leading-tight" style={{ fontFamily: 'Oswald, sans-serif', color: '#3824cd' }}>
              La <strong style={{ fontWeight: 'bold', color: '#2a1b8d' }}>primera y única prepa en línea</strong> con enfoque en aprendizajes de <strong style={{ fontWeight: 'bold', color: '#2a1b8d' }}>negocios y desarrollo personal</strong> en México, <strong style={{ fontWeight: 'bold', color: '#2a1b8d' }}>acreditada ante la SEP</strong>
            </h1>
            <div className="mt-12 flex justify-center">
              <a
                href="https://wa.me/526674032204?text=¡Buenos%20días!%20Quiero%20más%20información%20sobre%20ALTUZ%20Prepa%20en%20Línea.%20Gracias"
                className="flex items-center justify-center text-white font-bold px-6 py-4 rounded shadow-lg bg-green-500 hover:bg-green-600 active:bg-green-700 transition duration-150 ease-in-out"
                target="_blank"
                style={{ marginBottom: '0.5rem' }}
              >
                <FaWhatsapp className="mr-2 text-xl" /> WhatsApp
              </a>
            </div>
            <span className="flex items-center justify-center text-sm text-black font-semibold">
              COMIENZA TUS CLASES EN SEPTIEMBRE 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};





export default Home;
