import React from 'react';
import BannerPng3 from "../../assets/objetos/Banner3.png";
import { motion } from "framer-motion";
import { FadeLeft } from '../../utility/animation';

const bgStyle = {
    backgroundImage: `url(${BannerPng3})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

export const Banner3 = () => {
    return (
        <section
            id="contacto"
            className="bg-white dark:bg-dark-bg text-black dark:text-dark-text"
            style={bgStyle}
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-24 max-w-screen-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 md:py-14">
                    {/* Blank div for spacing */}
                    <div></div>

                    {/* Brand information */}
                    <div className="flex flex-col justify-center items-center md:items-start">
                        <div className="text-amber-400 font-bold text-center md:text-left space-y-4 max-w-md lg:max-w-[400px]">
                            {/* Heading */}
                            <motion.h1
                                variants={FadeLeft(0.5)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-purple-600 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold uppercase"
                            >
                                ¿Tienes dudas?
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                variants={FadeLeft(1.2)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-sm sm:text-base lg:text-lg text-black"
                            >
                                Gracias por visitar NeuroCarreras. Si tienes preguntas, dudas o necesitas más información, no dudes en contactarme.
                            </motion.p>

                            {/* Button */}
                            <motion.div
                                variants={FadeLeft(1.2)}
                                initial="hidden"
                                whileInView="visible"
                                className="flex justify-center md:justify-start"
                            >
                                <a
                                    href="mailto:ssantii200@gmail.com?subject=Hola%20vengo%20de%20la%20pagina%20web%20NeuroCarreras%20me%20contacto%20para%20↓↓↓"
                                    className="primary-btn px-6 py-2 text-sm sm:text-base"
                                >
                                    Envíame un mail
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner3;
