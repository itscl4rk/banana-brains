'use client';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import FeatureCards from '@/components/FeatureCards';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import RotatedText from '@/components/decorators/RotatedText';

const Home = () => {
    return (
        <div className="min-h-screen text-cloud relative overflow-hidden">
            <div className="relative z-10">
                <main className="container mx-auto px-4 py-16 max-w-7xl">
                    {/* Hero Section */}
                    <div className="text-center mb-20">
                        <motion.h1
                            className="font-header text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-banana to-lime"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Banana Brains
                        </motion.h1>
                        <motion.p
                            className="text-2xl text-cloud max-w-2xl mx-auto mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="underline decoration-wavy decoration-banana text-banana font-bold underline-offset-4">
                                Banana Brains
                            </span>{' '}
                            brings you a comprehensive learning experience with
                            interactive,{' '}
                            <RotatedText className="text-forest font-bold">
                                hands-on
                            </RotatedText>{' '}
                            challenges
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-banana to-avocado hover:from-lime hover:to-forest text-onyx font-semibold"
                            >
                                <Link to="/end">
                                    Get Started{' '}
                                    <ChevronRight className="ml-2" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    <FeatureCards />
                    <Benefits />
                    <Testimonials />
                </main>
            </div>
        </div>
    );
};
export default Home;
