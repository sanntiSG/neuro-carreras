import React from 'react';
import santiPng from "../../assets/objetos/santiPic.jpg";
import { motion } from "framer-motion";
import { FadeLeft, FadeUP } from '../../utility/animation';

export const Banner2 = () => {
    return (
        <section id='quien_soy' className='bg-secondary/10 dark:bg-dark-bg text-black dark:text-dark-text'>
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 md:py-24 max-w-screen-xl rounded-b-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Banner image */}
                    <div className='flex justify-center items-center'>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, delay: 1.3 }}
                            viewport={{ once: true }}
                            src={santiPng}
                            alt=""
                            className='rounded-3xl w-[300px] md:max-w-[400px] h-full object-cover drop-shadow'
                        />
                    </div>

                    {/* Brand info */}
                    <div className='flex flex-col justify-center'>
                        <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                            <motion.h1
                                variants={FadeUP(0.5)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className='text-3xl lg:text-6xl font-bold uppercase'>
                                ¿Quién soy?
                                <motion.p>
                                    Soy
                                </motion.p>
                            </motion.h1>

                            <motion.p
                                variants={FadeUP(0.8)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}>
                                un emprendedor argentino y estudiante de Ingeniería en Sistemas de Información. Creé NeuroCarreras para ayudar a las personas a descubrir cuál carrera se adapta mejor a su personalidad, gustos y habilidades. Utilizo inteligencia artificial y machine learning para ofrecerte una recomendación basada en un cuestionario simple de corta duración.
                                ¿Porque inteligencia articifial y machine learning? Utilizar esto nos permite hacer preguntas de mayor complejidad y con esto, lo mejor que se puede hacer es usar un modelo entrenado para predecir respuestas en base al peso de grandes datos que se inclinarán hacia una respuesta certera.
                            </motion.p>

                            <motion.p
                                variants={FadeUP(1.2)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}>
                                Si estás buscando orientación sobre qué estudiar o a qué dedicarte, ¡estás en el lugar correcto! Con NeuroCarreras, obtendrás respuestas acertadas.
                                Si buscas obtener más información sobre mí, te dejo aqui mi Instagram.
                            </motion.p>

                            {/* Button section */}
                            <motion.div
                                variants={FadeUP(1.3)}
                                initial="hidden"
                                whileInView="visible"
                                className='flex justify-center md:justify-start'>
                                <a href="https://www.instagram.com/sanntiagoo7/" target="_blank" rel="noopener noreferrer">
                                    <button className='primary-btn'>Instagram</button>
                                </a>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner2;


