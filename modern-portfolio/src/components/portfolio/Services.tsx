'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Services = ({ servicesData }: { servicesData: any[] }) => {
    return (
        <section id="services" className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col items-center">
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative mb-20"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white relative z-10 transition-transform">My Services</h2>
                <div className="absolute -bottom-4 -right-10 z-0">
                    <img src="/assets/theme_pattern.svg" alt="theme pattern" className="w-48 opacity-70" />
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {servicesData.map((service, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        className="flex flex-col gap-4 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#b415ff]/50 hover:bg-white/10 transition-colors group cursor-pointer"
                    >
                        <h3 className="text-2xl font-bold text-white/50 group-hover:text-[#df8908] transition-colors">{service.s_no}</h3>
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-[#df8908] group-hover:to-[#b415ff] transition-all">{service.s_name}</h2>
                        <p className="text-gray-400 leading-relaxed text-lg line-clamp-4">{service.s_desc}</p>
                        
                        <div className="mt-auto pt-6 flex items-center gap-4 text-white font-medium group-hover:text-[#df8908] transition-colors">
                            <p>Read More</p>
                            <motion.div
                                initial={{ x: 0 }}
                                whileHover={{ x: 10 }}
                                className="w-6 h-6 relative"
                            >
                                <img src="/assets/arrow_icon.svg" alt="arrow" className="w-full h-full" />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
