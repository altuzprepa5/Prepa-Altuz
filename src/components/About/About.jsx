import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from "@material-tailwind/react";

const About = () => {
  return (
    <section className="mt-10 md:mt-20 pb-20 relative bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24" data-aos="fade-up-right"
    data-aos-duration="1000">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Acerca de Nosotros</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600 text-justify">
              En Prepa Altuz, ofrecemos una educación integral que prepara a nuestros estudiantes para los retos del futuro. Contamos con un equipo docente altamente capacitado y un ambiente de aprendizaje innovador.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap" data-aos="fade-up-left"
    data-aos-duration="1000">
          <div className="w-full md:w-1/2 p-4 hover:scale-105 transform transition-all duration-300">
            <Card>
              <CardHeader color="lightBlue">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="Educación de Calidad"
                  className="w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blueGray" className="font-semibold">
                  Educación de Calidad
                </Typography>
                <Typography variant="paragraph" color="gray" className="mt-2">
                  Nuestros programas están diseñados para brindar una formación académica sólida y actualizada.
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="w-full md:w-1/2 p-4 hover:scale-105 transform transition-all duration-300">
            <Card>
              <CardHeader color="lightBlue">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaGooto-by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="Actividades Extracurriculares"
                  className="w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blueGray" className="font-semibold">
                  Actividades Extracurriculares
                </Typography>
                <Typography variant="paragraph" color="gray" className="mt-2">
                  Fomentamos el desarrollo integral de nuestros estudiantes con una variedad de actividades extracurriculares.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


// const About = () => {
//   return (
//     <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
//       <h2 className="text-3xl font-bold text-gray-800">
//         Acerca de Nosotros
//       </h2>
//   <p className="text-gray-600 mb-6">
//     En Prepa Altuz, ofrecemos una educación integral que prepara a nuestros
//     estudiantes para los retos del futuro. Contamos con un equipo docente
//     altamente capacitado y un ambiente de aprendizaje innovador.
//   </p>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white shadow-md p-6 rounded-lg">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4">
//             Educación de Calidad
//           </h3>
//           <p className="text-gray-600">
// Nuestros programas están diseñados para brindar una formación
// académica sólida y actualizada.
//           </p>
//         </div>
//         <div className="bg-white shadow-md p-6 rounded-lg">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4">
//             Actividades Extracurriculares
//           </h3>
//           <p className="text-gray-600">
// Fomentamos el desarrollo integral de nuestros estudiantes con una
// variedad de actividades extracurriculares.
//           </p>
//         </div>
//         <div className="bg-white shadow-md p-6 rounded-lg">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4">
//             Infraestructura Moderna
//           </h3>
//           <p className="text-gray-600">
//             Contamos con instalaciones modernas y equipadas para el mejor
//             desarrollo de las actividades académicas y deportivas.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
