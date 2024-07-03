import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="mt-20 md:mt-10 pb-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
              <h6 className="font-semibold text-3xl">
                RVOE BACH.003-24
              </h6>
              <ul className="mt-2 text-gray-800 list-disc pl-5 space-y-2">
                <li>Termina tu prepa en línea en 2 años</li>
                <li>Estudia desde cualquier parte de México</li>
                <li>Flexibilidad de horario</li>
                <li>Certificado con validez a nivel nacional</li>
                <li><strong>Única prepa en línea con enfoque en negocios</strong></li>
              </ul>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-lg font-bold" style={{ color: '#3824cd' }}>
                    CONTACTO
                  </p>
                  <p className="text-2xl font-bold">
                    667 403 2204
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold" style={{ color: '#3824cd' }}>
                    EMAIL
                  </p>
                  <p className="text-xl">
                    controlescolar@prepaaltuz.mx
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
              <h6 className="text-4xl font-bold mb-4 text-center underline">
              <a
                  href="https://wa.me/526674032204"
                >
                ¿Quieres más <br/>información?
              </a>
              </h6>
              <div className="flex justify-center mb-4">
                <a
                  href="https://wa.me/526674032204"
                  className="flex items-center justify-center text-white font-bold px-6 py-4 rounded shadow-lg bg-green-500 hover:bg-green-600 active:bg-green-700 transition duration-150 ease-in-out"
                >
                  <FaWhatsapp className="mr-2 text-xl" /> WhatsApp
                </a>
              </div>
              <p className="text-center text-4xl text-gray-800 underline">
              <a
                  href="https://wa.me/526674032204"
                >Pide nuestro plan de estudios y costo de colegiatura
              </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
