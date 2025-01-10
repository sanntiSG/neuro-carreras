import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ResponsiveMenu = ({ open, onMenuClose, isDarkMode, toggleDarkMode }) => {
    return (
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className={`fixed top-0 left-0 w-full h-screen z-50 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} shadow-lg`}
                >
                    <div className="text-xl font-semibold uppercase py-10 m-6 rounded-3xl">
                        <ul className="flex flex-col items-center gap-10">
                            <li>
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={onMenuClose}
                                    className="hover:text-primary dark:hover:text-primary"
                                >
                                    Home
                                </Link>
                            </li>


                            <li>
                                <Link
                                    to="info"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={onMenuClose}
                                    className="hover:text-primary dark:hover:text-primary"
                                >
                                    Info
                                </Link>
                            </li>
         
                            <li>
                                <Link
                                    to="quien_soy"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={onMenuClose}
                                    className="hover:text-primary dark:hover:text-primary"
                                >
                                    ¿Quien soy?
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contacto"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={onMenuClose}
                                    className="hover:text-primary dark:hover:text-primary"
                                >
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="tecnologias"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={onMenuClose}
                                    className="hover:text-primary dark:hover:text-primary"
                                >
                                    Tecnologias
                                </Link>
                            </li>
                        </ul>

                        <button
                            className="absolute top-4 right-4 text-2xl p-2 bg-primary rounded-full text-white hover:bg-secondary"
                            aria-label="Toggle Dark Mode"
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;
