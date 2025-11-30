import { useState, useEffect } from 'react';
import { Menu, X, Code2, Github, Linkedin, Mail } from 'lucide-react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="flex items-center gap-2 group">
                    <div className="p-2 bg-primary-500/10 rounded-xl group-hover:bg-primary-500/20 transition-colors">
                        <Code2 className="w-6 h-6 text-primary-400" />
                    </div>
                    <span className="text-xl font-bold font-heading text-gray-100">
                        Varun<span className="text-primary-400">Portfolio</span>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all group-hover:w-full" />
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-primary-500/25"
                    >
                        Hire Me
                    </a>
                </div>

                <button
                    className="md:hidden text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 top-[72px]"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-dark border-t border-white/10 shadow-2xl z-50 animate-slide-down">
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-primary-400 font-medium py-2 px-3 hover:bg-white/5 rounded-lg transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm font-medium transition-all text-center mt-2"
                        >
                            Hire Me
                        </a>
                        <div className="flex gap-4 pt-4 border-t border-white/10 justify-center">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
