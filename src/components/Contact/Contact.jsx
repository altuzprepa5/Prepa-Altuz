import { useState } from "react";
import {
  Typography,
  Button,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false, // checkbox
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.terms
    ) {
      alert("Por favor llena todos los campos.");
      return;
    }
    const { name, email, message } = formData;
    const mailtoLink = `mailto:brayandom1604@gmail.com?subject=Contacto desde el sitio web&body=Nombre: ${name}%0AEmail: ${email}%0AMensaje:%0A${message}`;
    window.location.href = mailtoLink;
    setFormData({
      name: "",
      email: "",
      message: "",
      terms: false,
    }); // Reset the form data after submission
  };

  return (
    <section className="mt-48 md:mt-10 pb-40 relative bg-slate-100">
      <div
        className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-slate-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div
        className="container mx-auto px-4"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg px-6 py-6">
              <h6 className="text-2xl font-semibold">
                Comunícate con nosotros
              </h6>
              <p className="mt-2 text-gray-600">
                Déjanos tus datos y cualquier consulta que tengas sobre nuestros
                programas y cursos para que uno de nuestros asesores educativos
                te contacte en menos de 24 horas.
              </p>
              <div className="flex flex-col items-center">
                <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#4ecdc4] mb-4 hover:scale-110 transform transition-all duration-300">
                  <a href="tel:+524945132552">
                    <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-white" />
                  </a>
                </div>
                <h1 className="text-[25px] mb-[0.2rem] font-semibold text-gray-600 text-center">
                  Número de teléfono
                </h1>
                <p className="text-[17px] text-gray-600 opacity-80 text-center">
                  +52 494-513-2552
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#ffe66d] mb-4 hover:scale-110 transform transition-all duration-300">
                  <a href="mailto:brayandom1604@gmail.com">
                    <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-white" />
                  </a>
                </div>
                <h1 className="text-[25px] mb-[0.2rem] font-semibold text-gray-600 text-center">
                  Correo Electronico
                </h1>
                <p className="text-[17px] text-gray-600 opacity-80 text-center">
                  brayandom1604@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col bg-white shadow-lg rounded-lg px-6 py-6"
            >
              Nombre Completo:
              <Input
                name="name"
                variant="outlined"
                size="lg"
                // label="Nombre completo"
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                value={formData.name}
                required
              />{" "}
              <br />
              Correo electronico:
              <Input
                name="email"
                variant="outlined"
                size="lg"
                // label="Correo"
                onChange={handleChange}
                placeholder="Ingresa tu email"
                value={formData.email}
                required
              />{" "}
              <br />
              Asunto:
              <Textarea
                name="message"
                variant="outlined"
                size="lg"
                // label="Asunto"
                rows={8}
                onChange={handleChange}
                placeholder="Ingresa tu asunto"
                value={formData.message}
                required
              />
              <br />
              <Checkbox
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    Acepto los
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-slate-400"
                    >
                      &nbsp;Terminos y condiciones
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
                required
              />
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="mt-8 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-700 hover:to-green-700 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                fullWidth
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
