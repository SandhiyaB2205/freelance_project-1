import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import './App.css';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-bg-dark text-text-main">
                <Navbar />
                <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;