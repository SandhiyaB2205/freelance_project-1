import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-white/10 px-6 py-4 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-display font-extrabold tracking-tight text-white hover:opacity-90 transition-opacity">
                    CHESS_ACADEMY<span className="text-accent-blue font-black">.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link 
                        to="/" 
                        className={`font-medium transition-all duration-200 relative py-1 ${
                            isActive('/') 
                                ? 'text-accent-blue font-semibold' 
                                : 'text-text-main/80 hover:text-white'
                        }`}
                    >
                        Home
                        {isActive('/') && (
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-blue rounded-full"></span>
                        )}
                    </Link>
                    <Link 
                        to="/about" 
                        className={`font-medium transition-all duration-200 relative py-1 ${
                            isActive('/about') 
                                ? 'text-accent-blue font-semibold' 
                                : 'text-text-main/80 hover:text-white'
                        }`}
                    >
                        About
                        {isActive('/about') && (
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-blue rounded-full"></span>
                        )}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-text-main/80 hover:text-white focus:outline-none transition-colors"
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
                    isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
            >
                <div className="flex flex-col space-y-4 pb-4 px-2">
                    <Link 
                        to="/" 
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium px-3 py-2 rounded-lg transition-colors ${
                            isActive('/') 
                                ? 'bg-white/5 text-accent-blue' 
                                : 'text-text-main/85 hover:bg-white/5 hover:text-white'
                        }`}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium px-3 py-2 rounded-lg transition-colors ${
                            isActive('/about') 
                                ? 'bg-white/5 text-accent-blue' 
                                : 'text-text-main/85 hover:bg-white/5 hover:text-white'
                        }`}
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;