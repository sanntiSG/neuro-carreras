import React from 'react';
import { FaRobot } from "react-icons/fa6";
import { PiInstagramLogoDuotone } from "react-icons/pi";

import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer className='bg-primary/10 py-12 dark:bg-dark-bg text-black dark:text-dark-text mt-0.5 '>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className='container flex justify-between items-center'
            >
                {/*logo section */}
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='text-primary'>neuro</p>
                    <p className='text-secondary'>carreras</p>
                    <p className='text-extra'></p>
                    <FaRobot className='text-green-500' />
                </div>

                {/*social icons section */}
                <div className='text-3xl flex items-center gap-4 mt-6 text-gray-700'>
                    <a href="https://www.instagram.com/sanntiagoo7/" target="_blank" rel="noopener noreferrer">
                        <PiInstagramLogoDuotone />
                    </a>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
