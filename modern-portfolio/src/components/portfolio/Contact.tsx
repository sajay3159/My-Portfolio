'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'sonner';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "7f86a747-4fc1-483a-8d8e-2d31560c2b76");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                toast.success(res.message);
                formRef.current?.reset(); 
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col items-center">
            <Toaster position="top-right" theme="dark" />
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative mb-20"
            >
                <h2 className="text-5xl md:text-7xl font-bold text-white relative z-10 transition-transform">Get in touch</h2>
                <div className="absolute -bottom-4 -right-10 z-0">
                    <img src="/assets/theme_pattern.svg" alt="theme pattern" className="w-48 opacity-70" />
                </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-16 w-full">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 flex flex-col gap-8"
                >
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#df8908] to-[#b415ff]">Let's talk</h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    
                    <div className="flex flex-col gap-6 mt-4">
                        <a href="mailto:ajayehubexperts@gmail.com" className="flex items-center gap-6 group">
                            <img src="/assets/mail_icon.svg" alt="mail" className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            <p className="text-gray-300 text-xl font-medium group-hover:text-white transition-colors">ajayehubexperts@gmail.com</p>
                        </a>
                        <a href="tel:+18001213546" className="flex items-center gap-6 group">
                            <img src="/assets/call_icon.svg" alt="call" className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            <p className="text-gray-300 text-xl font-medium group-hover:text-white transition-colors">+1800 121 3546</p>
                        </a>
                        <a href="https://www.google.com/maps?q=1694+New+York+26+Vestal+New+York" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                            <img src="/assets/location_icon.svg" alt="location" className="w-8 h-8 group-hover:scale-110 transition-transform" />
                            <p className="text-gray-300 text-xl font-medium group-hover:text-white transition-colors">1694 New York 26 Vestal New York</p>
                        </a>
                    </div>
                </motion.div>

                <motion.form 
                    ref={formRef} 
                    onSubmit={onSubmit} 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-300 font-medium text-lg">Your Name</label>
                        <input type="text" placeholder="Enter your name" name="name" required className="bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#b415ff] transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-300 font-medium text-lg">Your Email</label>
                        <input type="email" placeholder="Enter your email" name="email" required className="bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#b415ff] transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-300 font-medium text-lg">Write your message here</label>
                        <textarea name="message" rows={6} placeholder="Enter your message" required className="bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#b415ff] transition-colors resize-none" />
                    </div>
                    <button type="submit" className="mt-4 px-10 py-4 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] text-white font-bold text-lg hover:scale-105 transition-transform w-max self-start shadow-lg shadow-purple-500/20">
                        Submit now
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
