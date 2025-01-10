import React from 'react';
import part1 from "../../assets/objetos/part1.png";
import part2 from "../../assets/objetos/part2.png";
import part3 from "../../assets/objetos/part3.png";
import figure from "../../assets/objetos/Figure_1.png";



import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeLeft, FadeUP } from '../../utility/animation';

export const Banner1 = () => {
    return (
        <section id='info' className='bg-white dark:bg-dark-bg text-black dark:text-dark-text'>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-24 max-w-screen-xl rounded-b-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Brand Info */}
                    <div className='flex flex-col justify-center'>
                        <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                            <motion.h1
                                variants={FadeUP(0.5)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className='text-3xl lg:text-6xl font-bold uppercase'>
                                info
                            </motion.h1>
                            <motion.p
                                variants={FadeUP(0.8)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}>

                                NeuroCarreras es una red neuronal en proceso, diseñada para ofrecer respuestas a algunas de las preguntas más complejas, tales como: ¿Cuál es mi propósito? ¿A qué debería dedicarme? ¿Qué me apasiona?, entre muchas otras.
                                El objetivo de esta red es ayudarte a identificar una carrera o profesión que se ajuste a tus cualidades, gustos y personalidad. Esta red ha sido cuidadosamente entrenada con una estructura que incluye una capa de entrada, varias capas ocultas y una capa de salida con una función de activación especializada. A través de un cuestionario compuesto por preguntas cortas y sencillas, NeuroCarreras predice cuál es la profesión que más se asemeja a tu perfil.
                            </motion.p>
                            <motion.p
                                variants={FadeUP(1.2)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}>

                                A continuación se adjuntan unas fotos con pequeños fragmentos de código realizado en lenguaje Python de la red neuronal antes de ser entrenada, en entrenamiento y los gráficos de pérdida en relación con su aprendizaje en épocas.
                                Te dejo el enlace al Github del proyecto.
                            </motion.p>

                            {/* Button Section */}
                            <motion.div
                            variants={FadeUP(1.4)}
                            initial="hidden"
                            whileInView="visible"
                            className='flex justify-center md:justify-start'>
                            <a href="https://github.com/sanntiSG" target="_blank" rel="noopener noreferrer">
                                <button className='primary-btn flex items-center'>
                                    Github
                                    <span className='ml-2'>
                                        <FaGithub />
                                    </span>
                                </button>
                            </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* Banner Image */}
                    <div className='flex justify-center items-center'>
                        <motion.img
                            initial={{ opacity: 0, x: 200, rotate: 75 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: false }}
                            src={part1}
                            alt=""
                            className='w-[450px] md:max-w-[500px] h-full object-cover drop-shadow'
                        />
                    </div>
                </div>

                {/* Otras imágenes que aparecen al hacer scroll */}
                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: false }}
                >
                    <motion.img
                        src={part2}
                        alt="n"
                        className="w-[450px] md:max-w-[500px] h-full object-cover drop-shadow mx-auto block"
                    />
                </motion.div>

                {/* mas debajo */}
                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: false }}
                >
                    <motion.img
                        src={part3}
                        alt="Otra Imagen"
                        className="w-[450px] md:max-w-[500px] h-full object-cover drop-shadow mx-auto block"
                    />
                </motion.div>



                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: false }}
                >
                    <motion.img
                        src={figure}
                        alt="Otra Imagen"
                        className="w-[450px] md:max-w-[500px] h-full object-cover drop-shadow mx-auto block"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default Banner1;
