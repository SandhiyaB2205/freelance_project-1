import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-white px-6 py-3 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo & Academy Name */}
                <Link to="/" className="flex items-center space-x-3 group">
                    {/* circular chess icon */}
                    <div className="w-10 h-10 rounded-full border-2 border-slate-800 flex items-center justify-center bg-slate-50 transition-colors group-hover:bg-slate-100">
                        <svg viewBox="0 0 100 100" className="w-6 h-6 text-slate-800 fill-none stroke-[6] stroke-slate-800 stroke-linecap-round stroke-linejoin-round">
                            {/* King crown shape inside circle */}
                            <path d="M35 75h30" />
                            <path d="M38 75v-4h24v4" />
                            <path d="M40 71c-2-8-5-16-5-26 0-10 10-15 15-15s15 5 15 15c0 10-3 18-5 26" fill="currentColor" fillOpacity="0.1" />
                            <path d="M42 30h16M50 25v10M48 30v-8h4v8" />
                        </svg>
                    </div>
                    <span className="font-sans font-extrabold text-[#0b2545] tracking-wide text-xs sm:text-sm md:text-base lg:text-lg uppercase">
                        Magnus Chess Academy Chennai
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link 
                        to="/" 
                        className={`text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-200 ${
                            isActive('/') 
                                ? 'text-sky-600' 
                                : 'text-slate-600 hover:text-[#0b2545]'
                        }`}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        className={`text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-200 ${
                            isActive('/about') 
                                ? 'text-sky-600' 
                                : 'text-slate-600 hover:text-[#0b2545]'
                        }`}
                    >
                        About Us
                    </Link>
                    
                    {/* Enroll Now button */}
                    <Link
                        to="/enroll"
                        className="bg-gradient-to-r from-sky-50 to-sky-100 hover:from-sky-100 hover:to-sky-200 border border-sky-300 text-sky-950 font-bold text-xs md:text-sm uppercase tracking-wider rounded-full px-6 py-2.5 transition-all duration-200 hover:shadow-sm"
                    >
                        Enroll Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-600 hover:text-slate-800 focus:outline-none transition-colors"
                    aria-label="Toggle navigation menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div 
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
            >
                <div className="flex flex-col space-y-3 pb-4 px-2">
                    <Link 
                        to="/" 
                        onClick={() => setIsOpen(false)}
                        className={`text-sm font-bold tracking-wider uppercase px-3 py-2 rounded-lg transition-colors ${
                            isActive('/') 
                                ? 'bg-slate-100 text-sky-600' 
                                : 'text-slate-600 hover:bg-slate-50 hover:text-[#0b2545]'
                        }`}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        onClick={() => setIsOpen(false)}
                        className={`text-sm font-bold tracking-wider uppercase px-3 py-2 rounded-lg transition-colors ${
                            isActive('/about') 
                                ? 'bg-slate-100 text-sky-600' 
                                : 'text-slate-600 hover:bg-slate-50 hover:text-[#0b2545]'
                        }`}
                    >
                        About Us
                    </Link>
                    <Link 
                        to="/enroll" 
                        onClick={() => setIsOpen(false)}
                        className="bg-gradient-to-r from-sky-50 to-sky-100 border border-sky-300 text-sky-950 font-bold text-sm text-center uppercase tracking-wider rounded-full py-2.5 transition-all duration-200"
                    >
                        Enroll Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;