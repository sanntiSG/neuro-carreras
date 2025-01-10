import React from "react";
import { GiFedora } from "react-icons/gi";
import { MdOutlineShoppingCart, MdMenu, MdDarkMode, MdLightMode } from "react-icons/md";

import { FcBiotech } from "react-icons/fc";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavbarMenu = [
    { id: 1, title: "Home", link: "home" },
    { id: 2, title: "Info", link: "info"},
    { id: 3, title: "¿Quien soy?", link: "quien_soy" },
    { id: 4, title: "Contacto", link: "contacto" },
    { id: 5, title: "Tecnologias", link: "tecnologias" },

];

const Navbar = ({ setDarkMode }) => {
    const [open, setOpen] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const handleMenuClose = () => {
        setOpen(false);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        setDarkMode(!isDarkMode);
    };

    return (
        <>
            <nav className="navbar-fixed bg-white dark:bg-gray-800 text-black dark:text-white rounded-b-3xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="container flex justify-between items-center py-2 md:pt-4"
                >
                    {/* logo section */}
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                        <p className='text-primary'>Neuro</p>
                        <p className='text-secondary'>Carreras</p>
                        <p className='text-extra'></p>
                        <FcBiotech className='text-green-500' />
                    </div>

                    {/* menu section */}
                    <div className='hidden md:block'>
                        <ul className={`flex items-center gap-6 ${isDarkMode ? 'text-orange-500' : 'text-gray-600'}`}>
                            {NavbarMenu.map((menu) => (
                                <li key={menu.id} className="text-xl">
                                    <Link
                                        to={menu.link}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className={`inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#cf4444] font-semibold cursor-pointer ${isDarkMode ? 'dark:hover:text-primary' : ''}`}
                                    >
                                        {menu.title}
                                    </Link>
                                </li>
                            ))}
                           
                            <button
                                className='text-2xl hover:bg-primary hover:text-white rounded-3xl p-2 duration-200'
                                aria-label="Toggle Dark Mode"
                                onClick={toggleDarkMode}
                            >
                                {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
                            </button>
                        </ul>
                    </div>

                    {/* mobile hamburger menu section */}
                    <div className="md:hidden" onClick={() => setOpen((prevOpen) => !prevOpen)}>
                        <MdMenu className='text-4xl' />
                    </div>
                </motion.div>
            </nav>

            {/* mobile menu section */}
            <ResponsiveMenu
                open={open}
                onMenuClose={handleMenuClose}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
            />
        </>
    );
};

export default Navbar;
