import { motion } from 'framer-motion';
import { skills } from '../../data';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const Skills = () => {
    return (
        <section id="skills" className="py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills</h2>
                    <p className="text-gray-400 max-w-xl">
                        The skills and technologies I use to bring websites to life.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full group hover:scale-[1.02] transition-transform duration-300">
                                <div className="p-6 h-full flex flex-col">
                                    <div className="mb-6 relative">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/20 flex items-center justify-center group-hover:border-primary-500/40 transition-colors">
                                            <skillGroup.icon className="w-6 h-6 text-primary-400" />
                                        </div>
                                        <div className="absolute inset-0 w-12 h-12 rounded-xl bg-primary-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-4">
                                        {skillGroup.category}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {skillGroup.items.map((item) => (
                                            <Badge
                                                key={item}
                                                variant="secondary"
                                                className="text-xs hover:bg-white/10 transition-colors"
                                            >
                                                {item}
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
