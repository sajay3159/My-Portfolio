'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#mywork' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#df8908] to-[#b415ff]">
                    Ajay<span className="text-white">.dev</span>
                </Link>
                
                <ul className="hidden md:flex gap-8 text-white/80 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className="hover:text-white transition-colors relative group">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <a 
                    href="#contact" 
                    className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] text-white font-medium hover:scale-105 transition-transform"
                >
                    Connect with Me
                </a>
            </div>
        </motion.nav>
    );
}

export default Navbar;
