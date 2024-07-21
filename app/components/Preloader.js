"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 2 seconds total animation time

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            className='preloaderBackground'
            initial={{ y: '0%' }}
            animate={{
                y: isLoading ? '0%' : '100%',
            }}
            transition={{
                duration: 0.3,
                ease: 'easeInOut',
                times: [0, 0.4, 1],
            }}>
            <p>Loading...</p>

            <motion.div
                initial={{ y: '-100%' }}
                animate={{
                    y: isLoading ? '0%' : '100%',
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    times: [0, 0.4, 1],
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: '#111111', // Change this to your desired color
                    zIndex: 9999,
                }}
            />
        </motion.div>
    );
};

export default Preloader;