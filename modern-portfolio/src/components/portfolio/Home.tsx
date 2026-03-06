'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 relative z-10">
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
            >
                {/* Assuming profile_img is copied to public/assets/profile_img.jpg */}
                <Image 
                    src="/assets/profile_img.jpg" 
                    alt="Ajay Sahani Profile" 
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-7xl font-bold text-center max-w-4xl tracking-tight text-white mb-6"
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#df8908] to-[#b415ff]">
                    I'm Ajay Sahani
                </span>, Software Developer
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-2xl text-center text-gray-300 max-w-2xl mb-12"
            >
                I am a Software Developer from Vadodara, Gujarat with 2 years of experience at Emarket Experts, building robust web applications.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-6"
            >
                <a 
                    href="#contact" 
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] text-white font-medium text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-1"
                >
                    Connect with me
                </a>
                <a 
                    href="/Ajay_resume.pdf" 
                    download
                    className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium text-lg hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
                >
                    My Resume
                </a>
            </motion.div>
        </section>
    );
}

export default Home;
