import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../../data';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const Projects = () => {
    return (
        <section id="projects" className="py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Work</h2>
                    <p className="text-gray-400 max-w-xl">
                        A collection of projects that I've built, ranging from web applications to design systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={index === 0 || index === 3 || index === 6 ? "md:col-span-2" : ""}
                        >
                            <Card className="h-full group relative hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300">
                                <div className="p-8 h-full flex flex-col">
                                    <div className="mb-8 overflow-hidden rounded-xl bg-dark-bg border border-white/5 aspect-video relative group-hover:border-primary-500/30 transition-colors">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                                    </div>

                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                            <p className="text-gray-400 text-sm line-clamp-2 mb-4 max-w-md">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                href={project.repoUrl}
                                                className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                            <a
                                                href={project.demoUrl}
                                                className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition-colors"
                                            >
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-auto flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
