import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as tf from "@tensorflow/tfjs";
import { GiAllSeeingEye } from "react-icons/gi";
import HeroPng from "../../assets/objetos/principal.png"
import { motion } from "framer-motion";





const Formulario = () => {
  const [modelo, setModelo] = useState(null);
  const navigate = useNavigate();

  // Cargar el modelo al montar el componente
  useEffect(() => {
    const cargarModelo = async () => {
      console.log("Cargando el modelo...");
      try {
        const model = await tf.loadLayersModel("/model.json");
        setModelo(model);
        console.log("Modelo cargado!");
      } catch (error) {
        console.error("Error cargando el modelo:", error);
      }
    };
    cargarModelo();
  }, []);

  const handlePrediction = () => {
    if (!modelo) {
      alert("El modelo aún no está cargado. Intenta de nuevo en un momento.");
      return;
    }

    const inputs = [
      "interesIngenieria",
      "cienciasExactas",
      "cienciasSociales",
      "arte",
      "calculo",
      "comunicacion",
      "promedio",
      "trabajoAireLibre",
      "trabajoOficina",
      "medicina",
      "trabajarConPersonas",
      "trabajoSolo",
      "tecnologiaInnovacion",
      "negociosEconomia",
      "explicarEnsenar",
      "estudiosDocencia",
      "capacitar",
      "brindarApoyo",
      "desarrollar",
    ];

    const valores = inputs.map((id) => {
      const inputElement = document.getElementById(id);
      if (inputElement) {
        return parseFloat(inputElement.value) || 0;
      }
      return 0;
    });

    const tensor = tf.tensor2d([valores]);
    const prediccion = modelo.predict(tensor).dataSync();

    const carreras = [
      {
        nombre: "Ingeniería",
        descripcion: "Carrera que aplica principios científicos, matemáticos y tecnológicos para resolver problemas prácticos y diseñar soluciones en diversas áreas.",
        areas: [
          "Ingeniería Mecánica",
          "Ingeniería en Software",
          "Ingeniería Aeroespacial",
          "Ingeniería Civil",
          "Ingeniería Eléctrica",
          "Ingeniería Química",
          "Ingeniería Industrial",
          "Ingeniería Biomédica",
          "Ingeniería de Sistemas"
        ],
        imagen: "https://www.osta.es/wp-content/uploads/2023/03/ingenieria.jpeg"
      },
      
      {
        nombre: "Medicina",
        descripcion: "Carrera centrada en la prevención, diagnóstico y tratamiento de enfermedades, así como en la promoción de la salud y el bienestar de las personas.",
        areas: [
          "Medicina General",
          "Cirugía",
          "Pediatría",
          "Medicina de Emergencias",
          "Cardiología",
          "Neurología",
          "Dermatología",
          "Oncología",
          "Medicina Forense"
        ],
        imagen: "https://wallpapers.com/images/hd/hd-medical-health-icon-with-nurse-v1txjiifhv3bssoo.jpg"
      },
      {
        nombre: "Derecho/Negocios",
        descripcion: "Carreras orientadas a la comprensión y aplicación de las leyes, la economía y la gestión empresarial, con énfasis en el ámbito jurídico y administrativo.",
        areas: [
          "Derecho Penal",
          "Derecho Civil",
          "Derecho Laboral",
          "Derecho Empresarial",
          "Gestión de Proyectos",
          "Marketing Empresarial",
          "Contabilidad",
          "Administración de Empresas"
        ],
        imagen: "https://certificacion.abogado.digital/wp-content/uploads/2020/06/digital_scale7-1024x726.jpg"
      },
      
      {
        nombre: "Arte",
        descripcion: "Una carrera que promueve la creatividad, la expresión artística y el desarrollo de habilidades en diversas disciplinas visuales y conceptuales.",
        areas: [
          "Pintura",
          "Escultura",
          "Dibujo",
          "Fotografía",
          "Diseño Gráfico",
          "Teatro",
          "Danza",
          "Música",
          "Cine y Video",
          "Moda"
        ],
        imagen: "https://www.comciencia.br/wp-content/uploads/2020/07/girl-2696947_1920-672x372.jpg"
      },
      
      {
        nombre: "Ayuda Social",
        descripcion: "Un campo dedicado a mejorar el bienestar de individuos y comunidades, promoviendo la equidad y el desarrollo social en contextos diversos.",
        areas: [
          "Trabajo Social",
          "Psicología",
          "Educación",
          "Política",
          "Gestión de Proyectos",
          "Derechos Humanos",
          "Ayuda Humanitaria",
        ],
        imagen: "https://elements-resized.envatousercontent.com/elements-video-cover-images/86f935e8-5826-4861-882d-a9c53e37ef15/video_preview/video_preview_0001.jpg?w=500&h=281&cf_fit=cover&q=85&format=auto&s=cb6f3f55857db42f810645b506b259862ffbba75f3ca2f3b37151877a382a64b"
      },
      
      {
        nombre: "Educación",
        descripcion: "Carrera orientada a la formación de docentes y profesionales dedicados a la enseñanza, el aprendizaje y la mejora de los sistemas educativos.",
        areas: [
          "Pedagogía",
          "Educación Primaria",
          "Educación Secundaria",
          "Educación Infantil",
          "Formación Docente",
          "Educación Física",
        ],
        imagen: "https://img.freepik.com/foto-gratis/libro-fondo-tablero-verde_1150-3837.jpg"
      },
      
      {
        nombre: "Ciencias de la Computación",
        descripcion: "Carrera que se centra en la teoría, el desarrollo y la aplicación de sistemas computacionales, abarcando desde el diseño de software hasta la inteligencia artificial.",
        areas: [
          "Programación",
          "Desarrollo de Software",
          "Inteligencia Artificial",
          "Ciencias de Datos",
          "Redes y Comunicaciones",
          "Bases de Datos",
          "Ciberseguridad",
          "Ingeniería de Software",
          "Desarrollo Web y Móvil"
        ],
        imagen: "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_780/dpr_2.0/element/19/192544_Untitleddesign1.jpg"
      }
      
    ];

    const indice = prediccion.indexOf(Math.max(...prediccion));
    const carreraSeleccionada = carreras[indice];

    // Log the selected career's name before navigating
    console.log({ resultado: carreraSeleccionada.nombre });


    // Navegar pasando todos los datos de la predicción
    navigate("/prediccion", {
      state: {
        resultado: carreraSeleccionada.nombre,
        descripcion: carreraSeleccionada.descripcion,
        areas: carreraSeleccionada.areas,
        imagen: carreraSeleccionada.imagen,
      },
    });
  };


  const renderSelect = (label, id) => (
    <div className="mb-9">
      <label htmlFor={id}>{label}</label>
      <select id={id} className="form-control mt-3 mr-3"> {/* mr-3 para margen derecho */}
        <option disabled value="">
          Elige una opción...
        </option>
        <option value={1}>Sí</option>
        <option value={0}>No</option>
      </select>
    </div>
  );
  
  return (
    <div className="container mt-5">
      <motion.h1
          initial={{ opacity: 0, filter: "blur(15px)" }}
          animate={{  opacity: 1, filter: "blur(0px)"}}
          transition={{ duration: 2, delay: 1 }}
          className="text-4xl lg:text-5xl font-bold leading-relaxed xl:leading-loose font-averia text-center"
        >
          Predicción de Carreras
        </motion.h1>

        {/* Imágenes de héroe */}
        <div className='flex justify-center items-center'>
        <motion.img
        initial={{ opacity: 0, x: 200, rotate: 75 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false }}
        src={HeroPng}
        alt=""
        className='w-full md:w-[400px] drop-shadow dark:hidden'/>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h2 className="text-center mb-4 font-bold leading-relaxed xl:leading-loose font-averia">Cuestionario de Intereses. Quiza haya preguntas muy especificas, recuerda que esta red esta pensada de arrojar una carrera general, luego mas adelante podremos indagar que rama especifica es la inidicada para ti, asi que responde lo mas estricto posible.</h2>
              {renderSelect("Interés en Ingeniería", "interesIngenieria")}
              {renderSelect("Interés en Ciencias Exactas", "cienciasExactas")}
              {renderSelect("Interés en Ciencias Sociales", "cienciasSociales")}
              {renderSelect("Interés en Arte", "arte")}
              {renderSelect("Interés en Cálculo", "calculo")}
              {renderSelect("Interés en Comunicación", "comunicacion")}
              <div className="mb-3">
                <label htmlFor="promedio">Promedio de Notas</label>
                <input
                  type="number"
                  className="form-control"
                  id="promedio"
                  step="0.1"
                  placeholder="Ingresa tu promedio"
                />
              </div>
              {renderSelect("Trabajo al Aire Libre", "trabajoAireLibre")}
              {renderSelect("Trabajo en Oficina", "trabajoOficina")}
              {renderSelect("Interés en Medicina", "medicina")}
              {renderSelect(
                "Interés en Trabajar con Personas",
                "trabajarConPersonas"
              )}
              {renderSelect("Trabajo Solo", "trabajoSolo")}
              {renderSelect(
                "Interés en Tecnología e Innovación",
                "tecnologiaInnovacion"
              )}
              {renderSelect(
                "Interés en Negocios y Economía",
                "negociosEconomia"
              )}

              <h3 className="text-center mt-4 font-bold leading-relaxed xl:leading-loose font-averia">Preguntas Específicas</h3>
              {renderSelect(
                "¿Te gusta enseñar o explicar conceptos?",
                "explicarEnsenar"
              )}
              {renderSelect(
                "¿Te interesa la docencia o estudios históricos?",
                "estudiosDocencia"
              )}
              {renderSelect("¿Te interesa capacitar?", "capacitar")}
              {renderSelect(
                "¿Te motiva apoyar emocionalmente?",
                "brindarApoyo"
              )}
              {renderSelect(
                "¿Te interesa desarrollar software?",
                "desarrollar"
              )}

              <button
                className="primary-btn flex items-center gap-3"
                onClick={handlePrediction}
              >
                <span>
                <GiAllSeeingEye />
                 </span>
                Predecir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Formulario;
