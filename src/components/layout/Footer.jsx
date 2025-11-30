import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-dark-bg border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} VarunPortfolio. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
