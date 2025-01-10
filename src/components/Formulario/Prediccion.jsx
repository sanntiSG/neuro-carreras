import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosReturnLeft } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Prediccion = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resultado, descripcion, areas, imagen } = location.state || {};

  // Asegurarse de que 'areas' es un array
  const areasArray = Array.isArray(areas) ? areas : [];

  // Estado para controlar la visibilidad del botón
  const [showButton, setShowButton] = useState(false);

  // Maneja la animación de la predicción y muestra el botón al final
  const handleAnimationComplete = () => {
    setShowButton(true);
  };

  // Función para construir el mensaje de WhatsApp
  const crearMensajeWhatsApp = () => {
    const mensaje = `Vengo de Neurocarreras, la red me predijo que debo inclinarme hacia ${resultado || "una carrera desconocida"}, quiero saber qué área específica es la mía.`;
    const numeroWhatsApp = "+5491137796683";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    return urlWhatsApp;
  };
  


  return (
    <div className="container mt-5 text-center px-4">
      <motion.div
        initial={{ opacity: 0, filter: "blur(15px)" }}  // Comienza con blur fuerte
        whileInView={{ opacity: 1, filter: "blur(0px)" }}  // Se aclara y hace visible
        transition={{ duration: 2, delay: 1 }}  // Transición de 2 segundos con retraso de 1 segundo
        onAnimationComplete={handleAnimationComplete} // Llama a esta función cuando la animación termine
        viewport={{ once: false }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl tracking-wide sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed xl:leading-loose font-averia"
        >
          Resultado de la Predicción
        </motion.h1>

        {resultado ? (
          <>
            <motion.h2
              initial={{ opacity: 0, filter: "blur(15px)" }}  // Comienza con blur en el texto
              whileInView={{ opacity: 1, filter: "blur(0px)" }}  // Se aclara el texto
              transition={{ duration: 2, delay: 1 }}  // Se aclara gradualmente
              className="text-success mt-3 text-lg sm:text-xl md:text-2xl font-bold leading-relaxed xl:leading-loose font-averia"
            >
              {resultado}
            </motion.h2>

            <motion.img
              initial={{ opacity: 0, filter: "blur(15px)" }}  // Desenfoque fuerte inicial
              whileInView={{ opacity: 1, filter: "blur(0px)" }}  // Desenfoque desaparece gradualmente
              transition={{ duration: 2, delay: 1 }}  // Se desenfoca en 2 segundos con un retraso de 1 segundo
              viewport={{ once: false }}
              src={imagen || "https://via.placeholder.com/300x200?text=Sin+Imagen"}
              alt={resultado}
              className="img-fluid my-4 mx-auto d-block "
              style={{ maxWidth: "100%", height: "auto" }}
            />

            <p className="mt-3 text-base sm:text-lg md:text-xl font-bold leading-relaxed xl:leading-loose font-averia">{descripcion}</p>

            {areasArray.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed xl:leading-loose font-averia">Áreas relacionadas:</h3>
                <ul className="list-unstyled">
                  {areasArray.map((area, index) => (
                    <li key={index} className="mb-1 text-sm sm:text-base md:text-lg font-bold leading-relaxed xl:leading-loose font-averia">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <h2 className="text-danger mt-3 text-lg sm:text-xl md:text-2xl ">No hay predicción disponible</h2>
        )}
      </motion.div>

      {/* Mostrar el botón de WhatsApp solo después de que el blur se haya desvanecido */}
      {showButton && (
        <motion.a
          href={crearMensajeWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.button
            className="green-btn flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-[#25D366] hover:bg-[#0aba07] text-white mx-auto block mt-5 font-bold leading-relaxed xl:leading-loose font-averia"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <span>
              <FaWhatsapp />
            </span>
            Quiero saber que area es para mi
          </motion.button>
        </motion.a>
      )}

      {/* Mostrar el botón de Volver al Formulario solo después de que la animación haya finalizado */}
      {showButton && (
        <motion.button
          className="primary-btn flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-blue-500 hover:bg-blue-600 text-white mx-auto block mt-5"
          onClick={() => navigate("/Formulario")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <span>
            <IoIosReturnLeft />
          </span>
          Volver al Formulario
        </motion.button>
      )}
    </div>
  );
};

export default Prediccion;
