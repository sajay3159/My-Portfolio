'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const MyWork = ({ workData }: { workData: any[] }) => {
    const [visibleProjects, setVisibleProjects] = useState(3);

    const handleShowMore = () => {
        setVisibleProjects((prev) => Math.min(prev + 3, workData.length));
    };

    const handleShowLess = () => {
        setVisibleProjects(3);
    };

    const allProjectsVisible = visibleProjects >= workData.length;

    return (
        <section id="mywork" className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col items-center">
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative mb-20"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white relative z-10">My Latest Work</h2>
                <div className="absolute -bottom-4 -right-10 z-0">
                    <img src="/assets/theme_pattern.svg" alt="theme pattern" className="w-48 opacity-70" />
                </div>
            </motion.div>

            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-16"
            >
                <AnimatePresence>
                    {workData.slice(0, visibleProjects).map((work, index) => (
                        <motion.a
                            key={index}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-[4/3] w-full block rounded-2xl overflow-hidden shadow-2xl border-2 border-transparent hover:border-[#b415ff]/50 transition-colors"
                        >
                            <Image 
                                src={work.w_img} 
                                alt={work.w_name || 'Project'} 
                                fill
                                className="object-cover group-hover:scale-110 group-hover:brightness-50 transition-all duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold tracking-wider">
                                    View Project
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </AnimatePresence>
            </motion.div>

            <motion.div layout className="flex gap-6">
                {!allProjectsVisible && (
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleShowMore}
                        className="flex items-center gap-4 px-10 py-4 rounded-full border-2 border-white/50 text-white font-medium text-lg hover:bg-white/10 hover:border-white transition-colors"
                    >
                        Show More
                        <img src="/assets/arrow_icon.svg" alt="arrow" className="w-5" />
                    </motion.button>
                )}

                {allProjectsVisible && visibleProjects > 3 && (
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleShowLess}
                        className="flex items-center gap-4 px-10 py-4 rounded-full border-2 border-[#b415ff]/50 text-white font-medium text-lg hover:bg-[#b415ff]/20 hover:border-[#b415ff] transition-colors"
                    >
                        Show Less
                    </motion.button>
                )}
            </motion.div>
        </section>
    );
};

export default MyWork;
