import React from 'react';
import { motion } from 'framer-motion';
import Reactt from "../../assets/objetos/React.png";
import Tailwind from "../../assets/objetos/Tailwind.png";
import Fm from "../../assets/objetos/Fm.png";
import Rr from "../../assets/objetos/Rr.png";
import Ri from "../../assets/objetos/Ri.png";
import Vite from "../../assets/objetos/Vite.png";
import NextUI from "../../assets/objetos/NextUI.png";
import HTML from "../../assets/objetos/HTML.png";
import CSS from "../../assets/objetos/CSS.png";
import JSX from "../../assets/objetos/JSX.png";
import Python from "../../assets/objetos/Python.png";
import Tensorflow from "../../assets/objetos/Tensorflow.png";



import { FadeLeft } from '../../utility/animation';

const tecnologiasData = [
    {
        id: 1,
        title: "React",
        descripcion: "Constccion de interfaz",
        img: Reactt,
        delay: 0.3
    },
    {
        id: 2,
        title: "TailwindCSS",
        descripcion: "Estilos mediante clases",
        img: Tailwind,
        delay: 0.3
    },
    {
        id: 3,
        title: "Framer Motion",
        descripcion: "Animaciones",
        img: Fm,
        delay: 0.6
    },
    {
        id: 4,
        title: "React Router DOM",
        descripcion: "Manejo rutas",
        img: Rr,
        delay: 0.9
    },

    {
        id: 5,
        title: "React Icons",
        descripcion: "Iconos SVGs preparados",
        img: Ri,
        delay: 0.9
    },

    {
        id: 6,
        title: "Vite",
        descripcion: "Configurar y servir proyecto",
        img: Vite,
        delay: 0.9
    },

    {
        id: 7,
        title: "Next UI",
        descripcion: "Componentes UI",
        img: NextUI,
        delay: 0.9
    },

    {
        id: 8,
        title: "HTML",
        descripcion: "Estructuras HTML",
        img: HTML,
        delay: 0.9
    },

    {
        id: 9,
        title: "CSS",
        descripcion: "Estilos",
        img: CSS,
        delay: 0.9
    },

    {
        id: 10,
        title: "JavaScript(JSX)",
        descripcion: "Creación de interfaces dinámicas",
        img: JSX,
        delay: 0.9
    },

    {
        id: 11,
        title: "Python",
        descripcion: "Creación de redNeuronal",
        img: Python,
        delay: 0.9
    },

    {
        id: 12,
        title: "TensorFlow.js",
        descripcion: "Machine Learning",
        img: Tensorflow,
        delay: 0.9
    },
];

const Tecnologias = () => {
    return (
        <section id='tecnologias' className='bg-white dark:bg-dark-bg text-black dark:text-white'>
            <div className='container pt-12 pb-20 mx-auto'>
                <motion.h1
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className='text-2xl font-bold text-left pb-10 uppercase'
                >
                    Tecnologías Usadas en el Proyecto
                </motion.h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {tecnologiasData.map((tecnologia) => (
                        <div key={tecnologia.id} className="block cursor-pointer">
                            <motion.div
                                variants={FadeLeft(tecnologia.delay)}
                                initial="hidden"
                                whileInView={"visible"}
                                whileHover={{ scale: 1.1 }}
                                className="bg-gray-100 dark:bg-gray-800 rounded-3xl px-4 py-2 shadow-lg flex flex-row justify-around items-center gap-3"
                            >
                                <img
                                    src={tecnologia.img}
                                    alt={tecnologia.title}
                                    className='w-[60px] mb-4 scale-150 translate-y-6'
                                />
                                <div>
                                    <h1 className='text-lg font-semibold'>{tecnologia.title}</h1>
                                    <p className='text-lg font-semibold text-secondary dark:text-gray-400'>
                                        {tecnologia.descripcion}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tecnologias;
