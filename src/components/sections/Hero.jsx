import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import profilePhoto from '../../assets/photo-1.png';

export const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Badge variant="secondary" className="gap-2 pl-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Available for work
                            </Badge>
                            <Badge variant="default" className="gap-1.5">
                                <MapPin className="w-3 h-3" />
                                Bengaluru, Karnataka
                            </Badge>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white mb-8 tracking-tight leading-[0.9]">
                            Full Stack <br />
                            <span className="text-gray-500">Developer.</span>
                        </h1>

                        <p className="text-lg text-gray-400 max-w-md mb-10 leading-relaxed">
                            Motivated Full-Stack Developer with hands-on experience designing and developing responsive web applications using JavaScript, React, Node.js, Express, MongoDB. Passionate about innovation and customer-focused solutions.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#projects">
                                <Button variant="primary" size="lg" className="rounded-full">
                                    View Work <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </a>
                            <a href="/VarunKumarReddy_Resume.pdf" download="VarunKumarReddy_Resume.pdf">
                                <Button variant="outline" size="lg" className="rounded-full">
                                    Download CV <Download className="w-4 h-4 ml-2" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden bg-dark-card border border-white/5">
                            <img
                                src={profilePhoto}
                                alt="Profile"
                                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">Current Focus</p>
                                        <p className="text-sm font-medium text-white">Full-Stack Development</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400 mb-1">Experience</p>
                                        <p className="text-sm font-medium text-white">1+ Year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
