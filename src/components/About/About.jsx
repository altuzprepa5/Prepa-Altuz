import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from "@material-tailwind/react";

const About = () => {
  return (
    <section className="mt-12 md:mt-20 pb-20 relative bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-left mb-12" data-aos="fade-up-right" data-aos-duration="1000">
          <div className="w-full lg:w-8/12 px-4 text-center">
            <h2 className="text-4xl font-semibold">Prepa en línea ALTUZ</h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-center" data-aos="fade-up-left" data-aos-duration="1000">
          <div className="w-full md:w-1/3 p-4 hover:scale-105 transform transition-all duration-300">
            <Card>
              <CardHeader color="lightBlue">
                <img
                  src="/images/banner.png"
                  alt="BUSINESS SCHOOL"
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" style={{ fontWeight: 'bold', color: '#2a1b8d' }} className="font-semibold">
                  BUSINESS SCHOOL
                </Typography>
                <Typography variant="paragraph" color="gray" className="mt-2">
                  Somos la <strong >primera y única </strong> prepa en linea con enfoque en aprendizajes de negocios y desarrollo personal en México.
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="w-full md:w-1/3 p-4 hover:scale-105 transform transition-all duration-300">
            <Card>
              <CardHeader color="lightBlue">
                <img
                  src="/images/student2.jpg"
                  alt="FLEXIBILIDAD EN HORARIO"
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" style={{ fontWeight: 'bold', color: '#2a1b8d' }} className="font-semibold">
                  FLEXIBILIDAD EN HORARIO
                </Typography>
                <Typography variant="paragraph" color="gray" className="mt-2">
                  Toma tus clases a la hora que prefieras en nuestra plataforma disponible 24 horas, desde cualquier parte de México.
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="w-full md:w-1/3 p-4 hover:scale-105 transform transition-all duration-300">
            <Card>
              <CardHeader color="lightBlue">
                <img
                  src="/images/RVOE.png"
                  alt="ESTAMOS INCORPORADOS A LA SEP"
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" style={{ fontWeight: 'bold', color: '#2a1b8d' }} className="font-semibold">
                  ESTAMOS INCORPORADOS A LA SEP
                </Typography>
                <Typography variant="paragraph" color="gray" className="mt-2">
                  Estamos incorporados a la Secretaría de Educación Pública, por lo que tu certificado de bachillerato es válido en todo México, y con nosotros terminas tu prepa en 2 años.
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
