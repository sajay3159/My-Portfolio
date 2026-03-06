'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full mt-24">
            <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col pt-16 pb-8 border-t border-white/10">
                <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
                    <div className="flex flex-col gap-6 w-full lg:w-1/2">
                        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#df8908] to-[#b415ff]">
                            Ajay<span className="text-white">.dev</span>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            I am a Software Developer from Vadodara, Gujarat with 2 years in a Company, Emarket Experts
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-1/2 lg:justify-end">
                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-6 py-4 w-full sm:max-w-xs transition-colors focus-within:border-[#b415ff]">
                            <img src="/assets/user_icon.svg" alt="user" className="w-5" />
                            <input type="email" placeholder="Enter your email" className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500" />
                        </div>
                        <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] text-white font-bold whitespace-nowrap hover:scale-105 transition-transform w-full sm:w-auto">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6 text-gray-500 font-medium">
                    <p>© 2025 Ajay Sahani. All rights reserved</p>
                    <div className="flex gap-8">
                        <p className="hover:text-white transition-colors cursor-pointer">Term of Services</p>
                        <p className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
                        <p className="hover:text-white transition-colors cursor-pointer">Connect with me</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
