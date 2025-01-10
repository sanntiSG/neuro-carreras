import React from 'react';
import { FaRobot } from "react-icons/fa6";
import HeroPng from "../../assets/objetos/principal.png"
import logoBlancoPng from "../../assets/objetos/logoBlanco.png"
import logoBG from "../../assets/objetos/logoBG.png"
import { motion } from "framer-motion";
import { FadeRight } from '../../utility/animation';
import { Link } from 'react-router-dom';

const Hero = () => {


    // URL del perfil de Instagram
    const instagramProfileUrl = 'https://www.instagram.com/chesouvenir/';


    return (


        <section id='home'>
            <div className="relative bg-secondary/10 dark:bg-dark-bg text-black dark:text-dark-text">
                {/* Contenedor expandido en ambos lados */}
                <div className="container mx-auto px-4 md:px-6 lg:px-8 min-h-[650px] grid grid-cols-1 md:grid-cols-2 relative">
                    {/* Información de la marca */}
                    <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
                        <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                            <motion.h1
                                variants={FadeRight(0.6)}
                                initial="hidden"
                                animate="visible"
                                className='text-5xl lg:text-5xl font-bold leading-relaxed xl:leading-loose font-averia'>
                                Red
                                <br />
                                Neuronal <span className='text-extra'>Perceptora</span>
                            </motion.h1>
                            <motion.p
                                variants={FadeRight(0.9)}
                                initial="hidden"
                                animate="visible"
                                className='text-2xl tracking-wide'>
                                ¿No sabes qué estudiar? Prueba mi red neuronal.
                            </motion.p>

                            <motion.p
                                variants={FadeRight(1.2)}
                                initial="hidden"
                                animate="visible"
                                className='text-gray-400'>
                                Puede ser estresante el pensar que nada te gusta o no saber a que dedicarte, Neuro carreras es una red neuronal básica entrenada para facilitarte esa duda, no pierdas más el tiempo y pruebala!!
                            </motion.p>
                            {/* Enlace de Instagram */}
                            <motion.div
                                variants={FadeRight(0.3)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                className="flex justify-center md:justify-start"
                            >
                                <Link
                                    to="/Formulario"
                                    className="primary-btn flex items-center gap-2"
                                >
                                    <span>
                                        <FaRobot />
                                    </span>
                                    Comenzar
                                </Link>
                            </motion.div>

                        </div>
                    </div>
                    {/* Imágenes de héroe */}
                    <div className='flex justify-center items-center'>
                        <motion.img
                            initial={{ opacity: 0, x: 200, rotate: 75 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: false }}
                            src={HeroPng}
                            alt=""
                            className='w-full md:w-[400px] drop-shadow dark:hidden'
                        />
                        <motion.img
                            initial={{ opacity: 0, x: 200, rotate: 75 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: false }}
                            src={logoBlancoPng}
                            alt=""
                            className='w-full md:w-[400px] drop-shadow hidden dark:block'
                        />
                    </div>
                    {/* logo image */}
                    <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg] pointer-events-none'>
                        <motion.img
                            initial={{ opacity: 0, x: -200, y: 0, rotate: 75 }}
                            animate={{ opacity: 1, x: -100, y: 100, rotate: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            src={logoBG}
                            alt="Logo"
                            className='w-[100px] sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px]'
                        />
                    </div>
                </div>
            </div>
        </section>


    );
}

export default Hero;
