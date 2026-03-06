'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col items-center">
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative mb-20"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white relative z-10">About me</h2>
                <div className="absolute -bottom-4 -right-10 z-0">
                    <img src="/assets/theme_pattern.svg" alt="theme pattern" className="w-32 opacity-70" />
                </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start w-full">
                
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="hidden lg:block w-1/3 relative"
                >
                    <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 shadow-xl">
                        <Image 
                            src="/assets/about_profile.jpg" 
                            alt="About Profile" 
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                <div className="w-full lg:w-2/3 flex flex-col gap-10">
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6 text-lg text-gray-300 leading-relaxed font-medium"
                    >
                        <p>As a Software Developer, I excel in creating attractive and efficient digital experiences. Proficient in HTML5, CSS3, JavaScript and TypeScript, I have expertise in designing layouts, building dynamic interfaces, and optimizing website performance.</p>
                        <p>I leverage front-end libraries like React to develop robust web applications with a focus on scalability, maintainability, and an exceptional user experience. Committed to staying updated on industry advancements, I continuously refine my skills to deliver cutting-edge solutions.</p>
                    </motion.div>

                    <div className="flex flex-col gap-6 w-full mt-4">
                        {[
                            { name: 'HTML & CSS', width: '50%' },
                            { name: 'JavaScript', width: '60%' },
                            { name: 'React JS', width: '70%' },
                            { name: 'Node Js & MongoDB', width: '50%' },
                        ].map((skill, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 md:gap-8 group"
                            >
                                <p className="min-w-[150px] md:min-w-[200px] text-xl font-medium text-white group-hover:scale-105 transition-transform">{skill.name}</p>
                                <div className="h-2 rounded-full w-full bg-white/10 overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.width }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                        className="h-full rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff]"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row w-full justify-around items-center gap-10 mt-24 mb-10"
            >
                {[
                    { number: '2+', label: 'YEARS OF EXPERIENCE' },
                    { number: '10+', label: 'PROJECTS COMPLETED' },
                    { number: '10+', label: 'PROJECT REVIEWS' },
                ].map((stat, i) => (
                    <React.Fragment key={i}>
                        <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-500 cursor-pointer">
                            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#df8908] to-[#b415ff]">
                                {stat.number}
                            </h1>
                            <p className="text-sm md:text-lg font-medium tracking-wide text-white">{stat.label}</p>
                        </div>
                        {i < 2 && <div className="hidden md:block w-[1px] h-20 bg-white/20" />}
                    </React.Fragment>
                ))}
            </motion.div>
        </section>
    );
}

export default About;
