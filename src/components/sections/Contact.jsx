import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export const Contact = () => {
    return (
        <section id="contact" className="py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Let's work together.
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        I'm currently available for new projects and opportunities.
                        If you have a project in mind or just want to say hi, feel free to reach out.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="mailto:varunreddy1809@gmail.com">
                            <Button variant="primary" size="lg" className="rounded-full w-full sm:w-auto">
                                <Mail className="w-5 h-5 mr-2" />
                                varunreddy1809@gmail.com
                            </Button>
                        </a>
                        <a href="tel:+919742982895">
                            <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto">
                                📞 +91 9742982895
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
